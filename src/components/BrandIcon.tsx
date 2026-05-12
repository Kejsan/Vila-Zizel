import type { ReactNode, SVGProps } from 'react';

type IconName =
  | 'aphrodite'
  | 'hera'
  | 'poseidonHera'
  | 'zeus'
  | 'athina'
  | 'artemis'
  | 'temple'
  | 'arch'
  | 'scroll'
  | 'letter'
  | 'mapPin'
  | 'wifi'
  | 'parking'
  | 'wind'
  | 'kitchen'
  | 'garden'
  | 'beach'
  | 'calendar'
  | 'monogram';

type BrandIconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const paths: Record<IconName, ReactNode> = {
  aphrodite: (
    <>
      <path d="M12 20c4.5-2.9 7-6.3 7-9.7 0-2.4-1.6-4.3-3.8-4.3-1.4 0-2.5.7-3.2 1.8C11.3 6.7 10.2 6 8.8 6 6.6 6 5 7.9 5 10.3c0 3.4 2.5 6.8 7 9.7Z" />
      <path d="M8.5 13.8c1.9.8 5.1.8 7 0" />
      <path d="M9.2 10.4c.8.6 1.7.9 2.8.9s2-.3 2.8-.9" />
    </>
  ),
  hera: (
    <>
      <path d="M5.5 18h13l-1.2-8.2-3.4 3-1.9-5-1.9 5-3.4-3L5.5 18Z" />
      <path d="M6.8 20h10.4" />
      <path d="M8 8.5c1.2-2 2.5-3 4-3s2.8 1 4 3" />
    </>
  ),
  poseidonHera: (
    <>
      <path d="M12 4v16" />
      <path d="M7 7c0 3.2 1.7 5 5 5s5-1.8 5-5" />
      <path d="M7 7V4" />
      <path d="M17 7V4" />
      <path d="M9 18h6" />
      <path d="M7 20h10" />
    </>
  ),
  zeus: (
    <>
      <path d="M13.2 3 6.8 13h4.4L9.8 21l7.4-11h-4.5L13.2 3Z" />
      <path d="M16.4 5.8c1.5.3 2.6 1.5 2.9 3" />
      <path d="M6.9 17.8c-1.2-.4-2-1.3-2.2-2.5" />
    </>
  ),
  athina: (
    <>
      <path d="M12 5c3.9 0 6.5 2.6 7.7 7-1.2 4.4-3.8 7-7.7 7s-6.5-2.6-7.7-7C5.5 7.6 8.1 5 12 5Z" />
      <path d="M9.3 12a2.7 2.7 0 1 0 5.4 0 2.7 2.7 0 0 0-5.4 0Z" />
      <path d="M12 9.3V5" />
      <path d="M8 18.2 6.2 21" />
      <path d="M16 18.2l1.8 2.8" />
    </>
  ),
  artemis: (
    <>
      <path d="M16.8 5.2a7.5 7.5 0 1 0 0 13.6 6 6 0 1 1 0-13.6Z" />
      <path d="M5.4 18.6 18.6 5.4" />
      <path d="M14.8 5.4h3.8v3.8" />
      <path d="M6.2 15.8c2.2.2 4-.5 5.2-2.2" />
    </>
  ),
  temple: (
    <>
      <path d="M4 20h16" />
      <path d="M6 10h12" />
      <path d="M5 8 12 4l7 4" />
      <path d="M7 10v8" />
      <path d="M12 10v8" />
      <path d="M17 10v8" />
    </>
  ),
  arch: (
    <>
      <path d="M6 20V10a6 6 0 0 1 12 0v10" />
      <path d="M9 20V10a3 3 0 0 1 6 0v10" />
      <path d="M4 20h16" />
    </>
  ),
  scroll: (
    <>
      <path d="M8 5h10v12a3 3 0 0 1-3 3H7a3 3 0 0 0 3-3V7a2 2 0 1 0-4 0v1h4" />
      <path d="M11 9h4" />
      <path d="M11 13h4" />
    </>
  ),
  letter: (
    <>
      <path d="M4 7h16v10H4z" />
      <path d="m4 8 8 6 8-6" />
      <path d="m4 17 5.5-4.2" />
      <path d="M20 17l-5.5-4.2" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <path d="M9.7 10a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 0 0-4.6 0Z" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 10.5a11 11 0 0 1 14 0" />
      <path d="M8 13.5a6.8 6.8 0 0 1 8 0" />
      <path d="M10.8 16.4a2.2 2.2 0 0 1 2.4 0" />
      <path d="M12 19h.01" />
    </>
  ),
  parking: (
    <>
      <path d="M7 20V4h6.2a4.6 4.6 0 0 1 0 9.2H7" />
      <path d="M11 13.2V20" />
    </>
  ),
  wind: (
    <>
      <path d="M4 9h10.5a2.5 2.5 0 1 0-2.2-3.7" />
      <path d="M4 14h14.5a2.5 2.5 0 1 1-2.2 3.7" />
      <path d="M4 19h7" />
    </>
  ),
  kitchen: (
    <>
      <path d="M7 4v16" />
      <path d="M5 4v5a2 2 0 0 0 4 0V4" />
      <path d="M15 4c2 1.7 3 3.7 3 6v10" />
      <path d="M15 4v16" />
    </>
  ),
  garden: (
    <>
      <path d="M12 20V9" />
      <path d="M12 9c-3.4 0-5.5-1.8-6.5-5C9 3.9 11.1 5.7 12 9Z" />
      <path d="M12 12c3.4 0 5.5-1.8 6.5-5-3.5-.1-5.6 1.7-6.5 5Z" />
      <path d="M7 20h10" />
    </>
  ),
  beach: (
    <>
      <path d="M4 17c2.7-1.8 5.3-1.8 8 0s5.3 1.8 8 0" />
      <path d="M5 12c2.2-1.4 4.3-1.4 6.5 0s4.3 1.4 6.5 0" />
      <path d="M8.5 8a3.5 3.5 0 0 1 7 0" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 6h14v14H5z" />
      <path d="M8 4v4" />
      <path d="M16 4v4" />
      <path d="M5 10h14" />
      <path d="M9 14h2" />
      <path d="M13 14h2" />
    </>
  ),
  monogram: (
    <>
      <path d="M5 5 9.2 19 12 10l2.8 9L19 5" />
      <path d="M7 5h10" />
      <path d="M5 19h14" />
    </>
  ),
};

export default function BrandIcon({ name, className = 'h-6 w-6', ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function IconSeal({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full border border-divine/25 bg-divine/10 text-divine ${className}`}>
      <BrandIcon name={name} className="h-6 w-6" />
    </span>
  );
}
