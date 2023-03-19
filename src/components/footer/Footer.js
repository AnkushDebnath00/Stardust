import React from 'react'
import './footer.css'
import logo2 from '../header/logo2.png'


const Footer = () => {

    return (
        <footer>

            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>Get to know us</h3>
                    <p><a href="https://www.linkedin.com/in/ankushdebnath680/" target='_blank'>About us</a></p>
                    <p><a href="https://careers.microsoft.com/us/en" target='_blank'>Careers</a></p>
                    <p><a href="https://timesofindia.indiatimes.com/" target='_blank'>Press releases</a></p>
                </div>
                <div className='footer_details_one'>
                    <h3>Connect with us</h3>
                    <p><a href="https://linkedin.com/" target='_blank'>LinkedIn</a></p>
                    <p><a href="https://instagram.com/" target='_blank'>Instagram</a></p>
                    <p><a href="https://youtube.com/" target='_blank'>YouTube</a></p>
                    <p><a href="https://facebook.com/" target='_blank'>Facebook</a></p>
                    <p><a href="https://twitter.com/" target='_blank'>Twitter</a></p>
                    <p><a href="https://discord.com/" target='_blank'>Discord</a></p>
                </div>

            </div>

            <div className='lastdetails'>

                <img src={logo2} alt='Stardust Logo' />

                <p>Built my team <i><a href="https://www.linkedin.com/in/ankushdebnath680/" target='_blank'>Stardust</a> </i>for DevSprint: Web Development Hackathon. Copyright&#169; by team <i><a href='https://www.linkedin.com/in/stardustmayank/'>Stardust</a></i>. You're 100% allowed to use this webpage for any personal and professional use.</p>

            </div>

        </footer>
    )
}

export default Footer