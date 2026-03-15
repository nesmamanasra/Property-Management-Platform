const features = [
  {
    title: "Property Management",
    description: "Track, add, and edit properties",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21V11h6v10" />
      </svg>
    ),
  },
  {
    title: "Tenant Management",
    description: "Manage leases and payments",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    title: "Payment Tracking",
    description: "Monitor rent payments and dues",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
];

export default function WhySection() {
  return (
    <section className="bg-[#f6f6f6] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#102A43]">
            Why Aqari?
          </h2>

          <div className="flex items-center justify-center gap-4 mt-3">
            <span className="w-16 h-[1px] bg-gray-300"></span>
            <p className="text-gray-600 text-lg">
              Property Management - simplified, in
            </p>
            <span className="w-16 h-[1px] bg-gray-300"></span>
          </div>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-[#102A43]">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#102A43]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}