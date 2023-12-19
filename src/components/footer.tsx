import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import Telegram from "@/assets/telegram.svg"
import Discord from "@/assets/discord.svg"
import X from "@/assets/x.svg"
import GoogleStore from "@/assets/google_store.png"
import AppStore from "@/assets/app_store.png"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Footer = () => {
  const links = [
    {
      icon: Telegram,
      link: "/",
    },
    {
      icon: Discord,
      link: "/",
    },
    {
      icon: X,
      link: "/",
    },
  ]

  const services = [
    {
      title: "Access Token Creation",
      link: "/",
    },
    {
      title: "Ownership Token Control",
      link: "/",
    },
    {
      title: "Assign DPFS Metadata",
      link: "/",
    },
  ]

  const products = [
    {
      title: "IziCoin",
      link: "https://izicoin.org",
    },
    {
      title: "IziMarketplace",
      link: "/",
    },
    {
      title: "IziAffiliate",
      link: "/",
    },
  ]

  return (
    <div>
      <div
        className={`flex justify-center bg-[#000A1C] pt-12 pb-3 ${poppins.className}`}
      >
        <div className="flex justify-between container">
          <div className="flex flex-col">
            <h4 className="text-[30px] font-medium underline">Social Media</h4>
            <div className="flex space-x-10 mt-7">
              {links.map((item, i) => (
                <Link key={i} href={item.link} target="_blank" rel="noreferrer">
                  <Image
                    src={item.icon.src}
                    width={item.icon.width}
                    height={item.icon.height}
                    alt="icon"
                    className="w-9 h-9 hover:brightness-90 active:brightness-95 transition-all"
                  />
                </Link>
              ))}
            </div>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-5 hover:scale-105 active:scale-100 transition-all"
            >
              <Image
                src={GoogleStore.src}
                width={GoogleStore.width}
                height={GoogleStore.height}
                alt="google"
              />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 hover:scale-105 active:scale-100 transition-all"
            >
              <Image
                src={AppStore.src}
                width={AppStore.width}
                height={AppStore.height}
                alt="app"
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[30px] font-medium underline">Our Services</h4>
            {services.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="mt-4 hover:brightness-90 active:brightness-95 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="text-[30px] font-medium underline">Our Products</h4>
            {products.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="mt-4 hover:brightness-90 active:brightness-95 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="text-[30px] font-medium underline">Contact</h4>
            <p className="mt-4">
              935 N Beneva Rd,
              <br />
              Florida, India.
              <br />
              Zip - 12345
            </p>
            <span className="mt-4">+(243) 953-5250</span>
          </div>
        </div>
      </div>
      <div className={`bg-black text-center py-4 ${poppins.className}`}>
        @ 2023 Copyright, All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
