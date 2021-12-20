import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
    const {feedback}=useContext(FeedbackContext)
    let average = (feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length).toFixed(1)
    return (
        <div className="feedback-stats" >
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating  {average?average:0} </h4>
        </div>
    )
}
// FeedbackStats.propTypes={
//    feedback: PropTypes.array
// }
export default FeedbackStats
