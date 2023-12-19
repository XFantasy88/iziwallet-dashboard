import Image from "next/image"
import MapImage from "@/assets/map.png"
import Divider from "./svgs/divider"

const Map = () => {
  return (
    <div className="flex justify-center mt-[300px] mb-[90px]">
      <div className="flex flex-col items-center container relative">
        <Divider className="absolute text-[#0159FC] top-5 -right-[600px] lg:-right-[500px] rotate-180 max-md:hidden" />
        <h2 className="text-2xl lg:text-[35px] font-bold text-center">
          We are everywhere near you.
          <br />
          Ready to assist you whenever.
        </h2>
        <Image
          src={MapImage.src}
          width={MapImage.width}
          height={MapImage.height}
          alt="map"
          className="mt-12"
        />
      </div>
    </div>
  )
}

export default Map
