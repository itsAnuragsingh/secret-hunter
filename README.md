<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/itsAnuragsingh/secret-hunter/refs/heads/main/image_1751879614149.jpeg" width="777" />
  <h1>🔐 Secret Hunter</h1>
  <p>
    <strong>Lightning-fast secret detection for secure development</strong>
  </p>
  <p>
    A powerful CLI tool that scans your codebase for exposed API keys, secrets, and sensitive information with zero configuration required.
  </p>
  
  <p>
    <a href="https://www.npmjs.com/package/secret-hunter">
      <img src="https://img.shields.io/npm/v/secret-hunter.svg?style=for-the-badge&color=007ACC&logo=npm" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/package/secret-hunter">
      <img src="https://img.shields.io/npm/dm/secret-hunter.svg?style=for-the-badge&color=FF6B6B&logo=npm" alt="npm downloads" />
    </a>
    <a href="https://github.com/itsAnuragsingh/secret-hunter/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/secret-hunter.svg?style=for-the-badge&color=4ECDC4&logo=opensourceinitiative" alt="license" />
    </a>
    <a href="https://github.com/itsAnuragsingh/secret-hunter/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/itsAnuragsingh/secret-hunter/ci.yml?branch=main&style=for-the-badge&logo=githubactions" alt="build status" />
    </a>
  </p>
  
  <p>
    <a href="https://github.com/itsAnuragsingh/secret-hunter">
      <img src="https://img.shields.io/github/stars/itsAnuragsingh/secret-hunter?style=for-the-badge&color=FFD93D&logo=github" alt="GitHub stars" />
    </a>
    <a href="https://github.com/itsAnuragsingh/secret-hunter">
      <img src="https://img.shields.io/github/forks/itsAnuragsingh/secret-hunter?style=for-the-badge&color=6BCF7F&logo=github" alt="GitHub forks" />
    </a>
    <a href="https://github.com/itsAnuragsingh/secret-hunter/issues">
      <img src="https://img.shields.io/github/issues/itsAnuragsingh/secret-hunter?style=for-the-badge&color=FF6B6B&logo=github" alt="GitHub issues" />
    </a>
    <a href="https://github.com/itsAnuragsingh/secret-hunter/pulls">
      <img src="https://img.shields.io/github/issues-pr/itsAnuragsingh/secret-hunter?style=for-the-badge&color=4ECDC4&logo=github" alt="GitHub pull requests" />
    </a>
  </p>
  
  <p>
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-features">Features</a> •
    <a href="#-what-we-detect">Detection</a> •
    <a href="#-contributing">Contributing</a>
  </p>
  
  <br />
  
  
  <br />
  <br />
</div>

---

## 🔥 Features

| Feature | Description |
|---------|-------------|
| ⚡ **Lightning Fast** | Scans thousands of files in seconds with optimized algorithms |
| 🎯 **Smart Detection** | AI-powered pattern matching with minimal false positives |
| 🔍 **Comprehensive** | Detects API keys, tokens, database URLs, private keys and more |
| 📊 **Rich Reports** | Beautiful CLI output with file locations and security recommendations |
| 🛡️ **Zero Config** | Works out of the box with intelligent defaults - no setup required |
| 📁 **Smart Filtering** | Automatically ignores irrelevant files and directories |
| 🎨 **Beautiful UI** | Colorized output with progress indicators and clear formatting |

---

## 📦 Installation

Choose your preferred installation method:

### Using npm (Recommended)
```bash
npm install -g secret-hunter
```

### Using Yarn
```bash
yarn global add secret-hunter
```

### Using npx (No Installation Required)
```bash
npx secret-hunter
```

### From Source
```bash
git clone https://github.com/itsAnuragsingh/secret-hunter.git
cd secret-hunter
npm install
npm link
```

---

## 🎬 Usage

### Quick Start
```bash
# Navigate to your project directory
cd your-project

# Run the scanner
secret-hunter
```

