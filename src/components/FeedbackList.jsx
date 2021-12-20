import React, {useContext} from 'react'
import FeedBackItem from './FeedBackItem';
import {motion , AnimatePresence } from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
function FeedbackList() {
    const {feedback}=useContext(FeedbackContext)
    if(!feedback || feedback.length===0) return <h1>No Items</h1>
    return (
        <div className='feedback-list'>
            <AnimatePresence>

            {feedback.map((item)=>(
                <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                 <FeedBackItem item={item} key={item.id}/>
                 </motion.div>
               
                ))}
            </AnimatePresence>
        </div>
    )
}
export default FeedbackList
