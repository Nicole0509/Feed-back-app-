import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';

function App(){
    const [feedback, setFeedback ] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header />
            
            <Routes>
                <Route path='/' 
                element= {
                <>
                    <div className="container">
                        <FeedbackForm handleAdd = {addFeedback} />
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback = {feedback} handleDelete={deleteFeedback}/>

                    </div>
                
                </>} 
                />

                <Route path='/about' element= {<AboutPage/>} />
            </Routes>
            
        </Router>
    );
}

export default App;