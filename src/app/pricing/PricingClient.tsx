'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export default function PricingClient() {
  const [config, setConfig] = useState({
    ivr: 5,
    sip: 6,
    campaign: 2,
    storage: 5
  });

  const basePrice = 1320000;
  
  const handleSliderChange = (key: keyof typeof config, value: number) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 min-h-screen bg-gray-50">
      {/* Title Banner */}
      <div className="bg-gray-100 rounded-lg p-8 mb-10 text-center border-t-4 border-blue-600 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-500 uppercase tracking-widest">Bảng giá</h1>
      </div>

      {/* Description Text */}
      <div className="max-w-5xl mx-auto space-y-4 text-sm text-gray-600 leading-relaxed mb-12">
        <p>Hệ thống đảm bảo hoạt động ổn định 99.99%, có nhiều hệ thống dự phòng và cân bằng tải. Dễ dàng tăng hoặc giảm cấu hình tổng đài tức thời. Đáp ứng mọi nhu cầu sử dụng tổng đài của cá nhân và doanh nghiệp. Tương thích kết nối với nhiều nhà cung cấp đầu số SIP Trunk hoặc các thiết bị GSM Gateway.</p>
        <p>Các tính năng cơ bản như: Hàng đợi thông minh (smart queue), IVR đa lớp, gọi tự động, điều hướng cuộc gọi ra theo từng nhà mạng để tiết kiệm cước thoại, Voice Bot, chuyển giọng nói thành văn bản, ghi âm, cá nhân hóa cuộc gọi, thống kê và giám sát dữ liệu đầy đủ, hỗ trợ API đồng bộ lịch sử cuộc gọi, tải xuống file ghi âm... Dùng bao nhiêu trả tiền bấy nhiêu, tiết kiệm chi phí và thời gian cho hệ thống tổng đài của doanh nghiệp.</p>
        <p className="font-semibold text-gray-800">Đây là bảng giá cho thuê tổng đài ảo của chúng tôi.</p>
      </div>

      {/* Pricing Calculator Section */}
      <section className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-xl shadow-xl p-8 md:p-12 mb-10">
        <div className="grid gap-10 mb-10">
          {/* Sliders */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-gray-700">Kịch bản & IVR: <span className="text-blue-600 ml-1">{config.ivr} / 30</span></span>
                <span className="text-teal-600 text-xs font-mono">+₫0.00</span>
              </div>
              <input 
                type="range" min="0" max="30" value={config.ivr} 
                onChange={(e) => handleSliderChange('ivr', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-gray-700">Tài khoản SIP (Máy nhánh): <span className="text-blue-600 ml-1">{config.sip} / 300</span></span>
                <span className="text-teal-600 text-xs font-mono">+₫0.00</span>
              </div>
              <input 
                type="range" min="0" max="300" value={config.sip} 
                onChange={(e) => handleSliderChange('sip', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-gray-700">Chiến dịch (Gọi tự động): <span className="text-blue-600 ml-1">{config.campaign} / 20</span></span>
                <span className="text-teal-600 text-xs font-mono">+₫0.00</span>
              </div>
              <input 
                type="range" min="0" max="20" value={config.campaign} 
                onChange={(e) => handleSliderChange('campaign', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-gray-700">Lưu trữ ghi âm (GB): <span className="text-blue-600 ml-1">{config.storage} / 999</span></span>
                <span className="text-teal-600 text-xs font-mono">+₫0.00</span>
              </div>
              <input 
                type="range" min="0" max="999" value={config.storage} 
                onChange={(e) => handleSliderChange('storage', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-10 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2">
            <span className="text-4xl md:text-5xl font-black text-teal-600">₫{basePrice.toLocaleString()}</span>
            <span className="text-sm text-gray-400 font-medium italic">/ Tháng ~ ( ₫1,833.333 / Giờ)</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded-lg shadow-lg uppercase transition-all"
          >
            Đăng ký ngay
          </motion.button>
        </div>

        {/* Notes Box */}
        <div className="mt-12 border-t border-gray-100 pt-10">
          <div className="bg-gray-50 rounded-xl p-6 relative ring-1 ring-gray-200">
            <span className="absolute -top-3 left-6 bg-white px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest ring-1 ring-gray-100">Ghi chú</span>
            <div className="text-xs text-gray-600 space-y-4">
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> Tổng đài đám mây hỗ trợ tất cả các tính năng có sẵn, không phân biệt cấu hình hay tài khoản</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full" /> Số cuộc gọi đồng thời: <span className="text-red-600 font-bold ml-1">12</span></p>
              <div className="pt-2">
                <p className="font-bold text-gray-800 mb-3 underline decoration-blue-200 underline-offset-4">Đơn giá cộng thêm khi mở rộng cấu hình tổng đài:</p>
                <div className="grid md:grid-cols-2 gap-4 ml-4">
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                    <span className="text-gray-500">• Kịch bản</span>
                    <span className="font-mono text-gray-700">+ ₫50,000 / Kịch bản</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                    <span className="text-gray-500">• Tài khoản SIP</span>
                    <span className="font-mono text-gray-700">+ ₫220,000 / Máy nhánh</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                    <span className="text-gray-500">• Gọi tự động</span>
                    <span className="font-mono text-gray-700">+ ₫6,250,000 / Chiến dịch</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                    <span className="text-gray-500">• Lưu trữ</span>
                    <span className="font-mono text-gray-700">+ ₫7,500 / GB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
