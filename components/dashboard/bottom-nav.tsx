"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/components/dashboard/nav-items"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="glass-strong fixed inset-x-0 bottom-0 z-30 border-t border-border md:hidden">
      <div className="flex items-stretch justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        {navItems
          .filter((item) => item.primary)
          .map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
