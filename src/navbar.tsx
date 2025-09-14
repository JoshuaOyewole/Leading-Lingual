import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../public/asset/logo.jpg";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Programmes", href: "programmes" },
    { label: "About", href: "about" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Partnership", href: "partnership" },
  ];

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle hash changes and initial load
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } else {
        setActiveSection("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Handle navigation with hash
  // interface NavItem {
  //   label: string;
  //   href: string;
  // }

  const handleNavClick = (href: string): void => {
    closeMenu();
    window.history.pushState(null, "", `#${href}`);
    setActiveSection(href);

    const element: HTMLElement | null = document.getElementById(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleEnrolClick = () => {
    closeMenu();
    window.history.pushState(null, "", "#enrol");
    setActiveSection("enrol");

    const element = document.getElementById("enrol");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Modern navigation with glassmorphism */}
      <nav className="glass fixed top-4 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 z-50 rounded-2xl shadow-xl border border-white/20">
        <div className="flex items-center justify-between p-4 sm:p-5 md:p-6">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
              <img src={logo} alt="Leading Lingual Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-lg" />
            </div>
            <span className="hidden sm:block text-white font-bold text-lg md:text-xl">Leading Lingual</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <ul className="flex gap-6 xl:gap-8 items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative text-white/90 hover:text-white transition-all duration-300 font-medium text-sm xl:text-base py-2 px-3 rounded-lg hover:bg-white/10 ${
                      activeSection === item.href 
                        ? "text-white bg-white/20 shadow-md" 
                        : ""
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 xl:px-8 py-2.5 text-sm xl:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              onClick={handleEnrolClick}
            >
              Enrol Now
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden z-50 relative p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={closeMenu}
          />
          <div className="fixed top-4 right-4 h-auto w-80 sm:w-96 max-w-[90vw] glass-dark rounded-2xl shadow-2xl lg:hidden z-45 transform transition-all duration-300 ease-out animate-slide-up">
            <div className="p-6 pt-8">
              {/* Mobile logo */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="logo" className="w-6 h-6 object-cover rounded" />
                </div>
                <span className="text-white font-bold text-lg">Leading Lingual</span>
              </div>
              
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium block py-3 px-4 text-base rounded-xl w-full text-left ${
                        activeSection === item.href 
                          ? "text-white bg-white/20 shadow-md" 
                          : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="mt-6 pt-4 border-t border-white/20">
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    onClick={handleEnrolClick}
                  >
                    Enrol Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
