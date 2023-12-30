import { MdOutlineLightMode } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import './style.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const DashboardComponent = () => {
  const [mobileView, setmobileView] = useState(false)

  return (
    <>
      <nav className={`navbar ${mobileView ? "h-screen" : "h-28" }  lg:h-[80px] px-10 w-screen bg-[#141414] flex flex-col lg:flex-row lg:justify-between`}>
        <div className="text-white flex items-center md:justify-between gap-2 lg:mt-0 mt-7">
          <div className="flex items-center lg:gap-2 gap-4">
            <div className="xl:text-3xl lg:text-base text-6xl">
              <GoArrowLeft />
            </div>
            <h1 className="xl:text-lg lg:text-xs text-5xl">Branch name</h1>
          </div>


          <ul className="hidden lg:flex gap-8 xl:ml-10 lg:text-[9px]">
            <li>Dashboard</li>
            <li>Sales</li>
            <li>Payment</li>
            <li>Tax</li>
            <li>MIS</li>
            <li>Purchase entry</li>
          </ul>


          <div onClick={()=>setmobileView(!mobileView)} className="lg:hidden text-white text-6xl">
            <RxHamburgerMenu />
          </div>
        </div>

        <div className="lg:hidden my-12">
          <ul className="text-white lg:hidden gap-8 ml-10 text-5xl">
            <li>Dashboard</li>
            <li>Sales</li>
            <li>Payment</li>
            <li>Tax</li>
            <li>MIS</li>
            <li>Purchase entry</li>
          </ul>
        </div>

        <div className="text-white flex flex-col lg:flex-row ml-10 lg:ml-0 px-2 lg:px-0 gap-12 mt-14 lg:mt-0 xl:gap-8">
          <div className="flex items-center gap-6 lg:gap-2">
            <h1 className="lg:text-xs text-3xl">Export to excel</h1>
            <div className="text-4xl lg:text-xs">
              <RiFileExcel2Fill />
            </div>
          </div>
          <div className="flex lg:items-center gap-4 lg:gap-3">
            <h1 className="lg:text-xs lg:max-w-[100%] text-3xl md:max-w-[80%] ">Last updated time 09-Aug-2023 08:09 AM</h1>
            <div className="text-4xl lg:text-xs">
              <IoReload />
            </div>
          </div>
          <div className="flex items-center text-5xl lg:text-xs">
            <MdOutlineLightMode />
          </div>
        </div>
      </nav>
    </>
  )
}

export default DashboardComponent