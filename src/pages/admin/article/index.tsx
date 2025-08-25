import AdminLayout from "../../../components/AdminLayout";
import Link from "next/link";
import { motion } from "framer-motion";

// Dummy articles
const articles = [
  {
    id: 1,
    title: "Modern Housing Trends 2025",
    excerpt:
      "Discover the latest trends in modern housing designs and layouts.",
    date: "2025-08-25",
  },
  {
    id: 2,
    title: "Sustainable Living in Green Residences",
    excerpt: "How eco-friendly features are shaping new residential areas.",
    date: "2025-08-24",
  },
  {
    id: 3,
    title: "Maximizing Small Space Interiors",
    excerpt: "Tips and tricks for making the most of compact homes.",
    date: "2025-08-23",
  },
];

export default function Articles() {
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Daftar Artikel</h2>
          <Link href="/admin/article/create">
            <button className="bg-green-500 w-full text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Tambah Artikel
            </button>
          </Link>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/admin/article/${article.id}`}>
              <button className="w-full text-left">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded shadow hover:shadow-lg transition flex gap-2 justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <p className="text-gray-600 mt-1">{article.excerpt}</p>
                    <p className="text-gray-400 text-sm mt-2">{article.date}</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </button>
            </Link>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
}
