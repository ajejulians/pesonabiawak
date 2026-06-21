import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Award, BadgeCheck, CheckCircle, ChevronRight,
  Clock, Droplets, Fish, Flame, Heart, Leaf, Shield, Sparkles,
  Target, ThumbsUp, Users, Zap,
} from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Photo1, Photo5, Photo7 } from "@/assets/photos";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

type UsageStep = {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type StatItem = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-5 h-5 text-green-600" />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function IconTile({ icon, title, description }: BenefitItem) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="group rounded-2xl border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
        <CardContent className="p-6 lg:p-8 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110">
            {icon}
          </div>
          <div className="text-xl font-bold text-gray-900">{title}</div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function UsageStepCard({ item }: { item: UsageStep; index: number }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="group rounded-2xl border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
        <CardContent className="p-6 lg:p-8">
          <div className="flex items-start gap-5">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {item.step}
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function About() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const slides = [
    { src: Photo1, alt: "Pesona Biawak - Foto 1" },
    { src: Photo5, alt: "Pesona Biawak - Foto 5" },
    { src: Photo7, alt: "Pesona Biawak - Foto 7" },
  ];

  const usageSteps = useMemo<UsageStep[]>(
    () => [
      { step: 1, title: "Bersihkan Area Kulit", description: "Pastikan area kulit yang akan diolesi sudah bersih dari kotoran dan keringkan dengan handuk lembut.", icon: <Droplets className="w-7 h-7" /> },
      { step: 2, title: "Aplikasikan Minyak", description: "Oleskan minyak biawak secukupnya pada bagian yang bermasalah menggunakan kapas atau jari yang bersih.", icon: <Heart className="w-7 h-7" /> },
      { step: 3, title: "Pijat Lembut", description: "Pijat dengan lembut area yang diolesi agar minyak meresap sempurna ke dalam kulit.", icon: <Zap className="w-7 h-7" /> },
      { step: 4, title: "Gunakan Rutin", description: "Untuk hasil maksimal, aplikasikan 2-3 kali sehari secara teratur pagi dan malam hari setelah mandi.", icon: <Clock className="w-7 h-7" /> },
    ],
    []
  );

  const benefits = useMemo<BenefitItem[]>(
    () => [
      { icon: <Heart className="w-7 h-7" />, title: "Meredakan Gatal & Eksim", description: "Efektif mengatasi gatal-gatal akibat eksim, alergi, atau gigitan serangga dengan kandungan alami." },
      { icon: <Flame className="w-7 h-7" />, title: "Penyembuhan Luka Bakar", description: "Mempercepat penyembuhan luka bakar ringan dan mengurangi rasa perih dengan cepat." },
      { icon: <Fish className="w-7 h-7" />, title: "Essen Memancing", description: "Aroma khas dan kuat yang sangat disukai ikan, cocok untuk bawal, lele, patin, nila, dan mas." },
      { icon: <Sparkles className="w-7 h-7" />, title: "Pertumbuhan Tanduk Domba", description: "Merangsang pertumbuhan tanduk domba lebih cepat dan besar, serta mencegah infeksi dengan sifat antibakteri." },
    ],
    []
  );

  const values = useMemo<ValueItem[]>(
    () => [
      { icon: <Leaf className="w-7 h-7" />, title: "100% Alami", description: "Dibuat dari lemak biawak asli dengan proses jemur alami, bebas bahan kimia berbahaya." },
      { icon: <Award className="w-7 h-7" />, title: "Kualitas Premium", description: "Diproses dengan standar tertinggi untuk menjaga kemurnian dan khasiat optimal." },
      { icon: <Shield className="w-7 h-7" />, title: "Anti-Bakteri & Anti-Jamur", description: "Kandungan senyawa aktif yang membantu mencegah infeksi bakteri dan jamur." },
      { icon: <Target className="w-7 h-7" />, title: "Multiguna", description: "Satu produk untuk berbagai kebutuhan: kesehatan kulit, memancing, dan peternakan domba." },
    ],
    []
  );

  const stats = useMemo<StatItem[]>(
    () => [
      { icon: <Leaf className="w-6 h-6" />, value: "100%", label: "Bahan Alami" },
      { icon: <Users className="w-6 h-6" />, value: "10.000+", label: "Pelanggan Puas" },
      { icon: <BadgeCheck className="w-6 h-6" />, value: "Proses", label: "Jemur Alami" },
      { icon: <Shield className="w-6 h-6" />, value: "Garansi", label: "Keaslian" },
    ],
    []
  );

  return (
    <AppLayout>
      <div className="w-full bg-white">
        <main className="w-full">
          {/* HERO */}
          <motion.section
            className="bg-gradient-to-br from-white via-green-50/30 to-white"
            {...sectionProps}
          >
            <div className="container mx-auto px-6 pt-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <motion.div variants={container} className="lg:w-1/2 text-center lg:text-left space-y-4 p-6">
                  <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                    Solusi Alami untuk{" "}
                    <span className="text-green-500 block mt-2">Kulit Sehat Anda</span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Dari generasi ke generasi, minyak biawak telah menjadi andalan untuk menjaga
                    kesehatan kulit. Dibuat dengan proses jemur alami, efektif mengatasi gatal-gatal,
                    eksim, luka bakar, dan berbagai masalah kulit lainnya.
                  </motion.p>

                  <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start p-2">
                    <Button
                      size="lg"
                      className="rounded-xl bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
                      onClick={() => scrollToId("cara-pakai")}
                    >
                      Cara Menggunakan <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-xl px-10 py-6 text-lg font-semibold border-gray-200 hover:bg-green-50 hover:text-green-600 hover:border-green-300 transition-all duration-300"
                      onClick={() => scrollToId("manfaat")}
                    >
                      Lihat Manfaat <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
                    <TrustItem text="100% Alami" />
                    <TrustItem text="Proses Jemur Tradisional" />
                    <TrustItem text="Tanpa Bahan Kimia" />
                  </motion.div>
                </motion.div>

                {/* Carousel */}
                <motion.div
                  variants={fadeUp}
                  className="lg:w-1/2 flex justify-center lg:justify-end w-full"
                >
                  <div className="relative w-full max-w-lg">
                    <div className="rounded-3xl overflow-hidden border border-green-100 shadow-xl shadow-green-500/10 bg-gradient-to-br from-green-100 via-white to-green-50">
                      <Carousel
                        className="w-full"
                        plugins={[autoplayRef.current]}
                        opts={{ loop: true }}
                        onMouseEnter={autoplayRef.current.stop}
                        onMouseLeave={autoplayRef.current.reset}
                      >
                        <CarouselContent>
                          {slides.map((slide) => (
                            <CarouselItem key={slide.alt}>
                              <div className="p-6 sm:p-8">
                                <div className="relative overflow-hidden rounded-3xl border border-green-200/60 shadow-2xl shadow-green-500/20 bg-white/60 backdrop-blur-sm">
                                  <div className="aspect-[4/3] w-full">
                                    <img
                                      src={slide.src}
                                      alt={slide.alt}
                                      className="h-full w-full object-cover"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-green-500/10 blur-2xl" />
                                    <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-green-600/10 blur-2xl" />
                                  </div>
                                </div>
                                <div className="mt-6 text-center space-y-2">
                                  <div className="inline-flex items-center rounded-full bg-white/80 text-gray-700 border border-gray-200/70 backdrop-blur-sm px-3 py-1 text-sm">
                                    <span className="inline-flex items-center">
                                      <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.15)]" />
                                      100% Alami • Premium
                                    </span>
                                  </div>
                                  <p className="text-gray-600">Tradisi yang terjaga, kualitas yang terasa.</p>
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* MANFAAT */}
          <motion.section id="manfaat" className="py-16 lg:py-24 bg-white" {...sectionProps}>
            <div className="container mx-auto px-6">
              <motion.div variants={fadeUp} className="text-center mb-12 lg:mb-16 space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Manfaat Minyak Biawak</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Satu produk dengan beragam manfaat untuk kesehatan, hobi, dan peternakan Anda.
                </p>
              </motion.div>

              <motion.div variants={container} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit) => (
                  <IconTile key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} />
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* CARA MENGGUNAKAN */}
          <motion.section id="cara-pakai" className="py-16 lg:py-24 bg-gray-50" {...sectionProps}>
            <div className="container mx-auto px-6">
              <motion.div variants={fadeUp} className="text-center mb-12 lg:mb-16 space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cara Menggunakan</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Ikuti langkah mudah ini untuk mendapatkan hasil maksimal dari minyak biawak.
                </p>
              </motion.div>

              <motion.div variants={container} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {usageSteps.map((step, idx) => (
                  <UsageStepCard key={step.step} item={step} index={idx} />
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 max-w-3xl mx-auto">
                <Card className="rounded-2xl border-green-200 bg-green-50/50">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">Tips untuk Hasil Optimal</h3>
                        <ul className="space-y-2 text-gray-600">
                          {[
                            "Untuk luka bakar, segera oleskan dan usahakan jangan sampai terkena air",
                            "Gunakan 2-3 kali sehari untuk penyembuhan penyakit kulit",
                            "Untuk essen memancing, campurkan dengan umpan secukupnya",
                            "Untuk tanduk domba, oleskan secara rutin pada area sekitar tanduk",
                          ].map((text) => (
                            <li key={text} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* VISI MISI */}
          <motion.section className="py-16 lg:py-24 bg-white" {...sectionProps}>
            <div className="container mx-auto px-6">
              <motion.div variants={fadeUp} className="text-center mb-12 lg:mb-16 space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Visi &amp; Misi Kami</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Arah yang kami pegang untuk menjaga kualitas dan kepercayaan Anda.
                </p>
              </motion.div>

              <motion.div variants={container} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                <motion.div variants={fadeUp}>
                  <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                    <CardHeader className="p-6 lg:p-8 pb-0">
                      <div className="flex items-start gap-5">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                          <Target className="w-7 h-7" />
                        </div>
                        <div className="space-y-2">
                          <CardTitle className="text-2xl font-bold text-gray-900">Visi</CardTitle>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            Menjadi brand minyak biawak terpercaya dan terdepan di Indonesia yang
                            menghadirkan produk alami berkualitas tinggi untuk kesehatan masyarakat.
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                    <CardHeader className="p-6 lg:p-8 pb-0">
                      <div className="flex items-start gap-5">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                          <Award className="w-7 h-7" />
                        </div>
                        <div className="space-y-3 w-full">
                          <CardTitle className="text-2xl font-bold text-gray-900">Misi</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 lg:p-8 pt-6 space-y-4">
                      <div className="space-y-3">
                        {[
                          "Menjaga kemurnian bahan dengan proses jemur alami tanpa bahan kimia.",
                          "Melestarikan tradisi turun-temurun dengan standar produksi modern yang higienis.",
                          "Menghadirkan produk multiguna untuk kesehatan kulit, memancing, dan peternakan.",
                          "Memberikan layanan terbaik dengan harga terjangkau untuk semua kalangan.",
                        ].map((text) => (
                          <div key={text} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <p className="text-gray-600 leading-relaxed">{text}</p>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="rounded-xl bg-[#80CC28] hover:bg-green-600 text-white px-8 py-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                        onClick={() => scrollToId("nilai")}
                      >
                        Lihat Keunggulan <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* KEUNGGULAN */}
          <motion.section id="nilai" className="py-16 lg:py-24 bg-gray-50" {...sectionProps}>
            <div className="container mx-auto px-6">
              <motion.div variants={fadeUp} className="text-center mb-12 lg:mb-16 space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Keunggulan Produk Kami</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Mengapa minyak biawak Pesona Biawak menjadi pilihan terbaik untuk Anda.
                </p>
              </motion.div>

              <motion.div variants={container} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {values.map((v) => (
                  <IconTile key={v.title} icon={v.icon} title={v.title} description={v.description} />
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* KOMITMEN */}
          <motion.section className="py-16 lg:py-24 bg-[#80CC28]" {...sectionProps}>
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <motion.div variants={container} className="lg:w-3/5 space-y-6">
                  <motion.span variants={fadeUp} className="text-green-200 font-semibold text-sm uppercase tracking-wider">
                    Kenapa Kami
                  </motion.span>
                  <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
                    Komitmen Kami untuk Anda
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-green-100 text-base lg:text-lg leading-relaxed">
                    Kami berkomitmen menjaga kualitas dan keaslian minyak biawak melalui proses jemur
                    alami yang telah dipercaya sejak generasi terdahulu. Dari pemilihan lemak biawak
                    hingga pengemasan, fokus kami adalah menghadirkan produk yang aman, nyaman
                    digunakan, dan memberikan manfaat nyata untuk kesehatan kulit Anda.
                  </motion.p>

                  <motion.div variants={container} className="flex flex-wrap items-center gap-6 pt-2">
                    {["Proses Jemur Alami", "Bebas Bahan Kimia", "Harga Terjangkau"].map((t) => (
                      <motion.div key={t} variants={fadeUp} className="flex items-center gap-2 text-sm text-green-50">
                        <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium">{t}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeUp} className="lg:w-2/5 w-full">
                  <div className="grid grid-cols-2 gap-4 lg:gap-6">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                          {s.icon}
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
                        <div className="text-sm text-green-100 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <ThumbsUp className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-bold">Fokus pada kepuasan pelanggan</div>
                        <div className="text-green-100 text-sm leading-relaxed">
                          Setiap masukan kami jadikan bahan evaluasi agar produk dan layanan terus meningkat.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section className="py-16 lg:py-20" {...sectionProps}>
            <div className="container mx-auto px-6">
              <div className="bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

                <motion.div variants={container} className="relative z-10 space-y-6">
                  <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Dapatkan Kulit Sehat dengan Minyak Biawak Asli
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-green-100 max-w-2xl mx-auto text-base lg:text-lg">
                    Solusi alami untuk berbagai masalah kulit Anda. Dipercaya sejak generasi terdahulu,
                    kini hadir untuk keluarga Indonesia modern.
                  </motion.p>

                  <motion.div variants={fadeUp}>
                    <Button
                      size="lg"
                      className="rounded-xl bg-white text-green-600 hover:bg-gray-100 px-10 lg:px-12 py-6 lg:py-7 text-base lg:text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => (window.location.href = "/")}
                    >
                      Pesan Sekarang <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </AppLayout>
  );
}
