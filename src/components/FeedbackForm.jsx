import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext, useEffect } from 'react/cjs/react.development'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [disable, setDisable] = useState(true)
    const [message, setMessage] = useState('')
    const {addFeedback, feedbackEdit,updateFeedbackItem} = useContext(FeedbackContext)
    const handleTextChange = (e) => {

        if (text === '') {
            setDisable(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10) {
            setDisable(true)
            setMessage(' Message must be at least ten characters')

        }
        else {
            setMessage(null)
            setDisable(false)
        }
        setText(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={text, rating}
            if(feedbackEdit.edit==true){
                updateFeedbackItem(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
    useEffect(()=>{
        if(feedbackEdit.edit==true){
            setDisable(false)
            setRating(feedbackEdit.item.rating)
            setText(feedbackEdit.item.text)
        }

    },[feedbackEdit])
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select={(rating => setRating(rating))} />
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write your review" />
                    <Button type='submit' isDisabled={disable}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
