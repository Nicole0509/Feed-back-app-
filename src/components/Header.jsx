import PropTypes from 'prop-types'

function Header({text = 'FeedBack UI'}) {
  return (
    <header>
        <div className="container">
            <h2>FeedBack UI</h2>
            <h3>{text}</h3> 
            {/* can also do <h3>{text}</h3>  
            As long as we know the different names of props being passedin the function definition and the function call 
            e.g.: function Header({text}) {... */}
      
        </div>
    </header>
)
}

// Though they both seem to not work

Header.defaultProps = {
    text: 'FeedBack UI',
}

Header.prototypes = {
    text: PropTypes.string,
}

export default Header