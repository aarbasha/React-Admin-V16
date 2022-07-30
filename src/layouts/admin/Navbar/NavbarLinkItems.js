import React from 'react'
// import { useNavigate } from "react-router-dom"

const NavbarLinkItems = () => {

    // const rediract = useNavigate()

    return (
        <>
            <div className="top-navbar d-none d-xl-block">
                <ul className="navbar-nav align-items-center">

                    {/* <li className="nav-item d-flex">

                        <button className='btn btn-sm btn-primary mx-2' onClick={() => rediract(-1)}>Back</button>
                        <button className='btn btn-sm  btn-primary mx-2' onClick={() => rediract(+1)}>Next</button>

                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Email</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item d-none d-xxl-block">
                        <a className="nav-link" href="#">Events</a>
                    </li>
                    <li className="nav-item d-none d-xxl-block">
                        <a className="nav-link" href="#">Todo</a>
                    </li>


                </ul>
            </div>
        </>
    )
}

export default NavbarLinkItems