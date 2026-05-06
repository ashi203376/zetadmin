import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Giới thiệu | ZetAdmin PBX',
  description: 'Nền tảng tổng đài ảo ZetAdmin Cloud PBX. Tự chủ hoàn toàn, đáp ứng nhu cầu doanh nghiệp, cung cấp dịch vụ VOIP toàn cầu.',
};

export default function About() {
  return <AboutClient />;
}
