
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav-config";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="fixed top-4 left-4 z-50 md:hidden "> {/* Only show on mobile */}
          <Menu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              Logo?
            </Link>
            </SheetTitle>
        </SheetHeader>
        <div className="mt-2 flex flex-col space-y-4 ml-2">
          {navLinks.map((link) => (
            <div key={link.title}>
              <Link href={link.href} >
                {link.title}
              </Link>
              {link.subLinks ? (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {link.subLinks.map((subLink) => (
                    <Link key={subLink.title} href={subLink.href} >

                      = {subLink.title}

                    </Link>
                  ))}
                </div>
              ) : <div />}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}