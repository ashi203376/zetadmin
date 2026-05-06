'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, User, Check } from 'lucide-react';

export default function AboutClient() {
  const [activeLoc, setActiveLoc] = useState('HCM');
  
  const locations = [
    { id: 'HN', name: 'Ha Noi', country: 'Vietnam', flag: '🇻🇳' },
    { id: 'HCM', name: 'Ho Chi Minh', country: 'Vietnam', flag: '🇻🇳' },
    { id: 'SG', name: 'Singapore', country: 'Singapore', flag: '🇸🇬' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 bg-gray-50">
      <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 mb-10 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-600 tracking-tight">Giới thiệu</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 mb-10 overflow-hidden">
        <div className="text-sm md:text-base leading-relaxed text-gray-600 space-y-6 mb-12 max-w-5xl">
          <p>ZetAdmin Cloud PBX là một nền tảng tổng đài ảo được phát triển tại Việt Nam, hoàn toàn thuần việt từ tài liệu đến giao diện sử dụng tiếng việt, tiếng anh và nhiều ngôn ngữ khác. Tổng đài ảo ZetAdmin được phát triển để đáp ứng nhiều nhu cầu sử dụng tổng đài hiện tại hoặc trong tương lai của mọi cá nhân và doanh nghiệp. Nền tảng tự chủ hoàn toàn hệ thống phần mềm, bởi chúng tôi tự phát triển.</p>
          <p>Nền tảng được thiết kế để có thể cung cấp dịch vụ VOIP toàn cầu.</p>
        </div>

        <div className="flex flex-wrap justify-between items-center bg-gray-50 rounded-xl px-6 py-4 mb-12 border border-gray-100">
          <div className="flex items-center gap-4">
             <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
               <Bell size={20} />
             </button>
             <div className="h-6 w-[1px] bg-gray-200" />
             <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-tighter">
                <span>VND (₫) - Vietnamese dong</span>
                <span className="opacity-50">|</span>
                <span className="flex items-center gap-1">🇻🇳 Tiếng việt</span>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User size={20} />
            </div>
          </div>
        </div>

        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <h2 className="text-4xl font-light text-gray-400">Tạo tổng đài</h2>
            <div className="text-right">
              <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Số dư:</div>
              <div className="text-3xl font-black text-gray-400 font-mono">₫0.00</div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-teal-500 uppercase mb-6 tracking-[0.2em]">Vị trí đặt tổng đài</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <motion.div 
                  key={loc.id}
                  onClick={() => setActiveLoc(loc.id)}
                  whileHover={{ y: -2 }}
                  className={`relative border-2 rounded-xl p-5 flex justify-between items-start cursor-pointer transition-all ${
                    activeLoc === loc.id ? 'border-teal-500 bg-teal-50 shadow-md' : 'border-gray-100 hover:border-gray-200 bg-white'
                  }`}
                >
                  {activeLoc === loc.id && (
                    <div className="absolute top-0 right-0 bg-teal-500 text-white p-1 rounded-bl-lg">
                      <Check size={12} strokeWidth={4} />
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{loc.flag}</span>
                    <span className="text-xs font-medium text-gray-500">{loc.country}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{loc.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black text-teal-500 uppercase tracking-[0.2em]">Cấu hình tổng đài</h3>
            <div className="grid gap-10">
              {[
                { label: 'Kịch bản quay số & IVR', val: '5 / 30' },
                { label: 'Tài khoản SIP (Máy nhánh)', val: '5 / 300' },
                { label: 'Chiến dịch (Gọi tự động)', val: '2 / 20' },
                { label: 'Lưu trữ ghi âm (GB)', val: '5 / 100' }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                    <span>{item.label}: <span className="text-gray-800 ml-1">{item.val}</span></span>
                    <span className="text-teal-600 font-mono">+đ0.00</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-blue-500 rounded-full w-1/4" />
                    <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-10">
            <div className="flex w-full lg:w-auto shadow-sm">
              <input className="border border-gray-200 rounded-l-lg px-5 py-3 text-sm w-full lg:w-56 focus:outline-none focus:ring-2 focus:ring-teal-500/20" placeholder="Tên miền tổng đài" type="text" />
              <span className="bg-gray-50 border border-l-0 border-gray-200 rounded-r-lg px-4 py-3 text-xs text-gray-400 font-bold flex items-center">.hcm.zapbx.cloud</span>
            </div>
            <div className="text-center lg:text-right">
              <span className="text-4xl font-extrabold text-teal-500 tracking-tighter">đ165,942.60</span>
              <span className="text-xs text-gray-400 block mt-1 font-medium italic">/ Tháng ~ (₫230.476 / Giờ)</span>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-14 py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-teal-600 shadow-xl shadow-teal-500/20 transition-all w-full lg:w-auto"
            >
              Triển khai ngay
            </motion.button>
          </div>
        </section>
      </div>

      <div className="space-y-8 mt-16 max-w-5xl mx-auto">
        <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest border-b-2 border-blue-600 inline-block pb-1 mb-4">Tính năng cơ bản:</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 italic">
          {[
            'API cho nhà phát triển.',
            'Ghi âm cuộc gọi, video call, meeting.',
            'Video Call & Meeting học thuật.',
            'Nhắn tin trên thiết bị VOIP.',
            'Tích hợp sẵn CRM doanh nghiệp.',
            'Cá nhân hóa các cuộc gọi.',
            'Gọi tự động theo chiến dịch.',
            'IVR đa lớp & Voice Bot.',
            'Text to Speech (TTS).',
            'Speech to Text (STT).',
            'IVR AI thế hệ mới.',
            'Hỗ trợ giải mã G.711, G.729A.'
          ].map((feat, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-bold text-blue-600">{i + 1}.</span> {feat}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 leading-relaxed pt-8 border-t border-gray-100">
          Nền tảng tổng đài ảo ZetAdmin dễ dàng quản lý, sử dụng và hỗ trợ kết nối với nhiều loại thiết bị GSM Gateway. Dễ dàng kết nối các đầu số SIP Trunk của tất cả các nhà mạng hoặc nhà cung cấp dịch vụ VOIP khác hiện nay.
        </p>
      </div>
    </div>
  );
}