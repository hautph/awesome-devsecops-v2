# Security Policy

## 1. Reporting Security Vulnerabilities

### Do NOT Report Security Issues Publicly

If you discover a security vulnerability in this repository, **please DO NOT open a public GitHub issue**. Instead, please report it privately to maintain the security of our community.

### Responsible Disclosure Process

1. **Report via Email**: Send a detailed report to: **security@hautph.dev** or **hautph@gmail.com**
   - Subject: `[SECURITY] Issue in awesome-devsecops-v2`
   - Include: Vulnerability description, impact, reproduction steps, and suggested fixes

2. **What to Include**:
   - Vulnerability type (e.g., XSS, injection, authentication bypass)
   - Affected components/files
   - Step-by-step reproduction instructions
   - Proof of concept (if applicable)
   - Your suggested fix (optional)
   - Your contact information

3. **Expected Response Time**:
   - Initial acknowledgment: Within 24-48 hours
   - First update: Within 5-7 days
   - Fix release: As soon as possible after verification

4. **Confidentiality**:
   - We will keep your identity confidential unless you request otherwise
   - We will not publicly disclose the vulnerability until a fix is released
   - We will acknowledge your contribution (with your permission)

---

## 2. Security Features & Implementations

### CI/CD Security Pipeline ✅

This repository implements comprehensive automated security scanning:

#### **Secret Scanning** 🔐
- **Tool**: Gitleaks
- **Purpose**: Detects exposed secrets, API keys, and credentials
- **Trigger**: On every push and pull request
- **Action**: Fails the build if secrets are detected

#### **Vulnerability Scanning** 🛡️
- **Tool**: Trivy
- **Purpose**: Identifies known vulnerabilities in dependencies and code
- **Scope**: Filesystem mode (checks all dependencies)
- **Severity Levels**: Critical and High
- **Trigger**: On every push and pull request
- **Action**: Fails the build if CRITICAL/HIGH vulnerabilities found

#### **Configuration**:
```yaml
# .github/workflows/security-scan.yml
- Secret scanning via Gitleaks
- Filesystem vulnerability scanning via Trivy
- Runs on: push (main/master), pull requests (main/master)
- Build failure on security findings