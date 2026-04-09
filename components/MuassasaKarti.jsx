// import { MapPin, Clock, Users, Eye, Coffee, Calendar, Link } from 'lucide-react';

// export default function MuassasaKarti({id, nomi, navbat, turi, rasm, manzil, vaqt, ishVaqti, tushlik }) {
//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
//       {/* Rasm va Badge-lar */}
//       <div className="relative h-56 w-full">
//         <img 
//           src={rasm} 
//           alt={nomi} 
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
//         <div className="absolute top-4 left-4 flex gap-2">
//           <span className="bg-white/90 backdrop-blur-md text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-sm uppercase">
//             {turi}
//           </span>
//         </div>

//         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
//           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//           <span className="text-xs font-bold text-gray-800">Hozir ochiq</span>
//         </div>
//       </div>

//       {/* Kontent */}
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-3">
//           <h3 className="text-2xl font-bold text-gray-900 leading-tight">{nomi}</h3>
//           <div className="flex flex-col items-end">
//              <span className="text-sm font-black text-blue-600">{navbat}</span>
//              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Navbat</span>
//           </div>
//         </div>
        
//         <div className="space-y-3 mb-6">
//           <div className="flex items-center gap-3 text-gray-500">
//             <div className="p-2 bg-gray-50 rounded-lg"><MapPin size={16} className="text-blue-500" /></div>
//             <span className="text-sm font-medium">{manzil}</span>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center gap-3 text-gray-500">
//               <div className="p-2 bg-gray-50 rounded-lg"><Calendar size={16} className="text-indigo-500" /></div>
//               <span className="text-xs font-semibold">{ishVaqti}</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-500">
//               <div className="p-2 bg-gray-50 rounded-lg"><Coffee size={16} className="text-orange-500" /></div>
//               <span className="text-xs font-semibold">Tushlik: {tushlik}</span>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-between pt-5 border-t border-gray-100">
//           <div className="flex flex-col">
//             <span className="text-[10px] text-gray-400 font-bold uppercase">Kutilish vaqti</span>
//             <div className="flex items-center gap-1">
//               <Clock size={14} className="text-orange-500" />
//               <span className="text-sm font-bold text-gray-700">~{vaqt} min/kishi</span>
//             </div>
//           </div>
          
//             {/* Navbat olish o'rniga Ko'rish tugmasi */}
//           <Link href={`/muassasa/${id}`} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all">
//             Ko'rish
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import { MapPin, Clock, Users, ChevronRight, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function MuassasaKarti({ id, nomi, navbat, turi, rasm, manzil, vaqt, ishVaqti, tushlik }) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Rasm qismi */}
      <div className="relative h-52 w-full overflow-hidden">
        <img 
          src={rasm} 
          alt={nomi} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase shadow-sm">
          {turi}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1.5 rounded-xl flex items-center gap-1 shadow-sm">
          <Users size={14} className="text-blue-600" />
          <span className="text-xs font-black text-gray-800">{navbat}</span>
        </div>
      </div>

      {/* Kontent qismi */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">{nomi}</h3>
        
        <div className="flex items-center gap-1.5 text-gray-400 mb-6">
          <MapPin size={14} className="shrink-0" />
          <span className="text-xs truncate font-medium">{manzil}</span>
        </div>

        {/* ISH VAQTI VA TUSHLIK - TARTIBLANGAN BLOKLAR */}
        <div className="flex gap-3 mb-4">
          {/* Ish Vaqti */}
          <div className="flex-1 flex items-center gap-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100/50 min-h-[58px]">
            <div className="p-2 bg-white rounded-xl shadow-sm shrink-0">
              <Clock size={16} className="text-blue-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400 font-bold uppercase leading-none mb-1">Ish vaqti</span>
              <span className="text-[11px] font-bold text-gray-700 whitespace-nowrap">{ishVaqti}</span>
            </div>
          </div>
          
          {/* Tushlik */}
          <div className="flex-1 flex items-center gap-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100/50 min-h-[58px]">
            <div className="p-2 bg-white rounded-xl shadow-sm shrink-0">
              <Coffee size={16} className="text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400 font-bold uppercase leading-none mb-1">Tushlik</span>
              <span className="text-[11px] font-bold text-gray-700 whitespace-nowrap">{tushlik}</span>
            </div>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="mt-0  flex items-center justify-between  border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-0.5">Kutilish</span>
            <div className="flex items-center gap-1">
              <span className="text-lg font-black text-gray-800">~{vaqt}</span>
              <span className="text-xs font-bold text-gray-500">min</span>
            </div>
          </div>
          
          <Link href={`/muassasa/${id}`} className="bg-blue-600 text-white pl-6 pr-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 shadow-md shadow-blue-100">
            Ko'rish
            <div className="bg-white/20 p-1 rounded-lg">
              <ChevronRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}