import React, { useState } from 'react';
import Patricia from './Patricia';
import Aliyah from './Aliyah';
// Nanti buat file Gita.js ya!

function App() {
  const [view, setView] = useState('home');

  const Home = () => (
    <div className="min-h-screen bg-pink-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Kelompok */}
        <div className="text-center mb-16">
          <div className="bg-pink-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-3xl">🤖</span>
          </div>
          <h1 className="text-5xl font-black text-pink-600 mb-2">KELOMPOK ROBLOX</h1>
          <p className="text-gray-500 font-medium italic">"Vokasi UB - Building Up Noble Future"</p>
        </div>

        {/* Grid Kartu Anggota */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Kartu 1: Ayu Patricia */}
          <div onClick={() => setView('patricia')} className="cursor-pointer group bg-white rounded-[40px] shadow-xl overflow-hidden hover:scale-105 transition-all border-b-8 border-pink-300">
            <div className="h-32 bg-pink-200 flex items-end justify-center pb-4">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-bold text-pink-400">AP</span>
              </div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800">Ayu Patricia</h3>
              <p className="text-pink-400 text-sm mb-4">Mahasiswa 1</p>
              <button className="bg-pink-100 text-pink-600 px-6 py-2 rounded-2xl font-bold text-xs uppercase tracking-widest group-hover:bg-pink-500 group-hover:text-white transition-colors">
                Lihat Profil
              </button>
            </div>
          </div>

          {/* Kartu 2: Aliyah Putri */}
          <div onClick={() => setView('aliyah')} className="cursor-pointer group bg-white rounded-[40px] shadow-xl overflow-hidden hover:scale-105 transition-all border-b-8 border-indigo-300">
            <div className="h-32 bg-indigo-100 flex items-end justify-center pb-4">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-bold text-indigo-400">AP</span>
              </div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800">Aliyah Putri</h3>
              <p className="text-indigo-400 text-sm mb-4">Mahasiswa 2</p>
              <button className="bg-indigo-100 text-indigo-600 px-6 py-2 rounded-2xl font-bold text-xs uppercase tracking-widest group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                Lihat Profil
              </button>
            </div>
          </div>

          {/* Kartu 3: Gita Naura */}
          <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border-b-8 border-pink-200 opacity-80">
            <div className="h-32 bg-pink-100 flex items-end justify-center pb-4">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-pink-300">GN</span>
              </div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gita Naura</h3>
              <p className="text-pink-300 text-sm mb-4">Mahasiswa 3</p>
              <span className="text-gray-400 text-xs italic">Coming Soon</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <>
      {view === 'home' && <Home />}
      {view === 'patricia' && <Patricia onBack={() => setView('home')} />}
      {view === 'aliyah' && <Aliyah onBack={() => setView('home')} />}
    </>
  );
}

export default App;