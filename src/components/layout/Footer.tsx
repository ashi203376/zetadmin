import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  const sections = [
    {
      title: 'Về chúng tôi',
      links: [
        { label: 'Giới thiệu', href: '/about' },
        { label: 'Liên hệ', href: '/contact' },
        { label: 'Điều khoản sử dụng', href: '#' },
        { label: 'Chính sách bảo mật', href: '#' },
        { label: 'Demo', href: '#' },
      ]
    },
    {
      title: 'Tài nguyên',
      links: [
        { label: 'Tin tức', href: '#' },
        { label: 'Tài liệu', href: '#' },
        { label: 'Lập trình viên', href: '#' },
        { label: 'Tải xuống', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-[#2d2d2d] text-gray-300 pt-20 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-white text-lg font-bold uppercase tracking-widest pb-3 border-b border-gray-700 inline-block">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
                    <span className="text-gray-600 group-hover:text-blue-500 transition-colors">→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-8">
          <h3 className="text-white text-lg font-bold uppercase tracking-widest pb-3 border-b border-gray-700 inline-block">Đăng ký nhận tin</h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Đăng ký bản tin của chúng tôi và cập nhật thông tin về các bản phát hành mới và các sự kiện ZetAdmin khác.
          </p>
          <div className="flex shadow-2xl">
            <input 
              type="email" 
              placeholder="Nhập địa chỉ email của bạn"
              className="bg-white text-gray-800 p-4 flex-grow text-sm outline-none rounded-l-lg"
            />
            <button className="bg-[#337ab7] px-5 py-4 rounded-r-lg hover:bg-blue-600 transition-colors text-white">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] pt-8 text-center">
        <div className="max-w-7xl mx-auto px-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">
          © 2026 ZetAdmin Framework
        </div>
      </div>
    </footer>
  );
}
