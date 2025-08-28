function App(){
    const title = "Blog Posts";
    const paragraph = "This is my blog post";
    const comments = [
        {id: 1, text: "Great post!"},
        {id: 2, text: "Very informative."},
        {id: 3, text: "Thanks for sharing!"}
    ];

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;