function App(){
    const title = "Blog Posts";
    const paragraph = "This is my blog post";
    const comments = [
        {id: 1, text: "Great post!"},
        {id: 2, text: "Very informative."},
        {id: 3, text: "Thanks for sharing!"},
        {id: 4, text: "See you next time!"}
    ];

    const loading = false;
    const showComments = true;

    const commentBlock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )

    if(loading) return <h1>Loading...</h1>;

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            {showComments && commentBlock} {/* same as below but using && operator instead of ternary operator and also having a variable store the whole comment block instead*/}

            {/* {showComments ? (
                <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                    </ul>
                </div>
            ) : null} */}
            
        </div>
    );
}

export default App;