"use client";

import Link from "next/link";
import { Phone, Mail, MessageSquare, Send, User, AtSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";

export default function IletisimPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulated form submission - replace with actual API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Bize Ulaşın"
                title="İletişim"
                description="Sorularınız, görüşleriniz ve destek talepleriniz için bize ulaşabilirsiniz"
            />

            {/* İLETİŞİM BİLGİLERİ */}
            <section id="iletisim-bilgileri" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
                            İletişim Bilgileri
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* GSM */}
                            <Link href="tel:+905357664545" className="block group">
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 h-full">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Telefon</h3>
                                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">+90 535 766 45 45</p>
                                </Card>
                            </Link>

                            {/* WhatsApp */}
                            <Link href="https://wa.me/905357664545" target="_blank" className="block group">
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 h-full">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">WhatsApp</h3>
                                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">+90 535 766 45 45</p>
                                </Card>
                            </Link>

                            {/* Mail */}
                            <Link href="mailto:info@tevhiddergisi.org" className="block group">
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 h-full">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">E-Posta</h3>
                                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">info@tevhiddergisi.org</p>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* MESAJ FORMU */}
            <section id="mesaj-formu" className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="mb-4">
                                Mesaj Gönderin
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Bize Yazın
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Formu doldurarak bize mesaj gönderebilirsiniz
                            </p>
                        </div>

                        <Card className="shadow-xl border-primary/10">
                            <CardHeader className="space-y-1 pb-6">
                                <CardTitle className="text-2xl flex items-center gap-2">
                                    <MessageCircle className="w-6 h-6 text-primary" />
                                    İletişim Formu
                                </CardTitle>
                                <CardDescription>
                                    Tüm alanları eksiksiz doldurunuz. En kısa sürede size dönüş yapacağız.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Ad Soyad */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                                            <User className="w-4 h-4 text-primary" />
                                            Ad Soyad
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Adınız ve soyadınız"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="h-11 border-primary/20 focus-visible:ring-primary"
                                        />
                                    </div>

                                    {/* E-posta */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                            <AtSign className="w-4 h-4 text-primary" />
                                            E-posta Adresi
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="ornek@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="h-11 border-primary/20 focus-visible:ring-primary"
                                        />
                                    </div>

                                    {/* Konu */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-primary" />
                                            Konu
                                        </Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="Mesajınızın konusu"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="h-11 border-primary/20 focus-visible:ring-primary"
                                        />
                                    </div>

                                    {/* Mesaj */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                                            <MessageCircle className="w-4 h-4 text-primary" />
                                            Mesajınız
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Mesajınızı buraya yazın..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="resize-none border-primary/20 focus-visible:ring-primary"
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Minimum 10 karakter
                                        </p>
                                    </div>

                                    {/* Success Message */}
                                    {submitStatus === "success" && (
                                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                                            <p className="text-sm text-primary font-medium">
                                                ✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                                            </p>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full h-12 text-base font-semibold"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Mesajı Gönder
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Additional Info */}
                        <div className="mt-8 p-6 bg-background/50 rounded-lg border border-border/50">
                            <p className="text-sm text-muted-foreground text-center">
                                <strong className="text-foreground">Not:</strong> Gönderdiğiniz mesajlar en geç 48 saat içinde cevaplanacaktır.
                                Acil durumlar için lütfen telefon veya WhatsApp üzerinden iletişime geçin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
