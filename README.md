# ZetAdmin PBX - Tổng đài đám mây

Hệ thống tổng đài ảo cloud PBX được phát triển bằng Next.js 16 + TypeScript + Prisma + PostgreSQL.

## Tính năng chính

- **Marketing Website**: Trang chủ, Giới thiệu, Tính năng, Bảng giá, Liên hệ
- **Xác thực**: Đăng ký, Đăng nhập, Đăng xuất
- **Dashboard người dùng**: Quản lý tổng đài, máy nhánh, chiến dịch, giao dịch
- **Dashboard Admin**: Duyệt nạp tiền, quản lý liên hệ
- **Nạp tiền**: Chuyển khoản ngân hàng / Crypto (với upload bill)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16.2, React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL (Prisma ORM v6) |
| Auth | Cookie-based session |
| Hosting đề xuất | Vercel (Frontend) + Supabase/Neon (PostgreSQL) |

## Cấu trúc thư mục

```
src/
├── app/
│   ├── api/
│   │   ├── auth/          # Login, Register, Logout, Session
│   │   ├── admin/        # Approve/Reject transaction
│   │   ├── contact/      # Contact form submission
│   │   ├── extensions/   # Extension CRUD
│   │   ├── newsletter/   # Newsletter subscription
│   │   ├── pbx/         # PBX management
│   │   ├── pricing/      # Pricing config
│   │   └── transaction/ # Top-up transactions
│   ├── dashboard/
│   │   ├── page.tsx      # Dashboard overview
│   │   ├── admin/        # Admin panel
│   │   └── pbx/          # PBX management
│   ├── login/
│   ├── register/
│   ├── pricing/
│   ├── about/
│   ├── contact/
│   └── features/
├── components/
│   ├── dashboard/         # Sidebar nav
│   ├── layout/           # Header, Footer
│   └── ui/               # TopUpModal, NewsletterForm
├── lib/
│   ├── prisma.ts         # Prisma singleton
│   ├── password.ts       # Password hashing
│   ├── pricing.ts        # Pricing calculation
│   ├── session.ts        # Session helpers
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Utilities
├── types/
│   └── index.ts           # Shared TypeScript types
└── middleware.ts          # Route protection
```

## Database Schema

12 bảng trong PostgreSQL:

| Model | Mô tả |
|---|---|
| `User` | Tài khoản người dùng |
| `PBX` | Tổng đài ảo |
| `PBXConfig` | Cấu hình tổng đài (IVR, SIP, campaign, storage) |
| `PricingPlan` | Gói giá |
| `PricingOverride` | Đơn giá từng thành phần |
| `Transaction` | Giao dịch nạp tiền |
| `ContactInquiry` | Liên hệ khách hàng |
| `Newsletter` | Đăng ký nhận tin |
| `Extension` | Máy nhánh SIP |
| `CallLog` | Lịch sử cuộc gọi |
| `Campaign` | Chiến dịch gọi tự động |
| `IVR` | Kịch bản IVR |
| `Queue` | Hàng đợi cuộc gọi |

## Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Thiết lập Database

**Tùy chọn A: Supabase (Khuyến nghị - Miễn phí)**

1. Tạo project tại [supabase.com](https://supabase.com)
2. Lấy connection string từ Settings > Connection Pooling
3. Copy vào `DATABASE_URL` trong `.env`

**Tùy chọn B: PostgreSQL local**

```bash
# Tạo database
createdb zetadmin
```

### 3. Cấu hình Environment Variables

```bash
# Database (Prisma kết nối Supabase PostgreSQL)
DATABASE_URL="postgresql://postgres.xqljjfchswwpbuyblwvp:YOUR_PASSWORD@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> **Lưu ý:** Lấy connection string từ Supabase Dashboard → Settings → Connection Pooling → Connection string → URI.

### 4. Chạy Database Migration

```bash
# Tạo schema trong database
npm run db:push

# Generate Prisma client
npm run db:generate

# (Tùy chọn) Seed dữ liệu mẫu
npm run db:seed
```

### 5. Chạy Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

## Tài khoản Demo (sau khi seed)

| Role | Email | Password |
|---|---|---|
| Admin | `admin@zapbx.com` | `admin123` |
| Customer | `demo@zetadmin.com` | `customer123` |

## Các câu lệnh hữu ích

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema (không tạo migration)
npm run db:migrate   # Tạo migration mới
npm run db:studio    # Mở Prisma Studio (GUI)
npm run db:seed      # Seed dữ liệu mẫu
```

## Production Deployment

### Vercel + Supabase

1. Push code lên GitHub
2. Kết nối repo với Vercel
3. Thêm Environment Variables trong Vercel dashboard:
   - `DATABASE_URL` (Supabase connection string)
4. Deploy — Vercel tự chạy `prisma generate` và build

### Database URL từ Supabase

```env
DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
```

## API Endpoints

| Method | Endpoint | Mô tả |
|---|---|---|
| POST | `/api/auth/register` | Đăng ký tài khoản |
| POST | `/api/auth/login` | Đăng nhập |
| POST | `/api/auth/logout` | Đăng xuất |
| GET | `/api/auth/session` | Lấy thông tin session |
| GET/POST | `/api/pbx` | Danh sách / Tạo tổng đài |
| GET/PUT | `/api/pricing` | Lấy / Cập nhật cấu hình giá |
| GET/POST | `/api/transaction` | Giao dịch nạp tiền |
| POST | `/api/contact` | Gửi liên hệ |
| POST | `/api/newsletter` | Đăng ký newsletter |
| GET/POST | `/api/extensions` | Quản lý máy nhánh |
| POST | `/api/admin/approve/[id]` | Duyệt giao dịch |
| POST | `/api/admin/reject/[id]` | Từ chối giao dịch |

## Khuyến nghị cho Production

- **Database**: Supabase (PostgreSQL managed) — tự động backup, không cần quản lý server
- **Frontend Hosting**: Vercel hoặc Cloudflare Pages
- **Storage (upload bill)**: Supabase Storage hoặc Cloudflare R2
- **Monitoring**: Vercel Analytics + Sentry
- **CI/CD**: GitHub Actions tự động deploy khi push
