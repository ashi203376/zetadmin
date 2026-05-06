'use client';

import { Mail, Phone, Smartphone, MapPin, RotateCcw, Send } from 'lucide-react';

const FacebookIcon = ({ size = 24, fill = "currentColor" }: { size?: number, fill?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ContactClient() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement logic
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest mb-10 pl-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
        <span>/</span>
        <span className="text-gray-600 font-bold">Thông tin liên hệ</span>
      </div>

      <div className="bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-gray-100 mb-20 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          {/* Contact Form */}
          <section className="space-y-10">
            <div>
              <h1 className="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-4">Liên lạc với chúng tôi</h1>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Vui lòng điền đầy đủ các thông tin cần thiết. Chúng tôi sẽ liên lạc với bạn sớm nhất ngay khi có thể.</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {[
                { label: 'Họ và Tên', placeholder: 'Nhập họ và tên...', type: 'text' },
                { label: 'Số điện thoại', placeholder: 'Nhập số điện thoại...', type: 'tel' },
                { label: 'E-mail', placeholder: 'Nhập địa chỉ email...', type: 'email' },
              ].map((field, i) => (
                <div key={i} className="relative group">
                  <label className="absolute -top-2 right-4 bg-white px-2 text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 group-focus-within:text-blue-600 transition-colors">
                    {field.label}
                  </label>
                  <input 
                    type={field.type} 
                    placeholder={field.placeholder}
                    className="w-full border-2 border-gray-100 rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors bg-gray-50/30 focus:bg-white"
                  />
                </div>
              ))}

              <div className="relative group">
                <label className="absolute -top-2 right-4 bg-white px-2 text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 group-focus-within:text-blue-600 transition-colors">
                  Nội dung liên hệ
                </label>
                <textarea 
                  rows={6}
                  placeholder="Để lại tin nhắn cho chúng tôi..."
                  className="w-full border-2 border-gray-100 rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors bg-gray-50/30 focus:bg-white resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button type="reset" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-100 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors uppercase tracking-widest">
                  <RotateCcw size={16} /> Nhập lại
                </button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="inline-flex items-center gap-2 px-12 py-3 bg-blue-600 text-white rounded-xl text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  <Send size={16} /> Gửi yêu cầu
                </motion.button>
              </div>
            </form>
          </section>

          {/* Company Info */}
          <section className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100 space-y-12">
            <div>
              <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-8">CÔNG TY TNHH ZA PBX</h2>
              <div className="w-16 h-1 bg-blue-600 mb-10" />
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5 group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-300 uppercase mb-1">Email</div>
                    <a href="mailto:info@zapbx.com" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">info@zapbx.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-5 group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-300 uppercase mb-1">Hotline</div>
                    <span className="text-sm font-bold text-gray-600">02871233389</span>
                  </div>
                </li>
                <li className="flex items-start gap-5 group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-300 uppercase mb-1">Mobile</div>
                    <span className="text-sm font-bold text-gray-600">0982 981 193</span>
                  </div>
                </li>
                <li className="flex items-start gap-5 group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-300 uppercase mb-1">Địa chỉ</div>
                    <span className="text-sm font-bold text-gray-600 leading-relaxed">
                      Tầng 1, Tòa Nhà HSC BUILDING, <br />
                      Số 162B Điện Biên Phủ, P.Xuân Hòa, <br />
                      TP.Hồ Chí Minh, VN
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-10 border-t border-gray-200">
              <div className="flex gap-6 justify-center">
                <a href="#" className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm text-blue-800 hover:scale-110 transition-all">
                  <FacebookIcon size={24} fill="currentColor" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm text-red-500 font-black text-xl hover:scale-110 transition-all italic">
                  G+
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
