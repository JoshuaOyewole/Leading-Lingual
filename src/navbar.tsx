import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../public/asset/logo.jpg";
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Programmes", href: "#programmes" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Partnership", href: "#partnership" },
  ];

  // Prevent body scroll when menu is open
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8 relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <ul className="flex gap-4 xl:gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-800 hover:text-red-500 transition-colors font-medium text-sm xl:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-4 xl:px-6 py-2 text-sm xl:text-base rounded-lg">
            Enquire
          </Button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden z-50 relative p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </nav>

      {/* Mobile/Tablet Navigation Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMenu}
          />

          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 max-w-[85vw] bg-white shadow-2xl lg:hidden z-45 transform transition-transform duration-300 ease-in-out">
            <div className="p-4 sm:p-6 pt-16 sm:pt-20">
              <ul className="flex flex-col gap-4 sm:gap-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-800 hover:text-red-500 transition-colors font-medium block py-2 sm:py-3 text-base sm:text-lg border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white w-full py-2 sm:py-3 text-base sm:text-lg"
                    onClick={closeMenu}
                  >
                    Enquire
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
