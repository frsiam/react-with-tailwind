import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 0, name: 'Home', link: '/home'},
        {id: 1, name: 'Shop', link: '/shop'},
        {id: 2, name: 'Deals', link: '/dals'},
        {id: 3, name: 'Coupons', link: '/coupons'},
        {id: 4, name: 'Contact', link: '/contact'}
    ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> :  <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-400 w-full absolute md:static duration-700 ease-in-out ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;