import React from 'react'
import github from '../assets/github.png'

const Header = () => {
    return (
        <div className="header">
        <h1><span style={{color:"#8B008B"}}>Gabriel's</span> Website</h1>
        <a href='https://github.com/GabrielGagn0n'>
            <img src={github} alt="Github" width={50} height={50} />
        </a>
        </div>
    )
}

export default Header