// Supabase 免费项目 7 天没人用会自动暂停。
// Vercel 每天会自动呼叫这个网址一次（设定在 vercel.json），让数据库保持运作。
module.exports = async (req, res) => {
  try {
    const r = await fetch('https://dywzhlcsdrrvdwbapiqk.supabase.co/rest/v1/taichi_settings?select=id&limit=1', {
      headers: { apikey: 'sb_publishable_E5MwhNCreyn5eq9Vf4uvNw_7O6zH2zW' }
    });
    res.status(r.ok ? 200 : 502).json({ ok: r.ok, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
};
