import { MdOutlineLightMode } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import './style.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoMdArrowDropup } from "react-icons/io";
import * as echarts from 'echarts';




// NAVBAR COMPONENT

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

        <div className={`${!mobileView && "hidden"} overflow-scroll mt-7`}>
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


// SALES COMPARISON CHART COMPONENT

interface salesWIseProps {
  name: string;
  amount: string;
  percentage: string;
}

export const SalesComparisonChart = ({ data }: { data: salesWIseProps[] }) => {
  const colors = ["8639BA", "AE45C6", "E958A1", "E8E465", "F2B45C", "EF7075"]
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));
  return (
    <>
      <div className="px-6 w-full py-4 flex flex-col gap-2 text-white">
        {dataWithColors.map(item => {
          return (
            <>
              <div className="grid grid-cols-5 gap-4">
                <h1 className="text-[13px]">{item.name}</h1>
                <div className="col-span-4 flex gap-2">
                  <div style={{ "width": `${item.amount}%`, "backgroundColor": `#${item.color}` }} className="h-5 flex items-center justify-center text-white">
                    <h1>{item.amount} AED</h1>
                  </div>
                  <h1>{item.percentage}%
                  </h1>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
};


// TOP 5 SELLING PRODUCTS CHART

interface top5ProductsProps {
  name: string
  price: string
  piece: string
}

export const Top5ProductsChart = ({ data }: { data: top5ProductsProps[] }) => {
  const colors = ["0084F7", "F7A500", "F77300", "F70031", "9410A5",]
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));

  return (
    <>
      <div className="px-4 mt-5 w-full flex flex-col gap-5  text-white">
        {dataWithColors.map(item => {
          return (
            <>
              <div className="grid grid-cols-8 gap-2">
                <h1 className="text-[15px] col-span-2 max-w-20 truncate">{item.name}</h1>
                <div className="col-span-6 flex gap-2 items-center">
                  <div style={{ "width": `${item.price}%`, "backgroundColor": `#${item.color}` }} className="h-3 rounded-e-[15px]">
                  </div>
                  <h1 className="text-sm">{item.price} AED/{item.piece} pc
                  </h1>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}


// LEAST 5 SELLING PRODUCTS CHART

interface least5ProductsProps {
  name: string
  price: number
  piece: number
}

export const Least5ProductsChart = ({ data }: { data: least5ProductsProps[] }) => {
  const colors = ["9410A5", "F70031", "F77300", "F7A500", "0084F7"]
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
    width: item.piece + 20
  }));

  return (
    <>
      <div className="px-4 mt-5 w-full flex flex-col gap-5  text-white">
        {dataWithColors.map(item => {
          return (
            <>
              <div className="grid grid-cols-8 gap-2">
                <h1 className="text-[15px] col-span-2 max-w-20 truncate">{item.name}</h1>
                <div className="col-span-6 flex gap-2 items-center">
                  <div style={{ "width": `${item.width}%`, "backgroundColor": `#${item.color}` }} className="h-3 rounded-e-[15px]">
                  </div>
                  <h1 className="text-sm">{item.price} AED/{item.piece} pc
                  </h1>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}







const DashboardComponent = () => {

  // DUMMY DATA FOR SALES WISE DATA CHART
  const salesWiseData = [
    { name: 'Dining', amount: '99', percentage: '30' },
    { name: 'Takeaway', amount: '86', percentage: '18' },
    { name: 'Delivery', amount: '68', percentage: '16' },
    { name: 'Talabat', amount: '55', percentage: '14' },
    { name: 'Zomato', amount: '51', percentage: '12' },
    { name: 'Swiggy', amount: '45', percentage: '10' },
  ];


  // DUMMY DATA FOR TOP 5 SELLING PRODUCTS
  const top5ProductsData = [
    { name: "Chicken sizzler", price: "55.5", piece: "5" },
    { name: "Special burger", price: "35", piece: "2" },
    { name: "Beef bicon", price: "29.75", piece: "3" },
    { name: "Beef kabab", price: "29.75", piece: "3" },
    { name: "Beef biriyani", price: "29.75", piece: "3" }
  ]

  // DUMMY DATA FOR LEAST 5 SELLING PRODUCTS
  const least5ProducstData = [
    { name: "Open item", price: 55, piece: 1 },
    { name: "Delivery charged", price: 60, piece: 5 },
    { name: "Sprite", price: 70, piece: 11 },
    { name: "Budget meal", price: 44, piece: 15 },
    { name: "Goto ser", price: 33, piece: 22 }
  ]





  // DAY WISE COMPARISON CHART & PIE CHART

  const [totalAmount, settotalAmount] = useState(0)

  useEffect(() => {

    // DUMMY DATA FOR DAY WISE COMPARISON CHART
    const dateData = []
    for (let i = 1; i <= 30; i++) {
      dateData.push(i)
    }

    const priceData = []
    for (let i = 1; i <= 30; i++) {
      priceData.push(Math.floor(Math.random() * 3001))
    }

    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    const options = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'grey',
        textStyle: {
          color: 'white'
        },
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 5
      },
      grid: {
        left: '1.2%',
        right: '0',
        top: '9%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        name: "Date",
        axisLine: { show: false },
        axisTick: { show: false },
        data: dateData
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        max: 3000,
        interval: 1000
      },
      series: [{
        data: priceData,
        type: 'line',
        smooth: true,
        showSymbol: false,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'green' },
          { offset: 0.5, color: 'yellow' },
          { offset: 1, color: 'red' }
        ]),
        lineStyle: {
          width: 5
        }
      }]
    };

    options && myChart.setOption(options);



    // DUMMY DATA FOR PIE CHART
    const pieData = [
      { value: 900, name: 'Cash' },
      { value: 735, name: 'Credit card' },
      { value: 580, name: 'Google pay' },
      { value: 484, name: 'Credit' },
    ]

    const sum = pieData.reduce((a, b) => a + b.value, 0)
    settotalAmount(sum)

    const piechartDom = document.getElementById('piechart')!;
    const pieChart = echarts.init(piechartDom);

    const pieOption = {
      legend: {
        top: '81%',
        itemHeight: 12, 
        itemWidth: 15,
        textStyle: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          center: ['50%', '41%'],
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              formatter: '{b}:\n{c} AED',
            },
            labelLine: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: pieData,
        },
      ]
    };

    pieOption && pieChart.setOption(pieOption);

    return () => {
      myChart.dispose();
      pieChart.dispose()
    };

  }, [])



  return (
    <>
      <Navbar />

      <div className="dashboard-main h-fit w-screen">
        <div className="w-screen h-fit xl:grid xl:grid-cols-2 xl:gap-3 px-6">

          <div className="dashboard-first-left grid lg:grid-rows-10 gap-2 h-fit py-1">

            <div className="dashboard-first-left-mini-parent text-white grid lg:grid-cols-5 md:grid-cols-6 gap-2 md:gap-4 row-span-3 ">
              <div className="child bg-[#141414] md:col-span-3 lg:col-span-1 pl-4 py-3 flex flex-col justify-between gap-2 lg:gap-1">
                <div className="flex gap-5 items-center">
                  <h1 className="text-xs">Today Sales</h1>
                  <div>
                    <SlCalender />
                  </div>
                </div>
                <div className="flex items-end gap-[2px]">
                  <h1 className="text-2xl text-[#05FDF1]">365.61</h1>
                  <h1 className="mb-[2.3px]">AED</h1>
                </div>
                <div className="flex items-center text-[#2DFF1A]">
                  <div className="text-[18px]"><IoMdArrowDropup /></div>
                  <h1 className="text-[9px]">8 % than yesterday</h1>
                </div>
              </div>
              <div className="child bg-[#141414] md:col-span-3 lg:col-span-1 pl-4 py-3 flex flex-col justify-between gap-2 lg:gap-1">
                <div>
                  <h1 className="text-xs">Top sale time</h1>
                </div>
                <div className="flex items-end gap-[2px]">
                  <h1 className="text-2xl text-[#FFD400]">322.61</h1>
                  <h1 className="mb-[2.3px]">AED</h1>
                </div>
                <div className="text-[11px]">
                  <h1>12 pm - 3 pm</h1>
                </div>
              </div>
              <div className="child bg-[#141414] md:col-span-4 lg:col-span-1 pl-4 py-3 flex flex-col justify-between gap-2 lg:gap-1">
                <div>
                  <h1 className="text-xs">Door delivery sales</h1>
                </div>
                <div className="flex items-end gap-[2px]">
                  <h1 className="text-2xl text-[#FF8006]">322.61</h1>
                  <h1 className="mb-[2.3px]">AED</h1>
                </div>
                <div className="text-[11px]">
                  <h1>Bills 08</h1>
                </div>
              </div>
              <div className="child bg-[#141414] pl-4 py-3 flex flex-col gap-2 lg:gap-1">
                <div>
                  <h1 className="text-xs">Bills & Pax</h1>
                </div>
                <h1 className="text-2xl text-[#FF005A]">11/25</h1>
              </div>
              <div className="child bg-[#141414] pl-4 py-3 flex flex-col justify-between">
                <div>
                  <h1 className="text-xs">Void</h1>
                </div>
                <h1 className="text-2xl text-[#009FFF]">0/0</h1>
                <div className="text-[11px]">
                  <h1 className="tracking-wide">Bills/Items</h1>
                </div>
              </div>
            </div>

            <div className="dashboard-first-left-bottom h-fit grid xl:grid-cols-9 md:grid-cols-4 gap-3 row-span-7">
              <div className="child bg-[#141414] h-fit rounded-[15px] md:col-span-4 xl:col-span-5">
                <div className="flex justify-between px-7 pt-3">
                  <h1 className="text-white font-semibold">Sales wise comparison</h1>
                  <div className="text-[#2DFF1A] flex items-center">
                    <div><IoMdArrowDropup /></div>
                    <h1>3%</h1>
                  </div>
                </div>
                <SalesComparisonChart data={salesWiseData} />
              </div>
              <div className="bg-[#141414] child h-full text-white rounded-[15px] md:col-span-2">
                <div className="h-full xl:py-2 py-4 px-4 xl:gap-0 gap-4 flex flex-col justify-around">
                  <h1 className="text-xs font-semibold">Total purchase</h1>
                  <div className="">
                    <h1 className="text-xs">Cash / 23</h1>
                    <div className="flex items-end gap-1 mt-2">
                      <h1 className="text-[#8639BA]  text-2xl">322.61</h1>
                      <h1 className="mb-[2.3px]">AED</h1>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-xs">Credit / 11</h1>
                    <div className="flex items-end gap-1 mt-2">
                      <h1 className="text-[#AE45C6] text-2xl">322.61</h1>
                      <h1 className="mb-[2.3px]">AED</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#141414] child h-full text-white rounded-[15px] md:col-span-2">
                <div className="h-full xl:py-2 py-4 px-4 flex xl:gap-0 gap-4 flex-col justify-around">
                  <h1 className="text-xs font-semibold">Total Payments</h1>
                  <div className="">
                    <h1 className="text-xs">Cash / 23</h1>
                    <div className="flex items-end gap-1 mt-2">
                      <h1 className="text-[#EF7075]  text-2xl">322.61</h1>
                      <h1 className="mb-[2.3px]">AED</h1>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-xs">Credit / 11</h1>
                    <div className="flex items-end gap-1 mt-2">
                      <h1 className="text-[#F2B45C] text-2xl">322.61</h1>
                      <h1 className="mb-[2.3px]">AED</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="dashboard-first-right py-1 col-span-1">
            <div className="w-full h-full child py-10 lg:py-0 overflow-x-scroll overflow-y-hidden bg-[#141414] grid grid-rows-12 grid-flow-col rounded-[15px] pr-3">
              <div className="flex gap-8 mb-3 lg:gap-3 row-span-2 lg:mt-3 justify-between px-10 lg:px-20 items-center">
                <h1 className="text-white font-medium text-lg">Day wise comparison</h1>
                <div className="flex font-medium gap-2">
                  <h1 className="text-black rounded-[8px] px-2 bg-white cursor-pointer">Day</h1>
                  <h1 className="text-white rounded-[8px] px-2 hover:bg-white hover:text-black cursor-pointer">Month</h1>
                </div>
              </div>
              <div className="row-span-1 flex items-end w-[100%] px-5"><h1 className="text-white text-xs">Price</h1></div>
              <div className="row-span-9 mt-2 lg:mt-0 w-[100%] overflow-x-scroll overflow-y-hidden day-wise-chart">
                <div id="main" style={{ width: 2000, height: "100%" }} />
              </div>
              <div className="row-span-12 px-2 flex items-end py-7 "><h1 className="text-white text-xs">Date</h1></div>
            </div>
          </div>
        </div>

        <div className="dashboard-second-parent w-screen h-fit flex flex-col gap-2 xl:grid xl:grid-cols-7 xl:gap-3 py-2 px-6">

          <div className="bg-[#141414] px-10 py-10 lg:py-0 child gap-5 lg:gap-0 rounded-[15px] grid lg:grid-cols-6 lg:col-span-3">
            <div className="lg:col-span-3  text-white flex flex-col justify-center gap-4  ">
              <h1 className="text-xl">Collection distribution</h1>
              <div>
                <h1>Total amount</h1>
                <h1 className="text-3xl">{totalAmount} AED</h1>
              </div>
            </div>
            <div className="lg:col-span-3 ">
              <div id="piechart" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
          <div className="bg-[#141414] child text-white rounded-[15px] lg:col-span-2 py-5 px-6">
            <h1 className="text-sm font-semibold">Top 5 selling product</h1>
            <Top5ProductsChart data={top5ProductsData} />
          </div>
          <div className="bg-[#141414] child text-white rounded-[15px] lg:col-span-2 py-5 px-6">
            <h1 className="text-sm font-semibold">Least 5 selling product</h1>
            <Least5ProductsChart data={least5ProducstData} />
          </div>
        </div>
      </div>

    </>
  )
}

export default DashboardComponent