import React, {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/configure"
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
     <ToastContainer/>
      <Container>
        <PostForm post = {post} />
      </Container>
    </div>
  ) : null
}

export default EditPost
