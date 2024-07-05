import { AiOutlineDashboard } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { PiChartPieSliceLight,  PiChartBar } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./sideBar.css";

const tab = [
    {
        label: 'Dashboard',
        icon: <AiOutlineDashboard />,
        path: '/',
    },
    {
        label: 'Portfolio',
        icon: <SiDatabricks />,
        path: '/portfolio',
    },
    {
        label: 'Trade',
        icon: <BsArrowLeftRight />,
        path: '/trade',
    },
    {
        label: 'Insight',
        icon: <PiChartBar />,
        path: '/insight',
    },
    {
        label: 'Reports',
        icon: <PiChartPieSliceLight />,
        path: '/reports',
    },
    {
        label: 'Settings',
        icon: <RiSettings4Line />,
        path: '/settings',
    },
]
export default function SideBar() {
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(() => {
        document.title = tab.find(tab => tab.path === location.pathname)?.label || 'Dashboard'
     }, [location.pathname]
    )

    return (
        <div className="flex flex-col gap-2 w-[238px]">
            {tab.map((item, index) =>
                <div key={index}
                    
                    className={`flex gap-2 items-center h-[48px] px-2 rounded-xl 
                    cursor-pointer hover:bg-white
                    ${location.pathname === item.path ? 'bg-white' : ''}`}
                    id="nav_item"
                    onClick={()=>navigate(item.path)}
                >
                <span className={location.pathname === item.path ? "text-primary" : ''}>
                    {item.icon}
                </span>
                <p className="font-poppins">{item.label}</p>
            </div>)}
        </div>
    )
}
