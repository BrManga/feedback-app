import React from 'react'
import FeedBackItem from './FeedBackItem';
import PropType from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length===0) return <h1>No Items</h1>
    return (
        <div className='feedback-list'>
            {feedback.map((item)=>{
                return <FeedBackItem item={item} key={item.id} handleDelete={handleDelete}/>
            })}
            
        </div>
    )
}
FeedbackList.propTypes={
    feedback: PropType.array
}
export default FeedbackList
