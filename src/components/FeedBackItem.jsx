import React, { useState } from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from "react-icons/fa"
function FeedBackItem({item, handleDelete}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('Text')

    return (
        <Card reverse>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={()=>handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className="text-displa">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes={
    item: PropTypes.object.isRequired
}
export default FeedBackItem
