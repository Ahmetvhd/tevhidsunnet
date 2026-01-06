"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Home,
  Users,
  MonitorPlay,
  BookOpen,
  HeartHandshake,
  MapPin,
  Phone,
  Youtube,
  Twitter,
  Instagram,
  Facebook
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { cn } from "@/lib/utils"

import { cinzel } from "@/lib/fonts"

const menuItems = [
  { href: "/", label: "Ana Sayfa", icon: Home },
  { href: "/biz-kimiz", label: "Biz Kimiz", icon: Users },
  { href: "/dijital-iceriklerimiz", label: "Dijital İçeriklerimiz", icon: MonitorPlay },
  { href: "/tevhid-basim-yayin", label: "Tevhid Basım Yayın", icon: BookOpen },
  { href: "/insani-yardim", label: "İnsani Yardım", icon: HeartHandshake },
  { href: "/subelerimiz", label: "Şubelerimiz", icon: MapPin },
  { href: "/iletisim", label: "İletişim", icon: Phone },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
        ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
        : "border-transparent bg-transparent"
        }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex flex-col">
          <span className={`${cinzel.className} font-bold text-2xl md:text-xl lg:text-2xl tracking-tighter ${isScrolled ? "text-foreground" : "text-white"}`}>
            Tevhid ve Sünnet
          </span>
          <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
            Küfrün Karanlıklarından Vahyin Aydınlığına
          </span>
        </Link>
        <nav className={`hidden md:flex items-center md:gap-2 lg:gap-6 md:text-[11px] lg:text-sm font-medium ${isScrolled ? "text-foreground" : "text-white"}`}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary opacity-90 relative group whitespace-nowrap",
                pathname === item.href && "opacity-100 font-semibold text-primary"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full",
                pathname === item.href && "w-full"
              )} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l border-border/10">
              <VisuallyHidden>
                <SheetTitle>Mobil Menü</SheetTitle>
                <SheetDescription>Site navigasyon menüsü</SheetDescription>
              </VisuallyHidden>

              <div className="flex flex-col h-full bg-background/95 backdrop-blur-xl">
                {/* Header */}
                <div className="p-6 border-b border-border/10 bg-muted/20">
                  <Link href="/" className="flex flex-col gap-1">
                    <span className={`${cinzel.className} font-bold text-xl tracking-tighter`}>
                      Tevhid ve Sünnet
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      İlim ve Davet
                    </span>
                  </Link>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <SheetClose key={item.href} asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                              isActive
                                ? "bg-primary/10 text-primary hover:bg-primary/15"
                                : "text-muted-foreground hover:bg-muted hover:text-primary"
                            )}
                          >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground/70")} />
                            {item.label}
                            {isActive && (
                              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            )}
                          </Link>
                        </SheetClose>
                      )
                    })}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border/10 bg-muted/20">
                  <div className="flex items-center justify-center gap-6 text-muted-foreground">
                    <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                    <Link href="#" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></Link>
                    <Link href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
                    <Link href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                  </div>
                  <p className="text-[10px] text-center text-muted-foreground/60 mt-4">
                    © 2024 Tevhid ve Sünnet
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
