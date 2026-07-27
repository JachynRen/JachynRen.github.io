This is a [Next.js](https://nextjs.org) project configured for GitHub Pages static deployment.

## Getting Started

> ⚠️  **克隆项目后，请先安装依赖**
>
> `node_modules` 被 `.gitignore` 忽略，不会随 Git 下载，因此克隆后必须先执行：
>
> ```bash
> npm install
> ```

### 启动开发服务器

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

1. Create a repository named `JachynRen.github.io` under your GitHub account.
2. Push this project to the `main` branch.
3. In GitHub, open your repository settings and enable GitHub Pages from the `GitHub Actions` source.
4. Every push to `main` will build and publish the site automatically.

If you use a different repository name, GitHub Pages still works, but the repository must be set up as a project page and may need a `basePath`.
