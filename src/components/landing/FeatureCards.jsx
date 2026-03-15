export default function FeatureCards() {
  const stats = [
    { value: "+500", label: "Properties Managed" },
    { value: "+1,200", label: "Contracts Signed" },
    { value: "99%", label: "Data Accuracy" },
    { value: "24/7", label: "Support" },
  ];

  return (
   <section className="relative overflow-hidden bg-[#f8f8f8] py-12 md:py-16">

  <div className="mx-auto max-w-7xl px-6">

    {/* Hero */}
    <div className="text-center space-y-6">

      {/* Logo
      <div className="flex justify-center">
        <img
          src="src/assets/aqari-logo.svg"
          alt="Aqari logo"
          className="h-32 md:h-40 w-auto"
        />
      </div> */}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#102A43]">
        Aqari
      </h2>

      {/* Divider + Text */}
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-6">
        <span className="h-px flex-1 bg-slate-300" />

        <p className="text-base md:text-lg text-[#203a63] font-medium">
          Property Management - simplified, in
        </p>

        <span className="h-px flex-1 bg-slate-300" />
      </div>

    </div>

    {/* Stats */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 text-center">

      <div className="py-6 md:border-r border-slate-300">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0b3b78]">
          +500
        </h3>
        <p className="mt-2 text-[#17365d] text-lg">
          Properties Managed
        </p>
      </div>

      <div className="py-6 md:border-r border-slate-300">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0b3b78]">
          +1,200
        </h3>
        <p className="mt-2 text-[#17365d] text-lg">
          Contracts Signed
        </p>
      </div>

      <div className="py-6 md:border-r border-slate-300">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0b3b78]">
          99%
        </h3>
        <p className="mt-2 text-[#17365d] text-lg">
          Data Accuracy
        </p>
      </div>

      <div className="py-6">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0b3b78]">
          24/7
        </h3>
        <p className="mt-2 text-[#17365d] text-lg">
          Support
        </p>
      </div>

    </div>

  </div>

</section>
  );
}