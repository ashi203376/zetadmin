import { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Đăng nhập | ZetAdmin PBX',
  description: 'Đăng nhập vào hệ thống quản lý tổng đài đám mây ZetAdmin PBX.',
};

export default function Login() {
  return <LoginClient />;
}
