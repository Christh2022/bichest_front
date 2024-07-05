import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import eth from "../assets/eth.png";
import xrp from "../assets/XRP_1.png";
import hopr from "../assets/HOPR.png";
import lcx from "../assets/LCX.png";
import mxc from "../assets/MXC.png";
import api3 from "../assets/API3.png";
import shping from "../assets/SHPING.png";
import coti from "../assets/COTI.png";
import xyo from "../assets/XYO.png";
import coti2 from "../assets/COTI_2.png";
import img1 from "../assets/Thumbnail.png";
import img2 from "../assets/Thumbnail _1.png";
import img3 from "../assets/Thumbnail (2).png";
import img4 from "../assets/Thumbnail (3).png";
import usd from "../assets/USD.png";
import { IoIosArrowDown } from "react-icons/io";
import { PiStarThin } from "react-icons/pi";
import { GoArrowUpRight, GoArrowSwitch, GoArrowDownLeft } from "react-icons/go";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { HiOutlineDocument } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { useCallback, useEffect, useState } from "react";
import crud from '../useFunction/UserCRUD'
import authentication from '../useFunction/UseFetchAuthService'
import handler from '../useFunction/crypto';
import { toast } from "react-toastify";
import Chart from "../components/Chart";
const { getCurrentUser } = authentication
const { userDetail } = crud



