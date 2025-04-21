import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Book, Calendar, LineChart, Home, Clipboard, Check } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("PRAN0570");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Study Materials", path: "/study-materials", icon: <Book className="h-4 w-4 mr-2" /> },
    { name: "Exam Dates", path: "/exam-dates", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { name: "Cutoffs", path: "/cutoffs", icon: <LineChart className="h-4 w-4 mr-2" /> },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-xl font-bold text-primary">appt.ppl</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white pb-3 px-2 pt-2 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center text-gray-700 hover:bg-secondary px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Referral Banner */}
      <div className="bg-primary/10 border-t border-primary py-3 px-4 text-center">
        <span className="h-4 w-4 mr-2">
          Apply for NSET using referral code
          <span className="inline-flex items-center bg-white border border-primary text-primary font-semibold mx-2 px-2 py-0.5 rounded-md">
            PRAN0570
            <button onClick={handleCopy} className="ml-2" title="Copy code">
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Clipboard className="h-4 w-4 text-primary" />
              )}
            </button>
          </span>
           for Rs.500 off on Application fee by clicking
        </span>
        <a
          href="https://www.scaler.com/school-of-technology/application/?utm_source=SST_student_referral"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <Button size="sm" className="text-sm">Apply Now</Button>
        </a>
      </div>
    </>
  );
};

export default Navbar;
