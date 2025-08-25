import { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateArticle() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !excerpt || !content) {
      alert("Harap isi semua input!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      console.log({ title, excerpt, content, image });
      setIsSubmitting(false);
      alert("Artikel berhasil dibuat!");
      router.push("/admin/article");
    }, 1000);
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/admin/article">
          <button
            type="button"
            className="text-green-500 hover:underline mb-4 inline-block"
          >
            &larr; Kembali
          </button>
        </Link>

        <h2 className="text-2xl font-bold mb-6">Buat Artikel</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Judul
            </label>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Masukkan judul artikel"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Deskripsi Singkat
            </label>
            <textarea
              required
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Masukkan deskripsi singkat artikel"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Konten
            </label>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Masukkan konten artikel"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Gambar
            </label>
            <input
              required
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Membuat..." : "Buat Artikel"}
          </button>
        </form>
      </motion.div>
    </AdminLayout>
  );
}
