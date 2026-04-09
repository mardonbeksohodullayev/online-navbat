"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Bu yerda login mantiqi bo'ladi (Backend bo'lsa api chaqiriladi)
    // Hozircha simulyatsiya qilamiz:
    setTimeout(() => {
      toast.success('Tizimga muvaffaqiyatli kirdingiz!', {
        duration: 3000,
        position: 'top-center',
        style: {
          borderRadius: '12px',
          background: '#333',
          color: '#fff',
        },
      });

      // 1.5 soniyadan keyin bosh sahifaga o'tkazish
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <Toaster /> {/* Xabarnoma oynasi */}
      
      <div className="w-full max-w-md bg-white p-8 rounded-[32px] shadow-xl border border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 mb-2">Xush kelibsiz!</h2>
        <p className="text-gray-500 mb-8 font-medium">Tizimga kirish uchun ma'lumotlarni kiriting.</p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
            <input 
              required
              type="email" 
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all border-transparent focus:border-indigo-400" 
              placeholder="misol@mail.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Parol</label>
            <input 
              required
              type="password" 
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all border-transparent focus:border-indigo-400" 
              placeholder="••••••••" 
            />
          </div>
          
          <button 
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Yuklanmoqda..." : "Tizimga kirish"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 font-medium">
          Hisobingiz yo'qmi? <Link href="/register" className="text-indigo-600 font-black hover:underline">Ro'yxatdan o'ting</Link>
        </p>
      </div>
    </div>
  );
}