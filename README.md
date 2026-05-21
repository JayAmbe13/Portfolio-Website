# 🚀 Vaibhav Patel — Portfolio Website

A modern, professional portfolio website showcasing my work, services, and skills as a **Full-Stack Web & Mobile App Developer**. Built with React, TypeScript, TanStack Router, and Tailwind CSS — designed to be fast, responsive, and visually stunning.

🌐 **Live Site:** [https://vaibhavpatel-portfolio.netlify.app](https://vaibhavpatel-portfolio.netlify.app)

---

## 📸 Pages Overview

### 🏠 Home Page (`/`)
The landing page featuring:
- **Hero Section** — Introduction with name, title ("Web And Mobile App Developer"), and a brief professional summary
- **Profile Photo** — Circular avatar with gradient glow effect and "Available for work" badge
- **Call-to-Action Buttons** — Quick navigation to **Services** and **Work** pages
- Clean, modern dark theme with animated grid background

---

### 💼 Work Page (`/work`)
Showcases **4 selected projects** with GitHub repository links:

| Project | Type | Description |
|---------|------|-------------|
| **FestivoMaster-Frontend** | Frontend · Event Management | Modern & responsive event/invitation management UI built with React.js & Tailwind CSS |
| **StudyNotion-Frontend** | Frontend · Ed-Tech Platform | Dynamic learning platform frontend with ReactJS, featuring responsive UI and REST API integration |
| **StudyNotion_Server** | Backend · Ed-Tech API | Full-stack backend API with Node.js, Express, MongoDB — JWT auth, Razorpay payments, Cloudinary uploads, RBAC |
| **Employee-Creation-WebApp-Server** | Backend · CRUD API | Employee management API with CRUD operations, validation, and scalable architecture |

Each project card displays:
- Project name and category tag
- Description of the project
- Tech stack badges
- Direct link to the GitHub repository

Includes a **"More on GitHub"** section linking to the full GitHub profile.

---

### 🛠️ Services Page (`/services`)
Professionally organized into **two categories** with **6 services total**:

#### 🌐 Web Development
| Service | Highlights |
|---------|------------|
| **Frontend Web Development** | Responsive & device-friendly layouts, modern UI/UX, SEO-optimized, cross-browser compatible |
| **Backend Web Development** | RESTful API design, JWT auth & RBAC, payment integrations, optimized database architecture |
| **Full-Stack Web Development** | End-to-end delivery, responsive on all screens, scalable architecture, CI/CD ready |

> All web services emphasize **fully responsive** and **device-friendly** design across desktops, tablets, and mobiles.

#### 📱 Mobile App Development
| Service | Highlights |
|---------|------------|
| **Frontend Mobile App Development** | Cross-platform Android & iOS, native-feeling UI, smooth animations, adaptive layouts |
| **Backend Mobile App Development** | Real-time data sync, push notifications, secure APIs, cloud storage |
| **Full-Stack Mobile App Development** | Single codebase for Android & iOS, App Store & Play Store deployment, offline-first |

> All mobile services are built as **cross-platform** solutions delivering native-quality experiences on both **Android** and **iOS**.

Each service card features:
- Unique color-coded gradient hover effect
- Service description
- Key highlights list
- Professional iconography

Includes a **"Get in Touch"** CTA at the bottom linking to the Contact page.

---

### 📧 Contact Page (`/contact`)
A fully functional contact section with:

- **Contact Channels** — Email, Phone, LinkedIn, and GitHub with clickable cards
- **Location Info** — "Based in Surat, Gujarat — India · Available remotely worldwide"
- **Send a Message Form** — Working contact form that:
  - Validates all fields (Name, Email, Message)
  - Opens the user's email client with pre-filled subject and body
  - Shows a success confirmation banner after submission

---

## 🧭 Header Navigation
The sticky header includes navigation links to:
- **Work** — View selected projects
- **Services** — Browse all offered services
- **Contact** — Get in touch

Features a responsive mobile menu that toggles on smaller screens.

---

## 🔗 Footer
Includes social links to:
- **GitHub** — [github.com/JayAmbe13](https://github.com/JayAmbe13)
- **LinkedIn** — [linkedin.com/in/vaibhavpatel13](https://linkedin.com/in/vaibhavpatel13)
- **Email** — vaibhavpatel9398@gmail.com

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 19, TypeScript |
| **Routing** | TanStack Router, TanStack Start |
| **Styling** | Tailwind CSS 4, Shadcn UI components |
| **Build Tool** | Vite 7 |
| **Icons** | Lucide React |
| **Deployment** | Netlify |

---

## 🚀 Deployment on Netlify

This portfolio is deployed on **Netlify** for fast, global CDN delivery.

### Steps to Deploy:
1. Connect this GitHub repository to [Netlify](https://app.netlify.com)
2. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public` (or as configured by TanStack Start)
3. Deploy — Netlify will automatically build and publish the site

### Custom Domain Setup:
After deploying on Netlify:
1. Go to **Site Settings → Domain Management**
2. Click **Add custom domain**
3. Enter your domain name (e.g., `vaibhavpatel.dev`)
4. Update your domain's **DNS settings** to point to Netlify:
   - Add a **CNAME** record pointing to your Netlify site URL (e.g., `your-site.netlify.app`)
   - Or use Netlify DNS for automatic configuration
5. Enable **HTTPS** (Netlify provides free SSL via Let's Encrypt)

> 💡 Every push to the `main` branch will automatically trigger a new deployment on Netlify.

---

## 📂 Project Structure

```
src/
├── assets/              # Images (profile photo)
├── components/
│   ├── SiteLayout.tsx   # Header, footer, and page layout
│   └── ui/              # Reusable UI components (Button, Input, etc.)
├── routes/
│   ├── __root.tsx       # Root HTML shell, favicon, global meta tags
│   ├── _layout.tsx      # Layout wrapper
│   ├── _layout.index.tsx    # Home page
│   ├── _layout.work.tsx     # Work/Projects page
│   ├── _layout.services.tsx # Services page
│   └── _layout.contact.tsx  # Contact page
├── styles.css           # Global styles & design tokens
└── router.tsx           # Router configuration
```

---

## 🏃 Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# → http://localhost:8080/
```

---

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by [Vaibhav Patel](https://github.com/JayAmbe13)**
