import './css/SignIn.css';
import { HiViewGridAdd } from "react-icons/hi";
import image_1 from "../assets/image_1.png";
import image_2 from "../assets/image_2.png";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import logo from '../assets/Frame 1439.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { toast } from 'react-toastify';
import authService from '../useFunction/UseFetchAuthService';


export default function SignInPage() {
    const info = [
        {
            title: 'All-in-one tool',
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
            icon: <HiViewGridAdd />
        },
        {
            title: 'Easily add & manage your services',
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
            icon: <img src={image_1} />
        },
        {
            title: 'Your own company branding',
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
            icon: <img src={image_2} />
        },
        {
            title: 'Instant Update',
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
            icon: <PiClockCounterClockwiseFill />
        }
    ]

    const {signup} = authService

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !address || !lastName || !firstName || !birthday) {
            toast.error('please each field has to be valid');
            return;
        }
        try {
            const res = await signup(email, firstName, lastName, address, birthday);
            toast.success(res?.message)
            res && navigate('/login');
        } catch (error) {
            console.error('Failed to login', error);
        }
    };


    return (
        <div id='signin_container' className='flex overflow-scroll flex-col items-center justify-center'>
            <div className='pb-5'>
                    <img src={logo} alt="" />
                </div>
            <div className='overflow-hidden bg-white flex flex-row sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[60%] 2xl:w-[50%] min-h-[50%] rounded-xl'>
                <div id="left" className='relative bg-secondary w-5/12 p-4 overflow-y-scroll'>
                    <h4 className='font-poppins font-semibold sm:text-[16px] md:text-[18px]  lg:text-[20px] xl:text-[22px] 2xl:text-[24px] '>
                        Buy and sell crypto easily. With bitchest, you will make a lot of money.
                    </h4>
                    <div className='w-full flex flex-col my-5 gap-4'>
                        {info.map((item, index) =>
                            <div key={index} className='flex gap-3 w-full '>
                                <div className=''>
                                    <span className='bg-primary w-[26px] h-[26px] rounded-full flex items-center justify-center text-white'>
                                        {item.icon}
                                    </span>
                                </div>
                                <div className=''>
                                    <h5 className='font-semibold font-poppins sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]'>{item.title}</h5>
                                    <p className='sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-normal font-poppins'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <p className='absolute bottom-3 text-[13px] font-normal font-poppins'>
                        For more information <span className='text-primary cursor-pointer semibold hover:border-b-1 hover:border-b-primary'> Contact our sales</span>
                    </p>
                </div>
                <div id="right" className='px-6 w-7/12'>
                    <div className='flex flex-col items-center justify-center mt-5 '>
                        <h2 className='mb-2 font-semibold sm:text-[19px] md:text-[21px] lg:text-[24px] text-[24px] font-poppins'>Sign up</h2>
                    <p className='font-normal text-[13px] font-poppins'>
                        Already have an account ?
                        <span onClick={()=>navigate('/login')} className='text-primary cursor-pointer'> Sign in here</span>
                    </p>
                    </div>
                    <form onSubmit={handleSubmit} className='my-4'>
                        <div className='flex flex-col mb-3'>
                            <label className='mb-1 text-gray-1'>Email</label>
                            <input
                                id='custom-input'
                                className='px-2 outline-none border-gray border-1 rounded-lg w-full h-[44px]'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='flex gap-2 mb-3'>
                            <div>
                                <label  className='pb-1.5 text-gray-1'>Firstname</label>
                                <input
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    id='custom-input'
                                    className='px-2 outline-none border-gray border-1 rounded-lg w-full h-[44px]'
                                    type="text"
                                    value={firstName}
                                />
                            </div>
                            <div>
                                <label className='pb-1.5 text-gray-1'>Lastname</label>
                                <input
                                    onChange={(e)=>setLastName(e.target.value)}
                                    id='custom-input'
                                    className='px-2 outline-none border-gray border-1 rounded-lg w-full h-[44px]'
                                    type="text"
                                    value={lastName}
                                />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='flex flex-col'>
                                <label className='pb-1.5 text-gray-1' >Address</label>
                                <input
                                    id='custom-input'
                                    className='px-2 outline-none border-gray border-1 rounded-lg w-full h-[44px]'
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                    
                            </div>
                            <div className='flex flex-col'>
                                <label className='pb-1.5 text-gray-1' >Birthday</label>
                                <input
                                    id='custom-input'
                                    className='px-2 outline-none border-gray border-1 rounded-lg w-full h-[44px]'
                                    type="date"
                                    value={birthday}
                                    pattern="\d{4}-\d{2}-\d{2}"
                                    onChange={(e) => setBirthday(e.target.value)}
                                />
                                    
                            </div>
                        </div>

                        <div className='flex py-4 gap-4 items-start'>
                            <input type="checkbox" className="w-[20px] h-[20px]" />
                            <p className='  font-poppins font-medium text-[13px]'>
                                By clicking Create an account, I agree that i have read and accepted the
                                <span className='text-primary'>Terms of Use</span> and <span className='text-primary'>Privacy Policy</span>.
                            </p>
                        </div>

                        <button className='bg-primary w-full text-white font-semibold rounded-lg h-[44px]' type="submit">Sign in</button>
                                    
                        <div className='my-9 relative'>
                            <div id='other_signup' className=' bg-gray h-0.5 '></div>
                            <div className='bg-white text-center text-gray-1 w-9 absolute -top-3 left-1/2 translate-1/2'>
                                <span className=''>Or</span>
                            </div>
                        </div>
                        
                        <div className='flex flex-row w-full gap-2 pb-2'>
                            <div className='w-1/2 flex items-center justify-center gap-2 border-1 border-gray rounded-lg py-2 px-2'>
                                <img src={google} alt="" className='' />
                                <p className='text-gray-1 font-poppins font-medium text-[13px] cursor-pointer'>Sign with Google</p>
                            </div>
                            <div className='w-1/2 flex items-center justify-center gap-2 border-1 border-gray rounded-lg py-2 px-2'>
                                <img src={facebook}alt="" />
                                <p className='text-gray-1 font-poppins font-medium text-[13px] cursor-pointer'>Sign with Facebook</p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
