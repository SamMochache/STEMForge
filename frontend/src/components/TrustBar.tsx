import React from 'react';
import { ShieldCheckIcon, ClockIcon, CircleDollarSignIcon } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: CircleDollarSignIcon,
    text: 'Pilot pricing for first-time partners'
  },
  {
    icon: ShieldCheckIcon,
    text: 'Free discovery call — no obligation'
  },
  {
    icon: ClockIcon,
    text: 'We respond within 48 hours'
  }
];

interface TrustBarProps {
  className?: string;
  // 'auto' (default): follows the site's light/dark theme toggle via
  // Tailwind's dark: classes — use this on normal white/light sections.
  // 'dark': forces light-on-dark text regardless of the theme toggle —
  // use this when embedding TrustBar inside a section that's ALWAYS
  // dark-styled itself, like Hero.tsx (which doesn't use dark: prefixes
  // because its bg-neutral-900 never changes with the toggle).
  variant?: 'auto' | 'dark';
}

export function TrustBar({ className = '', variant = 'auto' }: TrustBarProps) {
  const textClass =
    variant === 'dark'
      ? 'text-neutral-400'
      : 'text-neutral-500 dark:text-neutral-400';
  const iconClass =
    variant === 'dark'
      ? 'text-neutral-500'
      : 'text-neutral-400 dark:text-neutral-500';

  return (
    <div
      className={`flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 ${className}`}
      aria-label="Partnership terms"
    >
      {TRUST_ITEMS.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-2.5">
          <Icon size={16} aria-hidden="true" className={`${iconClass} shrink-0`} />
          <span className={`${textClass} text-xs sm:text-sm`}>{text}</span>
        </div>
      ))}
    </div>
  );
}
