import Link from "next/link"
import React, { Dispatch, SetStateAction } from "react"
import Hambuger from "./hambuger"

import Logo from "@/assets/logo.svg"
import Image from "next/image"

type MobileNavType = {
  open: boolean
  onClick: Dispatch<SetStateAction<boolean>>
}

const MobileNav: React.FC<MobileNavType> = ({ open, onClick }) => {
  const links = [
    {
      label: "Learn",
      link: "",
    },
    {
      label: "Build",
      link: "",
    },
    {
      label: "Delegate",
      link: "",
    },
    {
      label: "Ecosystem",
      link: "",
    },
    {
      label: "Explorer",
      link: "",
    },
  ]

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black/10 backdrop-blur-sm z-[51] ${
          open ? "block" : "hidden"
        }`}
        onClick={() => onClick(!open)}
      ></div>
      <div
        className={`flex flex-col fixed top-0 w-[300px] bg-[#111]/80 backdrop-blur-lg h-full z-[51] px-8 pt-[60px] ${
          open ? "right-0" : "-right-full"
        } duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]`}
      >
        <Hambuger
          open={open}
          onClick={() => onClick(!open)}
          className="md:hidden z-[60] fixed top-6 right-6"
        />
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="w-[120px] mx-auto mb-6"
        />
        {links.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="text-white text-lg py-2 mb-2 border-b border-[#7a4b97]"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={"/"}
          className="w-fit text-white rounded-full font-bold bg-[linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-2.5 px-8 hover:scale-105 active:scale-100 transition-all mt-6 mx-auto"
        >
          Download
        </Link>
      </div>
    </>
  )
}

export default MobileNav
