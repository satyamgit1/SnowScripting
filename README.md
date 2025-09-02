# SnowScripting

A powerful ServiceNow development platform featuring an AI-powered assistant, note-taking capabilities, and comprehensive tools for ServiceNow administrators and developers.

## 🚀 Features

### 🤖 ServiceNow AI Assistant
- **Intelligent Query Processing**: Get instant answers to ServiceNow-related questions
- **Code Generation**: Generate ServiceNow scripts, workflows, and configurations
- **Best Practices**: Receive guidance on ServiceNow development best practices
- **Multi-Model Support**: Choose from different AI models (GLM-4.5 and more)
- **Syntax Highlighting**: View generated code with proper formatting
- **Rate Limiting**: Built-in protection against API abuse

### 📝 Smart Note-Taking
- **Organized Notes**: Create, edit, and manage ServiceNow-related notes
- **Rich Text Editor**: Full-featured editor with formatting options
- **Code Snippets**: Store and organize code snippets with syntax highlighting
- **Search Functionality**: Quickly find specific notes and content

### 🔐 Authentication & Security
- **Firebase Authentication**: Secure user authentication system
- **Protected Routes**: Role-based access control
- **Session Management**: Secure session handling

### 🎨 Modern Interface
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes for optimal viewing
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Modern UI Components**: Clean, professional interface design

### 📧 Communication Features
- **Contact Forms**: Multiple contact options for different purposes
- **Email Integration**: SendGrid and EmailJS integration
- **Career Portal**: Dedicated career and job application features

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 18, Tailwind CSS
- **Authentication**: Firebase, NextAuth
- **AI Integration**: OpenAI API with custom rate limiting
- **Animations**: Framer Motion, GSAP
- **Code Editing**: Monaco Editor, CodeMirror
- **Email**: SendGrid, EmailJS, Nodemailer
- **Styling**: Tailwind CSS, Styled Components
- **SEO**: Next SEO, Next Sitemap

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager
- Firebase project (for authentication)
- OpenAI API key (for AI assistant)
- SendGrid API key (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/satyamgit1/SnowScripting.git
   cd SnowScripting
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key

   # Email Configuration
   SENDGRID_API_KEY=your_sendgrid_api_key
   EMAILJS_USER_ID=your_emailjs_user_id
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id

   # NextAuth
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### AI Assistant
1. Navigate to the main dashboard
2. Use the AI Assistant panel to ask ServiceNow-related questions
3. Choose your preferred AI model and temperature settings
4. Copy generated code snippets or save them to your notes

### Note Management
1. Create an account or sign in
2. Access the notes section from the dashboard
3. Create, edit, and organize your ServiceNow notes
4. Use the search functionality to find specific content

### Account Management
1. Sign up for a new account or log in with existing credentials
2. Manage your profile and preferences
3. Access your saved notes and conversation history

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
SnowScripting/
├── components/          # Reusable UI components
│   ├── Auth/           # Authentication components
│   ├── Common/         # Common components (SEO, etc.)
│   ├── Notes/          # Note-taking components
│   └── ...
├── pages/              # Next.js pages and API routes
│   ├── api/           # API endpoints
│   └── ...
├── services/          # Service layer (auth, notes)
├── styles/            # Global styles
├── lib/               # Utility functions and configurations
├── hooks/             # Custom React hooks
└── public/            # Static assets
```

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact us through the application's contact form
- Visit our website for additional resources

## 🔗 Links

- [ServiceNow Developer Portal](https://developer.servicenow.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

---

Built with ❤️ for the ServiceNow community