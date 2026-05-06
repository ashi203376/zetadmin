import { Metadata } from 'next';
import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Đăng ký | ZetAdmin PBX',
  description: 'Tạo tài khoản ZetAdmin PBX mới để trải nghiệm hệ thống tổng đài ảo đa năng, không giới hạn.',
};

export default function Register() {
  return <RegisterClient />;
}
