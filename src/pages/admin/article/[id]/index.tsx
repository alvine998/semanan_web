import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

// Dummy article content
const articleData = {
  1: {
    title: "Modern Housing Trends 2025",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, nunc at tincidunt cursus, odio augue facilisis nunc, nec luctus mauris lorem et velit.",
  },
  2: {
    title: "Sustainable Living in Green Residences",
    content:
      "Phasellus sit amet velit id quam facilisis tristique. Praesent fermentum, dolor in pulvinar laoreet, magna est ullamcorper turpis, ac gravida libero urna eget turpis.",
  },
  3: {
    title: "Maximizing Small Space Interiors",
    content:
      "Curabitur convallis orci nec lectus efficitur, a dictum quam lacinia. Etiam nec sapien ac sapien tristique suscipit.",
  },
};

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  let article;
  if (typeof id === "string" && Number(id) in articleData) {
    article = articleData[Number(id) as keyof typeof articleData];
  }

  if (!article) return <AdminLayout>Loading...</AdminLayout>;

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/admin/article">
          <button className="text-green-500 hover:underline mb-4 inline-block">
            &larr; Kembali
          </button>
        </Link>

        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-700">{article.content}</p>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
