import { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Profil", href: "/admin/profile" },
    { name: "Kontak", href: "/admin/contact" },
    { name: "Gallery", href: "/admin/gallery" },
    { name: "Artikel", href: "/admin/article" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {sidebarOpen && (
            <span className="font-bold text-lg text-green-500">
              Semanan Premiere
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-gray-200"
          >
            {sidebarOpen ? "«" : "»"}
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <button
                className={`flex cursor-pointer w-full items-center p-3 text-gray-700 hover:bg-green-100 transition ${
                  router.pathname === item.href
                    ? "bg-green-100 font-semibold"
                    : ""
                }`}
              >
                <span className="ml-2">
                  {sidebarOpen ? item.name : item.name[0]}
                </span>
              </button>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex justify-between items-center bg-white shadow p-4">
          <h1 className="text-xl font-bold text-gray-800">
            {router.pathname.split("/").pop()?.toUpperCase() || "Dashboard"}
          </h1>
          <div>
            <button
              onClick={() => router.push("/login")}
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
