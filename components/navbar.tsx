"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Menu,
  Home,
  Users,
  MonitorPlay,
  BookOpen,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { useTheme } from "next-themes"

import { cinzel } from "@/lib/fonts"

const menuItems = [
  { href: "/", label: "Ana Sayfa", icon: Home },
  {
    href: "/biz-kimiz",
    label: "Biz Kimiz",
    icon: Users,
    children: [
      { href: "/biz-kimiz#tarihcemiz", label: "Tarihçemiz", description: "Tevhid ve Sünnet cemaatinin tarihsel süreci." },
      { href: "/biz-kimiz#kitapcik", label: "Biz Kimiz Kitapçığı", description: "Metodumuz ve ilkelerimiz." },
    ]
  },
  {
    href: "/dijital-iceriklerimiz",
    label: "Dijital İçeriklerimiz",
    icon: MonitorPlay,
    children: [
      { href: "/dijital-iceriklerimiz#youtube-kanallarimiz", label: "YouTube Kanallarımız" },
      { href: "/dijital-iceriklerimiz#web-sitelerimiz", label: "Web Sitelerimiz" },
      { href: "/dijital-iceriklerimiz#mobil-uygulamalar", label: "Mobil Uygulamalarımız" },
      { href: "/dijital-iceriklerimiz#sosyal-medya", label: "Sosyal Medya Hesaplarımız" },
    ]
  },
  {
    href: "/tevhid-basim-yayin",
    label: "Basım Yayın",
    icon: BookOpen,
    children: [
      { href: "/tevhid-basim-yayin#tevhid-dergisi", label: "Tevhid Dergisi" },
      { href: "/tevhid-basim-yayin#tevhid-cocuk", label: "Tevhid Çocuk" },
      { href: "/tevhid-basim-yayin#kitaplarimiz", label: "Kitaplarımız" },
    ]
  },
  {
    href: "/insani-yardim",
    label: "İnsani Yardım",
    icon: HeartHandshake,
    children: [
      { href: "/insani-yardim#tanitim", label: "Ecir Kapısı Nedir?", description: "Ecir Kapısı Derneği hakkında." },
      { href: "/insani-yardim#faaliyetler", label: "Faaliyetlerimiz", description: "İnsani yardım çalışmalarımız." },
      { href: "/insani-yardim#projeler", label: "Projelerimiz", description: "Devam eden projeler ve kampanyalar." },
    ]
  },
  { href: "/subelerimiz", label: "Şubelerimiz", icon: MapPin },
  { href: "/iletisim", label: "İletişim", icon: Phone },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

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
        <Link href="/" className="flex flex-col group">
          <span className={`${cinzel.className} font-bold text-2xl md:text-xl lg:text-2xl tracking-tighter transition-colors ${isScrolled ? "text-foreground group-hover:text-primary" : "text-white group-hover:text-white/90"
            }`}>
            Tevhid ve Sünnet
          </span>
          <span className={`text-[10px] uppercase tracking-widest transition-colors ${isScrolled ? "text-muted-foreground group-hover:text-foreground" : "text-white/80 group-hover:text-white"
            }`}>
            Küfrün Karanlıklarından Vahyin Aydınlığına
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {menuItems.map((item) => {
                if (item.children) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger
                        onClick={() => router.push(item.href)}
                        className={cn(
                          "!bg-transparent hover:!bg-transparent focus:!bg-transparent text-[11px] lg:text-sm font-medium transition-colors data-[state=open]:!bg-transparent group",
                          isScrolled
                            ? "text-foreground hover:text-primary focus:text-primary"
                            : "text-white hover:text-white/80 focus:text-white/80 data-[state=open]:text-white/90"
                        )}>
                        <span className="relative group/item">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/item:w-full" />
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-transparent border-none shadow-none mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                        <ul className="flex flex-col w-[240px] gap-2 p-2 rounded-xl backdrop-blur-xl transition-all duration-300 bg-background/80 border border-border/40 shadow-xl">
                          {item.children.map((child, idx) => (
                            <ListItem
                              key={child.href}
                              title={child.label}
                              href={child.href}
                              index={idx}
                              className="transition-all duration-300 font-medium py-2 px-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary"
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild className={cn(
                      navigationMenuTriggerStyle(),
                      "!bg-transparent hover:!bg-transparent focus:!bg-transparent text-[11px] lg:text-sm font-medium cursor-pointer group",
                      isScrolled
                        ? "text-foreground hover:text-primary focus:text-primary"
                        : "text-white hover:text-white/80 focus:text-white/80"
                    )}>
                      <Link href={item.href}>
                        <span className="relative group/item">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/item:w-full" />
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle className={cn("rounded-full w-9 h-9 transition-colors", isScrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10 hover:text-white")} />
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

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="flex flex-col gap-2">
                    <Accordion type="single" collapsible className="w-full">
                      {menuItems.map((item, index) => {
                        if (item.children) {
                          const isActive = pathname.startsWith(item.href)
                          return (
                            <AccordionItem value={`item-${index}`} key={item.href} className="border-b-0">
                              <div className={cn(
                                "flex items-center w-full rounded-lg transition-all duration-200",
                                isActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-muted hover:text-primary"
                              )}>
                                <SheetClose asChild>
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-4 flex-1 px-4 py-3 text-sm font-medium hover:no-underline"
                                  >
                                    <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground/70")} />
                                    {item.label}
                                  </Link>
                                </SheetClose>
                                <AccordionTrigger
                                  className={cn(
                                    "py-3 px-4 w-[60px] flex-none justify-center border-l border-border/10 hover:bg-black/5 active:bg-black/10 transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                  )}
                                />
                              </div>
                              <AccordionContent className="pl-12 pr-4 pb-2">
                                <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-4 py-1">
                                  {item.children.map((child) => (
                                    <SheetClose key={child.href} asChild>
                                      <Link
                                        href={child.href}
                                        className="text-sm text-muted-foreground hover:text-primary py-1 block transition-colors"
                                      >
                                        {child.label}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )
                        }

                        const isActive = pathname === item.href
                        return (
                          <div key={item.href} className="py-1">
                            <SheetClose asChild>
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
                              </Link>
                            </SheetClose>
                          </div>
                        )
                      })}
                    </Accordion>
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border/10 bg-muted/20">
                  <div className="flex items-center justify-center gap-12">
                    <Link href="https://wa.me/905357664545" target="_blank" className="group flex flex-col items-center gap-2 text-center">
                      <div className="flex items-center justify-center p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors shadow-sm ring-1 ring-primary/5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground group-hover:text-primary transition-colors">WhatsApp</span>
                    </Link>
                    <Link href="mailto:info@tevhiddergisi.org" className="group flex flex-col items-center gap-2 text-center">
                      <div className="flex items-center justify-center p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors shadow-sm ring-1 ring-primary/5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                          <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,18H18V10L12,14L6,10V18H4V6H5.4L12,10.6L18.6,6H20V18Z" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground group-hover:text-primary transition-colors">E-Posta</span>
                    </Link>
                  </div>
                  <p className="text-[10px] text-center text-muted-foreground/60 mt-4">
                    © 2026 Tevhid ve Sünnet
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { index?: number }
>(({ className, title, href, index = 0, ...props }, ref) => {
  return (
    <li
      className="animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:translate-x-1",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
