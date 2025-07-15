/**
 * Routes configuration for the Bedrock PMO application
 * This file defines all routes and their access requirements
 */

// Route types
const PUBLIC = "public"; // Accessible to all users
const PROTECTED = "protected"; // Requires authentication
const ADMIN = "admin"; // Requires admin privileges

// Route definitions
const routes = [
  // Public routes
  {
    path: "/",
    name: "Home",
    type: PUBLIC,
    exact: true,
  },
  {
    path: "/login",
    name: "Login",
    type: PUBLIC,
    exact: true,
  },
  {
    path: "/register",
    name: "Register",
    type: PUBLIC,
    exact: true,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    type: PUBLIC,
    exact: true,
  },

  // Protected routes (require authentication)
  {
    path: "/dashboard",
    name: "Dashboard",
    type: PROTECTED,
    exact: true,
  },
  {
    path: "/projects",
    name: "Projects",
    type: PROTECTED,
    exact: true,
  },
  {
    path: "/projects/:id",
    name: "Project Details",
    type: PROTECTED,
    exact: true,
  },
  {
    path: "/profile",
    name: "Profile",
    type: PROTECTED,
    exact: true,
  },

  // Admin routes
  {
    path: "/admin",
    name: "Admin Dashboard",
    type: ADMIN,
    exact: true,
  },
  {
    path: "/admin/users",
    name: "User Management",
    type: ADMIN,
    exact: true,
  },
  {
    path: "/admin/settings",
    name: "System Settings",
    type: ADMIN,
    exact: true,
  },
];

// Helper functions
export const getPublicRoutes = () =>
  routes.filter((route) => route.type === PUBLIC);
export const getProtectedRoutes = () =>
  routes.filter((route) => route.type === PROTECTED);
export const getAdminRoutes = () =>
  routes.filter((route) => route.type === ADMIN);
export const getAllRoutes = () => routes;

export default routes;
