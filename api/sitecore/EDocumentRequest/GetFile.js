import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // 1. إعداد ترويسات CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Sec-Ch-Ua, Sec-Ch-Ua-Platform');

  // 2. معالجة طلب OPTIONS التلقائي
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. معالجة طلب POST
  if (req.method === 'POST') {
    try {
      // تحديد المسار الدقيق لملف PDF الوهمي الموجود في مجلد public
      // نستخدم process.cwd() لضمان الوصول للمجلد الرئيسي للمشروع في Vercel
      const filePath = path.join(process.cwd(), 'public', 'timport fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // 1. إعداد ترويسات CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Sec-Ch-Ua, Sec-Ch-Ua-Platform');

  // 2. معالجة طلب OPTIONS التلقائي
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. معالجة طلب POST
  if (req.method === 'POST') {
    try {
      // تحديد المسار الدقيق لملف PDF الوهمي الموجود في مجلد public
      // نستخدم process.cwd() لضمان الوصول للمجلد الرئيسي للمشروع في Vercel
      const filePath = path.join(process.cwd(), 'public', '7026902499.pdf');

      // قراءة الملف وتحويله إلى بيانات ثنائية (Buffer)
      const fileBuffer = fs.readFileSync(filePath);

      // إعداد الترويسات (Headers) لتطابق الرد الذي أرسلته لي
      res.setHeader('Content-Type', 'application/octet-stream'); 
      // تحديد اسم الملف الذي سيظهر للمستخدم عند التحميل
      res.setHeader('Content-Disposition', 'attachment; filename=mock_file_2026.pdf');
      res.setHeader('Content-Length', fileBuffer.length);
      res.setHeader('Cache-Control', 'no-cache, no-store');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '-1');

      // إرسال الملف الفعلي
      return res.status(200).send(fileBuffer);

    } catch (error) {
      // في حال لم يكن الملف موجوداً في مجلد public
      console.error("Error reading file:", error);
      return res.status(500).json({ error: 'Test document not found on server.' });
    }
  } 
  
  // 4. رفض الطلبات الأخرى
  else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}');

      // قراءة الملف وتحويله إلى بيانات ثنائية (Buffer)
      const fileBuffer = fs.readFileSync(filePath);

      // إعداد الترويسات (Headers) لتطابق الرد الذي أرسلته لي
      res.setHeader('Content-Type', 'application/octet-stream'); 
      // تحديد اسم الملف الذي سيظهر للمستخدم عند التحميل
      res.setHeader('Content-Disposition', 'attachment; filename=mock_file_2026.pdf');
      res.setHeader('Content-Length', fileBuffer.length);
      res.setHeader('Cache-Control', 'no-cache, no-store');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '-1');

      // إرسال الملف الفعلي
      return res.status(200).send(fileBuffer);

    } catch (error) {
      // في حال لم يكن الملف موجوداً في مجلد public
      console.error("Error reading file:", error);
      return res.status(500).json({ error: 'Test document not found on server.' });
    }
  } 
  
  // 4. رفض الطلبات الأخرى
  else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
