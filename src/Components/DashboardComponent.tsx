import { MdOutlineLightMode } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import './style.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoMdArrowDropup } from "react-icons/io";


export const Navbar = () => {

  const [mobileView, setmobileView] = useState(false)

  return (
    <>
      <nav className={`navbar ${mobileView ? "h-screen pb-20 transition-all ease-in-out duration-[200ms]" : "h-28 transition-all ease-in-out duration-500"} lg:h-[80px] px-10 w-screen bg-[#141414] flex flex-col lg:flex-row lg:justify-between`}>
        <div className="text-white flex items-center justify-between gap-2 lg:mt-0 mt-7">
          <div className="flex items-center lg:gap-2 md:gap-4 gap-3">
            <div className="text-[25px] xl:text-3xl lg:text-base md:text-6xl">
              <GoArrowLeft />
            </div>
            <h1 className="xl:text-lg lg:text-xs text-2xl md:text-5xl">Branch name</h1>
          </div>


          <ul className="hidden lg:flex lg:gap-4 xl:gap-8 xl:ml-10 lg:text-[9px] xl:text-base">
            <li>Dashboard</li>
            <li>Sales</li>
            <li>Payment</li>
            <li>Tax</li>
            <li>MIS</li>
            <li>Purchase entry</li>
          </ul>


          <div onClick={() => setmobileView(!mobileView)} className="lg:hidden text-white text-[35px] md:text-6xl">
            <RxHamburgerMenu />
          </div>
        </div>

        <div className={`${!mobileView && "hidden"} overflow-scroll mt-5`}>
          <ul className="text-white lg:hidden gap-8 ml-5 md:ml-10 text-2xl md:text-5xl">
            <li>Dashboard</li>
            <li>Sales</li>
            <li>Payment</li>
            <li>Tax</li>
            <li>MIS</li>
            <li>Purchase entry</li>
          </ul>
        </div>

        <div className={`${!mobileView ? "hidden" : "md:flex"} text-white lg:flex flex-col lg:flex-row ml-5 md:ml-10 lg:ml-0 px-2 lg:px-0 gap-10 md:gap-12  mt-14 lg:mt-0 xl:gap-8`}>
          <div className="flex items-center gap-6 lg:gap-2">
            <h1 className="lg:text-xs md:text-3xl">Export to excel</h1>
            <div className="text-4xl lg:text-xs xl:text-xl">
              <RiFileExcel2Fill />
            </div>
          </div>
          <div className="mt-4 lg:mt-0 flex lg:items-center gap-4 lg:gap-3">
            <h1 className="lg:text-xs lg:max-w-[100%] md:text-3xl md:max-w-[80%] ">Last updated time 09-Aug-2023 08:09 AM</h1>
            <div className="text-4xl lg:text-xs xl:text-xl">
              <IoReload />
            </div>
          </div>
          <div className="mt-4 lg:mt-0 flex items-center text-3xl md:text-5xl lg:text-xs xl:text-xl">
            <MdOutlineLightMode />
          </div>
        </div>


      </nav>
    </>
  )
}

const DashboardComponent = () => {

  return (
    <>
      <Navbar />

      <div className="dashboard-main w-screen h-fit xl:flex bg-slate-500 px-10">

        <div className="dashboard-first-left xl:w-[55%] grid grid-rows-10 gap-2 h-full bg-red-300 py-1 px-2">

          <div className="dashboard-first-left-mini-parent text-white grid lg:grid-cols-5 md:grid-cols-6 gap-2 md:gap-4 row-span-3 ">
            <div className="bg-[#141414] md:col-span-3 lg:col-span-1 pl-4 py-3 flex flex-col justify-between gap-1">
              <div className="flex gap-5 items-center">
                <h1 className="text-xs">Today Sales</h1>
                <div>
                  <SlCalender />
                </div>
              </div>
              <div className="flex items-end">
                <h1 className="text-2xl text-[#05FDF1]">365.61</h1>
                <h1>AED</h1>
              </div>
              <div className="flex text-[11px] items-center gap-1 text-[#2DFF1A]">
                <div><IoMdArrowDropup /></div>
                <h1>8 % than yesterday</h1>
              </div>
            </div>
            <div className="bg-[#141414] md:col-span-3 lg:col-span-1 pl-4 py-3 flex flex-col justify-between">
              <div>
                <h1 className="text-xs">Top sale time</h1>
              </div>
              <div className="flex items-end">
                <h1 className="text-2xl text-[#FFD400]">322.61</h1>
                <h1>AED</h1>
              </div>
              <div className="text-[11px]">
                <h1>12 pm - 3 pm</h1>
              </div>
            </div>
            <div className="bg-[#141414] md:col-span-4 lg:col-span-1 pl-4 py-3 flex flex-col justify-between">
              <div>
                <h1 className="text-xs">Door delivery sales</h1>
              </div>
              <div className="flex items-end">
                <h1 className="text-2xl text-[#FF8006]">322.61</h1>
                <h1>AED</h1>
              </div>
              <div className="text-[11px]">
                <h1>Bills 08</h1>
              </div>
            </div>
            <div className="bg-[#141414] pl-4 py-3 flex flex-col gap-2">
              <div>
                <h1 className="text-xs">Bills & Pax</h1>
              </div>
              <h1 className="text-2xl text-[#FF005A]">11/25</h1>
            </div>
            <div className="bg-[#141414] pl-4 py-3 flex flex-col justify-between">
              <div>
                <h1 className="text-xs">Void</h1>
              </div>
              <h1 className="text-2xl text-[#009FFF]">0/0</h1>
              <div className="text-[11px]">
                <h1 className="tracking-wide">Bills/Items</h1>
              </div>
            </div>
          </div>

          <div className="dashboard-first-left-big-three-parent grid xl:grid-cols-9 md:grid-cols-4 gap-3 row-span-7">
            <div className="bg-teal-200 md:col-span-4 xl:col-span-5"></div>
            <div className="bg-teal-200 md:col-span-2"></div>
            <div className="bg-teal-200 md:col-span-2"></div>
          </div>

        </div>

        <div className="dashboard-first-right xl:w-[45%] w-full h-full bg-indigo-400">
            <div className="h-80"></div>
        </div>
      </div>

      <div className="dashboard-second-parent w-screen h-[39vh] bg-slate-600 grid grid-cols-7 gap-3 px-10 py-2">

        <div className="bg-teal-200 col-span-3"></div>
        <div className="bg-teal-200 col-span-2"></div>
        <div className="bg-teal-200 col-span-2"></div>
      </div>

    </>
  )
}

export default DashboardComponent