module.exports = function handler(req, res) {
  // إعدادات الترويسات للسماح بالوصول
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // رابط الملف المباشر الذي قمت بفتحه للعامة
  const driveUrl = "https://drive.google.com/uc?export=download&id=1_FbDuNOJE6zlHAFgwNdvRXUndCo42QSK";

  try {
    // توجيه المتصفح مباشرة للرابط (Redirect)
    // هذا الحل يتجاوز حد الـ 4.5 ميجا في فيرسل لأن التحميل يتم من جوجل
    res.writeHead(302, { Location: driveUrl });
    res.end();
  } catch (error) {
    return res.status(500).json({ error: "حدث خطأ أثناء محاولة بدء التحميل" });
  }
};
