import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import mypic from '../../image/mypic.png'


export default function Home() {
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, [])

    return (loader ? <Spinner/> :
    <div className='h-full w-full gra coverImage'>
                    <div className='bg-opacity-100 filter-none rounded-xl w-full grayscale-0 scale-90 items-center flex flex-row '>
                        <div className='w-2/5 h-full text-center scale-85 border mr-3 md:scale-75 border-sky picsection mx-auto'>
                            <img src={mypic} className='scale-90 rounded-full mx-auto'/>
                            <div className='p-2 mb-2 text-white md:text-xl lg:text-3xl'>
                                 Hello! 👋👋 It&apos;s Debasis <br/>A <span className=" font-bold">Frontend Developer</span> from Bangalore, India
                            </div>
                        </div>
             
                        <div className='text-white shadow-inner lg:scale-110 lg:pb-3 shadow-sky border-sky border-4 p-3 text-sm md:text-lg lg:text-2xl description w-3/5 h-96'>
                           <span className='block text-center pt-7'> Welcome to <span className='gradientText2 font-semibold text-2xl lg:text-4xl lg:font-extrabold'>Nexus</span>, the Blog.</span><br/> You can use it to check blogs of people around the world.<br/> You can post blogs to share your cherished moments of trips or your favorite food item experience.<br/><br/><br/> {!authStatus && (<span className=' text-theme-100 block text-center'>Feel Free to <Link to="./signup" className='hover:text-sky underline font-semibold'>Sign-Up</Link> and Upload your first Blog <br/><br/> You can also <Link to="login" className='hover:text-sky underline font-semibold'>login</Link> to your account and check posts.</span>)}
                            {authStatus && (<span className=' text-theme-100 block text-center'>Now, You can add posts and let the world know about your adventure 🥳 !!)}
                        </div>
                    </div>
                </div>
)}

