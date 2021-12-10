import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
function FeedbackForm() {
    const [text, setText]=useState('')
    const [disable, setDisable]=useState(true)
    const handleTextChange=(e)=>{
        setText(e.target.value)
        if(e.target.value.length>=10){
setDisable(false)
        }
    }
    return (
        <Card>
            <form >
                <h2>How would you rate our service?</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write your review"/>
                    <Button type='submit' isDisabled={disable}>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
