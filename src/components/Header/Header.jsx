import logo from '../../assets/logo_2.png';
import user_image from '../../assets/image 18.png';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
    return (
        <div className='flex items-center justify-center w-full py-5 px-4 h-[80px] fixed top-0'>
            <div className='flex flex-row gap-5 w-2/3 items-center '>
                <div className='w-[238px]'>
                    <img src={logo} alt="" />
                </div>
                <form className='flex w-auto  items-center gap-3'>
                    <span className='text-gray-1'>
                        <IoSearchOutline />
                    </span>
                    <input className='bg-bg h-full outline-none' type="text" placeholder="Search..." />
                </form>
            </div>
            <div className='w-1/3 gap-3 flex flex-row-reverse items-center '>
                <div className="w-[40px] h-[40px] bg-primary flex justify-center overflow-hidden items-center rounded-full">
                    <img src={user_image} alt="" className="w-[40px] h-[40px] " />
                </div>
                <span>
                    <IoMdNotificationsOutline />
                </span>
            </div>
        </div>
    )
}
