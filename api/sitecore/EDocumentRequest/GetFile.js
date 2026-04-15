module.exports = function handler(req, res) {
  // إعدادات السماح
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  // معالجة طلب Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // رابط جوجل درايف المباشر الذي وضعته أنت
  const driveUrl = "https://drive.google.com/uc?export=download&id=1_FbDuNOJE6zlHAFgwNdvRXUndCo42QSK";

  try {
    // توجيه المستخدم (302 Redirect) إلى رابط التحميل مباشرة
    // هذا الحل يضمن تحميل الملف الـ 11 ميجا بالكامل بدون قيود فيرسل
    res.writeHead(302, { Location: driveUrl });
    res.end();
  } catch (error) {
    return res.status(500).json({ error: "حدث خطأ أثناء التوجيه للتحميل" });
  }
};
