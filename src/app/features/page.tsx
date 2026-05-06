import { Metadata } from 'next';
import FeaturesClient from './FeaturesClient';

export const metadata: Metadata = {
  title: 'Tính năng | ZetAdmin PBX',
  description: 'Toàn bộ tính năng ưu việt của tổng đài ZetAdmin: IVR đa lớp, gọi tự động, VoiceBot, ghi âm, API...',
};

export default function Features() {
  return <FeaturesClient />;
}
