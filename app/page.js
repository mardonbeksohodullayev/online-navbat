"use client";

import React, { useState } from 'react';
import MuassasaKarti from '@/components/MuassasaKarti';
// Faqat barqaror va xatosiz ishlaydigan ikonkalar
import { 
  Search, MapPin, LayoutGrid, Sparkles, 
  Phone, Mail, Send, ArrowUpRight
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const muassasalar = [
  { 
    id: 1, 
    nomi: "Xalq Banki", 
    turi: "Bank xizmatlari", 
    navbat: 6, 
    manzil: "Amir Temur ko'chasi 12", 
    vaqt: 10,
    ishVaqti: "09:00 - 18:00",
    tushlik: "13:00 - 14:00",
    rasm: "data:image/jpeg;base64,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"
  },
  { 
    id: 2, 
    nomi: "Sog'lom Hayot", 
    turi: "Tibbiyot markazi", 
    navbat: 6, 
    manzil: "Mustaqillik ko'chasi 5", 
    vaqt: 15,
    ishVaqti: "08:00 - 17:00",
    tushlik: "12:00 - 13:00",
    rasm: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400"
  },
  { 
    id: 3, 
    nomi: "Davlat Xizmatlari", 
    turi: "DXM markazi", 
    navbat: 6, 
    manzil: "Sayilgoh ko'chasi 4", 
    vaqt: 20,
    ishVaqti: "09:00 - 20:00",
    tushlik: "Tanaffussiz",
    rasm: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400"
  }
];

export default function BoshSahifa() {
  const [searchTerm, setSearchTerm] = useState("");

  // QR kod skaner qilinganda ochiladigan manzil
  // Agar loyihani internetga qo'ygan bo'lsangiz, o'sha linkni yozing (masalan: https://queue-uz.vercel.app)
const saytUrl = "https://online-navbat.vercel.app";

  const filtered = muassasalar.filter((m) =>
    m.nomi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.turi.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* --- HEADER (Mobil va Desktop uchun) --- */}
      <header className="px-4 py-8 md:px-6 md:py-14 border-b border-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
              <MapPin className="w-3.5 h-3.5" />
              Toshkent shahri
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-none">
              Onlayn <span className="text-blue-600 italic font-medium">Navbat</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Vaqtingizni qadrlang, masofadan turib navbatga yoziling.
            </p>
          </div>

          {/* Qidiruv qismi */}
          <div className="w-full md:max-w-sm space-y-3">
            <div className="flex items-center gap-2 ml-1 text-gray-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Tezkor qidiruv</span>
            </div>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Muassasa nomini yozing..."
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* --- ASOSIY QISM --- */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8 text-gray-400">
          <LayoutGrid className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Muassasalar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.length > 0 ? (
            filtered.map((m) => (
              <MuassasaKarti key={m.id} {...m} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 bg-gray-50 rounded-[32px] border-2 border-dashed">
              Hech narsa topilmadi
            </div>
          )}
        </div>
      </main>

      {/* --- FOOTER (Mobilga moslangan va QR kodli) --- */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 px-6 rounded-t-[0] md:rounded-t-[0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center border-b border-white/5 pb-16">
            
            {/* QR Kod bo'limi */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <div className="p-3 bg-white rounded-2xl shadow-xl shadow-blue-500/10">
                <QRCodeSVG value={saytUrl} size={110} level="H" />
              </div>
              <div>
                <h4 className="font-bold text-lg italic tracking-tight uppercase">Skanerlang</h4>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Saytga tezkor o'tish</p>
              </div>
            </div>

            {/* Aloqa & Ijtimoiy tarmoqlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:col-span-2">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">Bog'lanish</h4>
                <div className="space-y-4">
                  <a href="tel:+998712000000" className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-blue-600 transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">+998 71 200 00 00</span>
                  </a>
                  <a href="mailto:info@queue.uz" className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-blue-600 transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">info@queue.uz</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">Ijtimoiy tarmoqlar</h4>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all text-xs font-bold whitespace-nowrap">
                    <Send className="w-4 h-4" /> Telegram
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 rounded-2xl hover:bg-pink-600 transition-all text-xs font-bold whitespace-nowrap">
                    <ArrowUpRight className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pastki qism */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
            <p className="text-center md:text-left">© 2026 QUEUE.UZ — Raqamli navbat boshqaruv tizimi</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">Maxfiylik</a>
              <a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">Qoidalar</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}