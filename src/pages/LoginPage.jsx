import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/Frame 1439.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import "./css/Login.css"


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [load, setLoad] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email ||!password) {
            toast.error('please each field has to be valid');
            return;
        }
        try {
            const res = await login(email, password);
            res && setLoad(true)
            res && toast.success('login successful')
            res && navigate('/');
        } catch (error) {
            console.error('Failed to login', error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    })

    
    return (
        <div className='flex flex-col items-center justify-center' id='login_container'>
            <div className='pb-5'>
                <img src={logo} alt="" />
            </div>
            {
                load &&
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            
                <div className='bg-white py-4 px-6 rounded-3xl'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='font-semibold sm:text-[19px] md:text-[21px] lg:text-[24px] text-[24px] font-poppins'>Sign in</h2>
                        <p className='font-normal text-[13px] font-poppins'>
                            Don{`'`}t have an account yet ?
                            <span onClick={()=>navigate('/signup')} className='text-primary cursor-pointer'> Sign up here</span>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className='my-4'>
                        <div className='flex flex-col mb-3'>
                            <label className='mb-1 text-gray-1'>Email</label>
                            <input
                                id='custom-input'
                                className='px-2 outline-none border-gray border-1 rounded-lg w-[360px] h-[44px]'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='pb-1.5 text-gray-1' >Password</label>
                            <div className={`flex flex-row items-center border-gray focus-within:border-primary border-1 overflow-hidden rounded-lg w-[360px] h-[44px]`}>
                                <input
                                    className='px-2 w-11/12 h-full outline-none'
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <span className='text-primary cursor-pointer'>
                                        <IoEyeSharp />
                                    </span> :
                                    <span className='text-primary cursor-pointer'>
                                        <FaEyeSlash/>
                                    </span>}
                                </div>
                            </div>
                        </div>
                        <div>
                        <p onClick={()=>navigate('/forgotpassword')} className='text-primary py-4 font-poppins font-medium text-[13px] cursor-pointer'>
                            Forgot password ?
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
    );
}
