import { GoArrowUpRight } from "react-icons/go";
import graph from "../../assets/graph.png";
import { TiArrowRight } from "react-icons/ti";
import btc from "../../assets/bitcoin.png";
import cardano from "../../assets/cardano.png";
import xrp from "../../assets/XRP.png";
import eth from "../../assets/eth.png";

export default function ReportBalance() {
    return (
        <div className="py-3 px-5">
            <div className="mt-5">
                <h3 className="font-poppins font-medium text-[20px]">Balance</h3>
                <div className="flex justify-between">
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
                    <div>
                        <img src={graph} alt="graph" />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex justify-between mt-6">
                    <h3 className="font-poppins font-medium text-[20px]">Assets</h3>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="font-poppins font-semibold text-primary">See All Assets</span>
                        <span className="text-[20px] text-primary">
                            <TiArrowRight />
                        </span>
                    </div>
                </div>
                <div id="container_reports" className="mt-3">
                    <div className="bg-white flex px-2 justify-between border-gray border-1 w-[100%] h-[63px] rounded-xl">
                        <div className="flex flex-row items-center justify-center">
                            <div className="bg-orange-1 flex items-center justify-center w-[44px] h-[44px] rounded-lg">
                                <img src={btc} alt="" />
                            </div>
                            <div className="px-2 flex flex-col ">
                                <h5 className="text-[13px] font-poppins font-semibold">Bitcoin</h5>
                                <span className="font-poppins text-gray-3 text-[12px] font-normal">BTC</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-[13px] font-poppins font-semibold">1.240 BTC</span>
                            <span className="font-poppins  text-gray-3 text-[12px] font-normal">$12.340,12</span>
                        </div>
                    </div>
                    <div className="bg-white flex px-2 justify-between border-gray border-1 w-[100%] h-[63px] rounded-xl">
                        <div className="flex flex-row items-center justify-center">
                            <div className="bg-blue-1 flex items-center justify-center w-[44px] h-[44px] rounded-lg">
                                <img src={eth} alt="eth" />
                            </div>
                            <div className="px-2 flex flex-col ">
                                <h5 className="text-[13px] font-poppins font-semibold">Ethereum</h5>
                                <span className="font-poppins text-gray-3 text-[12px] font-normal">ETH</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-[13px] font-poppins font-semibold">1.240 ETH</span>
                            <span className="font-poppins  text-gray-3 text-[12px] font-normal">$12.340,12</span>
                        </div>
                    </div>
                    <div className="bg-white flex px-2 justify-between border-gray border-1 w-[100%] h-[63px] rounded-xl">
                        <div className="flex flex-row items-center justify-center">
                            <div className="bg-gray-4 flex items-center justify-center w-[44px] h-[44px] rounded-lg">
                                <img src={xrp} alt="" />
                            </div>
                            <div className="px-2 flex flex-col ">
                                <h5 className="text-[13px] font-poppins font-semibold">XRP</h5>
                                <span className="font-poppins text-gray-3 text-[12px] font-normal">XRP</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-[13px] font-poppins font-semibold">1.240 XRP</span>
                            <span className="font-poppins  text-gray-3 text-[12px] font-normal">$12.340,12</span>
                        </div>
                    </div>
                    <div className="bg-white flex px-2 justify-between border-gray border-1 w-[100%] h-[63px] rounded-xl">
                        <div className="flex flex-row items-center justify-center">
                            <div className="bg-blue-2 flex items-center justify-center w-[44px] h-[44px] rounded-lg">
                                <img src={cardano} alt="" />
                            </div>
                            <div className="px-2 flex flex-col ">
                                <h5 className="text-[13px] font-poppins font-semibold">Cardano</h5>
                                <span className="font-poppins text-gray-3 text-[12px] font-normal">ADA</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-[13px] font-poppins font-semibold">1.240 ADA</span>
                            <span className="font-poppins  text-gray-3 text-[12px] font-normal">$12.340,12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
