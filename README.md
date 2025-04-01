# Personal Links Page

A clean, responsive links page for social media profiles and portfolio links.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Visit `http://localhost:3000` in your browser

## GitHub Pages Deployment

This project is configured to work with GitHub Pages. To deploy:

1. Push your changes to GitHub
2. Go to your repository settings
3. Under "GitHub Pages", select the `main` branch and `/docs` folder
4. Your site will be available at `https://[username].github.io/[repository-name]`

## Customization

Edit the `public/config.js` file to update your links and profile information:

```javascript
{
    profile: {
        name: "Your Name",
        bio: "Your Bio",
        image: "path/to/image.png"
    },
    links: [
        {
            name: "Platform Name",
            url: "https://platform.com/username",
            icon: "platform-icon"
        }
        // Add more links...
    ]
}
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js/Express (for local development)
- Font Awesome Icons
