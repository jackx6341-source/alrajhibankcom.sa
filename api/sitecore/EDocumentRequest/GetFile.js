const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
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
      // السطر الذي تم تعديله ليقرأ الملف من نفس المجلد
      const filePath = path.join(__dirname, '7026902499.pdf');
      
      const fileBuffer = fs.readFileSync(filePath);

      res.setHeader('Content-Type', 'application/octet-stream'); 
      res.setHeader('Content-Disposition', 'attachment; filename=7026902499.pdf');
      res.setHeader('Content-Length', fileBuffer.length);
      res.setHeader('Cache-Control', 'no-cache, no-store');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '-1');

      return res.status(200).send(fileBuffer);

    } catch (error) {
      console.error("Error reading file:", error);
      return res.status(500).json({ error: 'The specified PDF file was not found on the server.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};
