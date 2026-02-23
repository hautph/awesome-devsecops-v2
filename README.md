# Awesome DevSecOps v0.2.0

A comprehensive DevSecOps resource hub featuring security tools, learning paths, code examples, and best practices for integrating security into your DevOps pipeline. This project serves as a curated collection of resources to help developers, security professionals, and DevOps engineers implement security measures throughout the software development lifecycle.

## 🎯 Purpose & Goals

The primary goal of this project is to bridge the gap between development, security, and operations teams by providing:

- **Educational Resources**: Curated content to learn DevSecOps concepts from basics to advanced topics
- **Practical Tools**: A comprehensive directory of security tools with categorization and comparison
- **Implementation Guidance**: Real-world examples and best practices for implementing security in CI/CD pipelines
- **Community Collaboration**: A platform for sharing knowledge and experiences in DevSecOps practices
- **Roadmap Guidance**: Structured learning paths for different roles and skill levels

## 🚀 Features

- **🛠️ Tools Directory**: Discover and compare security tools across multiple categories
- **📚 Learning Resources**: Curated books, courses, videos, and practice platforms
- **🛣️ DevSecOps Roadmap**: Step-by-step learning path from beginner to expert
- **💻 Code Examples**: Ready-to-use configurations for CI/CD pipelines
- **👥 Community**: Contribution guidelines and collaboration resources

## 💡 Why DevSecOps?

Integrating security into your DevOps practices offers numerous benefits:

- **Early Vulnerability Detection**: Identify and fix security issues early in the development cycle
- **Faster Remediation**: Reduce time to fix security vulnerabilities with automated scanning
- **Reduced Risk**: Minimize security-related incidents in production environments
- **Compliance**: Meet regulatory requirements with built-in security checks
- **Cost Efficiency**: Address security issues earlier when they're less expensive to fix
- **Collaboration**: Foster better cooperation between development, security, and operations teams

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hautph/awesome-devsecops-v2.git
   cd awesome-devsecops-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` to see the application running.

## 🏗️ Project Structure

```
awesome-devsecops-v2/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── api/            # API routes
│   │   ├── community/      # Community page
│   │   ├── examples/       # Code examples
│   │   ├── resources/      # Learning resources
│   │   ├── roadmap/        # DevSecOps roadmap
│   │   ├── tools/          # Tools directory
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # UI components (shadcn/ui)
│   ├── data/               # Static data files
│   │   ├── tools.json      # Tools database
│   │   ├── resources.json  # Learning resources
│   │   ├── roadmap.json    # Roadmap data
│   │   └── examples.json   # Code examples
│   ├── hooks/              # React hooks
│   │   ├── use-mobile.ts   # Mobile detection hook
│   │   └── use-toast.ts    # Toast notification hook
│   ├── lib/                # Utility functions
│   │   ├── db.ts           # Database utilities
│   │   ├── types.ts        # Type definitions
│   │   └── utils.ts        # Helper functions
│   └── types/              # Type definitions
│       └── index.ts        # Shared type definitions
├── public/                 # Static assets
├── .env.example           # Environment variables example
├── .gitignore             # Git ignore rules
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run db:push` - Push Prisma schema to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run Prisma migration
- `npm run db:reset` - Reset Prisma database
- `bun run dev` - Start development server with Bun
- `bun run build` - Build for production with Bun
- `bun run start` - Start production server with Bun
- `bun run db:push` - Push Prisma schema to database with Bun
- `bun run db:generate` - Generate Prisma client with Bun
- `bun run db:migrate` - Run Prisma migration with Bun
- `bun run db:reset` - Reset Prisma database with Bun

## 🛡️ DevSecOps Tools Included

### Static Application Security Testing (SAST)
- SonarQube
- Semgrep
- CodeQL
- Bandit
- Brakeman

### Dynamic Application Security Testing (DAST)
- OWASP ZAP
- Burp Suite
- Nuclei

### Software Composition Analysis (SCA)
- Snyk
- OWASP Dependency-Check
- Trivy

### Container Security
- Trivy
- Clair
- Hadolint
- Falco

### Infrastructure as Code (IaC) Security
- Checkov
- tfsec
- Terrascan
- KICS

### Secrets Management
- GitLeaks
- TruffleHog
- HashiCorp Vault
- detect-secrets

## 📚 Learning Resources

The platform includes categorized learning materials:
- **Books**: Comprehensive security guides
- **Courses**: Online training programs
- **Videos**: Tutorial and conference talks
- **Practice Platforms**: Hands-on CTF and labs
- **Documentation**: Official guides and references

## 🛣️ DevSecOps Roadmap

Follow our structured learning path:
1. **Beginner** (4-6 weeks): Fundamentals and basic tools
2. **Intermediate** (8-12 weeks): Advanced tools and practices
3. **Advanced** (12-16 weeks): Expert-level security architecture

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes:**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass
- Use conventional commit messages

## 📖 Adding New Tools

To add a new tool to the database:

1. **Edit `src/data/tools.json`**
2. **Add tool object with required fields:**
   ```json
   {
     "id": "tool-name",
     "name": "Tool Name",
     "description": "Brief description",
     "categories": ["category-id"],
     "type": "open-source|freemium|commercial",
     "website": "https://tool-website.com",
     "github": "https://github.com/user/repo"
   }
   ```
3. **Add category if needed in the categories array**

## 📚 Contributing Resources and Examples

To contribute learning resources or code examples:

1. **Learning Resources**: Edit `src/data/resources.json` following the existing structure
2. **Code Examples**: Add to `src/data/examples.json` with proper categorization
3. **Roadmap Updates**: Modify `src/data/roadmap.json` to improve learning paths
4. **Ensure all contributions follow the existing JSON schema and include proper descriptions**

## 🎨 Technology Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks, Zustand
- **Data Fetching**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit
- **Data Tables**: TanStack Table
- **Authentication**: NextAuth.js
- **Internationalization**: next-intl
- **Database**: Prisma ORM
- **Data**: Static JSON files
- **Linting**: ESLint
- **Formatting**: Prettier

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations. You can reference the `.env.example` file in the project root:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# API Keys (if needed)
API_KEY=your-api-key

# Database URL (if using database)
DATABASE_URL=your-database-url
```

### Customization

- **Theme**: Modify `src/app/globals.css` and `tailwind.config.ts`
- **Components**: Customize UI components in `src/components/ui/`
- **Data**: Update JSON files in `src/data/` or configure Prisma database in `prisma/schema.prisma`
- **Database**: Manage database schema and migrations with Prisma commands

## 🚨 Security

This project follows DevSecOps security best practices:
- Regular dependency updates with automated scanning
- Static Application Security Testing (SAST) integration
- Secure configuration defaults following security-first principles
- Input validation and sanitization throughout the application
- Adherence to security guidelines for all integrated tools and services
- Proper handling of secrets and environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The project is open source and contributions are welcome. By contributing, you agree that your contributions will be licensed under the same MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [React](https://reactjs.org/) for the UI library
- The DevSecOps community for tools and resources
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives

## 📞 Support

- **Issues**: Report bugs on [GitHub Issues](https://github.com/hautph/awesome-devsecops-v2/issues)
- **Discussions**: Join our [GitHub Discussions](https://github.com/hautph/awesome-devsecops-v2/discussions)
- **Community**: Connect with other DevSecOps practitioners

## 🔄 Updates

We regularly update:
- Tool database with new security tools
- Learning resources and tutorials
- Roadmap with current best practices
- Code examples for modern CI/CD platforms

---

**Star this repository** if you find it useful! ⭐

*Made with ❤️ for the DevSecOps community*