# Quiz Application - Frontend

This is the frontend for the Quiz Application, designed to be deployed on Vercel and connected to a backend API.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/quiz-app-frontend)

## Features

- **Responsive Design**: Modern UI with Bootstrap framework
- **Admin Dashboard**: Quiz management and user oversight
- **Employee Interface**: Quiz taking and submission tracking
- **Role-based Views**: Different interfaces for admin and employee users
- **Server-side Rendering**: EJS templates for dynamic content

## Technology Stack

- **HTML/CSS/JavaScript** - Core frontend technologies
- **Bootstrap** - UI framework for responsive design
- **EJS** - Template engine for server-side rendering
- **Static Assets** - Images, icons, and client-side scripts

## Project Structure

```
frontend/
├── public/           # Static assets
│   ├── index.html    # Main entry point
│   └── favicon.svg   # Application icon
├── views/            # EJS templates
│   ├── admin/        # Admin dashboard views
│   └── employee/     # Employee interface views
└── package.json      # Frontend dependencies
```

## API Integration

This frontend is designed to work with a backend API. You'll need to:

1. **Deploy the backend** to Render or similar service
2. **Update API endpoints** in the frontend code
3. **Configure CORS** on the backend to allow frontend requests

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

## Vercel Deployment

### 1. Connect Repository
- Push this code to a GitHub repository
- Connect the repository to Vercel

### 2. Build Settings
- **Framework Preset**: Other
- **Build Command**: `npm run build` (or leave empty)
- **Output Directory**: `public` (or leave as default)

### 3. Environment Variables
Set these in your Vercel project:
- `API_BASE_URL` - Your backend API URL (e.g., `https://your-app.onrender.com`)

## Backend API Requirements

Your backend should provide these endpoints:
- `POST /api/login` - User authentication
- `GET /api/quizzes` - Fetch available quizzes
- `POST /api/quizzes` - Create new quizzes (admin)
- `GET /api/admin/*` - Admin-specific endpoints
- `POST /api/submissions` - Submit quiz answers

## Customization

### Updating API Endpoints
After deploying your backend, update the API URLs in:
- JavaScript files in `public/` folder
- EJS templates in `views/` folder

### Styling
- Modify Bootstrap classes in EJS templates
- Add custom CSS in `public/` folder
- Update `favicon.svg` for your brand

## Development Workflow

1. **Backend First**: Deploy backend API to Render
2. **Update Frontend**: Modify API endpoints to point to your backend
3. **Deploy Frontend**: Deploy to Vercel
4. **Test Integration**: Verify frontend-backend communication

## License

ISC
