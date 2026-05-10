"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Typography } from "../ui/Typography";

const NAV_LINKS = [
  { label: "about",      href: "/#about"      },
  { label: "projects",   href: "/#projects"   },
  { label: "experience", href: "/#experience" },
  { label: "writing",    href: "/#writing"    },
];

export function Navbar({ noBorder = false }: { noBorder?: boolean }) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center py-4 ${noBorder ? "" : "border-b"}`}
      style={{ borderColor: "var(--border)" }}
    >
      {/* Logo */}
      <Link href="/">
        <Typography variant="mono" size="md" as="span">
          otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
        </Typography>
      </Link>

      {/* Desktop — nav links */}
      <div className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <Button asChild font="mono" key={link.href} variant="ghost">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>

      {/* Desktop — right actions */}
      <div className="hidden md:flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={toggle}>
          {theme === "dark" ? "light" : "dark"}
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          style={{
            borderColor: "var(--border-strong)",
            color: "var(--text)",
            background: "var(--tag-bg)",
          }}
        >
          <Link href="/#contact">[ hire me ]</Link>
        </Button>
      </div>

      {/* Mobile — theme toggle + hamburger */}
      <div className="flex md:hidden items-center gap-2">
        <Button variant="outline" size="icon-sm" onClick={toggle} aria-label="Toggle theme">
          {theme === "dark" ? "☀" : "●"}
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="flex flex-col gap-[5px] p-2"
              aria-label="Open menu"
            >
              <span
                className="block w-[18px] h-[1.5px] rounded-sm"
                style={{ background: "var(--text-muted)" }}
              />
              <span
                className="block w-[18px] h-[1.5px] rounded-sm"
                style={{ background: "var(--text-muted)" }}
              />
              <span
                className="block w-[13px] h-[1.5px] rounded-sm"
                style={{ background: "var(--text-muted)" }}
              />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[280px] p-0 flex flex-col border-l"
            style={{
              background: "var(--mat)",
              borderColor: "var(--border-strong)",
            }}
          >
            {/* Drawer header */}
            <div
              className="flex justify-between items-center px-6 py-5 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <SheetTitle>
                <Typography variant="mono" size="md" as="span">
                  otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
                </Typography>
              </SheetTitle>
              <SheetClose asChild>{/* empty */}</SheetClose>
            </div>

            {/* Links */}
            <div className="flex flex-col px-6 py-8 gap-1 flex-1">
              {NAV_LINKS.map((link, i) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 py-3.5 border-b transition-colors duration-200"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    <Typography variant="mono" size="sm" dim as="span" className="w-5">
                      0{i + 1}
                    </Typography>
                    <Typography variant="mono" size="md" as="span">
                      {link.label}
                    </Typography>
                  </Link>
                </SheetClose>
              ))}
            </div>

            {/* Drawer footer — hire me CTA */}
            <div
              className="px-6 py-6 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <SheetClose asChild>
                <Button
                  asChild
                  className="w-full"
                  style={{ background: "var(--text)", color: "var(--mat)" }}
                >
                  <Link href="/#contact">[ hire me ]</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

// export function Navbar() {
//   const { theme, toggle } = useTheme();
//   const [open, setOpen] = useState(false);

//   return (
//     <nav
//       className="flex justify-between items-center py-5 border-b"
//       style={{ borderColor: "var(--border)" }}
//     >
//       {/* Logo */}
//       <Link
//         href="/"
//         className="font-mono text-[13px] tracking-[0.05em]"
//         style={{ color: "var(--text)" }}
//       >
//         otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
//       </Link>

//       {/* Desktop — nav links */}
//       <div className="hidden md:flex items-center gap-6">
//         {NAV_LINKS.map((link) => (
//           <Button asChild font="mono" key={link.href} variant="ghost">
//             <Link href={link.href}>{link.label}</Link>
//           </Button>
//         ))}
//       </div>

//       {/* Desktop — right actions */}
//       <div className="hidden md:flex items-center gap-2">
//         <button
//           onClick={toggle}
//           className="font-mono text-[11px] px-3 py-[5px] rounded-[3px] border transition-all duration-200"
//           style={{
//             borderColor: "var(--border)",
//             color: "var(--text-muted)",
//             background: "transparent",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.borderColor = "var(--border-strong)";
//             e.currentTarget.style.color = "var(--text)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.borderColor = "var(--border)";
//             e.currentTarget.style.color = "var(--text-muted)";
//           }}
//         >
//           {theme === "dark" ? "light" : "dark"}
//         </button>

//         <Link
//           href="/#contact"
//           className="font-mono text-[11px] px-3 py-[5px] rounded-[3px] border transition-all duration-200"
//           style={{
//             borderColor: "var(--border-strong)",
//             color: "var(--text)",
//             background: "var(--tag-bg)",
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.background = "rgba(255,255,255,0.10)")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.background = "var(--tag-bg)")
//           }
//         >
//           [ hire me ]
//         </Link>
//       </div>

//       {/* Mobile — theme toggle + hamburger */}
//       <div className="flex md:hidden items-center gap-2">
//         <button
//           onClick={toggle}
//           className="font-mono text-[11px] px-2.5 py-[5px] rounded-[3px] border"
//           style={{
//             borderColor: "var(--border)",
//             color: "var(--text-muted)",
//             background: "transparent",
//           }}
//         >
//           {theme === "dark" ? "☀" : "●"}
//         </button>

//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <button
//               className="flex flex-col gap-[5px] p-2"
//               aria-label="Open menu"
//             >
//               <span
//                 className="block w-[18px] h-[1.5px] rounded-sm"
//                 style={{ background: "var(--text-muted)" }}
//               />
//               <span
//                 className="block w-[18px] h-[1.5px] rounded-sm"
//                 style={{ background: "var(--text-muted)" }}
//               />
//               <span
//                 className="block w-[13px] h-[1.5px] rounded-sm"
//                 style={{ background: "var(--text-muted)" }}
//               />
//             </button>
//           </SheetTrigger>

//           <SheetContent
//             side="right"
//             className="w-[280px] p-0 flex flex-col border-l"
//             style={{
//               background: "var(--mat)",
//               borderColor: "var(--border-strong)",
//             }}
//           >
//             {/* Drawer header */}
//             <div
//               className="flex justify-between items-center px-6 py-5 border-b"
//               style={{ borderColor: "var(--border)" }}
//             >
//               <SheetTitle>
//                 <span
//                   className="font-mono text-[13px] tracking-[0.05em]"
//                   style={{ color: "var(--text)" }}
//                   >
//                   otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
//                 </span>
//                 </SheetTitle>
//               <SheetClose asChild>
//                 {/* <button
//                   className="font-mono text-[11px] px-2 py-1 rounded-[3px] border"
//                   style={{
//                     borderColor: "var(--border)",
//                     color: "var(--text-muted)",
//                     background: "transparent",
//                   }}
//                   aria-label="Close menu"
//                 >
//                   ✕c
//                 </button> */}
//               </SheetClose>
//             </div>

//             {/* Links */}
//             <div className="flex flex-col px-6 py-8 gap-1 flex-1">
//               {NAV_LINKS.map((link, i) => (
//                 <SheetClose asChild key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="flex items-center gap-3 py-3.5 border-b transition-colors duration-200"
//                     style={{
//                       borderColor: "var(--border)",
//                       color: "var(--text-muted)",
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.color = "var(--text)")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.color = "var(--text-muted)")
//                     }
//                   >
//                     <span
//                       className="font-mono text-[10px] w-5"
//                       style={{ color: "var(--text-dim)" }}
//                     >
//                       0{i + 1}
//                     </span>
//                     <span className="font-mono text-[13px] tracking-[0.03em]">
//                       {link.label}
//                     </span>
//                   </Link>
//                 </SheetClose>
//               ))}
//             </div>

//             {/* Drawer footer — hire me CTA */}
//             <div
//               className="px-6 py-6 border-t"
//               style={{ borderColor: "var(--border)" }}
//             >
//               <SheetClose asChild>
//                 <Link
//                   href="/#contact"
//                   className="block w-full font-mono text-[12px] py-3 rounded-[3px] text-center transition-opacity duration-200 hover:opacity-85"
//                   style={{
//                     background: "var(--text)",
//                     color: "var(--mat)",
//                   }}
//                 >
//                   [ hire me ]
//                 </Link>
//               </SheetClose>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// }