import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    let average = (feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length).toFixed(1)
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating  {average?average:0} </h4>
        </div>
    )
}
FeedbackStats.propTypes={
   feedback: PropTypes.array.isRequired
}
export default FeedbackStats
