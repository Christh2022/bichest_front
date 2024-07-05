import Header from "../components/Header/Header";
import ReportBalance from "../components/ReportBalance/ReportBalance";
import SideBar from "../components/SideBar/SideBar";
import { IoIosArrowDown } from "react-icons/io";
import "./css/reportsPage.css";
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import btc from "../assets/bitcoin.png";
import cardano from "../assets/cardano.png";
import xrp from "../assets/XRP.png";
import eth from "../assets/eth.png";
import TrendingRates from "../components/Trending_rates/TrendingRates";
import 'chart.js/auto';
export default function ReportsPage() {
    


    
    return (
        <div className="bg-bg h-[100vh] flex flex-col">
            <Header />
            <div className="">
                <div className='pl-3' id="sidebar">
                    <SideBar />
                </div>
                <div className="" id="reports-info">
                    <div className="pl-8 pb-5 mb-5">
                        <div className="flex lg:flex-row  items-center justify-between">
                            <div>
                                <h2 className="font-poppins font-semibold text-[24px]">Reports</h2>
                                <span className="text-[12px] font-normal font-poppins">Take a look for your Bitchesr account reports</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 bg-white px-3 py-2 rounded-xl">
                                <span className="text-[13px]">Last 6 Month: Jan 1, 2022 - Jun 31, 2022</span>
                                <span className="cursor-pointer">
                                    <IoIosArrowDown />
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-6 flex-wrap lg:flex-col">
                            <div className=" flex-1 lg:w-[100%] h-[350px] bg-white rounded-xl">
                                <ReportBalance />
                            </div>
                            <div className="flex-1 gap-4" id="container_reports">
                                <div className="py-4 px-5 bg-white w-[100%] h-[166px] rounded-xl">
                                    <h5 className="mt-2 font-poppins font-medium text-[20px] text-[rgba(29, 31, 36, 1)]">Profit</h5>
                                    <div className="mt-4">
                                        <div className="flex gap-3 items-center">
                                            <div className="flex items-end">
                                                <span className="font-poppins font-medium text-[16px]">$</span>
                                                <span className="font-poppins font-semibold text-[26px]">42.431,20</span>
                                            </div>
                                            <div className="flex flex-row gap-1 items-center">
                                                <span className="bg-success-1 text-[11px] rounded-[100%] flex items-center justify-center  text-success w-[14px] h-[14px]">
                                                    <GoArrowUpRight />
                                                </span>
                                                <span className="text-success font-poppins text-[13px] font-medium">1,8%</span>
                                            </div>
                                        </div> 
                                        <span className="font-poppins font-normal text-[12px]">vs previous 6 month</span>
                                    </div>
                                </div>
                                <div className="py-4 px-5 bg-white w-[100%] h-[166px] rounded-xl">
                                    <h5 className="mt-2 font-poppins font-medium text-[20px] text-[rgba(29, 31, 36, 1)]">Invested</h5>
                                    <div className="mt-4">
                                        <div className="flex gap-3 items-center">
                                            <div className="flex items-end">
                                                <span className="font-poppins font-medium text-[16px]">$</span>
                                                <span className="font-poppins font-semibold text-[26px]">32.146,20</span>
                                            </div>
                                            <div className="flex flex-row gap-1 items-center">
                                                <span className="bg-success-1 text-[11px] rounded-[100%] flex items-center justify-center  text-success w-[14px] h-[14px]">
                                                    <GoArrowUpRight />
                                                </span>
                                                <span className="text-success font-poppins text-[13px] font-medium">1,8%</span>
                                            </div>
                                        </div> 
                                        <span className="font-poppins font-normal text-[12px]">vs previous 6 month</span>
                                    </div>
                                </div>
                                <div className="py-4  px-5 bg-white w-[100%] h-[166px] rounded-xl">
                                    <h5 className="mt-2 font-poppins font-medium text-[20px] text-[rgba(29, 31, 36, 1)]">Top Assets</h5>
                                    <div className="flex flex-row gap-1 w-[100%] mt-3">
                                        <span className="w-[38%] py-1 rounded-l-2xl text-white text-center bg-orange font-poppins text-[12px] font-medium">83%</span>
                                        <span className="w-[25%] py-1 text-center bg-blue-3 text-white font-poppins text-[12px] font-medium">74%</span>
                                        <span className="w-[17%] py-1 text-center bg-black-1 text-white font-poppins text-[12px] font-medium">67%</span>
                                        <span className="w-[14%] py-1 rounded-r-2xl text-white text-center bg-blue-4 font-poppins text-[12px] font-medium">50%</span>
                                    </div>
                                    <div className="mt-5 flex flex-row gap-[5px] items-center">
                                        <div className="flex flex-row items-center gap-1 pr-2 bg-orange-1 rounded-3xl w-[52px]">
                                            <div>
                                                <img src={btc} alt="bitcoin" />
                                            </div>
                                            <span className="text-[12px] font-medium font-poppins ">BTC</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-1 pr-2 bg-blue-1 rounded-3xl w-[52px]">
                                            <div>
                                                <img src={eth} alt="bitcoin" />
                                            </div>
                                            <span className="text-[12px] font-medium font-poppins ">BTC</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-1 pr-2 bg-gray-4 rounded-3xl w-[52px]">
                                            <div>
                                                <img src={xrp} alt="bitcoin" />
                                            </div>
                                            <span className="text-[12px] font-medium font-poppins ">BTC</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-1 pr-2 bg-blue-2 rounded-3xl w-[52px]">
                                            <div>
                                                <img src={cardano} alt="bitcoin" />
                                            </div>
                                            <span className="text-[12px] font-medium font-poppins ">BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4  px-5 bg-white w-[100%] h-[166px] rounded-xl">
                                    <h5 className="mt-2 font-poppins font-medium text-[20px] text-[rgba(29, 31, 36, 1)]">ROI</h5>
                                    <div className="mt-4">
                                        <div className="flex gap-3 items-center">
                                            <div className="">
                                                <span className="font-poppins font-semibold text-[26px]">58.1%</span>
                                            </div>
                                            <div className="flex flex-row gap-1 items-center">
                                                <span className="bg-red text-[11px] rounded-[100%] flex items-center justify-center  text-red-1 w-[14px] h-[14px]">
                                                    <GoArrowDownLeft />
                                                </span>
                                                <span className="text-red-1 font-poppins text-[13px] font-medium">1,8%</span>
                                            </div>
                                        </div> 
                                        <span className="font-poppins font-normal text-[12px]">vs previous 6 month</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="pl-8 mb-5 ">
                        <TrendingRates/>
                    </div>
                </div>
            </div>
        </div>
    );
}
