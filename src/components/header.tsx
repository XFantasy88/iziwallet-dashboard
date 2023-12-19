import Image from "next/image"
import Logo from "@/assets/logo1.png"
import Link from "next/link"

const Header = () => {
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
    <div className="flex justify-center py-4 absolute top-0 left-0 right-0 z-[1]">
      <div className="container flex justify-between items-center">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="w-[220px]"
        />
        <div className="flex items-center">
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="mx-4 hover:brightness-90 active:brightness-95 transition-all"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Link
            href={"/"}
            className="text-white rounded-full font-bold bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-2.5 px-8 shadow-[2px_1000px_1px_#1D0140_inset] border border-transparent bg-origin-border hover:scale-105 active:scale-100 transition-all"
          >
            Connect Wallet
          </Link>
          <div className="bg-[#F2F2F2]/30 w-px h-6 mx-6" />
          <Link
            href={"/"}
            className="text-white rounded-full font-bold bg-[linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-2.5 px-8 hover:scale-105 active:scale-100 transition-all"
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
