import React from "react";
import {
  Building2,
  Users,
  CreditCard,
  LayoutDashboard,
} from "lucide-react";

const STATS = [
  {
    title: "Property Management",
    desc: "Track, add, and edit\nproperties",
    Icon: Building2,
  },
  {
    title: "Tenant Management",
    desc: "Manage leases and payments",
    Icon: Users,
  },
  {
    title: "Payment Tracking",
    desc: "Monitor rent payments and dues",
    Icon: CreditCard,
  },
  {
    title: "Smart Dashboard",
    desc: "Get real-time insights",
    Icon: LayoutDashboard,
  },
];

export default function StatsSection() {
  return (
    <section className="w-full mt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ title, desc, Icon }, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                <Icon className="h-7 w-7 text-slate-700" strokeWidth={1.6} />
              </div>

              <h3 className="text-center text-lg font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 whitespace-pre-line text-center text-sm leading-6 text-slate-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}