### Example Output
```
🔍 Starting secret scan...
Found 1,247 files to scan
Scanning for secrets...

♂️ SECRET HUNTER REPORT
==================================================

📊 SCAN SUMMARY
------------------------------
📁 Total files scanned: 1,247
🚨 Total secrets found: 3
📄 Files with secrets: 2
🔍 Secret types found: 2

🚨 DETAILED FINDINGS
------------------------------

📁 File 1: src/config/database.js
────────────────────────────────────────────────────────────
  1. MongoDB Connection String
     Line: 12
     Code: const dbUrl = "mongodb://user:password@localhost:27017/myapp"

📁 File 2: .env.example
────────────────────────────────────────────────────────────
  1. OpenAI API Key
     Line: 5
     Code: OPENAI_API_KEY=sk-1234567890abcdef...

  2. Stripe Secret Key
     Line: 8
     Code: STRIPE_SECRET_KEY=sk_live_1234567890abcdef...

💡 RECOMMENDATIONS
------------------------------
1. Remove hardcoded secrets from your code
2. Use environment variables (.env files)
3. Add .env to your .gitignore
4. Use secret management tools for production
5. Consider using tools like HashiCorp Vault or AWS Secrets Manager

==================================================
�️‍♂️ Scan completed successfully!
```

---

## 🔍 What secret-hunter Detects

<details>
<summary><strong>🔑 API Keys & Tokens</strong></summary>
<br>

- **OpenAI API Keys** (`sk-...`)
- **Google API Keys** (`AIza...`)
- **Anthropic API Keys** (`sk-ant-...`)
- **GitHub Personal Access Tokens** (`ghp_...`)
- **Discord Bot Tokens**
- **JWT Tokens**
- **Bearer Tokens**
- **Generic API Keys**

</details>

<details>
<summary><strong>☁️ Cloud Services</strong></summary>
<br>

- **AWS Access Keys** (`AKIA...`)
- **AWS Secret Keys**
- **Azure Storage Keys**
- **Google Cloud Service Keys**
- **Stripe API Keys** (Live & Test)
- **Heroku API Keys**

</details>

<details>
<summary><strong>🗄️ Database Connections</strong></summary>
<br>

- **MongoDB Connection Strings**
- **MySQL Connection Strings**
- **PostgreSQL Connection Strings**
- **Redis Connection Strings**
- **Database URLs with credentials**

</details>

<details>
<summary><strong>📧 Communication Services</strong></summary>
<br>

- **Twilio Account SIDs**
- **SendGrid API Keys**
- **Mailgun API Keys**
- **Slack Bot Tokens**

</details>

<details>
<summary><strong>🔐 Security & Cryptographic Keys</strong></summary>
<br>

- **RSA Private Keys**
- **OpenSSH Private Keys**
- **DSA Private Keys**
- **EC Private Keys**
- **Generic Private Keys**

</details>

---

## 🛠️ Advanced Usage

### 🔒 Pre-commit Hook (Prevent Secrets from Being Committed)
**What it does**: Automatically scans your code before every Git commit. If secrets are found, it blocks the commit.

**Setup Instructions**:
1. Create the hook file:
   ```bash
   # Navigate to your project
   cd your-project
   
   # Create the pre-commit hook
   touch .git/hooks/pre-commit
   chmod +x .git/hooks/pre-commit
   ```

2. Add this content to `.git/hooks/pre-commit`:
   ```bash
   #!/bin/sh
   echo "🔍 Scanning for secrets before commit..."
   secret-hunter
   if [ $? -ne 0 ]; then
       echo "❌ Secrets detected! Please remove them before committing."
       exit 1
   fi
   echo "✅ No secrets found. Commit allowed."
   ```

**How it works**: Every time you run `git commit`, it will automatically scan your code first!

## 📊 Community & Support

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/itsAnuragsingh/secret-hunter/stargazers">
          <img src="https://img.shields.io/github/stars/itsAnuragsingh/secret-hunter?style=social" alt="GitHub stars" />
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/itsAnuragsingh/secret-hunter/network/members">
          <img src="https://img.shields.io/github/forks/itsAnuragsingh/secret-hunter?style=social" alt="GitHub forks" />
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/intent/tweet?text=Check%20out%20Secret%20Hunter%20-%20Lightning%20fast%20secret%20detection%20for%20secure%20development&url=https://www.npmjs.com/package/secret-hunter">
          <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fsecret-hunter" alt="Tweet" />
        </a>
      </td>
    </tr>
  </table>
</div>

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Author

Maintained by [Anurag Singh](https://github.com/itsAnuragsingh) · [LinkedIn](https://linkedin.com/in/itsanuragsingh7) · [Twitter/X](https://twitter.com/itsanurag707)

---
---

<div align="center">
  <h3>⭐ Star this repository if it helped you secure your codebase!</h3>
  <p>
    <em>Built with ❤️ for developers who care about security</em>
  </p>
  <br />
</div>

---

<div align="center">
  <sub>
    <strong>Secret Hunter</strong> - Making secure development accessible to everyone
  </sub>
</div>