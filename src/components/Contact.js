import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="container">
            <span className="circle11 ten"></span>
            <span className="circle11 eleven"></span>
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">let's get in touch</h3>
                    <p className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolorem dicta iure magnam,
                        repudiandae possimus ipsum nisi vero debitis, iusto sequi quos illo a ipsam
                        voluptate quae sed? Illo, vel!
                    </p>
                    <div className="info">
                        <div className="information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                            <p>92 cherry drive</p>
                        </div>
                        <div className="information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                            <p>lorem@gmail.com</p>
                        </div>
                        <div className="information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                            <p>123-456-789</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                <span className="circle three"></span>
                <span className="circle four"></span>
                    <span className="circle one"></span>
                    <span className="circle two"></span>
                    <form action="index.html">
                        <h3 className="title8">Contact us</h3>
                        <div className="input-container">
                            <input placeholder="Username" type="text" name="name" className="input" />
                        </div>
                        <div className="input-container">
                            <input placeholder="Email" type="email" name="email" className="input" />
                        </div>
                        <div className="input-container">
                            <input placeholder="Phone" type="tel" name="phone" className="input" />
                        </div>
                        <div className="input-container textarea">
                            <textarea placeholder="Message" name="message" className="input"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
