import React from 'react';

function Header() {

    return (
        <header className="flex flex-wrap w-full px-20 py-4 sticky top-0 left-0 right-0 text-black items-center bg-white">
            <ul className="flex gap-10 text-sm font-semibold">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <button className="login ml-auto text-white px-4 py-2 rounded-lg">Mag-Login</button>
        </header>
    );
}

export default Header;