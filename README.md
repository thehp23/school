# Little Millennium Preschool Website

A modern, responsive website for Little Millennium preschool and daycare center, built with Next.js 16, React 19, and TypeScript.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: Hover effects and smooth animations throughout
- **Image Sliders**: Auto-playing hero slider and skills showcase slider
- **Navigation**: Multi-level navigation with dropdown menus and mobile support
- **Curriculum Showcase**: Highlighting the proprietary "Seven Petal Approach"
- **Trust Indicators**: Social proof section for parent confidence
- **Feature Grid**: Interactive feature cards with expandable content

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React 1.11.0
- **React**: React 19.2.4
- **Linting**: ESLint 9

## 📁 Project Structure

```
school/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   ├── Dropdown.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── NavItem.tsx
│   │   │   ├── section/
│   │   │   │   ├── CurriculumSection.tsx
│   │   │   │   ├── FeatureGrid.tsx
│   │   │   │   └── Turstt.tsx
│   │   │   └── slider/
│   │   │       ├── ImageSlider.tsx
│   │   │       └── SkillsSlider.tsx
│   │   ├── constants/
│   │   │   └── navLink.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── public/
│       └── intro-images/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🎨 Components Overview

### Navigation (`Navbar.tsx`)
- Responsive navigation bar with logo
- Desktop dropdown menus
- Mobile hamburger menu
- Active link highlighting

### Sliders
- **ImageSlider**: Auto-playing hero carousel with 4 slides
- **SkillsSlider**: Showcase of developmental skills in groups of 4

### Sections
- **Turstt**: Trust-building section with decorative images
- **FeatureGrid**: Interactive feature cards (Safety, Caring, etc.)
- **CurriculumSection**: Highlights the "Seven Petal Approach" methodology

## 🎯 Key Features

### Seven Petal Approach
The proprietary curriculum that supports:
- Holistic development
- Language skills
- Logic and reasoning
- Creativity
- Physical movement
- Social-emotional learning
- Structured play-based learning

### Navigation Structure
- Home
- About
- Curriculum
- Why Us
- Franchise With Us
- Nest Daycare
- Admission (with dropdown for Details and Center Locator)
- Contact Us

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Tailwind CSS utility classes
- Flexible grid layouts
- Touch-friendly navigation

## 🖼️ Assets

Images are stored in `/public/intro-images/` and include:
- Hero slider images (first.png, second.png, third.png, fourth.png)
- Feature images (safety.png, caring.png, etc.)
- Decorative elements (bird.png, clouds.png, cartoon.png)
- Skills development icons

## 🔧 Configuration

- **Next.js**: `next.config.ts` for Next.js configuration
- **TypeScript**: `tsconfig.json` for TypeScript settings
- **ESLint**: `eslint.config.mjs` for linting rules
- **PostCSS**: `postcss.config.mjs` for CSS processing
- **Tailwind**: Integrated with PostCSS for styling

## 🚀 Deployment

Build the project for production:

```bash
npm run build
npm run start
```

The built files will be in the `.next` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## 🎨 Styling Details

The project uses **Tailwind CSS 4** with PostCSS for styling:

- **Color Scheme**: Primary blue (`#0060aa`), accent yellow (`#fbbf24`)
- **Utility Classes**: Responsive design with md: breakpoints for tablet and desktop
- **Custom Styles**: Global styles in `globals.css`
- **Components**: Styled with Tailwind utility classes throughout

### Color Reference
- Primary: `#0060aa` (Professional blue)
- Accent: `#fbbf24` (Yellow highlights)
- Secondary: Blues, greens for feature sections

## 🌍 Environment Setup

### Environment Variables
Currently, no `.env.local` file is required. If needed in the future:

```bash
cp .env.example .env.local
```

### Development Environment
- Node.js 18+
- npm 8+
- Git for version control

## 🐛 Troubleshooting

### Common Issues

**Issue: `npm install` fails with dependency conflicts**
```bash
# Try clearing npm cache and reinstalling
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Issue: `npm audit fix` returns exit code 1**
```bash
# View vulnerabilities without fixing
npm audit

# Fix only safe vulnerabilities
npm audit fix --audit-level=moderate
```

**Issue: Development server won't start**
```bash
# Kill any existing processes on port 3000
# Then restart
npm run dev
```

**Issue: Tailwind styles not applying**
- Ensure all component files end with `.tsx` or `.ts`
- Check that className strings don't have template literals without variables
- Restart the dev server if styles don't update

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is private and proprietary to Little Millennium.</content>
<parameter name="filePath">c:\Users\Harsh Patel\Desktop\School UI\school\README.md