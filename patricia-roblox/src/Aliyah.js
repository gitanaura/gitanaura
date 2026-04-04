import React from 'react';

const Aliyah = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-indigo-50 p-4 md:p-10 font-sans text-center">
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-[60px] shadow-2xl overflow-hidden border-4 border-indigo-100">

                <button onClick={onBack} className="absolute m-8 bg-indigo-600 text-white w-12 h-12 rounded-2xl shadow-xl hover:rotate-90 transition-all z-10 flex items-center justify-center text-2xl">
                    ✕
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Latar Belakang & Foto Profile */}
                    <div className="lg:w-1/3 bg-indigo-600 p-12 text-white flex flex-col items-center">
                        <div className="w-48 h-48 bg-white rounded-full shadow-2xl mb-8 flex items-center justify-center border-8 border-indigo-400/50 overflow-hidden">
                            <span className="text-indigo-400 text-7xl">👩🏻‍💻</span>
                        </div>

                        <h2 className="text-3xl font-black mb-2">Aliyah Putri</h2>
                        <p className="bg-indigo-400 px-4 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest mb-10">UI/UX Designer</p>

                        <div className="w-full space-y-4">
                            <div className="bg-indigo-700/50 p-4 rounded-3xl border border-indigo-400/30 text-left">
                                <p className="text-[10px] font-black text-indigo-300 uppercase mb-2">Email Official</p>
                                <p className="text-xs font-bold break-all">aliyahlika1107@student.ub.ac.id</p>
                            </div>
                            <div className="bg-indigo-700/50 p-4 rounded-3xl border border-indigo-400/30 text-left">
                                <p className="text-[10px] font-black text-indigo-300 uppercase mb-2">Social Media</p>
                                <p className="text-xs font-bold">@aliyahlika_</p>
                            </div>
                        </div>
                    </div>

                    {/* Konten Utama */}
                    <div className="lg:w-2/3 p-12 text-left">
                        <div className="mb-10">
                            <h3 className="text-4xl font-black text-indigo-900 mb-4 inline-block relative">
                                Cerita Saya
                                <span className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-200 -z-10 rounded-full"></span>
                            </h3>
                        </div>

                        <div className="text-indigo-800/80 leading-relaxed text-lg font-medium space-y-6">
                            <p>
                                Halo semuanya! Saya Aliyah Putri, bagian dari tim Kelompok Roblox. Sebagai mahasiswa
                                Vokasi Universitas Brawijaya tahun 2026, saya sangat antusias dengan dunia desain digital.
                                Dalam project ini, saya fokus pada bagaimana membuat antarmuka yang bersih dan nyaman dipandang.
                            </p>
                            <p>
                                Bekerja dengan tema warna indigo dan desain yang lebih "boxy" namun tetap elegan adalah
                                pilihan saya untuk menunjukkan sisi profesionalisme dibalik keceriaan tim kami.
                                Meskipun kami masih dalam tahap belajar, saya percaya kolaborasi kami akan membuahkan
                                hasil yang luar biasa untuk tugas Teknologi Informasi ini!
                            </p>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <div className="flex-1 bg-white p-6 rounded-[35px] border-2 border-indigo-50 shadow-sm">
                                <span className="text-3xl block mb-2">🏔️</span>
                                <p className="text-[10px] font-black text-indigo-300 uppercase">Hobi</p>
                                <p className="text-sm font-bold text-indigo-900">Mendaki</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-[35px] border-2 border-indigo-50 shadow-sm">
                                <span className="text-3xl block mb-2">🎨</span>
                                <p className="text-[10px] font-black text-indigo-300 uppercase">Skill</p>
                                <p className="text-sm font-bold text-indigo-900">Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aliyah;
