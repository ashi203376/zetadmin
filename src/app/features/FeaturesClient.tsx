'use client';

import { motion } from 'motion/react';

export default function FeaturesClient() {
  const featureList = [
    { title: '1 - Không giới hạn', content: 'Không có bất kỳ giới hạn nào khi sử dụng tổng đài ảo của chúng tôi' },
    { title: '2 - IVR đa lớp', content: 'Tùy thuộc vào khả năng sáng tạo nhu cầu sử dụng, không có giới hạn về các lớp IVR được tạo ra và lồng ghép với nhau. IVR có khả năng cá nhân hóa theo từng cuộc gọi. Được tích hợp VoiceBot để nhận dạng giọng nói và đưa ra phản hồi hoàn toàn chính xác và tự động mà không cần sử dụng phím bấm theo kiểu truyền thống.' },
    { title: '3 - Gọi tự động', items: [
      'Hỗ trợ quý khách tự động hóa nhiều cuộc gọi cùng lúc theo cài đặt như: Kịch bản IVR, số lượng cuộc gọi đồng thời, kết nối với máy nhánh, thời gian thực hiện cuộc gọi, thời gian sẽ thực hiện gọi lại ...',
      'Đối mới chăm sóc khách hàng: tổng đài ZetAdmin PBX sẽ giúp cho quý khách thực hiện chăm sóc khách hàng hoàn toàn tự động không giới hạn về thời gian và số lượng cuộc gọi.',
      'Đối với telesale: hệ thống sẽ giúp quý khách tự động quay số và phân chia các cuộc tới các máy nhánh đang rảnh hoặc thu thập dữ liệu để gọi lại sau.'
    ]},
    { title: '4 - Ghi nhớ cuộc gọi', content: 'Khi chế độ "Gọi lại" được bật, mỗi lần máy nhánh thực hiện gọi ra cho một khách hàng bất kỳ mà khách đang bận, không nhấc máy hoặc số máy đang ở ngoài vùng phủ sóng. Trong vòng 24 giờ từ khi nhận cuộc gọi nhỡ, nếu sau đó khách hàng sẽ thực hiện gọi lại vào tổng đài, thì hệ thống sẽ tự động điều hướng cuộc gọi của khách tới đúng máy nhánh đã thực hiện gọi cho khách hàng. Đồng thời khi đó gọi vào tổng đài cuộc gọi đó sẽ bị bỏ qua tất cả các IVR nếu số máy nhánh đang trực tuyến và ngược lại.' },
    { title: '5 - VoiceBot', content: 'Tính năng này cho phép quý khách thay đổi phím bấm truyền thống bằng giọng nói bằng cách lọc từ khóa trong lời thoại. Có thể sử dụng kết hợp hợp đồng thời giữa nhận biết phím bấm và từ khóa thông qua lời thoại của khách hàng. Tùy thuộc vào ý tưởng và nhu cầu, quý khách có thể hoàn toàn tự xây dựng được các kịch bản IVR đối đáp tự động cho tổng đài cho chính doanh nghiệp của mình. Hỗ trợ lọc chính xác các cuộc gọi có thông báo thuê bao, hộp thư thoại ... Tự động ngắt cuộc gọi theo từ khóa cài đặt.' },
    { title: '6 - Hàng đợi', content: 'Từng nhóm các máy nhánh trong hàng đợi sẽ lần lượt nhận các cuộc gọi theo kịch bản gọi vào hoặc gọi ra tự động. Không bị chèn cuộc gọi khi gọi tự động số lượng cuộc gọi đồng thời lớn. Tùy chỉnh và phân chia cuộc gọi đều cho các máy nhánh.' },
    { title: '7 - Gọi nhóm', content: 'Trò chuyện trong một nhóm (thích hợp để tạo một cuộc họp có chất lượng âm thanh tốt), quay số vào nhóm bằng mật khẩu không cần mật khẩu, cài đặt chỉ có số máy nhánh được phép tham gia hoặc tất cả đều được tham gia. Cho cuộc gọi chất lượng cao.' },
    { title: '8 - Giám sát cuộc gọi', content: 'Với chế độ giám sát quý khách có thể nhìn thấy số lượng các cuộc gọi ra, gọi vào và gọi tự động theo thời gian thực. Nghe lén các cuộc gọi của các máy nhánh khác đang diễn ra. Gác máy một máy nhánh hoặc tất cả các máy nhánh trên hệ thống.' },
    { title: '9 - Ghi âm', content: 'Hệ thống có nhiều cài đặt lựa chọn ghi âm cho từng kịch bản cuộc gọi. Tệp ghi âm tiết kiệm dung lượng bộ nhớ. Hỗ trợ mở rộng lưu trữ sang các máy chủ lưu trữ qua giao thức FTP, HTTP.' },
    { title: '10 - API', content: 'Kết nối API tùy biến, hỗ trợ kết đa nền tảng và hệ thống của khách hàng.' },
    { title: '11 - Đa tài khoản quản lý', content: 'Hệ thống hỗ trợ phân quyền đa cấp cho nhiều tài khoản' },
    { title: '12 - Khả năng chịu tải', content: 'Hỗ trợ số lượng cuộc gọi đồng thời không giới hạn, chất lượng cuộc gọi không thay đổi khi chịu tải cao' },
    { title: '13 - Tương thích và Tích hợp', content: 'Tổng đài ảo ZetAdmin PBX tương thích với tất cả các nhà cung cấp dịch vụ SIP Trunking tại Việt Nam và quốc tế. Ngoài ra tổng đài còn có thể trở thành một hệ thống SMS Marketing khi tích hợp kết nối với các thiết bị USB 3G hoặc GSM Gateway.' },
    { title: '14 - SMS Marketing', content: 'Hệ thống tổng đài có tích hợp sẵn công cụ SMS Marketing giúp khách hàng luôn sẵn sàng sử dụng khi cần thiết. Hỗ trợ SMS cá nhân hóa, hẹn giờ gửi tự động, giới hạn số lượng tin nhắn được gửi trong ngày, không giới hạn số lượng chiến dịch gửi tin nhắn SMS ...' },
    { title: '15 - Tùy biến theo yêu cầu', content: 'Hệ thống ZA PBX được phát triển bởi đội ngũ kỹ sư tay nghề cao của Công ty TNHH Giải Pháp Trực Tuyến Đức Com, hệ thống đã được chúng tôi thiết kế theo dạng mô-đun. Do vậy việc tùy biến và mở rộng theo yêu cầu của quý khách hàng hoàn toàn không phức tạp và tốn ít thời gian.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 bg-gray-50">
      <div className="bg-white rounded-lg p-6 mb-10 text-center border shadow-sm border-t-4 border-blue-600">
        <h1 className="text-3xl font-bold text-gray-700 uppercase">Tính năng</h1>
      </div>

      <section className="bg-white rounded-xl shadow-md p-8 md:p-14 border border-gray-100">
        <div className="space-y-10">
          {featureList.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <h3 className="text-base md:text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              {feature.content && (
                <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-6 border-l-2 border-gray-100 group-hover:border-blue-200 transition-colors">
                  {feature.content}
                </p>
              )}
              {feature.items && (
                <div className="space-y-3 pl-6 border-l-2 border-gray-100 group-hover:border-blue-200 transition-colors">
                  {feature.items.map((item, i) => (
                    <p key={i} className="text-sm md:text-base text-gray-600 leading-relaxed italic">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
