'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Landmark, Wallet, QrCode, Upload, CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface TopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'select' | 'details' | 'success';
type Method = 'bank' | 'wallet' | null;

export default function TopUpModal({ isOpen, onClose }: TopUpModalProps) {
  const [step, setStep] = useState<Step>('select');
  const [method, setMethod] = useState<Method>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleReset = () => {
    setStep('select');
    setMethod(null);
    setFile(null);
    setPreview(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 sm:p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-6 border-b border-slate-100 sticky top-0 bg-white z-10">
            <div>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Nạp tiền vào tài khoản</h3>
              <p className="text-xs text-slate-400 font-medium mt-1">Nạp tiền để duy trì và mở rộng tổng đài</p>
            </div>
            <button 
              onClick={handleReset}
              className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 sm:p-8 pb-12 sm:pb-10">
            {step === 'select' && (
              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Chọn phương thức thanh toán</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => { setMethod('bank'); setStep('details'); }}
                    className="flex flex-col items-center gap-4 p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-white transition-colors">
                      <Landmark size={32} className="text-slate-400 group-hover:text-blue-500" />
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-blue-700">Chuyển khoản Ngân hàng</span>
                  </button>
                  <button 
                    onClick={() => { setMethod('wallet'); setStep('details'); }}
                    className="flex flex-col items-center gap-4 p-8 border-2 border-slate-100 rounded-2xl hover:border-teal-500 hover:bg-teal-50 transition-all group"
                  >
                    <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-white transition-colors">
                      <Wallet size={32} className="text-slate-400 group-hover:text-teal-500" />
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-teal-700">Ví điện tử Crypto</span>
                  </button>
                </div>
              </div>
            )}

            {step === 'details' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                  <button onClick={() => setStep('select')} className="hover:text-blue-600">Phương thức</button>
                  <ChevronRight size={14} />
                  <span className="text-slate-800">Thanh toán & Xác nhận</span>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-8 items-center border border-slate-100">
                  {/* QR Mockup */}
                  <div className="w-40 h-40 bg-white p-2 rounded-xl border-2 border-slate-200 shadow-inner flex items-center justify-center relative group">
                    <QrCode size={100} className="text-slate-800" />
                    <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl p-2 text-[10px] text-center font-bold text-slate-500">
                      QR nạp tiền mẫu
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 w-full">
                    <div className="text-xs uppercase font-black text-slate-400 tracking-widest">Thông tin thanh toán</div>
                    <div className="space-y-2">
                      {method === 'bank' ? (
                        <>
                          <p className="text-[13px] font-bold text-slate-700 flex justify-between items-center border-b border-slate-50 pb-2">
                            <span className="text-slate-400 font-medium">Ngân hàng:</span>
                            <span className="text-blue-600">MB Bank (Quân Đội)</span>
                          </p>
                          <p className="text-[13px] font-bold text-slate-700 flex justify-between items-center border-b border-slate-50 pb-2">
                            <span className="text-slate-400 font-medium">Số tài khoản:</span>
                            <span className="bg-slate-100 px-2 py-1 rounded font-mono">0982981193</span>
                          </p>
                          <p className="text-[13px] font-bold text-slate-700 flex justify-between items-center border-b border-slate-50 pb-2">
                            <span className="text-slate-400 font-medium">Chủ tài khoản:</span>
                            <span className="uppercase">Nguyen Van A</span>
                          </p>
                          <p className="text-[13px] font-bold text-slate-700 flex justify-between items-center">
                            <span className="text-slate-400 font-medium">Nội dung:</span>
                            <span className="bg-blue-100 text-blue-700 px-2 rounded">NAP ZA123</span>
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm font-bold text-slate-700 flex justify-between items-center border-b border-slate-100 pb-2">
                            <span className="text-slate-400 font-medium shrink-0">Địa chỉ ví:</span>
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-[10px] font-mono break-all text-right ml-4 select-all">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</span>
                          </p>
                          <p className="text-sm font-bold text-slate-700 flex justify-between items-center">
                            <span className="text-slate-400 font-medium">Mạng lưới:</span>
                            <span className="text-slate-800 font-black uppercase text-xs">TRC20 (TRON) / ERC20 (ETH)</span>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Upload Section */}
                <div className="space-y-3">
                  <div className="text-xs uppercase font-black text-slate-400 tracking-widest">Tải lên ảnh xác nhận (Bill)</div>
                  <label className={`
                    relative cursor-pointer flex flex-col items-center justify-center gap-3 p-6 sm:p-8 border-2 border-dashed rounded-2xl transition-all
                    ${preview ? 'border-teal-500 bg-teal-50' : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50'}
                  `}>
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    {preview ? (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-teal-200">
                        <img src={preview} alt="Bill preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Upload className="text-white" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="p-3 bg-white rounded-full shadow-sm">
                          <Upload size={24} className="text-slate-400" />
                        </div>
                        <span className="text-sm font-bold text-slate-500">Bấm để chọn hoặc kéo thả ảnh bill</span>
                      </>
                    )}
                  </label>
                </div>

                <button 
                  disabled={!file}
                  onClick={() => setStep('success')}
                  className={`
                    w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg
                    ${file ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20' : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'}
                  `}
                >
                  Xác nhận nạp tiền
                </button>
              </div>
            )}

            {step === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="p-5 bg-teal-50 rounded-full">
                    <CheckCircle2 size={64} className="text-teal-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Gửi yêu cầu thành công</h4>
                  <p className="text-sm text-slate-500 mt-2 px-10 leading-relaxed">
                    Yêu cầu nạp tiền của bạn đã được gửi tới quản trị viên. Chúng tôi sẽ cộng tiền vào tài khoản của bạn sau khi xác nhận bill (thường trong 5-10 phút).
                  </p>
                </div>
                <button 
                  onClick={handleReset}
                  className="bg-slate-800 hover:bg-slate-900 text-white px-10 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-xl"
                >
                  Đóng cửa sổ
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
