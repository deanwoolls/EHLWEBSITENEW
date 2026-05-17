import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/lib/seo";

const NotFound = () => {
  usePageTitle({
    title:
      "Page Not Found | EHL Engineering Group - Consulting Engineers South Africa",
    description:
      "The page you're looking for doesn't exist. Return to EHL Engineering Group for expert EPC and EPCM engineering solutions.",
  });
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
        <div className="text-center px-4">
          <h1 className="text-7xl font-bold text-navy-900 mb-4">404</h1>
          <p className="text-2xl font-semibold text-navy-700 mb-4">
            Page not found
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Let's get you back
            on track.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
