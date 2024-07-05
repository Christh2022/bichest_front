import logo from '../assets/Frame 1439.png';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { selectEmailUser, selectPasswordUser, setPasswordUser } from '../slices/navslice';
import authService from '../useFunction/UseFetchAuthService';
import { toast } from 'react-toastify';
export default function ForgotPasswordPage() {
    const {resetPassword} = authService
    const navigate = useNavigate()
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const email = useSelector(selectEmailUser)
    const dispatch = useDispatch();
    const newPassword = useSelector(selectPasswordUser)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(setPasswordUser(password));
        if (password !== comfirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        if (newPassword && email) {
            
            //API Call to update the password
            try {
                const res = await resetPassword(email, password)
                res && toast.success(res?.message)
                navigate('/login')
            } catch (error) {
                toast.error("Failed to reset password")
            }
        } else toast.error("all fields are required")
    }

    useEffect(() => {
        if(!email) navigate('/forgotpassword')
    })
    return (
        <div className='flex flex-col items-center justify-center' id='login_container'>
            <div className='pb-5'>
                <img src={logo} alt="" />
            </div>
            <div className='bg-white py-4 px-6 rounded-3xl max-w-[400px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-semibold sm:text-[19px] md:text-[21px] lg:text-[24px] text-[24px] font-poppins'>
                        Create new password
                    </h2>
                    <p className='text-center font-normal text-[14px] font-poppins mt-3 text-gray-1'>
                        Please create your new password, don’t use your old password.
                    </p>
                </div>
                <form className='my-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col mt-3'>
                        <label className='pb-1.5 text-gray-1' >New Password</label>
                        <div className={`flex flex-row items-center border-gray focus-within:border-primary border-1 overflow-hidden rounded-lg w-[360px] h-[44px]`}>
                            <input
                                className='px-2 w-11/12 h-full outline-none'
                                type={showPassword1 ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div onClick={()=>setShowPassword1(!showPassword1)}>
                            {showPassword1 ?
                                <span className='text-primary cursor-pointer'>
                                    <IoEyeSharp />
                                </span> :
                                <span className='text-primary cursor-pointer'>
                                    <FaEyeSlash/>
                                </span>}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-3 mb-5'>
                        <label className='pb-1.5 text-gray-1' >Confirm New Password</label>
                        <div className={`flex flex-row items-center border-gray focus-within:border-primary border-1 overflow-hidden rounded-lg w-[360px] h-[44px]`}>
                            <input
                                className='px-2 w-11/12 h-full outline-none'
                                type={showPassword2 ? "text" : "password"}
                                value={comfirmPassword}
                                onChange={(e) => setComfirmPassword(e.target.value)}
                            />
                            <div onClick={()=>setShowPassword2(!showPassword2)}>
                            {showPassword2 ?
                                <span className='text-primary cursor-pointer'>
                                    <IoEyeSharp />
                                </span> :
                                <span className='text-primary cursor-pointer'>
                                    <FaEyeSlash/>
                                </span>}
                            </div>
                        </div>
                    </div>
                    <button className='bg-primary text-[13px] mt-3 w-full text-white font-medium rounded-lg h-[44px]' type="submit">
                       Reset and save my new password
                    </button>
                    <div className='flex flex-row gap-2 items-center justify-center mt-6'>
                        <span className='text-primary text-[13px] cursor-pointer'>
                            <FaArrowLeftLong />
                        </span>
                        <p className='text-[13px] text-primary cursor-pointer' onClick={()=>navigate('/login')}>Back to Sign in</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
