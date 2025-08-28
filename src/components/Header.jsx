import PropTypes from 'prop-types'

function Header({text = 'FeedBack UI'}) {
  return (
    <header>
        <div className="container">
            <h2>{text}</h2> 
      
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