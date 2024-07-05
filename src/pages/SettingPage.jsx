import SideBar from '../components/SideBar/SideBar'
import Header from '../components/Header/Header'
import { useContext, useEffect, useState } from 'react'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AuthContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import crud from '../useFunction/UserCRUD'
import authentication from '../useFunction/UseFetchAuthService'

export default function SettingPage() {
    const [editLastName, setEditLastName] = useState(false);
    const [editFirstName, setEditFirstName] = useState(false);
    const [editAddress, setEditAdress] = useState(false);
    const [editPwd, setEditPwd] = useState(false);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [pwd, setPwd] = useState('');
    const [balance, setBalance] = useState('');
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    const { userDetail, userEdit } = crud
    const {getCurrentUser } = authentication
    useEffect(() => {
        (async() => {
            const currentUser = await getCurrentUser()
            if (currentUser.id) {
                const detail = await userDetail(currentUser?.id)
                setUser(detail)
            }
        })
        ()
    }, [userDetail, getCurrentUser])
    const handleSignOut = async() => {
        try {
            await logout();
            navigate('/login');
            toast.success("You have been logged out");
        } catch (error) {
            console.error('Failed to login', error);
        }
    }

    const getDate = (user) => {
        const dateObj = new Date(user?.birth_day)
        const monthsEn = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const day = dateObj.getUTCDate();
        const month = monthsEn[dateObj.getUTCMonth()];
        const year = dateObj.getUTCFullYear();

        const formattedDate = `${month}, ${day} ${year}`;
        return formattedDate;
    }

    const Edit = async () => {
        const currentUser = await getCurrentUser();
        if (currentUser.id) {
            const userObject = {
                id: currentUser.id,
                ...(lastName && { lastName  }),
                ...(firstName && { firstName }),
                ...(address && { address }),
                ...(pwd && { password: pwd }), 
                ...(balance && { balance })
            };
    
            console.log(userObject);
            if (userObject) {
                const resp = await userEdit(userObject)
                console.log(resp);
                
            }
            
        }
    }
    return (
        <div className="bg-bg h-[100vh] flex flex-col">
            <Header />
            <div className="">
                <div className='pl-3' id="sidebar">
                    <SideBar />
                </div>
                <div className="pl-8 flex flex-col gap-4 pt-5 mb-5" id="reports-info">
                    <div className='flex flex-col h-[60vh] w-[50%] gap-4 pl-6 pr-5 bg-white rounded-3xl'>
                        <h3 className='mt-3 font-poppins text-[26px] font-semibold'>Profil</h3>
                        
                        <div className='flex justify-between '>
                            <span className='font-poppins font-semibold '>Email :</span>
                            <span>{user?.email}</span>
                        </div>
                        <div className='flex justify-between '>
                            <span className='font-poppins font-semibold '>Lastname :</span>
                            {editLastName ? 
                                <div className='flex gap-2 items-center'>
                                    <input type="text" onChange={(e)=>setLastName(e.target.value)} className='border-0 py-1 px-2 outline-none bg-gray rounded-md' />
                                    <button onClick={Edit} className='bg-primary py-0.25 px-3 text-[15px] font-poppins rounded-lg text-white'>Save</button>
                                </div>
                                :
                                <div className='flex gap-1 items-center'>
                                    <span> {user?.last_name}</span>
                                    <span onClick={()=>setEditLastName(true)} className='cursor-pointer text-primary'>
                                        <HiOutlinePencilAlt />
                                    </span>
                                </div>
                            }
                        </div>
                        <div className='flex justify-between '>
                            <span className='font-poppins font-semibold '>Firstname :</span>
                            {editFirstName ? 
                                <div className='flex gap-2 items-center'>
                                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} className='border-0 py-1 px-2 outline-none bg-gray rounded-md' />
                                    <button onClick={Edit} className='bg-primary py-0.25 px-3 text-[15px] font-poppins rounded-lg text-white'>Save</button>
                                </div>
                                :
                                <div className='flex gap-1 items-center'>
                                    <span> {user?.first_name}</span>
                                    <span onClick={()=>setEditFirstName(true)} className='cursor-pointer text-primary'>
                                        <HiOutlinePencilAlt />
                                    </span>
                                </div>
                            }
                        </div>
                        <div className='flex justify-between '>
                            <span className='font-poppins font-semibold '>Date de naissance :</span>
                            <span>{user && getDate(user)}</span>
                        </div>
                        <div className='flex justify-between '>
                            <span className='font-poppins font-semibold '>Address :</span>
                            {editAddress? 
                                <div className='flex gap-2 items-center'>
                                    <input type="text" onChange={(e)=>setAddress(e.target.value)}  className='border-0  py-1 px-2 outline-none  bg-gray rounded-md'/>
                                    <button onClick={Edit} className='bg-primary py-0.25 px-3 text-[15px] font-poppins rounded-lg text-white'>Save</button>
                                </div>
                                :
                                <div className='flex gap-1 items-center'>
                                    <span>{ user?.address}</span>
                                    <span onClick={()=>setEditAdress(true)} className='cursor-pointer text-primary'>
                                        <HiOutlinePencilAlt />
                                    </span>
                                </div>
                            }
                        </div>
                        <div className='flex justify-between '>
                            <span className='font-poppins font-semibold '>Password :</span>
                            {editPwd? 
                                <div className='flex gap-2 items-center'>
                                    <input type="text" onChange={(e)=>setPwd(e.target.value)} className='border-0 py-1 px-2 outline-none bg-gray rounded-md'/>
                                    <button onClick={Edit} className='bg-primary py-0.25 px-3 text-[15px] font-poppins rounded-lg text-white'>Save</button>
                                </div>
                                :
                                <div className='flex gap-1 items-center'>
                                    <span> ********************</span>
                                    <span onClick={()=>setEditPwd(true)} className='cursor-pointer text-primary'>
                                        <HiOutlinePencilAlt />
                                    </span>
                                </div>
                            }
                        </div>

                    </div>
                    <div>
                        <button  className='text-white rounded-lg py-1 bg-primary w-[150px] cursor-pointer font-poppins'
                            onClick={handleSignOut}
                        >
                            Deconnexion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
