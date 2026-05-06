'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingSupport() {
  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[100]">
      <motion.button 
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#007bff] hover:bg-blue-600 text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl shadow-blue-500/40 transition-all group"
      >
        <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
        <span className="font-black text-sm uppercase tracking-widest hidden md:inline">Hỗ trợ trực tuyến</span>
      </motion.button>
    </div>
  );
}
