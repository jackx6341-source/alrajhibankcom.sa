export const config = {
  runtime: 'edge', 
};

export default async function handler(req) {
  // إعدادات الـ CORS الكاملة والمهمة جداً
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // أو ضع رابط موقعك بدلاً من النجمة لزيادة الأمان
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    // هذه هي الترويسة السحرية التي تحل مشكلة Axios مع تحميل الملفات
    'Access-Control-Expose-Headers': 'Content-Disposition, Content-Type, Content-Length' 
  };

  // 1. معالجة طلب المتصفح الأمني (Preflight) الذي يرسله Axios
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  // 2. الاستجابة لطلب POST أو GET
  if (req.method === 'POST' || req.method === 'GET') {
    try {
      // رابط جوجل درايف مع تجاوز الفحص
      const driveUrl = "https://drive.google.com/uc?export=download&id=1_FbDuNOJE6zlHAFgwNdvRXUndCo42QSK&confirm=t";
      
      const driveResponse = await fetch(driveUrl);

      if (!driveResponse.ok) {
        throw new Error("فشل الاتصال بمصدر الملف");
      }

      // إرسال الملف مع ترويسات الـ CORS
      return new Response(driveResponse.body, {
        status: 200,
        headers: {
          ...corsHeaders, // دمج الترويسات الأمنية
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="7026902499.pdf"',
        },
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
}
