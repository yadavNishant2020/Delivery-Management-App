import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignInFormData {
    email: string;
    username: string;
    password: string;
    name?: string;
    password_confirmation?: string;
}

function SignInForm() {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData: SignInFormData = {
            email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value,
            username: (event.currentTarget.elements.namedItem('username') as HTMLInputElement)?.value,
            password: (event.currentTarget.elements.namedItem('password') as HTMLInputElement)?.value,
            name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value,
            password_confirmation: (event.currentTarget.elements.namedItem('confirm-password') as HTMLInputElement)?.value,
        };

        try {
            const endpoint = isSignUp
                ? 'http://localhost:5000/api/admin/signup'
                : 'http://localhost:5000/api/admin/signin';

            console.log('Sending request to:', endpoint);
            console.log('Form data:', formData);

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            console.log('Response data:', data);

            if (response.ok) {
                alert(isSignUp ? 'User created successfully' : 'Sign in successful');
                if (!isSignUp) {
                    navigate('/home'); // Redirect to the dashboard route
                } else {
                    setIsSignUp(false); // Switch back to sign-in form after successful sign-up
                }
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert(`Error: ${(error as Error).message}`);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(/bg-2.jpeg)' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Delivery Admin</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1 flex flex-col justify-evenly flex-wrap">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-[30%]" src="/logo.png" alt="Logo" />
                            </div>
                            <p className="mt-3 text-gray-500">Sign {isSignUp ? 'up' : 'in'} to access your account</p>
                        </div>
                        <div className="mt-8">
                            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                                {isSignUp && (
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                )}
                                {isSignUp && (
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                )}
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm text-gray-600">Username</label>
                                    <input type="text" name="username" id="username" placeholder="Your Username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                                        {!isSignUp && (
                                            <a href="#" className="text-sm text-gray-400 focus:text-gray-500 hover:text-gray-500 hover:underline">Forgot password?</a>
                                        )}
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                {isSignUp && (
                                    <div className="">
                                        <label htmlFor="confirm-password" className="block mb-2 text-sm text-gray-600">Confirm Password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                )}
                                <div className="">
                                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#f05e2b] rounded-lg hover:bg-[#ce7250] focus:outline-none focus:bg-gray-400 focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                        {isSignUp ? 'Sign up' : 'Sign in'}
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}
                                <button className="text-gray-500 focus:outline-none focus:underline hover:underline ml-1" onClick={toggleSignUp}>
                                    {isSignUp ? 'Sign in' : 'Sign up'}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
