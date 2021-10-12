import React from 'react'

const Header = (props) => {
    console.log("This is the header")
    return (
        <header className="header">
            <h1>{props.siteName}</h1>
        </header>
    )
}

export default Header   

