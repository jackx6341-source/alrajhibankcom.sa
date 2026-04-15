// تفعيل بيئة Edge لتجاوز قيود الحجم (4.5 ميجا) في Vercel
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // 1. معالجة طلب OPTIONS (Preflight)
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Sec-Ch-Ua, Sec-Ch-Ua-Platform',
      },
    });
  }

  // 2. معالجة طلب POST القادم من الواجهة الأمامية
  if (req.method === 'POST' || req.method === 'GET') {
    try {
      // رابط جوجل درايف العام الخاص بك
      const driveUrl = "https://drive.google.com/uc?export=download&id=1_FbDuNOJE6zlHAFgwNdvRXUndCo42QSK";
      
      // جلب الملف من جوجل درايف في الخلفية
      const driveResponse = await fetch(driveUrl);

      // إرسال الملف كتيار بيانات (Stream) مباشرة للواجهة الأمامية
      // تماماً كما تفعل واجهة البنك الحقيقية!
      return new Response(driveResponse.body, {
        status: 200, // الرد بنجاح وليس توجيه
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': 'attachment; filename="7026902499.pdf"',
          'Cache-Control': 'no-cache, no-store',
        },
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: "Server Error" }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // رفض أي طرق اتصال أخرى
  return new Response("Method Not Allowed", { status: 405 });
}
