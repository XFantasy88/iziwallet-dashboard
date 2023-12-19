import React, { Dispatch, SetStateAction } from "react"

type HambugerType = {
  open: boolean
  onClick: Dispatch<SetStateAction<boolean>>
  className?: string
}

const Hambuger: React.FC<HambugerType> = ({ open, onClick, className }) => {
  return (
    <label
      htmlFor="check"
      className={`flex flex-col w-[28px] cursor-pointer ${className ?? ""}`}
    >
      <input
        type="checkbox"
        id="check"
        checked={open}
        onClick={() => onClick(!open)}
        className="hidden peer"
      />
      <span className="bg-white rounded-[10px] h-[3px] my-[3px] duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] w-1/2 peer-checked:origin-bottom peer-checked:rotate-45 peer-checked:translate-x-[2px] peer-checked:translate-y-[3px]"></span>
      <span className="bg-white rounded-[10px] h-[3px] my-[3px] duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] peer-checked:origin-top peer-checked:-rotate-45"></span>
      <span className="bg-white rounded-[10px] h-[3px] my-[3px] duration-[400ms] ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] w-3/4 peer-checked:origin-bottom peer-checked:w-1/2 peer-checked:translate-x-[12px] peer-checked:-translate-y-[5px] peer-checked:rotate-45"></span>
    </label>
  )
}

export default Hambuger
