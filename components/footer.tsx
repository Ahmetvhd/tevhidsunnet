import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

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
                        <Link href="/biz-kimiz" className="text-sm text-muted-foreground hover:underline">
                            Hakkımızda
                        </Link>
                        <Link href="/subelerimiz" className="text-sm text-muted-foreground hover:underline">
                            Şubelerimiz
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Gizlilik Politikası
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">Yayınlar</h3>
                        <Link href="/tevhid-basim-yayin#kitaplarimiz" className="text-sm text-muted-foreground hover:underline">
                            Kitaplar
                        </Link>
                        <Link href="/tevhid-basim-yayin#tevhid-dergisi" className="text-sm text-muted-foreground hover:underline">
                            Dergiler
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">İletişim</h3>
                        <div className="flex flex-col gap-6 mt-4">
                            <Link
                                href="https://wa.me/905357664545"
                                target="_blank"
                                className="flex flex-col items-start gap-2 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-medium">WhatsApp</span>
                            </Link>
                            <Link
                                href="mailto:info@tevhiddergisi.org"
                                className="flex flex-col items-start gap-2 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,18H18V10L12,14L6,10V18H4V6H5.4L12,10.6L18.6,6H20V18Z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-medium">E-Posta</span>
                            </Link>
                        </div>
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
