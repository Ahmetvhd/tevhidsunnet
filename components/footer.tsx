
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2">
                        <Link href="/" className="mb-4 flex items-center gap-2 font-bold text-xl">
                            Tevhid ve Sünnet
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Kur'an ve Sünnet ışığında, sahih ilim ve davet çalışmaları.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">Kurumsal</h3>
                        <Link href="#biz-kimiz" className="text-sm text-muted-foreground hover:underline">
                            Hakkımızda
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Temsilcilikler
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Gizlilik Politikası
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">Yayınlar</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Kitaplar
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Dergiler
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Makaleler
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">İletişim</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">Youtube</span>
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            info@tevhidsunnet.com
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Tevhid ve Sünnet. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    )
}
