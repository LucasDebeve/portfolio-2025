import { useEffect, useState } from "react";
import DarkModeSwitcher from "./darkModeSwitch";
import { Book, BriefcaseBusiness, Home, Info } from "lucide-react";

function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            rootMargin: "-50% 0px -50% 0px", // active au centre de l'écran
            threshold: 0,
          }
        );
        sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClass = (id: string) =>
    `transition-all hover:font-medium text-zinc-900 dark:text-gray-300 ${
      activeSection === id ? "font-bold dark:font-medium" : "dark:font-thin"
    }`;

  const linkIsActive = (id: string) => activeSection === id;

    return (
      <>
        <header className="hidden md:block bg-gray-50 text-zunc-900 p-4 border-b border-zinc-300 dark:border-zinc-600 sticky top-0 z-50 dark:bg-zinc-900 dark:text-gray-300">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-medium">Lucas Debeve</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#header" className={linkClass("header")}>Accueil</a></li> 
                        <li><a href="#whoiam" className={linkClass("whoiam")}>Qui suis-je ?</a></li>
                        <li><a href="#experiences" className={linkClass("experiences")}>Expériences</a></li>
                        <li><a href="#competences" className={linkClass("competences")}>Compétences</a></li>
                        <li>
                            <DarkModeSwitcher />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <footer className="fixed md:hidden bottom-0 left-0 right-0 bg-gray-50 text-zinc-900 border-t border-zinc-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-gray-300 z-50 md:hidden">
          <nav>
            <ul className="flex justify-around items-center p-2">
              <li><a href="#header" className={linkClass("header")}>
                <Home className="w-6 h-6" strokeWidth={linkIsActive("header") ? 2.5 : 2} />
              </a></li> 
              <li><a href="#whoiam" className={linkClass("whoiam")}><Info className="w-6 h-6" strokeWidth={linkIsActive("whoiam") ? 2.5 : 2} /></a></li>
              <li><a href="#experiences" className={linkClass("experiences")}><BriefcaseBusiness className="w-6 h-6" strokeWidth={linkIsActive("experiences") ? 2.5 : 2} /></a></li>
              <li><a href="#competences" className={linkClass("competences")}><Book className="w-6 h-6" strokeWidth={linkIsActive("competences") ? 2.5 : 2} /></a></li>
              <li>
                <DarkModeSwitcher />
              </li>
            </ul>
          </nav>
        </footer>
        </>
    )
}
export default Navbar;