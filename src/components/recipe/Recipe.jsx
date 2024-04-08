import React from 'react'
import "./styles.scss"

const Recipe = ({ r }) => {
    return (
        <div className='recipe'>
            <div className="img">
                <img src={r.img} alt="" />
            </div>
            <span>{r.title}</span>
            <button>Go To Recipe</button>
        </div>
    )
}

export default Recipe
