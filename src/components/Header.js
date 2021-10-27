import PropTypes from 'prop-types'
import Button from '../components/Button'
const Header = ({title, onAdd,showAdd}) => {
    
    return (
        <header className='header'>
            <h1>Task Tracker {title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}


Header.defaultProps = {
    title : 'This is default'
}

Header.prototype = {
    title : PropTypes.string.isRequired
}
export default Header


// const HeaderStyling = {
//     color: 'red',
//     backgroundColor: 'white'
// }