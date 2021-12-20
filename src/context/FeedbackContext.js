import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"

const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{
    const [feedback, setFeedback] = useState([{id:1, text:'Feedback-1 item', rating:10}])
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        console.log("delete id", id);
        if (window.confirm('Selected item will be deleted?')) {
            setFeedback(feedback.filter(item => item.id !== id))

        }
    }
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    const editFeedback = (item) => {
        console.log("edit feedback", item);
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    const updateFeedbackItem=(id, updItem)=>{
        setFeedback(feedback.map((item)=>item.id==id?{...item,...updItem}:item))
    }
    return <FeedbackContext.Provider value={{feedback,feedbackEdit, deleteFeedback,addFeedback, editFeedback,updateFeedbackItem}}>{children}</FeedbackContext.Provider>
}
export default FeedbackContext