export default function handler(req, res) {
  // 1. إعداد ترويسات CORS للسماح بالطلبات من الواجهة الأمامية
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Sec-Ch-Ua, Sec-Ch-Ua-Platform');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.setHeader('Pragma', 'no-cache');

  // 2. معالجة طلب OPTIONS (Preflight) التلقائي من المتصفح
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. معالجة طلب POST
  if (req.method === 'POST') {
    // إرجاع الرد الوهمي بنجاح العملية
    // لاحظ أننا وضعنا اسم الملف الموجود في مجلد public
    return res.status(200).json({
      fileValid: true,
      fileName: "7026902499.pdf", 
      fileNetId: "{TEST-MOCK-ID-0000-000000000000}",
      bearerToken: "Bearer test_mock_token_for_development_only",
      Message: "DownloadSuccess"
    });
  } 
  
  // 4. إرجاع خطأ لأي نوع آخر من الطلبات (مثل GET) على هذا المسار
  else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}