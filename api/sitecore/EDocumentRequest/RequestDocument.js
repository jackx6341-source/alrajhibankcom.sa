export default function handler(req, res) {
  // 1. إعداد ترويسات CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Sec-Ch-Ua, Sec-Ch-Ua-Platform');

  // 2. معالجة طلب OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. معالجة طلب POST
  if (req.method === 'POST') {
    try {
      // الرد الناجح
      return res.status(200).json({
        fileValid: true,
        fileName: "7026902499", 
        fileNetId: "{63E840E6-4B5B-C3BD-90AD-9D5DBDA00000}",
        bearerToken: "Bearer test_mock_token_for_development_only",
        Message: "DownloadSuccess"
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error in RequestDocument" });
    }
  } 
  
  // 4. رفض الطلبات الأخرى
  else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
