import Image from "next/image"
import Rocket from "@/assets/rocket.svg"

const Launch = () => {
  return (
    <div className="flex justify-center max-md:px-4">
      <div className="flex container items-center justify-between relative">
        <div className="h-[400px] flex flex-col justify-end">
          <h4 className="font-bold text-4xl lg:text-[40px] leading-normal">
            Launch Of Our Decentralized
            <br /> Applications
          </h4>
          <p className="text-[#E0E0E0] leading-7 mt-4 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Etiam non neque at quam tristique iaculis. Duis quis tellus <br />{" "}
            ac lorem porttitor molestie sed in elit.
          </p>
        </div>
        <Image
          src={Rocket.src}
          width={Rocket.width}
          height={Rocket.height}
          alt="rocket"
          className="mix-blend-lighten max-lg:-mr-[30%] max-md:absolute max-md:right-0 max-md:top-0 max-md:min-w-[400px]"
        />
      </div>
    </div>
  )
}

export default Launch
