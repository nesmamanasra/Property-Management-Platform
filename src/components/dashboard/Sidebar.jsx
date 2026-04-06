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
import { useLocation, useNavigate } from "react-router-dom";

const menuSections = [
  {
    title: "عام",
    items: [
      { label: "نظرة عامة", icon: LayoutDashboard, path: "/dashboard" },
      { label: "العقارات", icon: Building2 ,path: "/dashboard/property"},
      { label: "إدارة المالكين", icon: Users, path: "/dashboard/owners" },
      { label: "الرسائل", icon: MessageSquare },
    ],
  },
  {
    title: "الإدارة المالية",
    items: [
      { label: "المدفوعات", icon: CreditCard },
      { label: "التقارير والتحليلات", icon: BarChart3 },
    ],
  },
  {
    title: "الصيانة والخدمات",
    items: [
      { label: "طلبات الصيانة", icon: Wrench },
      { label: "المبيعات والتسويق", icon: Megaphone },
    ],
  },
  {
    title: "الإدارة",
    items: [
      { label: "إدارة المستخدمين", icon: Users },
      { label: "الإعدادات", icon: Settings },
    ],
  },
  {
    title: "معلومات",
    items: [
      { label: "المساعدة والمركز", icon: HelpCircle },
      { label: "الدعم والمحادثة", icon: Headphones },
      { label: "تسجيل الخروج", icon: LogOut },
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

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
                const active = isActive(item.path);

                return (
                  <button
                    key={itemIndex}
                    type="button"
                    onClick={() => {
                      if (item.path) navigate(item.path);
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-left transition-colors ${
                      active
                        ? "bg-white border border-[#ececec] text-[#111827]"
                        : "text-[#5f6672] hover:bg-[#18346F] hover:text-white"
                    }`}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className={active ? "text-[#111827]" : "text-[#8b93a1]"}
                    />
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