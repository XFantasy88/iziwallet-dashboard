import Image from "next/image"
import Rocket from "@/assets/rocket.svg"

const Launch = () => {
  return (
    <div className="flex justify-center">
      <div className="flex container items-center justify-between">
        <div>
          <h4 className="font-bold text-[40px] leading-normal">
            Launch Of Our Decentralized
            <br /> Applications
          </h4>
          <p className="text-[#E0E0E0] leading-7 mt-4 text-xl">
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
          className="mix-blend-lighten"
        />
      </div>
    </div>
  )
}

export default Launch
