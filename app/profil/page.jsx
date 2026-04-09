"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, Ticket, Clock, CheckCircle2, 
  ChevronRight, LogOut, Settings, Calendar, Save, X 
} from 'lucide-react';

export default function ProfilSahifasi() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    ism: "Azizbek",
    familiya: "Rahimov",
    tel: "+998 90 123 45 67",
    email: "aziz@example.com"
  });

  // Logout funksiyasi
  const handleLogout = () => {
    // Kelajakda bu yerda sessiyani o'chirish kodi bo'ladi
    router.push('/register'); // Register sahifasiga qaytadi
  };

  const handleSave = () => {
    setIsEditing(false);
    // Ma'lumotlarni saqlash kodi shu yerga keladi
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <div className="bg-slate-950 text-white pt-16 pb-24 px-6 rounded-b-[40px] relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl font-black shadow-2xl">
            {user.ism[0]}{user.familiya[0]}
          </div>
          
          <div className="text-center md:text-left">
            {isEditing ? (
              <div className="flex flex-col gap-2 mt-2">
                <input 
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white outline-none focus:border-blue-500"
                  value={user.ism}
                  onChange={(e) => setUser({...user, ism: e.target.value})}
                />
                <input 
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white outline-none focus:border-blue-500"
                  value={user.familiya}
                  onChange={(e) => setUser({...user, familiya: e.target.value})}
                />
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold tracking-tight">{user.ism} {user.familiya}</h1>
                <p className="text-gray-400 text-sm">{user.tel}</p>
              </>
            )}
          </div>

          <div className="md:ml-auto flex gap-3">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="p-3 bg-green-500 rounded-2xl hover:bg-green-600 transition-all">
                  <Save className="w-5 h-5" />
                </button>
                <button onClick={() => setIsEditing(false)} className="p-3 bg-white/10 rounded-2xl hover:bg-white/20">
                  <X className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="p-3 bg-white/10 rounded-2xl hover:bg-blue-600 transition-all">
                  <Settings className="w-5 h-5" />
                </button>
                <button onClick={handleLogout} className="p-3 bg-white/10 rounded-2xl hover:bg-red-500 transition-all text-red-400 hover:text-white">
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-12">
         {/* Mening Navbatlarim qismi avvalgi kod bilan bir xil qoladi */}
         <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-blue-600" /> Mening Navbatlarim
            </h2>
            <div className="py-10 text-center text-gray-400 text-sm border-2 border-dashed rounded-3xl">
                Hozircha faol navbatlar yo'q
            </div>
         </div>
      </main>
    </div>
  );
}