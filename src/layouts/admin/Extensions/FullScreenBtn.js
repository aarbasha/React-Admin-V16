import React, { useState } from 'react'
import "../../frontend/public/Style/Navbar.css"
const FullScreenBtn = () => {
    const [isActive, setIsActive] = useState(true);
    const myDocoument = document.documentElement;

    const handleClick = (e) => {
        setIsActive((current) => !current);
    };
    const run = () => {
        handleClick()
        if (myDocoument.requestFullscreen) {
            myDocoument.requestFullscreen()
        }
    }
    const exit = () => {
        handleClick()
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }
    return (
        <div>
            {/* <button className='fullscreen'> */}
            <i id='fullscreenToogle' alt="show full screen" className={
                isActive ?
                    "rounded-circle mx-2 btn-sm  btn btn-success m-1   bi-fullscreen"
                    : "rounded-circle mx-2 btn-sm  btn btn-danger m-1   bi bi-fullscreen-exit"}

                onClick={isActive ? run : exit}>

            </i>
            {/* </button> */}
        </div>
    )
}

export default FullScreenBtn

