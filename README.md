# Awesome DevSecOps

A comprehensive DevSecOps resource hub featuring security tools, learning paths, code examples, and best practices for integrating security into your DevOps pipeline.

## 🚀 Features

- **🛠️ Tools Directory**: Discover and compare security tools across multiple categories
- **📚 Learning Resources**: Curated books, courses, videos, and practice platforms
- **🛣️ DevSecOps Roadmap**: Step-by-step learning path from beginner to expert
- **💻 Code Examples**: Ready-to-use configurations for CI/CD pipelines
- **👥 Community**: Contribution guidelines and collaboration resources

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
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` to see the application running.

## 🏗️ Project Structure

```
awesome-devsecops/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── api/            # API routes
│   │   ├── community/      # Community page
│   │   ├── examples/       # Code examples
│   │   ├── resources/      # Learning resources
│   │   ├── roadmap/        # DevSecOps roadmap
│   │   ├── tools/          # Tools directory
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
│   └── lib/                # Utility functions
├── public/                 # Static assets
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

## 🎨 Technology Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Hooks
- **Data**: Static JSON files

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# API Keys (if needed)
API_KEY=your-api-key
```

### Customization

- **Theme**: Modify `src/app/globals.css` and `tailwind.config.ts`
- **Components**: Customize UI components in `src/components/ui/`
- **Data**: Update JSON files in `src/data/`

## 🚨 Security

This project follows security best practices:
- Regular dependency updates
- Code scanning and linting
- Secure configuration defaults
- Input validation and sanitization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework
- The DevSecOps community for tools and resources

## 📞 Support

- **Issues**: Report bugs on [GitHub Issues](https://github.com/your-username/awesome-devsecops/issues)
- **Discussions**: Join our [GitHub Discussions](https://github.com/your-username/awesome-devsecops/discussions)
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