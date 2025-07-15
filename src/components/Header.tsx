import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LoginDialog from "./LoginDialog";
import { UserAuth } from "../context/AuthContext"; // Adjust the import path as necessary
interface HeaderProps {
  // Add any props if needed
}

const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const { user, logout } = UserAuth();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  useEffect(() => {
    console.log("User: ", user?.email);
  }, [user]);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#approach" className="nav-link">
                Our Approach
              </a>
              <a href="#testimonials" className="nav-link">
                Testimonials
              </a>
              <a href="#contact" className="nav-link">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {!user ? (
              <>
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Get Started
                </a>
                <button
                  onClick={handleLoginOpen}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={logout}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="#services" className="mobile-nav-link">
            Services
          </a>
          <a href="#approach" className="mobile-nav-link">
            Our Approach
          </a>
          <a href="#testimonials" className="mobile-nav-link">
            Testimonials
          </a>
          <a href="#contact" className="mobile-nav-link">
            Contact Us
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 px-4 space-y-2">
          <a
            href="#contact"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Get Started
          </a>
          <button
            onClick={handleLoginOpen}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Login
          </button>
        </div>
      </div>

      {/* Login Dialog */}
      <LoginDialog open={loginOpen} onClose={handleLoginClose} />
    </header>
  );
};

export default Header;
