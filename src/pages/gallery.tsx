// pages/gallery.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { useState } from "react";
import Lightbox from "@/components/LightBox";

interface Property {
  title: string;
  price: string;
  image: string;
  category: string;
}

const properties: Property[] = [
  {
    title: "Rumah Minimalis A",
    price: "Rp 1.2 M",
    image: "/house1.jpg",
    category: "Minimalis",
  },
  {
    title: "Rumah Modern B",
    price: "Rp 1.5 M",
    image: "/house2.jpg",
    category: "Modern",
  },
  {
    title: "Vila Asri C",
    price: "Rp 2 M",
    image: "/house3.jpg",
    category: "Vila",
  },
  {
    title: "Rumah Elegan D",
    price: "Rp 1.8 M",
    image: "/house4.jpg",
    category: "Elegan",
  },
  {
    title: "Rumah Minimalis E",
    price: "Rp 1.3 M",
    image: "/house5.jpg",
    category: "Minimalis",
  },
];

const categories = ["All", "Minimalis", "Modern", "Vila", "Elegan"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProperties =
    selectedCategory === "All"
      ? properties
      : properties.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white">
        <section className="py-20">
          <h2 className="text-3xl text-center font-bold text-green-700 mb-10">
            Galeri Properti
          </h2>

          {/* Filter Category */}
          <div className="flex justify-center mb-10 flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-green-500 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Property */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {filteredProperties.map((prop, idx) => (
              <PropertyCard
                key={idx}
                {...prop}
                onClick={() => setLightboxImage(prop.image)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
