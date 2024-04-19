import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/configure"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner'


export default function Home() {
    const authStatus = useSelector((state) => state.auth.status)
    const [loader, setLoader] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000);
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // const midIndex = Math.ceil(posts.length / 2);
    // const cardsColumn1 = posts.slice(0, midIndex);
    // const cardsColumn2 = posts.slice(midIndex);

    return (loader ? <Spinner/> :
    <div className='h-full w-full'>
                    <div className='bg-cover opacity-45'>
                    <img src={coverpic}/>
                    </div>
                    <div className='opacity-90 rounded-xl w-full scale-90 items-center flex flex-row '>
                        <div className='w-2/5 h-full text-center picsection mx-auto'>/
                            <img src={mypic} className='scale-90 rounded-full mx-auto'/>
                            <div className='p-2 mb-2 text-white'>
                                 Hello! It&apos;s Debasis <br/>A <span className=" font-bold">Frontend Developer</span> from Bangalore, India
                            </div>
                        </div>
             
                        <div className='text-white p-3 text-sm description w-3/5 h-full'>
                           <span className='text-center'> Welcome to <span className='gradientText2 font-semibold text-2xl'>Nexus</span>, the Blog.</span> <br/><br/> This is one of my mega projects in which I have integrated authentication using mail id Credentials.<br/> CRUD operations including some other npm packages for better UX has been introduced.<br/><br/> <span className=' text-theme-100'>Feel Free to <Link to="./signup" className='hover:text-sky underline font-semibold'>Sign-Up</Link> and Upload your first Blog</span> <br/> You can also <Link to="login" className='hover:text-sky underline font-semibold'>login</Link> to your account and check posts.
                        </div>
                    </div>
                        
                    
                </div>
)}

