'use client';

import { Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function RegisterClient() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement register logic
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-teal-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative z-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">
            Tạo tài khoản mới
          </h2>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Đăng ký để trải nghiệm toàn bộ tính năng tuyệt vời của tổng đài ZetAdmin PBX.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="relative group col-span-1 md:col-span-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                <User size={20} />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Họ và tên công ty/cá nhân"
              />
            </div>

            {/* Email */}
            <div className="relative group col-span-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                <Mail size={20} />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Địa chỉ Email"
              />
            </div>

            {/* Phone */}
            <div className="relative group col-span-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                <Phone size={20} />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Số điện thoại"
              />
            </div>
            
            {/* Password */}
            <div className="relative group col-span-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                <Lock size={20} />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Mật khẩu"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative group col-span-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                <Lock size={20} />
              </div>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
              />
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="text-gray-500 cursor-pointer">
                Tôi đồng ý với{' '}
                <Link href="#" className="font-semibold text-teal-600 hover:text-teal-500 underline transition-colors">
                  Điều khoản sử dụng
                </Link>
                {' '}và{' '}
                <Link href="#" className="font-semibold text-teal-600 hover:text-teal-500 underline transition-colors">
                  Chính sách bảo mật
                </Link>
                .
              </label>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-widest rounded-xl text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-lg shadow-teal-500/30 transition-all"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                <ArrowRight size={20} className="text-teal-200 group-hover:text-white transition-colors" />
              </span>
              Đăng ký tài khoản
            </motion.button>
          </div>
        </form>

        <div className="mt-6 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500">
            Đã có tài khoản?{' '}
            <Link href="/login" className="font-bold text-teal-600 hover:text-teal-500 uppercase tracking-wider transition-colors">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
