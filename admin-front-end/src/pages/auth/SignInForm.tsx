import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthUser from '../../utils/auth';

interface SignInFormData {
    email: string;
    password: string;
    name?: string;
    password_confirmation?: string;
}

function SignInForm() {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const { http, setToken } = useAuthUser();

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const handleFormSubmit = (event:any) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Here you can implement your sign-in or sign-up logic
        // For now, let's just navigate to another page if it's a sign-in action
        if (!isSignUp) {
            navigate('/home'); // Replace '/dashboard' with your desired destination
        }
    };

    // const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     const form = event.currentTarget as HTMLFormElement;

    //     const formData: SignInFormData = {
    //         email: (form.elements.namedItem('email') as HTMLInputElement).value,
    //         password: (form.elements.namedItem('password') as HTMLInputElement).value,
    //     };

    //     if (isSignUp) {
    //         formData.name = (form.elements.namedItem('name') as HTMLInputElement).value;
    //         formData.password_confirmation = (form.elements.namedItem('confirm-password') as HTMLInputElement).value;

    //         // Validate password and confirm password match
    //         if (formData.password !== formData.password_confirmation) {
    //             console.error('Passwords do not match');
    //             return;
    //         }

    //         try {
    //             const response = await http.post('auth/register', formData);
    //             console.log(response.data);
    //             setToken(response.data.user, response.data.token);
    //             navigate('/home');
    //         } catch (error) {
    //             console.error('Error signing up:', error);
    //         }
    //     } else {
    //         try {
    //             const response = await http.post('auth/login', formData);
    //             console.log(response.data);
    //             setToken(response.data.user, response.data.token);
    //             navigate('/home');
    //         } catch (error) {
    //             console.error('Error signing in:', error);
    //         }
    //     }
    // };

    return (
        <div className="bg-gray-100">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635859890085-ec8cb5466806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">E-DocuSign</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                molestiae
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-[30%]" src="https://seeklogo.com/images/B/black-company-logo-C40022C4D5-seeklogo.com.png" alt="Logo" />
                            </div>
                            <p className="mt-3 text-gray-500">Sign {isSignUp ? 'up' : 'in'} to access your account</p>
                        </div>
                        <div className="mt-8">
                            <form onSubmit={handleFormSubmit} className='flex flex-col gap-6'>
                                {isSignUp && (
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                )}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
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
                                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400 focus:ring focus:ring-gray-300 focus:ring-opacity-50">
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
