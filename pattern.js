// Essential patterns for detecting the most common API keys and secrets
export const patterns = [
  // === MOST COMMON API KEYS ===
  {
    name: 'Google API Key',
    regex: /AIza[0-9A-Za-z\-_]{35}/g
  },
  {
    name: 'OpenAI API Key',
    regex: /sk-[A-Za-z0-9]{48}/g
  },
  {
    name: 'Anthropic API Key',
    regex: /sk-ant-[A-Za-z0-9\-_]{95}/g
  },

  // === AWS (Most Critical) ===
  {
    name: 'AWS Access Key ID',
    regex: /AKIA[0-9A-Z]{16}/g
  },
  {
    name: 'AWS Secret Access Key',
    regex: /(?:aws_secret_access_key|AWS_SECRET_ACCESS_KEY)[\s]*[=:][\s]*[A-Za-z0-9\/+=]{40}/g
  },

  // === DATABASE CONNECTIONS ===
  {
    name: 'MongoDB Connection String',
    regex: /mongodb(?:\+srv)?:\/\/[^\s<>"']+/g
  },
  {
    name: 'MySQL Connection String',
    regex: /mysql:\/\/[^\s<>"']+/g
  },
  {
    name: 'PostgreSQL Connection String',
    regex: /postgres(?:ql)?:\/\/[^\s<>"']+/g
  },
  {
    name: 'Redis Connection String',
    regex: /redis:\/\/[^\s<>"']+/g
  },

  // === PAYMENT PROVIDERS ===
  {
    name: 'Stripe Secret Key',
    regex: /sk_live_[0-9a-zA-Z]{24}/g
  },
  {
    name: 'Stripe Test Key',
    regex: /sk_test_[0-9a-zA-Z]{24}/g
  },

  // === GITHUB (Very Common) ===
  {
    name: 'GitHub Personal Access Token',
    regex: /ghp_[A-Za-z0-9_]{36}/g
  },
  {
    name: 'GitHub Fine-grained Token',
    regex: /github_pat_[A-Za-z0-9_]{82}/g
  },

  // === DISCORD (Popular) ===
  {
    name: 'Discord Bot Token',
    regex: /[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}/g
  },

  // === COMMUNICATION SERVICES ===
  {
    name: 'Twilio Account SID',
    regex: /AC[a-f0-9]{32}/g
  },
  {
    name: 'SendGrid API Key',
    regex: /SG\.[A-Za-z0-9_\-\.]{22}\.[A-Za-z0-9_\-\.]{43}/g
  },

  // === JWT TOKENS ===
  {
    name: 'JWT Token',
    regex: /eyJ[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+/g
  },

  // === PRIVATE KEYS (Critical) ===
  {
    name: 'RSA Private Key',
    regex: /-----BEGIN RSA PRIVATE KEY-----/g
  },
  {
    name: 'Private Key',
    regex: /-----BEGIN PRIVATE KEY-----/g
  },
  {
    name: 'OpenSSH Private Key',
    regex: /-----BEGIN OPENSSH PRIVATE KEY-----/g
  },

  // === REFINED GENERIC PATTERNS (Less False Positives) ===
  {
    name: 'API Key Pattern',
    regex: /(?:api_key|apikey|API_KEY|APIKEY)[\s]*[=:][\s]*['"]*[A-Za-z0-9_\-]{32,}['"]*(?:\s|$)/gi
  },
  {
    name: 'Secret Pattern',
    regex: /(?:secret|password|SECRET|PASSWORD)[\s]*[=:][\s]*['"]*[A-Za-z0-9_\-@#$%^&*()!]{12,}['"]*(?:\s|$)/gi
  },
  {
    name: 'Database URL Pattern',
    regex: /(?:database_url|DATABASE_URL|DB_URL)[\s]*[=:][\s]*['"]*[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^\s<>"']+['"]*(?:\s|$)/gi
  },
  {
    name: 'Bearer Token',
    regex: /(?:bearer|Bearer)[\s]+[A-Za-z0-9\-_\.]{20,}/g
  }
];