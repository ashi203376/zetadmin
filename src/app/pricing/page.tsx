import { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Bảng giá | ZetAdmin PBX',
  description: 'Dùng bao nhiêu trả tiền bấy nhiêu. Hệ thống đảm bảo 99.99% ổn định với tính linh hoạt cao nhất thị trường.',
};

export default function Pricing() {
  return <PricingClient />;
}
