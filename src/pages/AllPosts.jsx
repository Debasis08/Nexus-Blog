import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/configure"
import {Container, PostCard} from '../components'
import Spinner from '../components/Spinner'


export default function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)
    
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

    if (posts.length===0) {
      return (loader ? <Spinner/> :
          <div className='flex flex-col md:pt-20 lg:pt-40 pt-10 text-center text-white '>
            <div className='text-2xl font-bold top-0 text-white hover:text-opacity-90'>
            Hey ! I think, there are no Blogs posted yet...
            </div>
            <div className='text-sm font-normal text-white '>
            How about you post one ! 😊
            </div>
          </div>
      )
  } else {
  return (
    <div className='w-full lg:p-10 flex justify-center md:pl-56 p-8 overflow-auto bg-theme-400'>
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
}
