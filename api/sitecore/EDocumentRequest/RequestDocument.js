// داخل دالة الـ POST في ملف RequestDocument.js
return res.status(200).json({
  fileValid: true,
  fileName: "7026902499", // أو "7026902499.pdf" بناءً على ما تتوقعه واجهتك
  fileNetId: "{63E840E6-4B5B-C3BD-90AD-9D5DBDA00000}",
  bearerToken: "Bearer test_mock_token_for_development_only",
  Message: "DownloadSuccess"
});
