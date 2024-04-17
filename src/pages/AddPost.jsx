import React from 'react'
import {Container, PostForm} from '../components'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddPost() {
  return (
    <div className='py-8'>
     <ToastContainer/>
      {/* <Container> */}
        <PostForm />
      {/* </Container> */}
    </div>
  )
}

export default AddPost
