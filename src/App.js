import React, { useState } from "react"
import Header from "./components/Header"
import { FeedbackData } from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from "uuid"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const handleDelete = (id) => {
        console.log("delete id", id);
        if (window.confirm('Selected item will be deleted?')) {
            setFeedback(feedback.filter(item => item.id !== id))

        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            {feedback.length > 0 && <FeedbackStats feedback={feedback} />}
                            <FeedbackList feedback={feedback} handleDelete={(item) => handleDelete(item)} />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            <AboutIconLink/>
            </div>
        </Router>
    )
}
export default App