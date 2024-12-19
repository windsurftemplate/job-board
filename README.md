# Job Board Platform

A modern job board platform built with Next.js 13, featuring a beautiful UI, role-based authentication, and seamless job posting and application processes.

## Features

- 🎨 Modern UI with shadcn/ui components
- 🌓 Dark/Light mode support
- 🔐 Role-based authentication (Employers & Job Seekers)
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔍 Advanced job search and filtering
- 💼 Job posting and management for employers
- 📝 Easy application process for job seekers

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL
- **Animations**: Framer Motion
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Type Safety**: TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-board.git
cd job-board
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Fill in your environment variables in `.env.local`

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/                # Next.js 13 app directory
│   ├── api/           # API routes
│   ├── auth/          # Authentication pages
│   ├── jobs/          # Job-related pages
│   └── about/         # About page
├── components/        # Reusable components
│   ├── ui/           # UI components
│   └── ...           # Other components
├── lib/              # Utility functions
├── prisma/           # Database schema
└── types/            # TypeScript types
```

## Key Features

### Authentication
- Separate signup flows for employers and job seekers
- Secure authentication using NextAuth.js
- Protected routes based on user roles

### Job Management
- Create, edit, and delete job postings (employers)
- Search and filter jobs
- Apply to jobs with resume/CV upload
- Track application status

### User Interface
- Clean and modern design
- Responsive layout for all devices
- Dark/light mode support
- Smooth page transitions and animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [NextAuth.js](https://next-auth.js.org/)
