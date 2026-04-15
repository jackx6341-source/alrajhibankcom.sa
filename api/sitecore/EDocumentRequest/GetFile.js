export const config = {
  runtime: 'edge', 
};

export default async function handler(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': 'Content-Disposition' 
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method === 'POST' || req.method === 'GET') {
    try {
      // لاحظ الإضافة السحرية &confirm=t في نهاية الرابط لتخطي صفحة الفيروسات
      const driveUrl = "https://drive.google.com/uc?export=download&id=1_FbDuNOJE6zlHAFgwNdvRXUndCo42QSK&confirm=t";
      
      const driveResponse = await fetch(driveUrl);

      // إرسال تيار البيانات (Stream) مباشرة للواجهة الأمامية
      return new Response(driveResponse.body, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="7026902499.pdf"',
        },
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: "فشل الاتصال بجوجل درايف" }), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
}
