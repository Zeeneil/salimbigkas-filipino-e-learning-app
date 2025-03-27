import React from 'react';
import man from '../assets/man.svg';
import woman from '../assets/woman.svg';

function HomePage() {

    const handleLogin = () => {
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelector('.modal2').classList.add('hidden');
    }

    const handleRegister = () => {
        document.querySelector('.modal2').classList.remove('hidden');
        document.querySelector('.modal').classList.add('hidden');
    }

    return (
        <div className="flex flex-wrap mx-auto">
            <header className="flex flex-wrap w-full px-20 py-4 sticky top-0 left-0 right-0 text-black items-center bg-white">
                <ul className="flex gap-10 text-sm font-semibold">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <button className="ml-auto text-white px-4 py-2 rounded-lg" onClick={handleLogin}>Mag-Login</button>
            </header>
            <div className="flex w-full bg-white px-20 p-4 shadow-lg rounded-bl-4xl rounded-br-4xl text-left justify-between items-center">
                <div className="flex flex-col mt-5">
                    <h1 className='font-semibold'>Maligayang Pagdating sa Salimbigkas!</h1>
                    <h2 className='mt-5 text-xl font-medium'>Matuto ng Filipino nang Mas Madali at Mas Matalino!</h2>
                    <button className='mt-10 w-60 text-white px-4 py-2 rounded-4xl'>Simulan ang Pag-aaral</button>
                    <h2 className='mt-5 mb-5'>Wala pang account? <a href="#" onClick={handleRegister}>Magrehistro!</a></h2>
                </div>
                <div className="flex right-0 top-0">
                    <img
                        src={man}
                        alt="Sample Icon"
                        className="w-auto h-auto absolute top-30 right-60"
                    />
                    <img
                        src={woman}
                        alt="Sample Icon"
                        className="w-auto h-auto absolute top-30 right-15"
                    />
                </div>
            </div>
            <div className="modal hidden fixed top-0 left-0 w-full h-full bg-black/80 z-50">
                <div className="relative bg-white p-10 rounded-lg shadow-lg w-96 mx-auto mt-20">
                    <a
                        className="absolute top-3 right-5 text-white text-2xl cursor-pointer"
                        onClick={() => document.querySelector('.modal').classList.add('hidden')}
                    >
                        &times;
                    </a>
                    <h2 className="text-xl font-bold mb-4">Login</h2>
                    <form>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-5 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-sm">
                        Don't have an account? <a href="#" onClick={handleRegister}>Register here</a>.
                    </p>
                </div>
            </div>
            <div className="modal2 hidden fixed top-0 left-0 w-full h-full bg-black/80 z-50">
                <div className="relative bg-white p-10 rounded-lg shadow-lg w-96 mx-auto mt-20">
                    <a
                        className="absolute top-3 right-5 text-white text-2xl cursor-pointer"
                        onClick={() => document.querySelector('.modal2').classList.add('hidden')}
                    >
                        &times;
                    </a>
                    <h2 className="text-xl font-bold mb-4">Register</h2>
                    <form>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Firstname</label>
                            <input
                                type="text"
                                id="firstname"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your firstname"
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Lastname</label>
                            <input
                                type="text"
                                id="lastname"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your lastname"
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium mb-2" htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-5 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-sm">
                        Already have an account? <a href="#" onClick={handleLogin}>Login here</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;