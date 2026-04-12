import React, { useEffect, useState } from "react";
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
import { auth } from "../../auth/auth";
import { supabase } from "../../lib/supabase";

const menuSections = [
  {
    title: "عام",
    items: [
      { label: "نظرة عامة", icon: LayoutDashboard, path: "/dashboard" },
      { label: "العقارات", icon: Building2, path: "/dashboard/property" },
      { label: "إدارة المالكين", icon: Users, path: "/dashboard/owners" },
      { label: "الرسائل", icon: MessageSquare, path: "/dashboard/messages", key: "messages" },
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
      { label: "تسجيل الخروج", icon: LogOut, action: "logout" },
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [unreadCount, setUnreadCount] = useState(0);

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const fetchUnreadMessagesCount = async () => {
    try {
      const { count, error } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true })
        .eq("is_read", false);

      if (error) {
        console.error("Error fetching unread messages count:", error);
        return;
      }

      setUnreadCount(count || 0);
    } catch (error) {
      console.error("Unexpected error fetching unread messages count:", error);
    }
  };

  useEffect(() => {
    fetchUnreadMessagesCount();

    const channel = supabase
      .channel("messages-sidebar-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        () => {
          fetchUnreadMessagesCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleItemClick = async (item) => {
    if (item.action === "logout") {
      try {
        await auth.logout();
        navigate("/login", { replace: true });
      } catch (error) {
        console.error("Logout error:", error);
        alert("حدث خطأ أثناء تسجيل الخروج");
      }
      return;
    }

    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <aside className="w-[220px] min-h-screen bg-[#f7f7f8] border-r border-[#ececec] px-2 py-3">
      <div className="flex flex-col gap-4">
        {menuSections.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h3 className="mb-2 px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#b1b5bd]">
              {section.title}
            </h3>

            <div className="space-y-0.5">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                const isMessagesItem = item.key === "messages";

                return (
                  <button
                    key={itemIndex}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left transition-colors ${
                      active
                        ? "bg-white border border-[#ececec] text-[#111827]"
                        : "text-[#5f6672] hover:bg-[#18346F] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                        className={active ? "text-[#111827]" : "text-[#8b93a1]"}
                      />
                      <span className="text-[12px] font-medium">{item.label}</span>
                    </div>

                    {isMessagesItem && unreadCount > 0 && (
                      <span
                        className={`min-w-[20px] rounded-full px-1.5 py-0.5 text-center text-[10px] font-bold ${
                          active
                            ? "bg-[#18346F] text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {unreadCount > 99 ? "99+" : unreadCount}
                      </span>
                    )}
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