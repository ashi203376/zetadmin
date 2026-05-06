'use client';

import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function LoginClient() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement login logic
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative z-10"
      >
        <div className="text-center">
          <Link href="/" className="inline-block text-3xl font-black text-[#345a9a] tracking-tighter mb-2">
            ZET ADMIN
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-gray-800 uppercase tracking-tight">
            Đăng nhập hệ thống
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Vui lòng đăng nhập để tiếp tục quản lý tổng đài
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <Mail size={20} />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Địa chỉ Email"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={20} />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <div className="text-sm">
              <Link href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                Quên mật khẩu?
              </Link>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-widest rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-500/30 transition-all"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                <ArrowRight size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
              </span>
              Đăng nhập
            </motion.button>
          </div>
        </form>

        <div className="mt-6 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="font-bold text-blue-600 hover:text-blue-500 uppercase tracking-wider transition-colors">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
