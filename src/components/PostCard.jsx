import React from 'react';
import appwriteService from "../appwrite/configure";
import {Link} from 'react-router-dom';

function PostCard({$id, title,featuredImage}) {

  return (
    <Link to = {`/post/${$id}`}>
      <div className='w-full bg-theme-200 box-border rounded-xl shadow-inner shadow-sky p-2'>
        <div className='w-full flex justify-center mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt= {title} title={title} className='rounded-xl text-white' />
        </div>
        <h2 className='text-base md:text-2xl text-center text-white font-medium p-1'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
