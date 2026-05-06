'use client';

import { motion } from 'motion/react';
import { ShieldCheck, PhoneCall, Bot, Layers, Share2, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeClient() {
  const highlights = [
    { icon: Share2, title: 'API', desc: 'Hỗ trợ kết nối API, chia sẻ dữ liệu với bên thứ 3 như: CRM, Click to Call, tải tệp tin ghi âm...' },
    { icon: PhoneCall, title: 'GỌI TỰ ĐỘNG', desc: 'Quản lý và cài đặt gọi tự động theo thời gian. Không giới hạn chiến dịch gọi tự động.' },
    { icon: Bot, title: 'VOICE BOT', desc: 'Thay phím bấm bằng giọng nói. Đối đáp tự động hai chiều, không mất thêm bất kỳ khoản phí nào.' },
    { icon: Layers, title: 'IVR ĐA LỚP', desc: 'Thoải mái sáng tạo kịch bản quay số theo nhu cầu sử dụng, kết hợp voicebot. Hỗ trợ cá nhân hóa cuộc gọi.' },
    { icon: ShieldCheck, title: 'ĐỊNH TUYẾN CUỘC GỌI', desc: 'Cài đặt tự động định tuyến các cuộc gọi ra theo từng nhà mạng để tiết kiệm cước phí điện thoại.' },
    { icon: Users, title: 'MÁY NHÁNH', desc: 'Không giới hạn số lượng máy nhánh, hỗ trợ chuyển tiếp ra di động khi máy nhánh offline hoặc hết giờ làm việc.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4477b2] via-[#5698b6] to-[#68b9ba] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tổng Đài Đám Mây <br /> ZetAdmin PBX
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed font-light">
              Trả Tiền Linh Hoạt Theo Tháng, Hỗ Trợ Miễn Phí <br />
              Tích Hợp Sẵn Nhiều Tính Năng
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-white text-[#4477b2] px-10 py-3 rounded font-bold uppercase transition hover:bg-gray-100 shadow-lg text-sm">
                Đăng Ký
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white px-10 py-3 rounded font-bold uppercase transition hover:bg-white hover:text-[#4477b2] text-sm">
                Bảng Giá
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />
              <Image 
                src="https://lh3.googleusercontent.com/aida/ADBb0uicEjPAyEx7VMh2kLQQrdX725xQQJzAtnZE-39N9mYVMIF3C7Vo8tGSJfwigMJb9vyPcHeCj_S44yO59VzZvPYHIMcqDoP7lmuwsTcRzTRKvnSVpnpfxxNdj61V7L-YBV6IRUiCkrfPS0gHZZN6kxiEwRBR4XO3EDFU_QzgITwckkErnn3c3Y_obF-J8X5Z9d0EKJMSYxFJT6y7EhY5wXA-HWbnVJQgH22Spczyaln6MsO55p4yvQIDr2FQU8hVklujNFM40l03" 
                alt="ZetAdmin Dashboard" 
                width={800}
                height={500}
                priority
                className="rounded-lg shadow-2xl w-full h-auto border border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 uppercase tracking-wide">Tính năng nổi bật</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-gray-600 leading-relaxed">
              Phần mềm được chúng tôi tích hợp sẵn nhiều tính năng mà các tổng đài khác không có sẵn. 
              Chúng tôi dễ dàng tùy biến, phát triển thêm tính năng theo yêu cầu của khách hàng, trong một thời gian ngắn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    <item.icon size={48} strokeWidth={1.5} className="text-slate-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/features" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all uppercase text-sm border-b-2 border-blue-600 pb-1">
              Xem tất cả tính năng <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
