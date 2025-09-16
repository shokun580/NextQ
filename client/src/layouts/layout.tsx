// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Admin', href: '/Admin' },
  { name: 'action', href: '/action' },
  { name: 'Company', href: '#' },
]
export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-600 text-white p-4">
        <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
              {item.name}
            </a>
          ))}
        </div>
      </header>

      <main className="flex-1 p-6 bg-gray-50">
        {/* ตรงนี้คือที่ที่ "หน้าเด็ก" จะถูก render */}
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center py-4">© 2025 NextQ</footer>
    </div>
  );
}