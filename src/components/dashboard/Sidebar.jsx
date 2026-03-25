import React from "react";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  CreditCard,
 BarChart3,
  Wrench,
 Megaphone,
  Users,
  Settings,
  HelpCircle,
  Headphones,
  LogOut,
} from "lucide-react";

const menuSections = [
  {
    title: "GENERAL",
    items: [
      { label: "Overview", icon: LayoutDashboard, active: true },
      { label: "Properties", icon: Building2 },
      { label: "Messages", icon: MessageSquare },
    ],
  },
  {
    title: "FINANCIAL MANAGEMENT",
    items: [
      { label: "Payments", icon: CreditCard },
      { label: "Reports & Analytics", icon: BarChart3 },
    ],
  },
  {
    title: "MAINTENANCE & SERVICES",
    items: [
      { label: "Maintenance Requests", icon: Wrench },
      { label: "Sales & Marketing", icon: Megaphone },
    ],
  },
  {
    title: "ADMINISTRATION",
    items: [
      { label: "User Management", icon: Users },
      { label: "Settings", icon: Settings },
    ],
  },
  {
    title: "INFORMATION",
    items: [
      { label: "Help & Center", icon: HelpCircle },
      { label: "Chat and Support", icon: Headphones },
      { label: "Logout", icon: LogOut },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] min-h-screen bg-[#f7f7f8] border-r border-[#ececec] px-2.5 py-4">
      <div className="flex flex-col gap-5">
        {menuSections.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h3 className="mb-2.5 px-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#b1b5bd]">
              {section.title}
            </h3>

            <div className="space-y-0.5">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;

                return (
                  <button
                    key={itemIndex}
                    className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-left ${
                      item.active
                        ? "bg-white border border-[#ececec] text-[#111827]"
                        : "text-[#5f6672] hover:bg-[#18346F] hover:text-white"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.8} className="text-[#8b93a1]" />
                    <span className="text-[13px] font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}