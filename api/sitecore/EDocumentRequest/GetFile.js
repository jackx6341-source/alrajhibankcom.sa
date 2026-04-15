const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  // إعدادات السماح
  res.setHeader('Access-Control-Allow-Origin', '*');
  // الأهم هنا: السماح بطلبات GET
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // بمجرد أن يزور المستخدم الرابط (GET)، نرسل له الملف
  if (req.method === 'GET' || req.method === 'POST') {
    try {
      const filePath = path.join(__dirname, '7026902499.pdf');
      const fileBuffer = fs.readFileSync(filePath);

      res.setHeader('Content-Type', 'application/pdf'); 
      res.setHeader('Content-Disposition', 'attachment; filename=7026902499.pdf');
      
      return res.status(200).send(fileBuffer);
    } catch (error) {
      return res.status(500).json({ error: 'File not found' });
    }
  }
};
