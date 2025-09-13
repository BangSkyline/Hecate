
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-['Pacifico'] text-orange-500">
              COSMOS
            </div>
          </Link>                   
        </div>
      </div>
    </header>
  );
}
