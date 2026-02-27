"use client";

import React from 'react';
///import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
//import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/16/solid';


interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Logo"
                src="https://tailwindui.com"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white',
                      'rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <BellIcon className="size-6" />
            </button>

            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full bg-gray-800 ring-2 ring-white/10 hover:ring-indigo-500 transition-all">
                <img
                  alt="Profile"
                  src="https://images.unsplash.com"
                  className="size-8 rounded-full"
                />
              </MenuButton>

              <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Your Profile</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                </MenuItem>
                <hr className="my-1 border-gray-100" />
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Sign out</a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-gray-900 border-b border-white/10">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

//export default Navbar;
