import { Tourney } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import Shield from "@/assets/shield.png"
import Ethcoin from "@/assets/ethcoin.png"
import Medal from "@/assets/medal.png"
import Link from "next/link"
import Divider from "./svgs/divider"

const tourney = Tourney({ subsets: ["latin"] })

interface DeveloperCardProps {
  title: string
  desc: string
  resource: string
  link: string
  image: StaticImageData
  className?: string
  imageClassName?: string
}

const DeveloperCard = ({
  title,
  desc,
  resource,
  link,
  image,
  className,
  imageClassName,
}: DeveloperCardProps) => {
  return (
    <div
      className={`flex flex-col items-center relative bg-[linear-gradient(rgba(255,255,255,1),rgba(164,164,164,0))] rounded-xl shadow-[4px_1000px_4px_#190035_inset] bg-origin-border border-4 border-transparent py-24 px-16 ${className}`}
    >
      <div className="absolute top-[7px] left-[10px] right-[2px] bottom-0 bg-[linear-gradient(180deg,#2D0176_-46.2%,rgba(3,25,60,0)_127.56%)] z-0 rounded-[7px]" />
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt="logo"
        className={`absolute top-0 left-0 right-0 mx-auto -translate-y-1/2 ${imageClassName}`}
      />
      <h4 className="text-[27px] font-semibold z-[1]">{title}</h4>
      <p className="text-[13px] text-center mt-5 z-[1]">{desc}</p>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-10 text-white rounded-full font-bold bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-2 px-10 shadow-[2px_1000px_1px_#20014c_inset] border border-transparent bg-origin-border z-[1] hover:scale-105 active:scale-100 transition-all"
      >
        {resource}
      </Link>
    </div>
  )
}

const Developers = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center container mt-48 mb-36 relative">
        <Divider className="absolute top-5 -left-[500px] text-[#6400FF]" />
        <h2 className={`text-[42px] font-bold ${tourney.className}`}>
          Developers
        </h2>
        <h3 className="text-[40px] font-bold">Build On The IZC Smart Chain</h3>
        <p className="text-[27px] font-semibold mt-4">
          Developed By Izichain, To Become A General Tool For The Developer
          Community
        </p>
        <div className="flex w-full justify-between mt-[120px]">
          <DeveloperCard
            title="Open Source"
            desc="Codebase and ecosystem tools are totally open source."
            link="/"
            resource="Github"
            image={Ethcoin}
            imageClassName="drop-shadow-[0_0_20px_#F3A43D]"
            className="scale-90 w-[calc(33.33%-50px)]"
          />
          <DeveloperCard
            title="Services"
            desc="Itself is also an provider. ZK roll ups are available."
            link="/"
            resource="Mainnet"
            image={Shield}
            imageClassName="drop-shadow-[0_0_20px_#10DA71]"
            className="w-[calc(33.33%-50px)]"
          />
          <DeveloperCard
            title="Developers"
            desc="Contribute to the development within Izicoin network."
            link="/"
            resource="Developer"
            image={Medal}
            imageClassName="drop-shadow-[0_0_20px_#FC0427]"
            className="scale-90 w-[calc(33.33%-50px)]"
          />
        </div>
      </div>
    </div>
  )
}

export default Developers
