import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const array = [
        { names: 'Home', to: '/' },
        { names: 'Features', to: '/features' },
        { names: 'Installation', to: '/installation' },
        { names: 'Products', to: '/product' },
        { names: 'Reviews', to: '/reviews' },
        { names: "FAQ's", to: '/faq' },
        { names: 'Contact', to: '/contact' },
    ]
    return (
        <div>
            <header>
                <nav className='flex w-full justify-between my-5'>
                    <h1 className='text-3xl font-bold mx-12 uppercase'>Drones</h1>
                    <ul className='flex space-x-3 px-13 my-1'>
                        {
                            array.map((items) => {
                                return <li><Link to={items.to}>{items.names}</Link></li>
                            })
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
