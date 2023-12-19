const Explorer = () => {
  return (
    <div className="flex justify-center mt-44">
      <div className="container flex flex-col items-center">
        <span className="text-[#E396FF] text-[21px] font-medium tracking-[5px]">
          EXPLORER
        </span>
        <h2 className="text-[40px] font-semibold tracking-[2px] leading-[118%] text-center mt-8">
          Native IZC To Validators On Izicoin Network
          <br /> In Order To Secure The Network. <br />
          You Can Delegate In Your Wallet.
        </h2>
        <button className="text-white rounded-full font-bold bg-[linear-gradient(286deg,#5F06F6_0%,#D562FF_100%)] py-3.5 px-16 mt-16 hover:scale-105 active:scale-100 transition-all">
          Stake Your IZC
        </button>
      </div>
    </div>
  )
}

export default Explorer
