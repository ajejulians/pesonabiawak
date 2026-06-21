import { Logo } from "@/assets/icons";
import { MapPin } from "lucide-react";

export default function Footer () {

    return(
      <div className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">

          {/* Footer Main Content */}
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-12">

            {/* Brand Column */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src={Logo}></img>
                </div>
                <span className="text-2xl font-bold">PesonaBiawak</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Produk minyak biawak asli berkualitas premium untuk kesehatan dan vitalitas Anda. 
                Dipercaya sejak generasi terdahulu.
              </p>
            </div>

            {/* Products Column */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Produk</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="/product" className="hover:text-green-400 transition-colors">Minyak Biawak Original</a></li>
                <li><a href="/product" className="hover:text-green-400 transition-colors">Minyak Biawak Plus</a></li>
                <li><a href="/product" className="hover:text-green-400 transition-colors">Paket Hemat</a></li>
                <li><a href="/product" className="hover:text-green-400 transition-colors">Paket Keluarga</a></li>
              </ul>
            </div>

            {/* Information Column */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Informasi</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="/about" className="hover:text-green-400 transition-colors">Tentang Kami</a></li>
                <li><a href="/about" className="hover:text-green-400 transition-colors">Cara Penggunaan</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg"></h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-green-500" />
                  </div>
                  <span>Kabupaten Bogor, Jawa Barat</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 PesonaBiawak. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-green-400 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-green-400 transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
    )
}