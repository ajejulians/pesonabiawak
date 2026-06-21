import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Package, Shield, Truck, BadgeCheck, ArrowRight, Star,
  ShoppingCart, Sparkles, CreditCard, RefreshCcw, MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Obat, Essen, Original, Unggulan } from "@/assets/photos";
import AppLayout from "@/layouts/app-layout";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const sectionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
} as const;

type Product = {
  id: number;
  name: string;
  volume: string;
  description: string;
  badge?: string;
  badgeVariant: "bestSeller" | "premium" | "popular" | "bestValue";
  image: string;
};

type Feature = {
  icon: React.ReactNode;
  label: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Produk Unggulan",
    volume: "10ml, 20ml, 30ml",
    description:
      "Minyak biawak asli 100% murni, diekstrak dengan metode tradisional. Cocok untuk perawatan kulit dan kesehatan sehari-hari.",
    badge: "Best Seller",
    badgeVariant: "bestSeller",
    image: Original,
  },
  {
    id: 2,
    name: "Minyak Biawak Unggulan",
    volume: "30ml",
    description:
      "Formula enhanced dengan campuran herbal pilihan untuk hasil yang lebih optimal. Diperkaya ekstrak alami Indonesia.",
    badge: "Premium",
    badgeVariant: "premium",
    image: Unggulan,
  },
  {
    id: 3,
    name: "Essen Mancing",
    volume: "2 Botol",
    description:
      "Paket ekonomis berisi 2 botol Minyak Biawak Original. Hemat lebih banyak untuk pemakaian rutin keluarga.",
    badge: "Popular",
    badgeVariant: "popular",
    image: Essen,
  },
  {
    id: 4,
    name: "Obat Gatal",
    volume: "4 Botol",
    description:
      "Paket lengkap untuk keluarga berisi 4 botol Minyak Biawak Original. Pilihan terbaik dengan penghematan maksimal.",
    badge: "Best Value",
    badgeVariant: "bestValue",
    image: Obat,
  },
];

const features: Feature[] = [
  { icon: <Truck className="w-5 h-5" />, label: "Gratis Ongkir" },
  { icon: <CreditCard className="w-5 h-5" />, label: "COD Available" },
  { icon: <BadgeCheck className="w-5 h-5" />, label: "100% Original" },
  { icon: <RefreshCcw className="w-5 h-5" />, label: "Garansi Uang Kembali" },
];

function getBadgeStyle(variant: Product["badgeVariant"]): string {
  const styles: Record<Product["badgeVariant"], string> = {
    bestSeller: "bg-gradient-to-r from-[#FC9150] to-[#FF6100] text-white",
    premium: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    popular: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    bestValue: "bg-gradient-to-r from-[#80CC28] to-green-600 text-white",
  };
  return styles[variant];
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="group rounded-2xl border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative h-48 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge
                className={`${getBadgeStyle(product.badgeVariant)} px-3 py-1 text-xs font-semibold rounded-full shadow-md`}
              >
                <Star className="w-3 h-3 mr-1 fill-current" />
                {product.badge}
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-5 lg:p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-[#80CC28]" />
            <span className="text-sm text-gray-500 font-medium">{product.volume}</span>
          </div>

          <h3 className="text-lg lg:text-xl font-extrabold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
            {product.description}
          </p>

          <Link to="/" className="mt-auto">
            <Button className="w-full rounded-xl bg-[#80CC28] hover:bg-green-600 text-white font-semibold py-5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              Beli Sekarang
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <span className="text-[#80CC28]">{feature.icon}</span>
      </div>
      <span className="text-sm font-medium text-gray-700">{feature.label}</span>
    </motion.div>
  );
}

export default function ProductPage() {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    "Halo, saya tertarik untuk order Minyak Biawak dalam jumlah banyak. Bisa info lebih lanjut?"
  );

  return (
    <AppLayout>
      <div className="w-full bg-white min-h-screen">
        {/* HERO */}
        <motion.section
          className="bg-gradient-to-br from-white via-green-50/30 to-white py-12 lg:py-16"
          {...sectionProps}
        >
          <div className="container mx-auto px-6">
            <motion.div variants={container} className="text-center space-y-4 max-w-3xl mx-auto">
              <motion.div variants={fadeUp}>
                <Badge className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-100">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Produk Premium Asli Indonesia
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                <span className="text-gray-900">Produk </span>
                <span className="bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] text-transparent bg-clip-text">
                  Kami
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Temukan berbagai pilihan Minyak Biawak premium dengan kualitas terjamin. Dari produk
                satuan hingga paket hemat untuk keluarga Anda.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* FEATURES STRIP */}
        <motion.section
          className="py-8 bg-gray-50 border-y border-gray-100"
          {...sectionProps}
        >
          <div className="container mx-auto px-6">
            <motion.div
              variants={container}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* PRODUCT GRID */}
        <motion.section className="py-16 lg:py-24 bg-white" {...sectionProps}>
          <div className="container mx-auto px-6">
            <motion.div variants={fadeUp} className="text-center mb-12 lg:mb-16 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Pilih Produk Terbaik Anda
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Semua produk dijamin 100% asli dan berkualitas tinggi
              </p>
            </motion.div>

            <motion.div
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 text-[#80CC28]" />
                <span className="text-sm font-medium text-gray-700">
                  Semua produk dilengkapi dengan garansi keaslian dan jaminan uang kembali
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA BANNER */}
        <motion.section className="py-2 lg:py-2" {...sectionProps}>
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
              <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/5 rounded-full" />

              <motion.div variants={container} className="relative z-10 space-y-6">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <Package className="w-4 h-4" />
                  Pembelian Grosir & Reseller
                </motion.div>

                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Butuh Order dalam Jumlah Banyak?
                </motion.h2>

                <motion.p variants={fadeUp} className="text-green-100 max-w-2xl mx-auto text-base lg:text-lg">
                  Dapatkan harga spesial untuk pembelian grosir dan reseller. Hubungi kami langsung
                  via WhatsApp untuk penawaran terbaik!
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button
                    className="rounded-xl bg-white text-green-600 hover:bg-gray-100 px-10 lg:px-12 py-6 lg:py-7 text-base lg:text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-6 h-6" />
                    Hubungi via WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>

                <motion.div
                  variants={container}
                  className="flex flex-wrap items-center justify-center gap-6 pt-6"
                >
                  {[
                    { icon: <BadgeCheck className="w-5 h-5" />, label: "Respon Cepat" },
                    { icon: <Truck className="w-5 h-5" />, label: "Pengiriman Seluruh Indonesia" },
                    { icon: <Shield className="w-5 h-5" />, label: "Transaksi Aman" },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      className="flex items-center gap-2 text-sm text-green-100"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </AppLayout>
  );
}
