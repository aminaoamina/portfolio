# Portfolio Project Structure

## 📁 Directory Organization

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router (main pages)
│   │   ├── layout.tsx          # Root layout wrapper
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── favicon.ico
│   │
│   ├── components/             # React components
│   │   ├── sections/           # Full-page sections (Hero, About, Projects, etc.)
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # Reusable UI components (buttons, cards, etc.)
│   │   └── Navigation.tsx       # Navigation bar
│   │
│   ├── lib/                    # Utility functions and helpers
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollPosition.ts
│   │
│   └── styles/                 # Additional CSS files
│       └── globals.css         # Global CSS (already in app/)
│
├── public/                     # Static files (accessible at /)
│   └── assets/                 # YOUR RESOURCE FOLDER
│       ├── images/             # Project screenshots, portfolio images
│       │   ├── project-1.jpg
│       │   ├── profile.jpg
│       │   └── ...
│       │
│       ├── icons/              # Your custom 3D/Chrome-style icons
│       │   ├── github.svg
│       │   ├── linkedin.svg
│       │   └── ...
│       │
│       └── 3d-models/          # 3D models (GLB, GLTF files)
│           ├── model-1.glb
│           └── ...
│
├── package.json                # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── .env.local.example          # Example environment variables
├── vercel.json                 # Vercel deployment configuration
└── PROJECT_STRUCTURE.md        # This file
```

---

## 📦 Key Directories Explained

### **`public/assets/`** — YOUR RESOURCE FOLDER
This is where you'll place all your visual assets:

- **`images/`** — Your portfolio images, project screenshots, profile photo
  - Supported formats: `.jpg`, `.png`, `.webp`, `.gif`
  - Place them here and reference in components like: `/assets/images/project-1.jpg`

- **`icons/`** — 3D/Chrome-style icons you're providing
  - Use `.svg` for scalable icons or `.png` for raster
  - Supported: Font files if using icon fonts

- **`3d-models/`** — For any 3D models (if you'll use Three.js or similar)
  - Supported formats: `.glb`, `.gltf`, `.obj`

### **`src/components/`** — Reusable React Components
Organize by type:
- **`sections/`** — Full-page sections (Hero, About, Projects, Contact)
- **`ui/`** — Reusable components (Button, Card, Badge, etc.)

### **`src/app/`** — Next.js App Router
- `page.tsx` — Your home page
- `layout.tsx` — Main wrapper with navigation
- Define other routes here (e.g., `blog/page.tsx`, `projects/page.tsx`)

### **`src/lib/`** — Utilities & Constants
- Reusable functions, type definitions, configuration
- Constants like social links, navigation menu items

---

## 🎨 Glassmorphism Setup (Already Configured)

### Available CSS Classes:
- `.glass-effect` — Light glassmorphism style
- `.glass-effect-lg` — Darker glassmorphism with shadow
- Tailwind utilities: `backdrop-blur-lg`, `bg-glass-light`, etc.

### Pre-configured Animations:
- `animate-fade-in` — Fade in effect
- `animate-slide-in` — Slide in from top
- `animate-float` — Floating animation
- `animate-glow` — Glowing effect

---

## 🚀 Next Steps

1. **Add your assets** to `public/assets/`:
   - Profile images → `images/`
   - Icons → `icons/`
   - 3D models → `3d-models/`

2. **Create components** in `src/components/`:
   - Build reusable UI components
   - Integrate reactbits.dev components

3. **Update `src/app/layout.tsx`** with your site metadata:
   - Title, description, favicon

4. **Update `src/app/page.tsx`** with your content:
   - Use sections from `components/sections/`

5. **Configure `.env.local`**:
   - Copy from `.env.local.example`
   - Add your personal information and social links

---

## 📝 Configuration Files

### `next.config.ts`
- Image optimization enabled
- Security headers pre-configured
- Ready for Vercel deployment

### `tailwind.config.ts`
- Glassmorphism utilities included
- Custom animations configured
- Smooth transitions enabled

### `vercel.json`
- Optimized for Vercel deployment
- Build and dev commands configured
- Environment variables template included

---

## 🔗 To Deploy on Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project" and select your repo
4. Add environment variables from `.env.local`
5. Deploy (one-click automatic deployment!)

---

## 💡 Tips

- **Images**: Use Next.js `<Image>` component for automatic optimization
- **Icons**: Use SVGs for crisp scaling
- **Animations**: Use `animate-*` classes from Tailwind or Framer Motion
- **Components**: Follow the same naming and structure pattern
- **Types**: Create `.ts` files with interfaces for better TypeScript support

---

Happy building! 🎉
