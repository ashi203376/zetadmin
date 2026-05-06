import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ZetAdmin - Tổng Đài Đám Mây PBX',
  description: 'ZetAdmin PBX - Tổng đài ảo mạnh mẽ, trả tiền linh hoạt theo tháng, tích hợp sẵn gọi tự động, Voice Bot, IVR đa lớp.',
};

export default function Home() {
  return <HomeClient />;
}
