import Card from "../shared/Card"

function AboutPage() {
  return (
    <div className="container">
      <Card>
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <a href ='/'>Back To Home</a>
      </Card>
    </div>
    
  )
}

export default AboutPage