import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useState } from "react"

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    const inputValue = e.target.value   // ✅ use the latest input directly

    if (inputValue.trim() === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (inputValue.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(inputValue)  // ✅ update state after validation
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length > 10) {
        const newFeedback = {
            text,
            rating,
        }
        handleAdd(newFeedback)

        setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => {setRating(rating)}} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            name="review"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
