'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Admin', href: '/admin' },
]

export default function landingpage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-start py-2 lg:px-3 ">
          <a href="/admin" className='flex'>
          <img src="../public/image.png" alt="logo" className='w-10 mr-0' />
          <span className="text-black font-bold text-lg mt-1.5">NextQ</span>
          </a>
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/admin" className="text-sm/6 font-semibold text-white">
              Admin <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href='/admin'
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Admin
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>


      <section className="relative overflow-hidden">
  {/* กลมๆฟุ้งๆ background */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 
                  bg-gray-400 blur-[120px] rounded-full animate-pulse z-0" />

  {/* เนื้อหา */}
  <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 
                  py-20 sm:py-32 lg:py-40">
    
    {/* รูปภาพ */}
    <div className="mb-0 flex justify-center">
      <img
        src="/image.png" 
        alt="NextQ logo"
        className="w-3xs mb-0"
      />
    </div>

    {/* ข้อความ */}
    <div className="text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black">
        Welcome to NextQ
      </h1>
      <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-xl mx-auto">
        Get your queue ticket and wait comfortably. We'll notify you when it's your turn.
      </p>

      {/* ปุ่ม */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/login"
          className="inline-flex items-center rounded-md bg-black px-5 py-3 
                     text-sm sm:text-base font-semibold text-white shadow 
                     hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
</section>
      

    </div >
  )
}
