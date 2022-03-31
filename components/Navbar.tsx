import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-6 lg:py-10">
      <span>
        <img
          src="/images/logo.svg"
          alt=""
          className="h-6 object-contain lg:h-12"
        />
      </span>

      <nav className="flex items-center gap-6 font-raleway text-sm lg:gap-10 lg:text-lg">
        <Link href="/">
          <a className="cursor-pointer border-black py-1 lg:hover:border-b">
            Features
          </a>
        </Link>
        <Link href="/">
          <a className="cursor-pointer border-black py-1 lg:hover:border-b">
            Team
          </a>
        </Link>
        <Link href="/">
          <a className="cursor-pointer border-black py-1 lg:hover:border-b">
            Sign In
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
