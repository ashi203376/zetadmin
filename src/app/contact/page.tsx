import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Liên hệ | ZetAdmin PBX',
  description: 'Liên hệ với bộ phận hỗ trợ của tổng đài ảo ZetAdmin. Hỗ trợ nhiệt tình, tư vấn 24/7.',
};

export default function Contact() {
  return <ContactClient />;
}
