import React from 'react'
import { Navlinks } from '../../constants'

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {Navlinks.map((link)=>{
                        return <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar