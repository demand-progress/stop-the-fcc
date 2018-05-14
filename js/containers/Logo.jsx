import React from 'react'

const Logo = ({alt, src}) => {
    return(
        <div>
            <a target="_blank">
                <img alt={alt} src={src}/>
            </a>
        </div>
    )
}

export default Logo; 