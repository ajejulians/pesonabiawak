import { useState } from "react";
import { 
  Leaf, 
  Shield, 
  Droplets, 
  Star, 
  ChevronRight, 
  CheckCircle,
  Quote,
  ArrowRight,
  Award,
  Users,
  Clock,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";
import { Eksim, Gatal, Koreng, Photo1, Photo7 } from "../assets/photos";
import { Button } from "../components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppLayout from "../layouts/app-layout";
import { Link } from "react-router-dom";


export default function Landing() {
  const [activeTab, setActiveTab] = useState(0);


  const benefits = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Menjaga Kesehatan Kulit",
      description: "Efektif mengatasi penyakit kulit tanpa efek samping berbahaya. Cocok untuk semua jenis kulit."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Kesuburan Tanduk Domba",
      description: "Membantu mempercepat pertumbuhan, memperindah dan meningkatkan kekuatan pada tanduk domba."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "100% Alami",
      description: "Tanpa bahan kimia berbahaya, murni diekstrak dari alam Indonesia. Aman digunakan setiap hari."
    }
  ];


  const features = [
    {
      title: "Eksim Kering dan Eksim Basah",
      image: Eksim,
      description: "Minyak biawak kaya akan asam lemak esensial yang membantu regenerasi sel kulit, mengatasi kulit kering, eksim, dan menjaga elastisitas kulit Anda. Penggunaan rutin akan membuat kulit lebih sehat, lembab, dan bercahaya.",
      points: ["Regenerasi sel kulit", "Mengatasi kulit kering", "Menjaga elastisitas", "Mencerahkan kulit kusam"]
    },
    {
      title: "Gatal Menahun dan Luka Bakar",
      image: Gatal,
      description: "Kandungan anti-inflamasi alami membantu meredakan nyeri pada persendian dan otot yang lelah setelah aktivitas berat. Cocok untuk penderita rematik dan nyeri sendi kronis.",
      points: ["Anti-inflamasi alami", "Meredakan nyeri otot", "Cocok untuk rematik", "Pemulihan lebih cepat"]
    },
    {
      title: "Koreng dan Radang Kulit",
      image: Koreng,
      description: "Nutrisi lengkap untuk rambut sehat, mengatasi kerontokan, ketombe, dan membuat rambut lebih kuat serta berkilau. Menembus hingga ke akar rambut untuk hasil maksimal.",
      points: ["Mengatasi kerontokan", "Menghilangkan ketombe", "Rambut lebih berkilau", "Menutrisi akar rambut"]
    }
  ];


  const testimonials = [
    {
      name: "izalachil",
      quote: "Hasil memuaskan ini asli budug kurap bersih......Sudah d coba bukan kaleng kaleng makasih minyaka BAYAWAK...super..Bersih",
      rating: 5
    },
    {
      name: "c8e8hj4j8m",
      quote: "Amis, asliii, terimakasih seller. rekomended",
      rating: 5
    },
    {
      name: "y_guanghwe1234",
      quote: "Mengurangi gatal gatal kulit, wangi biawak, terjamin",
      rating: 5
    }
  ];


  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "100%", label: "Asli & Murni" },
    { icon: <Users className="w-6 h-6" />, value: "10K+", label: "Pelanggan Puas" },
    { icon: <Clock className="w-6 h-6" />, value: "7+", label: "Tahun Pengalaman" },
    { icon: <ThumbsUp className="w-6 h-6" />, value: "4.8", label: "Rating Produk" }
  ];


  return (
    <AppLayout>
    <div className="w-full bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-br from-white via-green-50/30 to-white">
        <div className="container px-16 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-4 p-6">

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#FC9150] via-[#FF6100] to-[#FC9150] text-transparent bg-clip-text">
                Minyak Biawak
                <span className="font-bold bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] text-transparent bg-clip-text block mt-2">Asli Indonesia</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Dapatkan manfaat terbaik dengan minyak biawak asli untuk kesehatan kulit, 
                mengobati koreng dan luka bakar atau meningkatkan kesuburan tanduk domba serta essen mancing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start overflow-hidden p-2">
                <Button onClick={() => window.open('https://id.shp.ee/wtChweVy')} className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-semibold bg-[#EE4D2D] hover:bg-[#EE4D2D] text-white shadow-xs shadow-green-gray-20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Beli di Shopee
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button onClick={() => window.open('https://vt.tokopedia.com/t/ZS9jwvRy28WeN-BWuyn/')} className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-semibold bg-[#000] hover:bg-gray-20 text-white shadow-xs shadow-gray-20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Beli di TikTok
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">100% Kemurnian</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Promo Ekstra</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">COD Available</span>
                </div>
              </div>
            </div>

            {/* Right - Product Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group overflow-hidden">
                <img
                  src={Photo1}
                  alt="Minyak Biawak Asli"
                  className="w-72 lg:w-80 xl:w-96 drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_35px_35px_rgba(34,197,94,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FC9150] via-[#FF6100] to-[#FC9150] text-transparent bg-clip-text">
              Mengapa Memilih Minyak Biawak?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Diekstrak dengan metode tradisional yang terjaga kualitasnya serta kemurniannya
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 group cursor-pointer h-full space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== FEATURES TAB SECTION ===== */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Manfaat Lengkap Minyak Biawak
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Pilih kategori untuk melihat detail manfaat
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 overflow-hidden">
            {features.map((feature, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] text-white shadow-lg shadow-green-500/30 scale-105"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300"
                }`}
              >
                {feature.title}
              </Button>
            ))}
          </div>


          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-gray-100 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                {/* Feature Image */}
                <div className="lg:w-2/5 w-full">
                  <div className="w-full h-72 lg:h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full"></div>
                    <img
                    src={features[activeTab].image}
                    alt={features[activeTab].title}
                    className="w-full h-full object-contain rounded-xl"/>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="lg:w-3/5 space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {features[activeTab].description}
                  </p>

                  {/* Feature Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    {features[activeTab].points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-[#80CC28] px-4 py-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-white font-medium text-sm lg:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/product">
                    <Button className="inline-flex items-center gap-2 bg-[#80CC28] hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                      Lihat Produk
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </Link>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== QUALITY ASSURANCE SECTION ===== */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Content */}
            <div className="lg:w-3/5 text-white space-y-6">
              <span className="text-green-200 font-semibold text-sm uppercase tracking-wider">Jaminan Kualitas</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Kualitas Premium Terjamin
              </h2>
              <p className="text-green-100 text-base lg:text-lg leading-relaxed">
                Setiap botol minyak biawak kami diproduksi dengan standar kualitas tinggi. 
                Kami memastikan kemurnian dan keaslian produk dari proses ekstraksi hingga 
                pengemasan. Diproduksi dengan teknologi modern namun tetap menjaga kearifan lokal.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-green-200 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="w-72 h-72 lg:w-full lg:h-full rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="flex flex-col items-center gap-4 text-center text-white relative z-10">
                  <img 
                  src={Photo7}
                  className="w-full h-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  <Badge variant="secondary" className="flex items-center text-[#FF6100] font-semibold gap-1">
                    <BadgeCheck data-icon="w-4 h-4" className="text-[#80CC28]"/>
                    Garansi Keaslian
                  </Badge>
                  
                  <Badge variant= "default" className="bg-white font-bold text-[#80CC28]">
                    UANG KEMBALI
                  </Badge>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Ribuan pelanggan telah merasakan manfaatnya
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-50 p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-green-200 h-full group space-y-6"
              >
                <Quote className="w-12 h-12 text-green-200 group-hover:text-green-300 transition-colors flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed italic flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== CTA BANNER SECTION ===== */}
      <section className="py-16 lg:py-4">
        <div className="container mx-auto px-2">
          <div className="bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/5 rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4 overflow-hidden">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Siap Merasakan Manfaatnya?
              </h2>
              <p className="text-green-100 max-w-2xl mx-auto text-base lg:text-lg">
                Pesan sekarang dan dapatkan diskon spesial 20% untuk pembelian pertama Anda. 
                Gratis ongkir ke seluruh Indonesia!
              </p>
              <Button onClick={() =>{
                window.open(`https://shopee.co.id/Minyak-Biawak-Asli-Menyembuhkan-Gatal-gatal-Alergi-Eksim-Esen-Memancing-Minyak-Tanduk-i.1380118779.27464620647?extraParams=%7B%22display_model_id%22%3A280088482730%2C%22model_selection_logic%22%3A2%7D`);}} className="inline-flex items-center gap-3 bg-white text-green-600 hover:bg-gray-100 px-10 lg:px-12 py-4 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105">
                Pesan Sekarang - Diskon 20%
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </AppLayout>
  );
}