module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET' || req.method === 'POST') {
    // سلسلة Base64 تمثل ملف PDF حقيقي وسليم (يحتوي على صفحة بيضاء)
    const validPdfBase64 = "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCIFIi9GaWx0ZXIvRmxhdGVEZWNvZGU+PgpzdHJlYW0KeJwr5HIK4dJ3M1QwNVQIzjEF0oZcwQDNiMwUDAz1DBSM1MwUDIAUowEDZ0MTAwUDY0M9QyMwT684PydfwQ2IOYSAIgDoYw7HCmVuZHN0cmVhbQplbmRvYmoKMyAwIG9iago1NAplbmRvYmoKNCAwIG9iago8PC9UeXBlL1BhZ2UvTWVkaWFCb3hbMCAwIDU5NSA4NDJdL1Jlc291cmNlczw8L0ZvbnQ8PC9GMTEgNiAwIFI+Pj4+L0NvbnRlbnRzIDIgMCBSL1BhcmVudCA1IDAgUj4+CmVuZG9iago1IDAgb2JqCjw8L1R5cGUvUGFnZXMvS2lkc1s0IDAgUl0vQ291bnQgMT4+CmVuZG9iago2IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L0hlbHZldGljYT4+CmVuZG9iagoxIDAgb2JqCjw8L1R5cGUvQ2F0YWxvZy9QYWdlcyA1IDAgUj4+CmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA0MDkgMDAwMDAgbiAKMDAwMDAwMDAxOSAwMDAwMCBuIAowMDAwMDAwMTQyIDAwMDAwIG4gCjAwMDAwMDAxNjEgMDAwMDAgbiAKMDAwMDAwMDI3MCAwMDAwMCBuIAowMDAwMDAwMzIzIDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSA3L1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKNDU5CiUlRU9GCg==";

    // تحويل التشفير إلى بيانات ثنائية (ملف)
    const fileBuffer = Buffer.from(validPdfBase64, 'base64');

    // إرسال الملف
    res.setHeader('Content-Type', 'application/pdf'); 
    res.setHeader('Content-Disposition', 'attachment; filename=7026902499.pdf');
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader('Cache-Control', 'no-cache, no-store');
    
    return res.status(200).send(fileBuffer);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};
