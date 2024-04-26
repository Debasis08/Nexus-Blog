import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configure";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Spinner from '../components/Spinner'


export default function Post() {
    const [post, setPost] = useState(null);
    const [loader, setLoader] = useState(true)
    
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000);
        
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/all-posts");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/all-posts");
            }
        });
    };

       return post ? (
        loader ? <Spinner/> :
        <div className="bg-theme-400 flex flex-col min-h-screen py-10 xl:py-2 ">
            {/* <Container> */}
            
            <div className=" bg-theme-300 lg:scale-75 w-2/3 mx-auto shadow-2xl shadow-theme-200 rounded-2xl ">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        title={post.title}
                        className="rounded-xl w-full h-auto scale-90"
                    />
                    
                </div>

                <div className="w-4/5 pad mt-10 mx-auto font-thin border-theme-300 relative shadow-2xl shadow-theme-200 drop-shadow-2xl rounded-lg group">
                {isAuthor && (
                    <div className="absolute z-20">
                        <div className="group-hover:inline-block h-0 inline-block lg:hidden">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="bg-opacity-0 hover:bg-opacity-40 border-none bg-theme-100 hover:bg-theme-200">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVR4nO3SsQ2AMAxE0b8AM8EqiEFwyQyZDUZAjOAUhAYRKGJT+aRr30mWIXJmAjbgABLQYRgB9NbkPbBbwP3LyNqKS4GkMjJa4FoZEUtcS5cW9Au/OuCIz4FrnOWXb8EbxxvHG8cbj/CUDMTueTOAku8eAAAAAElFTkSuQmCC" />
                                </Button>
                            </Link>
                        </div>
                        <div className="group-hover:inline-block h-0 inline-block lg:hidden ">
                                <Button className="bg-opacity-0 hover:bg-opacity-40 border-none hover:bg-theme-200" onClick={deletePost}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nOWUMUsCUBhFz2KD0H8I/AEO7kG7ge2BRNIi2FpEILg0SK7qWjSEremsBA25iTYbuFRzEKUh3CBaup8EIV142znvvOnBf1kZmH07J4tcNPul83eB+YaCSkDWPCU5A4x1BFcCgYqcayfQFFwPBBpfnB93LLgVCFzJOXICecHdQKAnZ9sJbAgeBQL3ctadQErwUyDwLGfNCawA78AUyBmX58S+AQnMTfSiXSNQEPtAYLeSDozAodibSOBS0qkRqIm9iASqks6MwPkiv+u+pLYR+PxaipHAlqQ7I9AXuxkJZCSNjcBYbDoSWAVeA///C5AkuD3g0bh8zuxEL1+efQCsqKh0ZVto4QAAAABJRU5ErkJggg==" />
                                </Button>
                        </div>
                    </div>
                    )}
                <div className="z-10 w-full mb-6  pt-5 relative text-center">
                    <h1 className="xl:text-3xl text-2xl font-medium">{post.title}</h1>
                </div>
                
                <div className="xl:text-xl relative p-5 text-center font-normal h-auto">
                    {parse(post.content)}
                </div>
                </div>
            {/* </Container> */}
        </div>
    ) : 
    <div>
        Unfortunately, No Posts !
    </div>;

}
