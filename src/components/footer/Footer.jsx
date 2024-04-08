import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <h2>NutrifyX</h2>
                <div className="links">
                    <Link className='link'>Recipe</Link>
                    <Link className='link'>Consult</Link>
                    <Link className='link'>Program</Link>
                </div>
                <div className="social-img">
                    <IoLogoWhatsapp className='media' />
                    <FaInstagram className='media' />
                </div>
            </div>
            <div className="below">
                <span>Developed By SouparnoC ©2023 All rights reserved </span>
            </div>
        </>
    )
}

export default Footer