"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EkgfLogoSymbol } from "@/components/icons/EkgfLogoSymbol";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/90">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center group gap-2 text-3xl leading-none"
          >
            <EkgfLogoSymbol className="h-[1em] w-[1em] -translate-y-px transition-transform group-hover:scale-110" />
            <span className="hidden font-black tracking-tighter leading-none sm:inline-block">
              EKGF
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/quadrants">Quadrants</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/resources">Resources</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/membership">Membership</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
          >
            <a
              href="https://github.com/EKGF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <a
            href="https://omg.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Object Management Group (OMG)"
            className="hidden sm:flex items-center rounded-md px-2 py-1 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/omg-sdo-logo.svg"
              alt="OMG"
              width={148}
              height={20}
              className="h-6 w-auto dark:hidden"
              unoptimized
            />
            <Image
              src="/omg-sdo-logo-dark.svg"
              alt="OMG"
              width={148}
              height={20}
              className="hidden h-6 w-auto dark:block"
              unoptimized
            />
          </a>
        </div>
      </div>
    </header>
  );
}
