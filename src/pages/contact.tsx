// pages/contact.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi submit
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-green-50">
        <section className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2
            className="text-3xl font-bold text-green-700 text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hubungi Kami
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Kontak */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {submitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center font-semibold">
                  Terima kasih! Pesan Anda telah dikirim.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-green-700 font-medium mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border border-green-300 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-green-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border border-green-300 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-green-700 font-medium mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border border-green-300 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-green-700 font-medium mb-1">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded border border-green-300 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

            {/* Informasi & Map */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Alamat Kami
                </h3>
                <p>
                  Jl. Contoh Properti No.123, Sukabumi, Jawa Barat, Indonesia
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Kontak
                </h3>
                <p>📞 Telepon: +62 813-xxxx-xxxx</p>
                <p>✉️ Email: info@propertiku.co.id</p>
                <p>⏰ Jam Operasional: Senin - Sabtu, 08.00 - 17.00</p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5248925684273!2d106.92736927482506!3d-6.918142069471162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6839d0ed9d89bb%3A0x7e5d2099a1eaf15f!2sSukabumi!5e0!3m2!1sen!2sid!4v1688566102286!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  className="border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
