import React, {useContext} from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"
function FeedBackItem({item}) {
    const {deleteFeedback, editFeedback}= useContext(FeedbackContext)
    return (
        <Card reverse>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={()=>deleteFeedback(item.id)}>
                <FaTimes color='purple'/>
            </button>
            {/* onClick={()=>deleteFeedback(item.id)} */}
            <button className="edit" onClick={()=>editFeedback(item)} >
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes={
    item: PropTypes.object.isRequired
}
export default FeedBackItem
