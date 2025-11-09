// src/components/Navbar.tsx
import {
  Github,
  Linkedin,
  Menu,
  Download,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

const navLinks = [
  // { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  // { to: "/blog", label: "Blog" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-14 flex items-center px-4 md:px-8">
        
        {/* 1. Left Side: Logo */}
        {/* 
          - flex-shrink-0 prevents this element from shrinking if space is tight.
          - mr-4 gives it some breathing room from the center nav.
        */}
        <div className="flex-shrink-0 mr-4">
          <Link to="/" className="font-bold text-lg">
            Agung Wibisono
          </Link>
        </div>

        {/* 2. Center: Desktop Navigation */}
        {/* 
          - flex-1 makes this div take up ALL available space between the left and right divs.
          - flex justify-center centers the NavigationMenu component within this div.
        */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <Link to={link.to} className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. Right Side: Actions (Desktop) and Mobile Menu */}
        {/* 
          - flex-shrink-0 prevents this element from shrinking.
          - It will naturally be pushed to the far right by the center div's flex-1.
        */}
        <div className="flex-shrink-0 flex items-center gap-2">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/agungwibi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/agungwibi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
            <Button variant="outline" asChild>
              <a href="/AGUNG_WIBISONO.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    A list of navigation links for the site.
                  </SheetDescription>
                </SheetHeader>
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <Button variant="outline" className="mt-4" asChild>
                    <a href="/AGUNG_WIBISONO.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Resume
                    </a>
                  </Button>

                  <div className="flex items-center gap-4 pt-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://github.com/agungwibi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://linkedin.com/in/agungwibi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </Button>
                    <ThemeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}