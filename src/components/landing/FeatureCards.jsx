export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}
        <div className="text-center space-y-6">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43]">
            منصة عقاري
          </h2>

          <div className="mx-auto flex max-w-4xl items-center justify-center gap-6">
            <span className="h-px flex-1 bg-slate-300" />

            <p className="text-lg md:text-xl text-[#203a63] font-medium">
              كل ما تحتاجه لإدارة عقاراتك... في مكان واحد
            </p>

            <span className="h-px flex-1 bg-slate-300" />
          </div>

        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 text-center">

          <div className="py-6 md:border-l border-slate-300">
            <h3 className="text-5xl font-extrabold text-[#102A43]">
              +500
            </h3>
            <p className="mt-3 text-[#17365d] text-lg font-medium">
              عقار تتم إدارته بكفاءة عالية
            </p>
          </div>

          <div className="py-6 md:border-l border-slate-300">
            <h3 className="text-5xl font-extrabold text-[#102A43]">
              +1,200
            </h3>
            <p className="mt-3 text-[#17365d] text-lg font-medium">
              عقد تم إنجازه بكل سلاسة
            </p>
          </div>

          <div className="py-6 md:border-l border-slate-300">
            <h3 className="text-5xl font-extrabold text-[#102A43]">
              99%
            </h3>
            <p className="mt-3 text-[#17365d] text-lg font-medium">
              دقة في البيانات واتخاذ القرار
            </p>
          </div>

          <div className="py-6">
            <h3 className="text-5xl font-extrabold text-[#102A43]">
              24/7
            </h3>
            <p className="mt-3 text-[#17365d] text-lg font-medium">
              دعم مستمر في أي وقت تحتاجه
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}