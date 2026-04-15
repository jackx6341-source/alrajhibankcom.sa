module.exports = function handler(req, res) {
  // إعدادات السماح بجميع الطلبات
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET' || req.method === 'POST') {
    // 1. إنشاء محتوى ملف PDF وهمي برمجياً (بدون الحاجة لأي ملفات حقيقية)
    const dummyPdfContent = `%PDF-1.4\n1 0 obj\n<< /Title (Mock PDF) >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF`;
    const fileBuffer = Buffer.from(dummyPdfContent, 'utf-8');

    // 2. إرسال الملف مباشرة للمتصفح ليبدأ التحميل
    res.setHeader('Content-Type', 'application/pdf'); 
    res.setHeader('Content-Disposition', 'attachment; filename=7026902499.pdf');
    res.setHeader('Content-Length', fileBuffer.length);
    
    return res.status(200).send(fileBuffer);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};
