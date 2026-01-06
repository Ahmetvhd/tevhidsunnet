"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, BookOpen } from "lucide-react";

export function BookletViewer() {
    const [isOpen, setIsOpen] = useState(false);
    const pdfUrl = "https://arsiv.tevhiddersleri.org/books/turkce-kitap/biz-kimiz-ve-ne-istiyoruz.pdf";

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        PDF İndir
                    </a>
                </Button>

                <Button size="lg" variant="outline" onClick={() => setIsOpen(true)} className="w-full sm:w-auto group">
                    <BookOpen className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Çevrimiçi Oku
                </Button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="relative w-full max-w-md h-[90vh] bg-background rounded-xl shadow-xl flex flex-col animate-in zoom-in-95 duration-200 border border-border"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold text-lg">Biz Kimiz ve Ne İstiyoruz?</h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                                <span className="sr-only">Kapat</span>
                            </Button>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 bg-neutral-100 p-0 overflow-hidden rounded-b-xl relative">
                            <iframe
                                src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                                className="w-full h-full border-0"
                                title="Kitapçık Önizleme"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
