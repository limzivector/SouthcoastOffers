// Vercel serverless function: read lead submissions for the admin dashboard.
//
// Security model:
//   - The Supabase service-role key lives ONLY in this server-side env var and
//     is never sent to the browser. It bypasses RLS so we can read leads
//     (the public anon key can insert but not select).
//   - Access is gated by an ADMIN_TOKEN compared in constant time.
//
// Required environment variables (set in Vercel project settings):
//   ADMIN_TOKEN                 - a password you choose for the dashboard
//   SUPABASE_SERVICE_ROLE_KEY   - Supabase -> Project Settings -> API -> service_role
//   SUPABASE_URL (optional)     - defaults to the project URL below
'use strict';

const crypto = require('crypto');

function safeEqual(a, b) {
  const ba = Buffer.from(String(a || ''));
  const bb = Buffer.from(String(b || ''));
  if (ba.length !== bb.length) return false;
  try { return crypto.timingSafeEqual(ba, bb); } catch (e) { return false; }
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const SUPABASE_URL = process.env.SUPABASE_URL || 'https://wkpqpoqvcycgiyhrecvp.supabase.co';

  if (!ADMIN_TOKEN || !SERVICE_KEY) {
    res.status(500).json({
      error: 'not_configured',
      message: 'Set ADMIN_TOKEN and SUPABASE_SERVICE_ROLE_KEY in your Vercel project environment variables.'
    });
    return;
  }

  const token = req.headers['x-admin-token'] || '';
  if (!safeEqual(token, ADMIN_TOKEN)) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }

  const type = (req.query && req.query.type) || '';
  let url = SUPABASE_URL + '/rest/v1/leads?select=*&order=created_at.desc&limit=1000';
  if (type) url += '&type=eq.' + encodeURIComponent(type);

  try {
    const upstream = await fetch(url, {
      headers: { apikey: SERVICE_KEY, Authorization: 'Bearer ' + SERVICE_KEY }
    });
    if (!upstream.ok) {
      const detail = await upstream.text();
      res.status(502).json({ error: 'upstream_error', status: upstream.status, detail: detail });
      return;
    }
    const leads = await upstream.json();
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ leads: leads, count: Array.isArray(leads) ? leads.length : 0 });
  } catch (e) {
    res.status(502).json({ error: 'fetch_failed', message: String(e && e.message || e) });
  }
};
