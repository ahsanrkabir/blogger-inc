"use client";

import { useState } from "react"

import { MdOutlineCloseFullscreen } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <Image
          src='/logo.png' 
          alt='logo'
          w={48}
          h={48}
        />
        <span className="text-primary-100">Blogger Inc.</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div 
          className="cursor-pointer" 
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <MdOutlineCloseFullscreen className="text-primary-100 size-5" /> 
          ) : (
            <TiThMenu className="text-primary-100 size-5" />
          )}
        </div>

        <div className={`w-full h-[calc(100%-64px)] flex flex-col items-center justify-center absolute top-16 bg-primary-200 text-secondary-100 font-medium gap-8 text-lg transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-secondary-100 text-primary-100 font-semibold">Login</button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-primary-200">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="">
          <button className="py-2 px-4 rounded-3xl bg-primary-100 text-secondary-100 font-semibold">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar