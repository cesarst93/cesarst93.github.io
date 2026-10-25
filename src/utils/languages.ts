export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  kali: {
    name: "Kali Linux",
    iconName: "kalilinux",
  },
  vscode: {
    name: "Visual Studio Code",
    iconName: "vscode",
  },
  ubuntu: {
    name: "Ubuntu",
    iconName: "ubuntu",
  },
  dotnet: {
    name: ".NET",
    iconName: "dotnet",
  },
  matlab: {
    name: "MATLAB",
    iconName: "matlab",
  },
  claude: {
    name: "Claude",
    iconName: "claude",
  },
  java: {
    name: "Java",
    className: "bg-white!",
    iconName: "java",
  },
  sqlserver: {
    name: "SQL Server",
    iconName: "sqlserver",
  },
  proteus: {
    name: "Proteus",
    iconName: "proteus",
  },
  multisim: {
    name: "NI Multisim",
    iconName: "multisim",
  },
  quartus: {
    name: "Intel Quartus Prime",
    className: "bg-white!",
    iconName: "intel",
  },
  mplab: {
    name: "MPLAB",
    iconName: "mplab",
  },
  tiaportal: {
    name: "TIA Portal",
    className: "bg-white!",
    iconName: "siemens",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 