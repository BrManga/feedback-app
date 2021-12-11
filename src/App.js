import React, { useState } from "react"
import Header from "./components/Header"
import {FeedbackData} from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from "uuid"
function App() {
const [feedback, setFeedback] = useState(FeedbackData)
const handleDelete=(id)=>{
    console.log("delete id", id);
    if(window.confirm('Selected item will be deleted?')){
        setFeedback(feedback.filter(item=>item.id!==id))

    }
}
const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback, ...feedback])
}
    return (
        <div className='container'>
            <Header />
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={(item)=>handleDelete(item)} />
        </div>
    )
}
export default App