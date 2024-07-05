import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import eth from "../assets/eth.png";
import { IoIosArrowDown } from "react-icons/io";
import "./css/TradePage.css"
import sent from "../assets/sent.png";
import recieved from "../assets/recieved.png";
import qrcode from "../assets/qr_code.png";
import { PiStarThin } from "react-icons/pi";
import { RiFileCopyLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import crud from '../useFunction/UserCRUD'
import authentication from '../useFunction/UseFetchAuthService'
export default function InsightPage() {
    const { userDetail} = crud
    const { getCurrentUser } = authentication
    const [user, setUser] = useState('')
    useEffect(()=>{
        (async() => {
            const currentUser = await getCurrentUser()
            if (currentUser.id) {
                const detail = await userDetail(currentUser?.id)

                detail.wallets.forEach(wallet => {
                    if (wallet.crypto_info[0].name == "ETHEREUM") {
                        console.log(wallet);
                        setUser(wallet)
                    }
                })
            }
            // console.log(user);
        })
        ()
    }, [])


    const convertDateToUniqueId = (dateString)=> {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const dateComponents = `${year}${month}${day}${hours}${minutes}${seconds}`;

        const encodedDate = btoa(dateComponents).toLocaleLowerCase();

        let uid = encodedDate.replace(/=/g, '');

        uid = uid.split('').map((char, index) => {
            return (index + 1) % 2 === 0 ? char.toUpperCase() : char;
        }).join('');
        
        return uid;
    }


    const getTransactionDate = (dateString)=>{
        const date = new Date(dateString);

        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0'); 

        return {
            date: month + ' ' + day +', '+year,
            time: hours + ':' + minutes
        }


    }
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

                    <div className="flex gap-4 pl-8 min-h-[70vh]">
                        <div className="w-[70%] px-4 py-5 mb-10 rounded-3xl min-h-[40vh] bg-white  ">
                            <h5 className="text-[20px] font-poppins font-medium">Balance</h5>
                            <div className="flex items-center gap-10">
                                <div className="flex items-center">
                                    <span className="text-[18px] font-poppins font-normal ">ETH</span>
                                    <span className="font-poppins font-semibold text-[26px]">{user?.quantity}</span>
                                </div>
                                <span>$1328,92</span>
                            </div>
                            <div>
                                <div className="flex flex-row gap-4 border-b-1 mt-5 border-b-gray">
                                    <span className="cursor-pointer font-poppins pb-3" id="selected" >All</span>
                                    <span className="cursor-pointer font-poppins pb-3" id="">Sent</span>
                                    <span className="cursor-pointer font-poppins pb-3" id="">Recieved</span>
                                </div>
                                <div>
                                    { user?.transaction_history?.map((transaction, index)=>(
                                        <div key={index} className="flex py-3 border-b-1 border-b-gray gap-3 items-center">
                                            <div className={`w-[44px] h-[44px] ${transaction.transaction_type !== "BUY" ? 'bg-red-2' : 'bg-success-2'} rounded-xl flex items-center justify-center`}>
                                                <img src={transaction.transaction_type !== "BUY" ? sent : recieved} alt="" />
                                            </div>
                                            <div className="flex flex-row w-full justify-between">
                                                <div className="flex flex-col">
                                                    <h6 className="font-poppins font-semibold text-[16px]">{transaction.transaction_type !== "BUY" ? "SELL" : "BUY"}</h6>
                                                    <div className="flex gap-2 flex-row items-center">
                                                        <span className="font-poppins font-normal text-[12px]">{getTransactionDate(transaction.transaction_date).date}</span>
                                                        <span className="w-[5px] h-[5px] bg-gray-1 rounded-full"></span>
                                                        <span className="font-poppins font-normal text-[12px]">{getTransactionDate(transaction.transaction_date).time}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 items-center justify-center">
                                                    <span className="font-poppins font-normal text-[12px] text-[rgba(29, 31, 36, 1)]">to</span>
                                                    <span className="font-poppins font-semibold text-[12px] text-[rgba(29, 31, 36, 1)]">{convertDateToUniqueId(transaction.transaction_date)}</span>
                                                </div>
                                                <div className="flex flex-col items-start ">
                                                    <span className="font-poppins text-[12px] font-semibold ">{transaction.transaction_type !== "BUY" ? '-' : '+' }{transaction.quantity} ETH</span>
                                                    <span className="font-poppins text-[12px] font-normal">-$243</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-[28%] rounded-3xl h-[65vh] bg-white">
                            <div className="flex flex-row items-center justify-center">
                                <div className=" bg-gray w-[162px] flex justify-between p-0.5 rounded-lg mt-5">
                                    <span className="text-[14px] font-semibold text-center w-[81px] py-1 px-2 rounded-lg cursor-pointer">Send</span>
                                    <span className="text-[14px] font-semibold bg-white w-[81px] py-1 px-2 rounded-lg text-center cursor-pointer">Recieve</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center w-[90%] h-[238px] border-gray border-1 rounded-[22px] mt-5">
                                    <img src={qrcode} alt="" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-5">
                                <div className="w-[90%]">
                                    <h6 className="font-poppins text-[12px] font-medium">MY ETH ADDRESS</h6>
                                    <div className="flex justify-between mt-1 border-1 border-gray rounded-lg py-2 px-1">
                                        <span className="text-[12px] font-poppins font-normal text-[rgba(107, 110, 117, 1)]">
                                            YGhay6u8920IY78hgOGA6783GIas
                                        </span>
                                        <span className="cursor-pointer"><RiFileCopyLine /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
