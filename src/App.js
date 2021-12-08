import React, { useState } from "react"
import Header from "./components/Header"
import {FeedbackData} from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
function App() {
const [feedback, setFeedback] = useState(FeedbackData)
const handleDelete=(id)=>{
    console.log("delete id", id);
    if(window.confirm('Selected item will be deleted?')){
        setFeedback(feedback.filter(item=>item.id!==id))

    }
}
    return (
        <div className='container'>
            <Header />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={(item)=>handleDelete(item)} />
        </div>
    )
}
export default App