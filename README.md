# Borochi

A modern, scalable web application built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **⚡ Next.js 14** - Latest React framework with App Router
- **🔷 TypeScript** - Type-safe development with strict mode
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn/ui** - Beautiful, reusable components
- **📱 Responsive Design** - Mobile-first approach
- **🎯 Material Design 3** - Modern design system
- **🔧 Developer Experience** - ESLint, Prettier, and more

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm/yarn/pnpm

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd borochi
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Design System

This project follows Material Design 3 principles and uses a custom design system built with:

- **Colors**: Semantic color tokens
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Accessible, reusable UI components

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- CSS variables for theming
- Custom animations and keyframes
- Responsive design utilities
- Typography and form plugins

### TypeScript

Strict TypeScript configuration with:
- Path mapping for clean imports
- Strict type checking
- Modern ES features

## 🌟 Best Practices

- **Components**: Use functional components with TypeScript
- **Styling**: Utility-first approach with Tailwind CSS
- **Performance**: Server Components by default, Client Components when needed
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Optimized metadata and semantic HTML

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [shadcn](https://twitter.com/shadcn) for the beautiful component library
- [Radix UI](https://www.radix-ui.com) for the accessible primitives 