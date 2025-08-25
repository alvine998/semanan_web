import { useState, useEffect } from "react";
import AdminLayout from "../../../../components/AdminLayout";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

export default function EditArticle() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching article data
  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    setTimeout(() => {
      // Dummy article data
      const fetchedArticle = {
        title: "Sample Article Title",
        excerpt: "This is a sample excerpt for the article.",
        content: "This is the full content of the sample article.",
      };

      setTitle(fetchedArticle.title);
      setExcerpt(fetchedArticle.excerpt);
      setContent(fetchedArticle.content);

      setIsLoading(false);
    }, 800);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !excerpt || !content) {
      alert("Please fill all fields!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      console.log({ id, title, excerpt, content, image });
      setIsSubmitting(false);
      alert("Article updated successfully!");
      router.push("/admin/articles");
    }, 1000);
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-24 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/admin/articles">
          <a className="text-green-500 hover:underline mb-4 inline-block">
            &larr; Back to Articles
          </a>
        </Link>

        <h2 className="text-2xl font-bold mb-6">Edit Article</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Article title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Short summary of the article"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Full article content"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Image (Optional)
            </label>
            <input
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
            {isSubmitting ? "Updating..." : "Update Article"}
          </button>
        </form>
      </motion.div>
    </AdminLayout>
  );
}
