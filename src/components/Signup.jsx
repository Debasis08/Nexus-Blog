import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Signup() {

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            // setError(error.message)
            toast.error(error.message, //From
            {theme: "colored"})
        }
    }

  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-theme-300 rounded-xl p-10 border-2 border-sky`}>
            <div className="mb-2 flex justify-center">
                    <h className="gradientText text-3xl font-serif md:text-3xl font-semibold xl:text-5xl"
                                ><Link to='/'> NEXUS BLOG</Link></h>
                </div>
                <h2 className="text-center text-theme-100 text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-theme-100 text-center text-base">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline focus:text-sky"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red mt-8 text-center">{error}</p>}

                <ToastContainer/>

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit" className="w-full bg-white hover:bg-sky hover:text-white border-sky border-4">
                            <strong>Create Account</strong>
                        </Button>


                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup
