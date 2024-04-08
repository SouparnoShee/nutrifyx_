import React, { useRef, useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"
import { Link as LinkScroll } from "react-scroll"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='navbar'>
            <div className="logo">
                <h2>NutrifyX</h2>
            </div>
            <div className="menu">
                <SlMenu className='menu-icon' onClick={() => setMenuOpen(true)} />
                {
                    menuOpen ? <div className="menu-links">
                        <RxCross1 className='cross' onClick={() => setMenuOpen(false)} />
                        <div className="links-all">

                            <motion.LinkScroll
                                className='link'
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            > Home
                            </motion.LinkScroll>
                            <motion.LinkScroll
                                className='link'
                                to="about"
                                spy={true}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            > About</motion.LinkScroll>
                            <motion.LinkScroll className='link'
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            > Recipes</motion.LinkScroll>
                            <motion.LinkScroll
                                className='link'
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            > Consultation</motion.LinkScroll>
                        </div>
                    </div> : null
                }

            </div>
            <div className="links">
                <Link className='link'> Home</Link>
                <LinkScroll to='about' spy={true} smooth={true} offset={50} duration={500} className='link'> About</LinkScroll>
                <LinkScroll to='recipes' spy={true} smooth={true} offset={50} duration={500} className='link'> Recipes</LinkScroll>
                <LinkScroll to='contact' spy={true} smooth={true} offset={50} duration={500} className='link'> Consultation</LinkScroll>
            </div>
        </div>
    )
}

export default Navbar
