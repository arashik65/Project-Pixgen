"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-photos">All Photos</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>

          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <ul className="flex flex-col p-4 gap-4 text-sm">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/all-photos" onClick={() => setIsOpen(false)}>
                All Photos
              </Link>
            </li>

            <li>
              <Link href="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>

            <li>
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </li>

            <hr />

            <li>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </li>

            <li>
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;