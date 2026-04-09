"use client" // Bu hooklar ishlashi uchun shart
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Sahifadan sahifaga o'tish uchun

export default function RegisterPage() {
  const router = useRouter();

  // Formani yuborish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault(); // Sahifa yangilanib ketishini to'xtatadi

    // Bu yerda ma'lumotlarni saqlash yoki API-ga yuborish mantiqi bo'ladi
    console.log("Ro'yxatdan o'tildi");

    // Muvaffaqiyatli ro'yxatdan o'tgach, login sahifasiga yo'naltirish
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Ro'yxatdan o'tish</h2>
        <p className="text-gray-500 mb-8">Ma'lumotlaringizni kiriting.</p>

        {/* handleSubmit funksiyasini formaga ulaymiz */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">F.I.SH</label>
            <input 
              required 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="Aziz Rahimov" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              required 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="misol@mail.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parol yarating</label>
            <input 
              required 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="••••••••" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-[0.98]"
          >
            Hisob yaratish
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Hisobingiz bormi? <Link href="/login" className="text-indigo-600 font-bold">Tizimga kiring</Link>
        </p>
      </div>
    </div>
  );
}