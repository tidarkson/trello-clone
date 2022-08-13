import React from "react";
import './Card.scss'


const Card = (props) => {

    const { card } = props;

    return (
        <>
            <div className="card-items">

                {
                    card.image && <img className="card-cover" src={card.image} alt="" onMouseDown = {event => event.preventDefault()} />
                }
                {card.title}
            </div>
        </>
    )
}

export default Card