export default function TradePage() {
    const [user, setUser] = useState('')
    const [wallet, setWallet] = useState(null)
    const [item, setItem] = useState(null)
    const [transaction, setTransaction] = useState(false);
    const [cryptoNum, setCryptoNum] = useState(0)

    const [data, setData] = useState();

    
    const setDataHnandler = useCallback(async () => {
        try {
            const tab = await handler.fetchData()
        const cryptoTab = await handler.getCryptoService();
        const table = []
                
        cryptoTab?.forEach((value) => {
            tab?.forEach((val) => {
                if (val.symbol.toLowerCase() == value.symbol.toLowerCase()) {
                    table.push(val);
                }  
            })
        })
        
        let item;
        table?.forEach(value => {
            if (value.name.toUpperCase() == "ETHEREUM") {
                console.log(value);
                item = value
            }
        })
        
        setItem(item?.quote?.USD);
        setData(item)
            
        } catch (error) {
            console.log(error);
        }
       
    }, [])

    useEffect(() => {
        setDataHnandler()
    }, [setData])
    
    const Buy = async (quantity, price, id, name) => {
        console.log(price)
        if (price <= 0) {
            toast.error("Price must be greater than 0")
            return;
        }
        try {
            const response = await handler.buyCrypto(quantity, price, id, name)
            console.log(response);
            toast.success(response.message)
        } catch (error) {
            console.log(error);
            toast.error("Failed to buy crypto, insufficient funds")
        }  
        setTransaction(false)
    }


    useEffect(()=>{
        (async() => {
            const currentUser = await getCurrentUser()
            if (currentUser.id) {
                const detail = await userDetail(currentUser?.id)
                
                detail.wallets.forEach(wallet => {
                    if (wallet.crypto_info[0].name == "ETHEREUM") {
                        console.log(wallet);
                        setWallet(wallet)
                    }
                })
                

                setUser(detail)
                console.log(wallet);
            }
        })
        ()
    }, [getCurrentUser])
    return (
        <div className="bg-bg h-[100vh] flex flex-col">
            <Header />
            <div className="">
                <div className='pl-3' id="sidebar">
                    <SideBar />
                </div>
                <div className="" id="reports-info">
                    <div className="flex items-center justify-between pl-8 mb-5 pb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-[50px] h-[50px] flex items-center justify-center bg-blue-1 rounded-[12px] ">
                                <img src={eth} alt="" />
                            </div>
                            <div className=" flex flex-col">
                                <h3 className="font-poppins font-semibold text-[24px] text-[rgba(29,31,36,1)]  ">Ethereum</h3>
                                <span className="font-poppins font-normal text-[12px] text-[rgba(107, 110, 117, 1)] ">ETH</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center rounded-lg gap-2 bg-white py-1 px-2 cursor-pointer">
                                <span className="text-[12px]">USD</span>
                                <span>
                                    <IoIosArrowDown />
                                </span>
                            </div>    
                            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg">
                                <span className="text-[12px]"><PiStarThin/></span>
                                <span className="text-[12px]">Add to watchlist</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 ml-8 pb-3 mb-5 border-b-1 mt-5 border-b-gray-2">
                        <span className="cursor-pointer font-poppins font-normal text-[13px] px-2 py-1 rounded-lg text-primary bg-white" >Overview</span>
                        <span className="cursor-pointer font-poppins font-normal text-[13px] hover:bg-white hover:rounded-lg hover:text-primary px-2 py-1" >Transaction</span>
                        <span className="cursor-pointer font-poppins font-normal text-[13px] hover:bg-white hover:rounded-lg hover:text-primary px-2 py-1" >Vault</span>
                    </div>

                    <div className="flex gap-4 pl-8 min-h-[70vh]">
                        <div className="w-[70%] pb-5 mb-10 min-h-[40vh] ">
                            <div className="pl-3 mb-5 bg-white  rounded-3xl w-full h-[65vh]">
                                <div className='py-4 px-2'>
                                    <h3 className='font-poppins font-medium text-[20px]'>Prices</h3>
                                    <div className='flex items-center justify-between pr-3'>
                                        <div className='flex gap-5'>
                                            <div className="flex gap-3 items-center">
                                                <div className="flex items-end">
                                                    <span className="font-poppins font-medium text-[16px]">$</span>
                                                    <span className="font-poppins font-semibold text-[26px]">{(item?.price)?.toFixed(2) || 0}</span>
                                                </div>
                                                <div className="flex flex-row gap-1 items-center">
                                                    {item?.percent_change_1h >= 0 ?
                                                        <>
                                                            <span className="bg-success-1 text-[11px] rounded-[100%] flex items-center justify-center  text-success w-[14px] h-[14px]">
                                                                <GoArrowUpRight />
                                                            </span>
                                                            <span className="text-success font-poppins text-[13px] font-medium"> 1,8%</span>
                                                        </>
                                                        : <>
                                                            <span className="bg-red text-[11px] rounded-[100%] flex items-center justify-center  text-red-1 w-[14px] h-[14px]">
                                                                <GoArrowDownLeft />
                                                            </span>
                                                            <span className="text-red-1 font-poppins text-[13px] font-medium">1,8%</span>
                                                        </>
                                                    }
                                                </div>
                                            </div> 
                                            
                                        </div>
                                        <div className='flex gap-3 border-gray-2 border-1 px-2 rounded-lg  py-1'>
                                            <span className="font-poppins font-normal cursor-pointer hover:text-primary text-gray-5 text-[13px]">1H</span>
                                            <span className="font-poppins font-normal cursor-pointer hover:text-primary text-gray text-[13px]">1D</span>
                                            <span className="font-poppins font-normal cursor-pointer hover:text-primary text-primary text-[13px]">1W</span>
                                            <span className="font-poppins font-normal cursor-pointer hover:text-primary text-gray text-[13px]">1M</span>
                                            <span className="font-poppins font-normal cursor-pointer hover:text-primary text-gray text-[13px]">1Y</span>
                                            <span className="font-poppins font-normal cursor-pointer hover:text-primary text-gray text-[13px]">ALL</span>
                                        </div>
                                    </div>
                                    <div className="h-">
                                        <Chart data={data} />

                                    </div>
                                </div>
                            </div>
                            <div className="pl-3 mb-5 bg-white  rounded-3xl w-full h-[33vh]">
                                <div className='py-4 px-2'>
                                    <h3 className='font-poppins font-medium text-[20px]'>Market</h3>
                                    <div className='flex items-center justify-between mt-8 pr-3' id="tradeMarket">
                                        <div className="flex flex-col gap-0.5 ">
                                            <div className="flex flex-row gap-2 items-center">
                                                <h6 className="font-poppins text-[12px] font-medium">MARKET CAP</h6>
                                                <span className="text-[16px] rotate-180 ">
                                                    <LiaExclamationCircleSolid />
                                                </span>
                                            </div>
                                            <span  className="font-poppins font-semibold text-[16px]">$163.2B</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5 ">
                                            <div className="flex flex-row gap-2 items-center">
                                                <h6 className="font-poppins text-[12px] font-medium">VOLUME (24H)</h6>
                                                <span className="text-[16px] rotate-180 ">
                                                    <LiaExclamationCircleSolid />
                                                </span>
                                            </div>
                                            <span  className="font-poppins font-semibold text-[16px]">$9.5B</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5 ">
                                            <div className="flex flex-row gap-2 items-center">
                                                <h6 className="font-poppins text-[12px] font-medium">CIRCULATING SUPPLY</h6>
                                                <span className="text-[16px] rotate-180 ">
                                                    <LiaExclamationCircleSolid />
                                                </span>
                                            </div>
                                            <span  className="font-poppins font-semibold text-[16px]">$122.4M ETH</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5 ">
                                            <div className="flex flex-row gap-2 items-center">
                                                <h6 className="font-poppins text-[12px] font-medium">TYPICAL HOLD TIME</h6>
                                                <span className="text-[16px] rotate-180 ">
                                                    <LiaExclamationCircleSolid />
                                                </span>
                                            </div>
                                            <span  className="font-poppins font-semibold text-[16px]">115 days</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5 ">
                                            <div className="flex flex-row gap-2 items-center">
                                                <h6 className="font-poppins text-[12px] font-medium">PRICE CHANGE (24H)</h6>
                                                <span className="text-[16px] rotate-180 ">
                                                    <LiaExclamationCircleSolid />
                                                </span>
                                            </div>
                                            <div className="flex flex-row gap-1 items-center">
                                                <span className="bg-success-1 text-[16px] rounded-[100%] flex items-center justify-center  text-success w-[20px] h-[20px]">
                                                    <GoArrowUpRight />
                                                </span>
                                                <span className="text-success font-poppins text-[16px] font-medium">1,8%</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0.5 ">
                                            <div className="flex flex-row gap-2 items-center">
                                                <h6 className="font-poppins text-[12px] font-medium">TADING ACTIVITY</h6>
                                                <span className="text-[16px] rotate-180 ">
                                                    <LiaExclamationCircleSolid />
                                                </span>
                                            </div>
                                            <span  className="font-poppins font-semibold text-[16px]">122.4 ETH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-3 mb-5 bg-white rounded-3xl w-full h-[36vh]">
                                <div className="py-4 pl-2 mr-4 ">
                                    <h3 className='font-poppins font-medium text-[20px]'>About</h3>
                                    <p className="font-poppins font-normal text-[14px] text-[rgba(107, 110, 117, 1)] mt-2">
                                        Ethereum is a decentralized computing platform that uses ETH
                                        (also called Ether) to pay transaction fees (or “gas”).
                                        Developers can use Ethereum to run decentralized applications
                                        (dApps) and issue new crypto assets, known as Ethereum tokens.
                                    </p>
                                    <div className="mt-5">
                                        <h6 className="font-poppins text-[16px] font-medium">Ressources</h6>
                                        <div className="flex flex-row gap-4 mt-3 ">
                                            <div className="cursor-pointer text-primary flex flex-row gap-2 border-1 items-center border-gray-2 px-2 py-1 rounded-lg">
                                               <span className="text-gray-2"><HiOutlineDocument/> </span>
                                                <span>Whitepaper</span>
                                            </div> 
                                            <div className="cursor-pointer text-primary flex flex-row gap-2 border-1 items-center border-gray-2 px-2 py-1 rounded-lg">
                                               <span className="text-gray-2"><TbWorld/> </span>
                                                <span>Website</span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-3 mb-3 bg-white rounded-3xl w-full h-[40vh]">
                                <div className="py-4 pl-2">
                                    <h3 className="font-poppins font-semiold text-[20px]">Trending assets</h3>
                                    <div id="tradeMarket">
                                        <div className="flex gap-3 items-center">
                                            <img src={xrp} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>XRP</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={hopr} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>HOPR</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={lcx} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>LCX</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={mxc} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>MXC</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={api3} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>API3</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={shping} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>SHPING</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={coti} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>COTI</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={xyo} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>XYO</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={coti2} alt="/" className="w-[42px] h-[42px] object-contain" />
                                            <span>XYO</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl3 mb-3 mt-5 bg-white rounded-3xl w-full">
                                <div className="py-4 pl-3">
                                    <h3 className="font-poppins font-medium text-[20px]">News</h3>
                                    <div id="container_reports" className="mr-8 mt-5 mb-2">
                                        <div className="flex flex-row gap-3 items-center">
                                            <img src={img1} alt="" />
                                            <div>
                                                <p className="font-poppins font-normal text-[12px]">
                                                    First Mover Americas: Technical Signs Flashing Green for Bitcoin...
                                                </p>
                                                <div className="flex gap-2 flex-row items-center">
                                                    <span className="font-poppins font-normal text-[12px]">COINDESK</span>
                                                    <span className="w-[5px] h-[5px] bg-gray-1 rounded-full"></span>
                                                    <span className="font-poppins font-normal text-[12px]">OCT 17, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <img src={img2} alt="" />
                                            <div>
                                                <p className="font-poppins font-normal text-[12px]">
                                                    Australian authority temporarily suspends three Holon Investments...
                                                </p>
                                                <div className="flex gap-2 flex-row items-center">
                                                    <span className="font-poppins font-normal text-[12px]">THE BLOCK</span>
                                                    <span className="w-[5px] h-[5px] bg-gray-1 rounded-full"></span>
                                                    <span className="font-poppins font-normal text-[12px]">OCT 17, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <img src={img3} alt="" />
                                            <div>
                                                <p className="font-poppins font-normal text-[12px]">
                                                   Bitcoin, Ethereum Erase Losses Following Hot Inflation Report
                                                </p>
                                                <div className="flex gap-2 flex-row items-center">
                                                    <span className="font-poppins font-normal text-[12px]">DECRYPT</span>
                                                    <span className="w-[5px] h-[5px] bg-gray-1 rounded-full"></span>
                                                    <span className="font-poppins font-normal text-[12px]">OCT 17, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <img src={img4} alt="" />
                                            <div>
                                                <p className="font-poppins font-normal text-[12px]">
                                                   Crypto Market Is {`‘`}The Tail Being Wagged by a Very Sick Dog {`’`}...
                                                </p>
                                                <div className="flex gap-2 flex-row items-center">
                                                    <span className="font-poppins font-normal text-[12px]">DECRYPT</span>
                                                    <span className="w-[5px] h-[5px] bg-gray-1 rounded-full"></span>
                                                    <span className="font-poppins font-normal text-[12px]">OCT 17, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[28%] rounded-3xl h-[92vh] bg-white">
                            <div className="flex flex-row items-center justify-center">
                                <div className=" bg-gray flex justify-between gap-0.5 p-0.5 rounded-lg mt-5">
                                    <span className="text-[14px] font-semibold bg-white w-[81px] py-1 px-2 rounded-lg text-center cursor-pointer">Buy</span>
                                    <span className="text-[14px] font-semibold hover:bg-white text-center w-[81px] py-1 px-2 rounded-lg cursor-pointer">Sell</span>
                                    <span className="text-[14px] font-semibold hover:bg-white text-center w-[81px] py-1 px-2 rounded-lg cursor-pointer">Exchange</span>
                                </div>
                            </div>
                            <div className="px-5 py-4">
                                <h6 className="font-poppins font-medium text-[13px]">PAY WITH</h6>
                                <div className="border-gray-2 mt-2 rounded-xl border-1 px-2 py-3">
                                    <div className="flex gap-1.5 border-b-1 pb-3 border-gray-2">
                                        <div className="bg-violet-1 p-3 rounded-xl flex items-center justify-center">
                                            <img src={usd} alt="/" />
                                        </div>
                                        <div className="flex flex-row items-center justify-between w-full ">
                                            <div className="flex justify-between flex-col">
                                                <span className=" font-poppins font-semibold text-[13px] ">United States Dollar</span>
                                                <span className=" font-poppins font-normal text-[13px]">USD</span>
                                            </div>
                                            <span className="cursor-pointer">
                                                <IoIosArrowDown/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-end mt-4">
                                            <span className="font-poppins font-medium text-[16px]">$</span>
                                            <span className="font-poppins font-semibold text-[26px]">
                                                {Number.isNaN((item?.price)?.toFixed(2) * Number(wallet?.quantity))? 0 :
                                                ((item?.price)?.toFixed(2) * Number(wallet?.quantity)).toFixed(2) }
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-poppins font-normal text-[12px]">USD Balance</span>
                                            <span className="font-poppins font-semibold text-[13px]">{user?.client_id?.balance}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <div className="w-[40%] h-[1px] bg-gray"></div>
                                    <div className="flex w-[20%] items-center justify-center">
                                        <span className="rotate-90 bg-primary p-2 rounded-full text-white">
                                            <GoArrowSwitch />
                                        </span>
                                    </div>
                                    <div className="w-[40%] h-[1px] bg-gray"></div>
                                </div>
                                <div>
                                    <h6 className="font-poppins font-medium text-[13px] mt-3">YOU GET</h6>
                                    <div className="border-gray-2 mt-2 rounded-xl border-1 bg-gray-6 px-2 py-3">
                                    <div className="flex gap-1.5 border-b-1 pb-3 border-gray-2">
                                        <div className="bg-blue-1 p-3 rounded-xl flex items-center justify-center">
                                            <img src={eth} alt="/" />
                                        </div>
                                        <div className="flex flex-row items-center justify-between w-full ">
                                            <div className="flex justify-between flex-col">
                                                <span className=" font-poppins font-semibold text-[13px] ">Ethereum</span>
                                                <span className=" font-poppins font-normal text-[13px]">ETH</span>
                                            </div>
                                            <span className="cursor-pointer">
                                                <IoIosArrowDown/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-end mt-4 overflow-hidden">
                                            <span className="font-poppins font-medium text-[13px]">ETH</span>
                                                {!transaction ?
                                                    <span className="font-poppins font-semibold text-[26px] w-[100%]" onClick={() => setTransaction(true)}>{cryptoNum || 0}</span> :
                                                    <input className="font-poppins font-semibold text-[26px] outline-none bg-gray-6" type="number" onChange={(e) => setCryptoNum(e.target.value)} />}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-poppins font-normal text-[12px]">1 ETH</span>
                                                <span className="font-poppins font-semibold text-[12px]">${(item?.price)?.toFixed(2) || 0}</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <button
                                    onClick={() => Buy(cryptoNum,
                                        ((item?.price)?.toFixed(2) * parseFloat(cryptoNum).toFixed(2)),
                                        user?.client_id?.id,
                                        wallet?.crypto_info[0].name
                                    )}
                                    className="font-poppins font-medium w-full bg-primary rounded-lg
                                     text-white py-1 border-0 mt-4 cursor-pointer">
                                    Buy Ethereum
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
