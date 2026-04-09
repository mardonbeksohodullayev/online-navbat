"use client"
import { useParams } from 'next/navigation';
import { Users, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';


export default function MuassasaSahifasi() {
  const params = useParams();
  const id = params.id; // ID ni aniq olish
  

  // 1. MA'LUMOTLAR - ID'larni har doim STRING ko'rinishida yozing
  const muassasaMalumotlari = {
    "1": { nomi: "Xalq Banki", navbat: 6, turi: "BANK", ishVaqti: "09:00 - 18:00" },
    "2": { nomi: "Sog'lom Hayot Klinikasi", navbat: 6, turi: "TIBBIYOT", ishVaqti: "08:00 - 20:00" },
    "3": { nomi: "Davlat Xizmatlari", navbat: 6, turi: "DXX", ishVaqti: "09:00 - 18:00" }
  };

  // Tanlangan muassasani topish (ID bo'yicha)
  const joriyMuassasa = muassasaMalumotlari[id] || muassasaMalumotlari["1"];

  // 2. NAVBATDAGILARNI GENERATSIYA QILISH
  const generatsiyaNavbat = (soni) => {
    const ismlar = ["Asadbek R.", "Malika S.", "Jamshid T.", "Dilnoza A.", "Otabek M.", "Sardor B."];
    let list = [];
    
    // Xatolikni oldini olish: soni kamida 1 bo'lsin yoki bo'sh qaytsin
    const korsatishSoni = soni > 0 ? Math.min(soni, 6) : 0;
    
    for (let i = 0; i < korsatishSoni; i++) {
      list.push({
        ism: ismlar[i % ismlar.length],
        // joriyMuassasa.turi[0] xatoga olib kelishi mumkin agar turi bo'sh bo'lsa
        raqam: `${joriyMuassasa.turi ? joriyMuassasa.turi[0] : 'N'}-${100 + i}`,
        holat: "KUTMOQDA"
      });
    }
    return list;
  };

  const navbatdagilar = generatsiyaNavbat(joriyMuassasa.navbat);

  return (
    <main className="max-w-4xl mx-auto p-6 pb-24 bg-white min-h-screen">
      {/* Orqaga qaytish */}
      <Link href="/" className="flex items-center gap-2 text-gray-400 mb-8 hover:text-blue-600 transition-all font-medium">
        <ArrowLeft size={20} /> Orqaga qaytish
      </Link>

      {/* HEADER QISMI */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">
              {joriyMuassasa.turi}
            </span>
            <div className="flex items-center gap-1 text-green-500 text-[10px] font-bold uppercase">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Ochiq
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight leading-tight">
            {joriyMuassasa.nomi}
          </h1>
          <p className="text-gray-400 flex items-center gap-2 font-medium">
            <Clock size={18} /> {joriyMuassasa.ishVaqti} gacha ochiq
          </p>
        </div>
        
        <div className="bg-blue-600 text-white px-10 py-6 rounded-[32px] shadow-2xl shadow-blue-200 flex flex-col items-center min-w-[180px]">
          <span className="text-[10px] font-bold uppercase opacity-80 mb-1 tracking-[0.2em]">Navbatdagilar</span>
          <span className="text-5xl font-black">{joriyMuassasa.navbat}</span>
        </div>
      </div>

      {/* ACTION CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex justify-between items-center">
          <div>
            <h4 className="font-bold text-xl text-gray-800 mb-1">Asosiy xizmatlar</h4>
            <p className="text-sm text-gray-400">O'rtacha kutilish: 10-15 min</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 shrink-0">
             <CheckCircle2 size={24} />
          </div>
        </div>

        <div className="p-1 bg-blue-600 rounded-[32px] relative overflow-hidden flex items-center justify-center min-h-[120px]">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-transparent opacity-20" />
             <div className="z-10 text-center">
                <p className="text-[10px] font-bold text-blue-100 uppercase mb-2 tracking-widest">Sizning holatingiz</p>
                <button className="bg-white/20 backdrop-blur-lg border border-white/30 text-white px-10 py-3 rounded-2xl font-black hover:bg-white hover:text-blue-600 transition-all shadow-xl active:scale-95">
                    Navbat olish
                </button>
             </div>
        </div>
      </div>

      {/* NAVBATDAGILAR RO'YXATI */}
      <div className="bg-gray-50/50 rounded-[40px] p-4 md:p-8 border border-gray-50">
        <h3 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-100">
            <Users size={24} />
          </div>
          Hozirgi navbatdagilar
        </h3>
        
        <div className="space-y-4">
          {navbatdagilar.length > 0 ? (
            navbatdagilar.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-5 bg-white rounded-[24px] shadow-sm border border-gray-100 hover:scale-[1.01] transition-transform">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl text-blue-600 border border-gray-100">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-gray-800">{user.ism}</p>
                    <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{user.raqam}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 px-3 md:px-5 py-2 rounded-2xl shrink-0">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                   <span className="text-[9px] md:text-[10px] font-black text-orange-600 uppercase tracking-widest">
                    {user.holat}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400 font-medium">
              Hozircha navbatdagilar yo'q
            </div>
          )}
          
          {joriyMuassasa.navbat > 6 && (
            <p className="text-center text-gray-400 text-sm font-medium pt-4 italic">
              va yana {joriyMuassasa.navbat - 6} ta odam navbatda turibdi...
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

// "use client"
// import { useParams } from 'next/navigation';
// import { Users, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react';
// import Link from 'next/link';

// export default function MuassasaSahifasi() {
//   const { id } = useParams();

//   // 1. Ma'lumotlar ro'yxati (Bosh sahifadagi bilan bir xil ID ishlatilishi shart)
//   const muassasalar = [
//     { 
//       id: "1", 
//       nomi: "Xalq Banki", 
//       ishVaqti: "09:00 - 18:00", 
//       navbat: 14, 
//       turi: "Bank" 
//     },
//     { 
//       id: "2", 
//       nomi: "Sog'lom Hayot Klinikasi", 
//       ishVaqti: "08:00 - 20:00", 
//       navbat: 5, 
//       turi: "Tibbiyot" 
//     },
//     { 
//       id: "3", 
//       nomi: "Davlat Xizmatlari", 
//       ishVaqti: "09:00 - 18:00", 
//       navbat: 28, 
//       turi: "DXX" 
//     }
//   ];

//   // 2. ID bo'yicha kerakli muassasani topish
//   const muassasa = muassasalar.find(m => m.id === id) || muassasalar[0];

//   // 3. Navbatdagilar ro'yxati (Dinamik shakllantirish uchun)
//   const navbatdagilar = [
//     { ism: "Asadbek R.", raqam: `${muassasa.turi[0]}-024`, holat: "Kutmoqda" },
//     { ism: "Malika S.", raqam: `${muassasa.turi[0]}-025`, holat: "Kutmoqda" },
//     { ism: "Jamshid T.", raqam: `${muassasa.turi[0]}-026`, holat: "Kutmoqda" },
//   ];

//   return (
//     <main className="max-w-4xl mx-auto p-6 pb-24">
//       {/* Orqaga qaytish */}
//       <Link href="/" className="flex items-center gap-2 text-gray-500 mb-8 hover:text-blue-600 transition-all font-medium">
//         <ArrowLeft size={20} /> Orqaga qaytish
//       </Link>

//       <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-8">
//         {/* Sarlavha va Asosiy ma'lumot */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
//           <div>
//             <div className="flex items-center gap-2 mb-3">
//                <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider">
//                  {muassasa.turi}
//                </span>
//                <div className="flex items-center gap-1 text-green-500 text-[10px] font-bold uppercase">
//                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//                  Ochiq
//                </div>
//             </div>
//             <h1 className="text-4xl font-black text-gray-900 mb-2">{muassasa.nomi}</h1>
//             <p className="text-gray-400 flex items-center gap-2 font-medium">
//               <Clock size={16} /> {muassasa.ishVaqti} gacha ochiq
//             </p>
//           </div>
          
//           <div className="bg-blue-600 text-white px-8 py-5 rounded-[24px] shadow-lg shadow-blue-100 flex flex-col items-center min-w-[160px]">
//             <span className="text-[10px] font-bold uppercase opacity-80 mb-1 tracking-widest">Navbatdagilar</span>
//             <span className="text-4xl font-black">{muassasa.navbat}</span>
//           </div>
//         </div>

//         {/* Xizmatlar oynasi */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//           <div className="p-5 bg-gray-50 rounded-[24px] border border-gray-100 flex justify-between items-center group hover:border-blue-200 transition-all cursor-pointer">
//             <div>
//               <h4 className="font-bold text-gray-800 mb-1">Asosiy xizmatlar</h4>
//               <p className="text-xs text-gray-400 italic">O'rtacha kutilish: 10-15 min</p>
//             </div>
//             <button className="bg-white p-2 rounded-xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
//                <CheckCircle2 size={20} />
//             </button>
//           </div>

//           <div className="p-5 bg-blue-600 rounded-[24px] text-white flex flex-col justify-center items-center gap-2">
//             <p className="text-[10px] font-bold uppercase opacity-80">Sizning holatingiz</p>
//             <button className="text-sm font-black bg-white/20 px-6 py-2 rounded-xl backdrop-blur-md">
//               Navbat olish
//             </button>
//           </div>
//         </div>

//         {/* Navbatdagilar ro'yxati */}
//         <div className="bg-gray-50/50 rounded-[28px] p-6">
//           <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-3">
//             <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
//               <Users size={20} />
//             </div>
//             Hozirgi navbatdagilar
//           </h3>
//           <div className="space-y-4">
//             {navbatdagilar.map((user, index) => (
//               <div key={index} className="flex items-center justify-between p-4 bg-white rounded-[20px] shadow-sm border border-gray-50">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-blue-600 border border-gray-100">
//                     {index + 1}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-800">{user.ism}</p>
//                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{user.raqam}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl">
//                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
//                    <span className="text-[10px] font-black text-orange-600 uppercase">
//                     {user.holat}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }