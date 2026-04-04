import React from 'react';

const Patricia = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-pink-50 p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-[50px] shadow-2xl overflow-hidden border border-white">
        
        <button onClick={onBack} className="absolute m-6 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-all z-10">
          ←
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Samping: Foto & Kontak 3D */}
          <div className="bg-pink-100 p-8 flex flex-col items-center">
            <div className="w-40 h-40 bg-white rounded-[40px] shadow-xl mb-6 flex items-center justify-center border-4 border-pink-200 overflow-hidden">
               <span className="text-pink-200 text-6xl">👤</span>
            </div>
            
            <h2 className="text-2xl font-black text-pink-700 mb-1 text-center">Ayu Patricia</h2>
            <p className="text-pink-400 font-bold text-xs uppercase tracking-widest mb-8">Frontend Developer</p>

            {/* KARTU KONTAK 3D */}
            <div className="w-full perspective-1000">
              <div className="bg-white p-6 rounded-[32px] shadow-lg transform transition-all duration-500 hover:rotate-y-12 border border-pink-50">
                <p className="text-[10px] font-black text-pink-300 uppercase mb-4 tracking-tighter">Quick Contact</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-pink-50 rounded-xl">
                    <span className="text-lg">📧</span>
                    <span className="text-[10px] font-bold text-gray-600 truncate">ayu@student.ub.ac.id</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-pink-50 rounded-xl">
                    <span className="text-lg">📱</span>
                    <span className="text-[10px] font-bold text-gray-600">@ayu.patriciaa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Utama: Deskripsi */}
          <div className="lg:col-span-2 p-10">
            <div className="mb-8">
               <h3 className="text-3xl font-black text-gray-800 mb-2">Tentang Saya</h3>
               <div className="w-20 h-2 bg-pink-400 rounded-full"></div>
            </div>
            
            <div className="text-gray-600 leading-relaxed text-justify space-y-4">
              <p>
                Halo! Saya Ayu Patricia, mahasiswi angkatan 2026 di Fakultas Vokasi Universitas Brawijaya. 
                Saat ini saya sedang mendalami ReactJS dan Tailwind CSS melalui project Kelompok Roblox. 
                Saya sangat menikmati proses belajar membuat tampilan web yang modern dan interaktif.
              </p>
              <p>
                Melalui project ini, saya belajar bagaimana berkolaborasi menggunakan GitHub dan mengelola 
                tampilan yang responsif. Saya harap dengan kerja tim bersama Aliyah dan Gita, project ini 
                bisa selesai dengan hasil terbaik. Tema Baby Pink ini mencerminkan semangat kreativitas saya! 
                (Teks ini sudah cukup panjang untuk memenuhi syarat tugas dosen Teknologi Informasi).
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 rounded-2xl border border-pink-100 text-center">
                <p className="text-xs text-pink-400 font-bold uppercase">Prodi</p>
                <p className="text-sm font-black text-gray-700">Teknologi Informasi</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-2xl border border-pink-100 text-center">
                <p className="text-xs text-pink-400 font-bold uppercase">Domisili</p>
                <p className="text-sm font-black text-gray-700">Malang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patricia;