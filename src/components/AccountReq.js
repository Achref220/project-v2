import React from 'react'
import { Link } from 'react-router-dom'
import './AccountReq.css'

const AccountReq = () => {
    return (
        <div className="main-req">
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            </Link>
            <div className="req-content">
                <h1>Create an account</h1>
                <p className="req-p">please complete the following account request. Once your request is reviewed, you will be sent additional registration information.</p>
                <form action="">
                    <div>
                    <p>Contact Name</p>
                    <input type="text" />
                    <p>Contact Title</p>
                    <input type="text" />
                    <p>Organization Name</p>
                    <input type="text" />
                    </div>
                    <div>
                    <p>Organization Email</p>
                    <input type="text" />
                    <p>Organization Zip Code</p>
                    <input type="text" />
                    <p>Organization Type (e.g., museum, science center, library)</p>
                    <input type="text" />
                    </div>
                    <button className="btn-req">Request</button>
                </form>
            </div>
        </div>
    )
}

export default AccountReq
