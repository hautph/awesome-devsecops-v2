# Awesome DevSecOps Tools [![Awesome](https://awesome.re)](https://awesome.re)

A curated list of awesome DevSecOps tools to help you integrate security into your DevOps pipeline.

## Table of Contents
- [SCA (Software Composition Analysis)](#sca)
- [SAST (Static Application Security Testing)](#sast)
- [DAST (Dynamic Application Security Testing)](#dast)
- [Infrastructure as Code (IaC) Security](#iac-security)
- [Secret Scanning](#secret-scanning)
- [Container Security](#container-security)

---

## SCA (Software Composition Analysis)
*Analyze open-source dependencies for known vulnerabilities.*
- [Snyk](https://snyk.io) - Developer-first platform to find and fix vulnerabilities in dependencies.
- [OWASP Dependency-Check](https://owasp.org) - Identifies project dependencies and checks if there are any known, publicly disclosed vulnerabilities.
- [Trivy](https://aquasecurity.github.io) - A comprehensive security scanner for containers and other artifacts.

## SAST (Static Application Security Testing)
*Scan your source code for security flaws without executing it.*
- [SonarQube](https://www.sonarqube.org) - Automatic code review tool to detect bugs, vulnerabilities, and code smell.
- [Semgrep](https://semgrep.dev) - Lightweight static analysis for many languages. 
- [Scheck](https://github.com) - Specifically for inspecting Go source code for security problems.

## DAST (Dynamic Application Security Testing)
*Testing the application while it is running.*
- [OWASP ZAP](https://www.zaproxy.org) - The world’s most widely used web app scanner (Free and Open Source).
- [Burp Suite](https://portswigger.net) - A leading graphical tool for testing Web application security.
- [Nikto](https://github.com) - An Open Source web server scanner.

## Infrastructure as Code (IaC) Security
*Scan Terraform, CloudFormation, or Kubernetes manifests.*
- [Checkov](https://www.checkov.io) - Static analysis tool for IaC.
- [Terrascan](https://tenable.github.io) - Detect compliance and security violations across IaC.
- [Tfsec](https://github.com) - Specifically for Terraform security scanning.

## Secret Scanning
*Prevent passwords and API keys from being leaked to GitHub.*
- [Gitleaks](https://github.com) - Audit git repos for secrets.
- [TruffleHog](https://github.com) - Searches through git repositories for high entropy strings and secrets.

## Container Security
- [Anchore](https://anchore.com) - A tool for analyzing container images for vulnerabilities.
- [Clair](https://github.com) - Vulnerability static analysis for containers.

---
*Contributions are welcome! Please read the contribution guidelines.*