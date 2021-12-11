import React from 'react'
import FeedBackItem from './FeedBackItem';
import PropType from 'prop-types'
import {motion , AnimatePresence } from 'framer-motion'
function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length===0) return <h1>No Items</h1>
    return (
        <div className='feedback-list'>
            <AnimatePresence>

            {feedback.map((item)=>(
                <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                 <FeedBackItem item={item} key={item.id} handleDelete={handleDelete}/>
                 </motion.div>
               
                ))}
            </AnimatePresence>
        </div>
    )
}
FeedbackList.propTypes={
    feedback: PropType.array
}
export default FeedbackList
