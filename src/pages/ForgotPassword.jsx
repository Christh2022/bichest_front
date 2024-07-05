import { useNavigate } from 'react-router-dom';
import logo from '../assets/Frame 1439.png';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setEmailUser } from '../slices/navslice';
export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) { 
            dispatch(setEmailUser(email));
            navigate('/resetPassword')
        } else toast.error("the email field has to be filled");
    }
    return (
        <div className='flex flex-col items-center justify-center' id='login_container'>
            <div className='pb-5'>
                <img src={logo} alt="" />
            </div>
            <div className='bg-white py-4 px-6 rounded-3xl max-w-[400px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-semibold sm:text-[19px] md:text-[21px] lg:text-[24px] text-[24px] font-poppins'>Forgot password?</h2>
                    <p className='text-center font-normal text-[14px] font-poppins mt-3 text-gray-1'>
                        Enter the email address you used when you joined
                        and we{`'`}ll send you instructions to reset your
                        password.
                    </p>
                </div>
                <form className='my-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col my-3 mt-5'>
                        <label className='mb-1 text-gray-1'>Email</label>
                        <input
                            id='custom-input'
                            className='px-2 outline-none border-gray border-1 rounded-lg w-[360px] h-[44px]'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='bg-primary text-[13px] mt-3 w-full text-white font-medium rounded-lg h-[44px]' type="submit">
                        Send recovery code
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
