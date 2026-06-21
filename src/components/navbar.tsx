import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../components/ui/sheet"
import { Home, Info, Package, Menu } from "lucide-react"
import { Logo } from "../assets/icons"

const navItems = [
  { href: "/", label: "Beranda", icon: <Home className="w-5 h-5" /> },
  { href: "/about", label: "Tentang", icon: <Info className="w-5 h-5" /> },
  { href: "/product", label: "Produk", icon: <Package className="w-5 h-5" /> },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 h-20 px-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-16 w-16" alt="Pesona Biawak" />
            <span className="font-bold text-xl">Pesona Biawak</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-semibold transition-colors ${
                  location.pathname === item.href
                    ? "text-[#80CC28]"
                    : "text-gray-600 hover:text-[#80CC28]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-gray-300 hover:border-[#80CC28] hover:text-[#80CC28] transition-colors">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white p-0 w-[280px] sm:max-w-[280px]">
              {/* Header with logo */}
              <div className="flex items-center gap-3 px-6 pt-8 pb-6 border-b border-gray-100">
                <img src={Logo} className="h-12 w-12" alt="Pesona Biawak" />
                <div>
                  <div className="font-bold text-lg text-gray-900">Pesona Biawak</div>
                  <div className="text-xs text-gray-500">Minyak Biawak Asli Indonesia</div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 px-4 py-6">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-[#80CC28] to-green-600 text-white shadow-md shadow-green-500/20"
                            : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                        }`}
                      >
                        <span className={`${isActive ? "text-white" : "text-gray-400"}`}>
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-50/50 to-transparent pointer-events-none rounded-b-2xl" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
