"use client";

import React, { useCallback, useState } from 'react';
import Input from '@/components/Input'

const Auth: React.FC = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("Sign In");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == "Sign In" ? "Sign Up" : "Sign In")
        setEmail("");
        setName("");
        setPassword("");
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/img/dirflix-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/img/dirflix.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant == "Sign In" ? "Sign In" : "Sign Up"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == "Sign Up" && (
                            <Input
                            label="Username"
                            onChange={(ev : any) => setName(ev.target.value)}
                            id="name"
                            value={name}
                            />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev : any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(ev : any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-warna-dirflix hover:bg-dirflix-hover text-white rounded-md w-full mt-10 transition py-2">
                            {variant == "Sign In" ? "Sign In" : "Sign Up"}
                        </button>
                        <div className="flex items-center mt-12">
                            <p className="text-neutral-500">
                                {variant == "Sign In" ? "New to Dirflix?" : "Already have an account?"}
                            </p>
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant == "Sign In" ? "Sign Up" : "Sign In"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
