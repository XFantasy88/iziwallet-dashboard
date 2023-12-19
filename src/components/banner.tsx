import Image from "next/image"
import Decentralized from "@/assets/decentralized.png"
import Link from "next/link"
import ChevronLeft from "./svgs/chevronLeft"
import Scan from "./svgs/scan"
import BarChart from "./svgs/barChart"
import Wallet from "./svgs/wallet"
import DoubleCheck from "./svgs/doubleCheck"

const Banner = () => {
  const data = [
    {
      icon: <Scan />,
      title: "Scan",
      desc: "Network explorer",
      link: "/",
      className: "text-[#05FF00]",
    },
    {
      icon: <BarChart />,
      title: "Bridge",
      desc: "Cross-chain bridge",
      link: "/",
      className: "text-[#FAFF00]",
    },
    {
      icon: <Wallet />,
      title: "Wallet",
      desc: "Buy and stake IZC",
      link: "/",
      className: "text-[#B85DFF]",
    },
    {
      icon: <DoubleCheck />,
      title: "Validators",
      desc: "Mainnet & Sub-networks",
      link: "/",
      className: "text-[#5F06F6]",
    },
  ]

  return (
    <div className="flex flex-col items-center pt-32 relative">
      <div className="absolute w-[228px] h-[228px] bg-[#D562FF] blur-[160px] -left-[120px] top-[100px]" />
      <div className="absolute w-[252px] h-[252px] bg-[#5F06F6] blur-[104px] -right-[190px] -bottom-[110px]" />
      <div className="container flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-6xl font-bold leading-tight mt-16">
            Intelligent And Secure Solution <br /> Web3,Scalable Dapps,
            <br /> Decentralized, AI.
          </h2>
          <Link
            href={"/"}
            className="flex items-center w-fit text-white rounded-full font-bold bg-[linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-4 px-10 mt-16 text-lg hover:scale-105 active:scale-100 transition-all"
          >
            Install Chrome Extension{" "}
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white ml-7">
              <ChevronLeft className="text-[#7718F8]" />
            </div>
          </Link>
        </div>
        <Image
          src={Decentralized.src}
          width={Decentralized.width}
          height={Decentralized.height}
          alt="decentralized"
          className="mix-blend-lighten"
        />
      </div>
      <div className="container flex justify-between mt-40 mb-60">
        {data.map((item) => (
          <div key={item.title} className="flex">
            <div
              className={`flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white/10 ${item.className}`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col ml-4">
              <h2
                className={`text-4xl font-extrabold leading-[130%] mt-1.5 ${item.className}`}
              >
                {item.title}
              </h2>
              <p className="text-white/70 text-xl ">{item.desc}</p>
              <Link
                href={item.link}
                className="text-white font-medium text-lg mt-3"
              >
                Read More...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner
