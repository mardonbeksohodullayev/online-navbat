import { Home, CreditCard, User, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 text-blue-600 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-6xl  text-white mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Quick-line
        </Link>
        
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
          <Link href="/xizmatlar" className="hover:text-blue-600 transition-colors">Xizmatlar</Link>
          <Link href="/profil" className="hover:text-blue-600 transition-colors">Profil</Link>
        </div>

        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-medium hover:text-slate-950 hover:bg-gray-100 rounded-xl transition-all">
            Kirish
          </Link>
          <Link href="/register" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md shadow-blue-200 transition-all">
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </nav>
  );
}