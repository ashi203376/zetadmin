'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Plus, Menu, X, Wallet } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TopUpModal from '@/components/ui/TopUpModal';

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/about', label: 'Giới thiệu' },
    { href: '/features', label: 'Tính năng' },
    { href: '/pricing', label: 'Bảng giá' },
    { href: '/contact', label: 'Liên hệ' },
  ];

  return (
    <header className="flex flex-col w-full z-[100] sticky top-0">
      {/* Top Utility Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-white border-b border-gray-100 py-1 sm:px-10 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span>đ VND - Vietnamese dong</span>
            <ChevronDown size={10} strokeWidth={3} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <span className="flex items-center gap-1">🇻🇳 Tiếng việt</span>
            <ChevronDown size={10} strokeWidth={3} />
          </div>
          <Link href="/login" className="hover:text-blue-600 transition-colors">Đăng nhập</Link>
          <Link href="/register" className="hover:text-blue-600 transition-colors">Đăng ký</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-50 py-4 sm:px-10 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-[#345a9a] py-1 tracking-tighter shrink-0">
            ZET ADMIN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-black uppercase tracking-[0.15em] transition-all relative pb-1 hover:text-blue-600 ${
                    isActive
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                      : 'text-gray-500'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                <span className="text-[10px] font-black text-blue-400 uppercase">Số dư:</span>
                <span className="text-sm font-bold text-blue-600 font-mono">₫0.00</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all"
              >
                Nạp tiền
              </button>
              <button className="bg-gray-50 p-2.5 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
                <Search size={18} strokeWidth={2.5} />
              </button>
            </div>
          </nav>

          {/* Mobile UI Group */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 mr-1">
               <span className="text-xs font-bold text-blue-600 font-mono">₫0.00</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white p-2 rounded-lg shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              <Plus size={20} strokeWidth={3} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ml-1"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 top-[72px] bg-slate-900/40 backdrop-blur-sm z-[30] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed inset-x-4 top-[84px] z-[40] bg-white lg:hidden rounded-3xl shadow-2xl border border-slate-100 flex flex-col p-6 space-y-8 overflow-y-auto max-h-[calc(100vh-120px)]"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-bold uppercase tracking-widest py-3 border-b border-gray-50 flex items-center justify-between group ${
                      pathname === link.href ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={18} className="-rotate-90 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </Link>
                ))}
              </nav>

              <div className="pt-6 flex flex-col gap-4">
                <Link 
                  href="/login" 
                  className="w-full py-4 text-center border-2 border-gray-100 rounded-2xl text-sm font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link 
                  href="/register" 
                  className="w-full py-4 text-center bg-blue-600 rounded-2xl text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  Đăng ký tài khoản
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <TopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
