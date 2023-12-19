import { Rubik } from "next/font/google"
import Layers from "./svgs/layers"
import DoubleCheck from "./svgs/doubleCheck"
import Exchange from "./svgs/exchange"
import Scale from "./svgs/scale"
import Refresh from "./svgs/refresh"
import Blockchain from "./svgs/blockchain"

const rubik = Rubik({ subsets: ["latin"] })

const Technology = () => {
  const data = [
    {
      icon: <Layers />,
      title: "Layer 1",
      desc: "A secure and fast based blockchain with DPoS consensus and optimized sub-networks.",
      active: true,
    },
    {
      icon: <DoubleCheck />,
      title: "Validators",
      desc: "Verifiable and trustless execution via proof-of-correctness and proof-of-execution.",
    },
    {
      icon: <Exchange />,
      title: "Decentralized Data",
      desc: "Establish decentralized environments for Data Encrypt Secure.",
    },
    {
      icon: <Scale />,
      title: "Scale",
      desc: "High transaction throughput with optimist rollups",
    },
    {
      icon: <Refresh />,
      title: "Blockchain",
      desc: "Writing smart contracts powered by IZC Smart Chain.",
    },
    {
      icon: <Blockchain />,
      title: "Ethereum mainnet Compatible",
      desc: "Our sub-network is compatible. You can use Metamask.",
    },
  ]

  return (
    <div className="flex justify-center bg-[#F9FAFC]">
      <div className="flex flex-col items-center container mt-20 mb-28">
        <h1
          className={`text-[40px] font-bold text-[#0D0D2B] ${rubik.className}`}
        >
          Technology
        </h1>
        <span className="text-[27px] font-semibold text-[#0D0D2B] mt-2">
          Developed By Izichain, To Become A General Tool For The Developer
          Community
        </span>
        <div className="flex flex-wrap justify-between mt-[26px] -ml-[45px] w-[calc(100%+45px)]">
          {data.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col items-center pt-12 pb-8 px-6 rounded-2xl shadow-[0px_3px_10px_-3px_#39177733] w-[calc(33.3%-45px)] ml-[45px] mt-[38px] ${
                item.active ? "bg-[#2B076E]" : "bg-white"
              }`}
            >
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full ${
                  item.active ? "bg-white/10" : "bg-[#5F06F6]"
                } text-white`}
              >
                {item.icon}
              </div>
              <h3
                className={`text-[32px] font-bold ${
                  item.active ? "text-white" : "text-[#0D0D2B]"
                } mt-12 leading-normal text-center ${rubik.className}`}
              >
                {item.title}
              </h3>
              <p
                className={`${
                  item.active ? "text-white" : "text-[#828282]"
                } mt-4 leading-7 text-center`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technology
