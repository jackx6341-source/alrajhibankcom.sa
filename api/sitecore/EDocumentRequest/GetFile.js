export const config = {
  runtime: 'edge', // هذه الميزة تسمح بتحميل الملفات الكبيرة (11 ميجا) بدون أن ينفجر السيرفر
};

export default async function handler(req) {
  // إعدادات CORS شاملة لضمان عدم حظر المتصفح للطلب
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Sec-Ch-Ua, Sec-Ch-Ua-Platform, Accept',
    'Access-Control-Expose-Headers': 'Content-Disposition' 
  };

  // 1. معالجة طلب المتصفح الأمني (Preflight)
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  // 2. الاستجابة لطلب الواجهة الأمامية (POST)
  if (req.method === 'POST' || req.method === 'GET') {
    try {
      // بناء رابط الملف الموجود في مجلد public الخاص بمشروعك
      const fileUrl = new URL('/7026902499.pdf', req.url);
      
      // سحب الملف من سيرفرات Vercel السريعة
      const fileResponse = await fetch(fileUrl);

      if (!fileResponse.ok) {
        throw new Error("الملف غير موجود في مجلد public");
      }

      // إرسال البيانات الثنائية للمتصفح ليبدأ التحميل
      return new Response(fileResponse.body, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="7026902499.pdf"',
          'Cache-Control': 'no-cache, no-store',
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
