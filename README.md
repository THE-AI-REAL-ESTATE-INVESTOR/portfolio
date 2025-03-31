# Mark Carpenter's Portfolio

![AI REI](https://github.com/THE-AI-REAL-ESTATE-INVESTOR/portfolio/blob/main/portfolio/public/airei.jpg?raw=true)

## 👨‍💻 About Me

Full-stack developer and AI engineer specializing in modern web technologies and cloud solutions. My expertise spans:

-   ![Full stack Developer](https://marks-portfolio-69eq.onrender.com)

- 🤖 AI/ML Engineering
- ☁️ Cloud Architecture (AWS, GCP, Azure)
- 🚀 Full-Stack Development
- 🔄 DevOps & Automation
- 🛠️ System Architecture

## 🎯 Technical Expertise

My skills are ranked based on market demand and proficiency:

1. **AI Engineering** - ML models, NLP, Computer Vision
2. **Cloud Platforms** - AWS, GCP, Azure
3. **Development** - Full-Stack, Go, Python
4. **DevOps** - Docker, CI/CD, Jenkins
5. **Tools & Frameworks** - Next.js, React, Node.js

[View full skills breakdown in the app]

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run all tests and checks
pnpm test:all
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   └── visitors/      # Visitor counter endpoints
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── about-carousel.tsx # About section
│   ├── chit-chat.tsx     # Contact modal
│   ├── skills.tsx        # Skills showcase
│   └── visitor-counter.tsx# Real-time visitors
├── config/               # Configuration
│   ├── rankedSkills.ts  # Skills data
│   └── site.ts         # Site config
└── lib/                # Utilities
    └── visitors.ts    # Visitor logic
```

## 🔧 Adding a New Skill

1. **Add Skill Data**
   ```typescript
   // src/config/rankedSkills.ts
   {
     name: "YOUR_SKILL",
     category: "backend|frontend|devops|tools|...",
     rank: 0, // Market demand rank
     tailwindColor: "bg-gradient-to-r from-[color1] to-[color2]",
     avgSalary: 100000,
     description: [
       "🔹 Key feature one",
       "🔸 Key feature two",
       "💡 Key feature three",
       "⚡ Key feature four"
     ]
   }
   ```

2. **Add Icon**
   ```typescript
   // src/components/skill-icons.ts
   import { FaNewIcon } from 'react-icons/fa';
   
   export const skillIcons = {
     // ... existing icons
     "YOUR_SKILL": FaNewIcon,
   }
   ```

## 🧪 Development Tools

- **Format Code**: `pnpm format`
- **Fix Linting**: `pnpm lint:fix`
- **Type Check**: `pnpm type-check`
- **Run All Checks**: `pnpm test:all`

## 🔄 CI/CD Pipeline

- **Development**: Push to `develop` branch
- **Production**: Push to `main` branch
- **Automated Checks**:
  - Code formatting
  - Linting
  - Type checking
  - Build verification

## 🎨 Design System

- **Framework**: Tailwind CSS
- **Dark Mode**: Supported via next-themes
- **Responsive**: Mobile-first design
- **Animations**: Smooth transitions
- **Icons**: React Icons library

## 🚀 Featured Projects

[Coming Soon]
- Personal projects showcasing skills
- Open source contributions
- Live application demos

## 📱 Mobile Experience

- Responsive design
- Touch-friendly interactions
- Optimized performance
- PWA support (coming soon)

## 📫 Connect With Me

[Coming Soon]
- GitHub repositories
- LinkedIn profile
- Portfolio website
- Blog posts

## 📄 License

MIT © Mark Carpenter

## 📚 Development Guides

Detailed development documentation can be found in the `_DEV_FOLDER`:

- [Development Guide](./_DEV_FOLDER/_DEV_MARK.md) - Main development documentation
- [Scripts Guide](./_DEV_FOLDER/scripts.md) - Available scripts and commands
- [React Dev Tools Guide](./_DEV_FOLDER/react-dev-tools-guide.md) - React development tools setup
- [Tailwind CSS Guide](./_DEV_FOLDER/tailwind-css.md) - Styling and design system

---
*This portfolio is continuously evolving. Check back for updates and new features!*
