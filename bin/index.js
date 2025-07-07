#!/usr/bin/env node

// 


import fs from 'fs';
import path from 'path';
import { scanFile } from '../lib/scanner.js';
import chalk from 'chalk';

const currentDir = process.cwd();
const fileList = [];
const ignoreDirs = [
  // Version control
  '.git', '.svn', '.hg',
  
  // Dependencies
  'node_modules', 'bower_components', 'vendor', 'packages',
  
  // Build outputs
  'dist', 'build', 'out', 'output', 'public', 'static', 'lib',
  
  // Cache and temporary
  '.cache', '.parcel-cache', '.next', '.nuxt', 'coverage', '.nyc_output', 'tmp', 'temp',
  
  // IDE/Editor
  '.vscode', '.idea', '.eclipse', '.settings', '__pycache__', '.pytest_cache',
  
  // Framework specific
  '.angular', 'target', 'bin', 'obj',
  
  // Documentation
  'docs', 'doc', 'documentation',
  
  // Logs
  'logs', 'log',
  
  // Mobile/Cloud
  '.expo', 'lambda', 'functions/node_modules',
  
  // Large directories that usually don't contain secrets
  'migrations', 'seeds', 'wwwroot', 'public/build'
];

const ignoreFiles = [
  // Lock files (large and don't contain secrets)
  'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'composer.lock', 'Gemfile.lock',
  
  // Large data files
  '*.sql', '*.dump', '*.backup', '*.bak',
  
  // Compiled files (usually minified/obfuscated)
  '*.min.js', '*.min.css', '*.bundle.js', '*.chunk.js', '*.map',
  
  // Images (don't contain secrets)
  '*.jpg', '*.jpeg', '*.png', '*.gif', '*.svg', '*.ico', '*.webp',
  
  // Videos/Audio
  '*.mp4', '*.avi', '*.mkv', '*.mp3', '*.wav',
  
  // Documents
  '*.pdf', '*.doc', '*.docx', '*.ppt', '*.pptx',
  
  // Archives
  '*.zip', '*.tar', '*.gz', '*.rar', '*.7z',
  
  // Fonts
  '*.ttf', '*.otf', '*.woff', '*.woff2',
  
  // Binary files
  '*.exe', '*.dll', '*.so', '*.dylib',
  
  // Configuration files (usually safe)
  'webpack.config.js', 'rollup.config.js', 'babel.config.js',
  
  // Documentation
  'CHANGELOG.md', 'LICENSE', 'README.md'
];

function walkDir(dir, fileList) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (ignoreFiles.includes(file)) continue;
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && !ignoreDirs.includes(file)) {
      walkDir(fullPath, fileList);
    } else if (stats.isFile()) {
      fileList.push(fullPath);
    }
  }
}

function printHeader() {
  console.log(chalk.cyan('🔐 SECRET SCANNER REPORT'));
  console.log(chalk.cyan('=' .repeat(50)));
  console.log();
}

function printSummary(allResults, totalFiles) {
  const totalSecrets = allResults.length;
  const uniqueFiles = [...new Set(allResults.map(r => r.file))].length;
  const secretTypes = [...new Set(allResults.map(r => r.type))];
  
  console.log(chalk.yellow('📊 SCAN SUMMARY'));
  console.log(chalk.yellow('-'.repeat(30)));
  console.log(`📁 Total files scanned: ${chalk.white(totalFiles)}`);
  console.log(`🚨 Total secrets found: ${chalk.red(totalSecrets)}`);
  console.log(`📄 Files with secrets: ${chalk.red(uniqueFiles)}`);
  console.log(`🔍 Secret types found: ${chalk.magenta(secretTypes.length)}`);
  console.log();
}

function printDetailedResults(allResults) {
  if (allResults.length === 0) {
    console.log(chalk.green('✅ No secrets found! Your codebase looks clean.'));
    return;
  }

  console.log(chalk.red('🚨 DETAILED FINDINGS'));
  console.log(chalk.red('-'.repeat(30)));
  
  // Group results by file for better organization
  const resultsByFile = {};
  allResults.forEach(result => {
    if (!resultsByFile[result.file]) {
      resultsByFile[result.file] = [];
    }
    resultsByFile[result.file].push(result);
  });

  // Print results grouped by file
  Object.entries(resultsByFile).forEach(([file, results], index) => {
    console.log(`\n${chalk.cyan(`📁 File ${index + 1}:`)} ${chalk.white(file)}`);
    console.log(chalk.gray('─'.repeat(60)));
    
    results.forEach((result, resultIndex) => {
      console.log(`  ${chalk.yellow(`${resultIndex + 1}.`)} ${chalk.red(result.type)}`);
      console.log(`     ${chalk.gray('Line:')} ${chalk.magenta(result.line)}`);
      console.log(`     ${chalk.gray('Code:')} ${chalk.white(result.snippet)}`);
      if (resultIndex < results.length - 1) {
        console.log(); // Add space between results in same file
      }
    });
  });
}

function printRecommendations(allResults) {
  if (allResults.length === 0) return;
  
  console.log('\n' + chalk.yellow('💡 RECOMMENDATIONS'));
  console.log(chalk.yellow('-'.repeat(30)));
  console.log('1. Remove hardcoded secrets from your code');
  console.log('2. Use environment variables (.env files)');
  console.log('3. Add .env to your .gitignore');
  console.log('4. Use secret management tools for production');
}

function printFooter() {
  console.log('\n' + chalk.cyan('=' .repeat(50)));
  console.log(chalk.cyan('🔐 Scan completed successfully!'));
}

// Main execution
console.log(chalk.blue('🔍 Starting secret scan...'));
console.log(chalk.gray('Collecting files...'));

walkDir(currentDir, fileList);

console.log(chalk.gray(`Found ${fileList.length} files to scan`));
console.log(chalk.gray('Scanning for secrets...\n'));

// Collect ALL results first (don't print immediately)
const allResults = [];
let filesScanned = 0;

for (const filePath of fileList) {
  const result = scanFile(filePath);
  allResults.push(...result); // Add all results to our collection
  filesScanned++;
  
  // Show progress (optional)
  if (filesScanned % 10 === 0 || filesScanned === fileList.length) {
    process.stdout.write(`\r${chalk.gray(`Progress: ${filesScanned}/${fileList.length} files`)}`);
  }
}

// Clear progress line
console.log('\n');

// Now generate the complete report
printHeader();
printSummary(allResults, fileList.length);
printDetailedResults(allResults);
printRecommendations(allResults);
printFooter();

// Exit with appropriate code
process.exit(allResults.length > 0 ? 1 : 0);