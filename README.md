#QuickCart -  Gadgets & Accessories

**Welcome to World Of Gadgets & Accessories**  
Upgrade your life with smart gadgets and stylish accessories that make everyday life easier and more fun.

🔗
## 📖 Project Description

QuickCart is a modern e-commerce application built with Next.js 15 that showcases gadgets . The application features a clean, responsive design with both public and protected pages. Users can browse products publicly, view detailed product information, and after authentication, manage products through a protected dashboard.

### Key Features

- **Public Access**: Browse products and view details without authentication
- **User Authentication**: Secure login system using NextAuth.js
- **Product Management**: Authenticated users can add new products
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dark/Light Theme**: Theme toggle for better user experience
- **Real-time Feedback**: Loading states and toast notifications

## 🚀 Technologies Used

- **Frontend**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Database**: [Your database choice - e.g., MongoDB, PostgreSQL]
- **Deployment**: Vercel
- **State Management**: React Context/Hooks
- **UI Components**: Custom components with Tailwind

## 📂 Route Summary

| Route | Access Level | Description |
|-------|-------------|-------------|
| `/` | Public | Landing page with hero, product highlights, and navigation |
| `/login` | Public | Authentication page with social/credential login |
| `/products` | Public | Product listing page showing all available products |
| `/products/[id]` | Public | Individual product details page |
| `/dashboard/add-product` | Protected | Product management form (requires authentication) |

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or pnpm package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone
   cd quickcart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-key
   
   # Google OAuth (if using Google login)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # Database connection (adjust based on your database)
   MongoDB_URL=your-database-connection-string
   DB_NAME=your-database-name
   NEXT_PUBLIC_IMGBB_API_KEY=your-imgbb-api-key
   ```

4. **Database Setup**
   ```bash
   # Set up your database schema/migrations
   npm run db:setup
   # or
   pnpm run db:setup
   # or follow your database-specific setup instructions
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build && npm start
# or
pnpm build && pnpm start
```


## 🔐 Authentication Flow

1. Users click "Login" on the navbar
2. Redirect to `/login` page
3. Choose authentication method (Google OAuth or credentials)
4. Successful login redirects to `/products`
5. Protected routes check authentication status
6. Unauthenticated users are redirected to login

## 💾 API Endpoints

| Endpoint | Method | Description | Authentication |
|----------|--------|-------------|----------------|
| `/api/products` | GET | Fetch all products | Public |
| `/api/products/[id]` | GET | Fetch single product | Public |
| `/api/products` | POST | Create new product | Required |
| `/api/auth/[...nextauth]` | ALL | NextAuth.js handlers | - |

## 🎨 Features

### Landing Page Components
- **Navbar**: Navigation with login/logout functionality
- **Hero Section**: Welcome message and call-to-action
- **Product Highlights**: Featured products showcase
- **Footer**: Links and company information

### User Experience
- Loading spinners during form submissions
- Toast notifications for success/error messages
- Responsive design for all screen sizes
- Theme toggle for dark/light mode preference





## 🧪 Testing

```bash
# Run tests
npm test
# or
pnpm test

# Run tests in watch mode
npm run test:watch
# or
pnpm run test:watch

# Generate coverage report
npm run test:coverage
# or
pnpm run test:coverage
```

## 🤝 Contributing


<!-- ## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## 📞 Support

If you have any questions or need help with setup, please:

- Open an issue on GitHub
- Contact: [nafisac45@gmail.com@gmail.com]
- Documentation: [[View Documentation](https://docs.google.com/document/d/16XhnL1g48KvJIkn_jCHAAC_I5qOMA5u8M95s_OTIte0/edit?usp=sharing)]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for seamless authentication
- Tailwind CSS for utility-first styling
- Vercel for effortless deployment

---

**Made with ❤️ by [Nafisa Chowdhury]**
