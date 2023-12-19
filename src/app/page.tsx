import Banner from "@/components/banner"
import Developers from "@/components/developers"
import Explorer from "@/components/explorer"
import Launch from "@/components/launch"
import Map from "@/components/map"
import Technology from "@/components/technology"

export default function Home() {
  return (
    <>
      <Banner />
      <Technology />
      <Developers />
      <Launch />
      <Explorer />
      <Map />
    </>
  )
}
