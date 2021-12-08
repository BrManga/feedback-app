import PropTypes from 'prop-types'

function Header({title}) {
    const headerStyles={backgroundColor:'red'}
    return (
        <header>
            <div className='container' style={headerStyles}>
                <h1>{title}</h1>
            </div>
        </header>
    )
}
Header.defaultProps={
    title:'Feedback UI'
}
Header.propTypes={
    title:PropTypes.string,
}
export default Header

