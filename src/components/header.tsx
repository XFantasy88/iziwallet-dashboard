"use client"

import Image from "next/image"
import Logo from "@/assets/logo1.png"
import Link from "next/link"
import Hambuger from "./hambuger"
import { useState } from "react"
import MobileNav from "./mobileNav"

const Header = () => {
  const [open, setOpen] = useState(false)

  const links = [
    {
      title: "Learn",
      link: "/",
    },
    {
      title: "Build",
      link: "/",
    },
    {
      title: "Delegate",
      link: "/",
    },
    {
      title: "Ecosystem",
      link: "/",
    },
    {
      title: "Explorer",
      link: "/",
    },
  ]

  return (
    <>
      <div className="flex justify-center py-4 absolute top-0 left-0 right-0 z-[1] max-md:px-4">
        <div className="container flex justify-between items-center">
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="logo"
            className="w-[180px] lg:w-[220px]"
          />
          <div className="flex items-center max-md:hidden">
            {links.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="md:mx-2 lg:mx-4 hover:brightness-90 active:brightness-95 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center max-md:hidden">
            <Link
              href={"/"}
              className="text-white rounded-full font-bold bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-2.5 px-8 shadow-[2px_1000px_1px_#1D0140_inset] border border-transparent bg-origin-border hover:scale-105 active:scale-100 transition-all max-lg:hidden"
            >
              Connect Wallet
            </Link>
            <div className="bg-[#F2F2F2]/30 w-px h-6 mx-6 max-lg:hidden" />
            <Link
              href={"/"}
              className="text-white rounded-full font-bold bg-[linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-2.5 px-8 hover:scale-105 active:scale-100 transition-all"
            >
              Download
            </Link>
          </div>
          <Hambuger open={open} onClick={setOpen} className="md:hidden" />
        </div>
      </div>
      <MobileNav open={open} onClick={setOpen} />
    </>
  )
}

export default Header
