This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Uark ACM Hackathon Website
This website is designed to be completely reusable for every hackathon. The site is hosted using [Github Pages](https://pages.github.com/). It's accessed at https://uark-acm.github.io/hackathon/.

## Instructions for each Hackathon
**For each hackathon**, open the [EDITME.ts](EDITME.ts) file and modify the values listed at the top. Each value has a short description above it with formatting.

The whole site is designed around the EDITME file. You shouldn't have to touch any of the actual code.

Make sure to [run the site](#running-the-site) to preview the changes before publishing.

### Updating the colors
**Try to do this every hackathon.** The colors are a bit tricky to get right, but you should still do it. Updating the site colors makes it actually look like the site's been updated for a new hackathon. If there's people checking the site, seeing the new colors gives an immediate alert that a new hackathon is scheduled. 

You can edit the colors in [styles/colors.module.scss](styles/colors.module.scss). There's some sites in the [Tools](#color-sites) section at the bottom.

### Changing the Images
1. Place the new images in the [public/img](public/img) directory
2. Update the file names in the EDITME file

The images should automatically scale to fit the boxes.

## Running the site

#### Prerequisites
- [Node.js](https://nodejs.org/en/)

#### Setting up the site
1. Open terminal
2. Navigate to the project directory
3. Run the following...
```bash
npm install
```

You can preview the site changes one of two ways.

- [Storybook](#storybook) - preview individual components
- [Development Server](#development-server) - run the site locally

Storybook lets you preview each individual component on it's own. You'll be able to see each section isolated. The development server will run the site locally. You'll see the site in it's entirety as a user.

### Development Server
To run the site in a local development server, run the following...
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you make any edits.

### Storybook
Use the following command to open storybook...
```bash
npm run storybook
```

Storybook will automatically open in your default browser.

## Useful Tools

### Colors
- [Adobe Color](https://color.adobe.com/)
- [Coolors](https://coolors.co/)
- [Paletton](https://www.paletton.com/)

## Learn More

### Next.js
To learn more about Next.js (the framework this site is based on), take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Storybook
[Storybook](https://storybook.js.org/) is a really cool tool to try out. This project just uses it as a sandbox for developing individual components but it's great for just documentation.
