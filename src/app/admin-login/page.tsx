'use client'
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const { data: session } = useSession();

    console.log(session);


    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/admin-login", { email, password });

            if (res.data.success) {
                localStorage.setItem("admin_token", res.data.token);
                router.push("/dashboard");
            } else {
                alert(res.data.message);
            }
        } catch (err: any) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };





    return (
        <div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
            <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900'>
                <div className='flex items-center justify-between gap-4 mb-8'>
                    <button onClick={() => router.push('/login')} className='text-2xl font-semibold text-center mb-6'>Passenger Login</button>
                    <button className='text-2xl font-semibold text-center mb-6'>Admin Login</button>
                </div>
                <form className='space-y-6' onSubmit={handleSignIn}>

                    <div>
                        <label className='block mb-1 font-medium'>Email</label>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div>
                        <label className='block mb-1 font-medium'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>


                    <button className='w-full mt-3 py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>Login</button>
                </form>






            </div>
        </div>
    )
}

export default Login
