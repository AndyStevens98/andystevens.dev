### Running the Template

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Setting Up Resend for Contact Form

To receive emails from the contact form, you need to configure Resend:

1.  **Sign up on [Resend](https://resend.com/)**: Create a free account.

2.  **Generate API Key**:
    - Go to the "API Keys" section in your Resend dashboard.
    - Click "Create API Key".
    - Give it a name (e.g., "Portfolio") and set permissions to "Full Access" for sending emails.
    - Copy the generated API key.

3.  **Set Local Environment Variables**:
    - For local development, create a file named `.env.local` in the root of your project.
    - Add the following variables to the file:

    ```
    RESEND_API_KEY=your_resend_api_key
    CONTACT_EMAIL=your_email@example.com
    ```

    - Replace `your_resend_api_key` with the key you copied from Resend.
    - Replace `your_email@example.com` with the email address where you want to receive contact form submissions.

4.  **Add Environment Variables to Vercel**:
    - When you deploy your project to Vercel, you need to add the `RESEND_API_KEY` and `CONTACT_EMAIL` to your Vercel project's environment variables.
    - In your Vercel project dashboard, go to "Settings" > "Environment Variables".
    - Add the `RESEND_API_KEY` and `CONTACT_EMAIL` with their respective values.

Now your contact form should be able to send you emails via Resend, both locally and in production.

## Customization

### Personal Information

1. Update metadata in `app/layout.tsx`:
   - Site title
   - Description
   - Open Graph metadata
   - Favicon

2. Modify content in `app/page.tsx`:
   - Hero section
   - About section
   - Projects
   - Contact information

3. Replace assets:
   - Replace images in the `public` directory
   - Update social media icons
   - Modify logo if needed

### Styling

1. Colors and Theme:
   - Customize colors in `tailwind.config.js`
   - Modify theme variables in `app/globals.css`

2. Typography:
   - Update font families in `tailwind.config.js`
   - Modify text sizes and weights

3. Layout:
   - Adjust spacing and padding in component files
   - Modify responsive breakpoints in `tailwind.config.js`

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed
   - Clear `.next` folder and node_modules
   - Run `npm install` again

2. **Styling Issues**
   - Run `npm run build` to ensure TailwindCSS classes are generated
   - Check for conflicting styles in `globals.css`

3. **Image Loading**
   - Verify images are in the correct format (PNG, JPG, WebP)
   - Check image paths are correct
   - Ensure images are in the `public` directory

## Deployment

Follow these steps to deploy your portfolio for free using GitHub and Vercel:

1. Create a new GitHub repository

2. Push your portfolio to GitHub

3. Deploy with Vercel:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Import your GitHub repository

## Enabling Vercel Analytics

This template includes the necessary components to use Vercel Analytics. To enable it, follow these steps:

1.  Go to your project's dashboard on [Vercel](https://vercel.com).
2.  Navigate to the "Analytics" tab.
3.  Click "Enable" to start tracking visitor data.

No code changes are needed, as the `<Analytics />` component is already included in the layout.

- Vercel will automatically detect Next.js
- Click "Deploy"

Your portfolio will be live in minutes with a free Vercel domain (e.g., `your-repo.vercel.app`). You can later add a custom domain in your Vercel project settings.

## Support

If you have any other questions or you encountered bugs/problems, you should write on the [private discord](https://discord.gg/WUCVGW72xd) or on https://www.devportfoliotemplates.com/contact.
