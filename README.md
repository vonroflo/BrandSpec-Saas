# 🌈 BrandSpec - Generate Beautiful Brand Guidelines

A modern SaaS application that helps developers and designers create consistent brand specifications in minutes. Export to Markdown, Tailwind, CSS variables, or Figma tokens.

## 🚀 Features

- **Lightning Fast**: Generate complete brand specs in under 5 minutes
- **Developer-First**: Export to Tailwind config, CSS variables, or copy-paste markdown
- **Design Consistency**: Ensure your brand looks cohesive across all touchpoints
- **Multiple Export Formats**: Markdown, Tailwind, CSS, and Figma tokens
- **Beautiful UI**: Modern, responsive design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd brandspec

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🎨 Brand Configuration

The application allows you to configure:

### Colors
- Primary color
- Accent color
- Background color
- Surface color
- Text color

### Typography
- Heading font selection
- Body font selection
- Font scale and weights

### UI Geometry
- Border radius options
- Shadow styles
- Button styles
- Spacing scale

### Voice & Tone
- CTA examples
- Error message tone
- Brand feel description

## 📁 Project Structure

```
brandspec/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/          # shadcn components
│   │   ├── brand-form.tsx
│   │   ├── hero-section.tsx
│   │   ├── features-grid.tsx
│   │   └── output-section.tsx
│   └── lib/
│       ├── utils.ts
│       ├── brand-generator.ts
│       └── types.ts
├── public/
├── tailwind.config.ts
└── package.json
```

## 🚀 Deployment

The application is ready to deploy on Vercel:

```bash
# Deploy to Vercel
vercel --prod
```

## 🎯 Usage

1. **Fill out the form** with your brand details
2. **Preview the generated spec** in real-time
3. **Export** to your preferred format (Markdown, Tailwind, CSS, or Figma)
4. **Download or copy** the generated code

## 📝 License

MIT License - feel free to use this project for your own SaaS applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email support@brandspec.dev or create an issue in this repository.

---

Made with ❤️ for indie hackers and developers
