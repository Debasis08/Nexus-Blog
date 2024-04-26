import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import appwriteService from "../appwrite/configure"
import {Container, PostCard} from '../components'
import Spinner from '../components/Spinner'
import Warn from '../components/Warn'


export default function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    const midIndex = Math.ceil(posts.length / 2);
    const cardsColumn1 = posts.slice(0, midIndex);
    const cardsColumn2 = posts.slice(midIndex);

    return (loader ? <Spinner/> :
    <div className='w-full lg:p-10 flex justify-center p-8 pt-24 lg:pt-32 overflow-auto bg-theme-400'>
        {!authStatus && (<Warn/>)}
        <Container>
                <div className='grid w-1/2 pr-2 h-full xl:pr-6 gap-3 xl:gap-10 md:gap-5 grid-cols-1'>
                    {cardsColumn1.reverse().map((post) => (
                        <div key={post.$id} className='rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                <div className='grid w-1/2 h-full pl-2 xl:pl-6 gap-3 xl:gap-10 md:gap-5 grid-cols-1'>
                    {cardsColumn2.reverse().map((post) => (
                        <div key={post.$id} className='rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
        </Container>
    </div>
  )
}
