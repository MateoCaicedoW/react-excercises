import PropTypes from 'prop-types';

export function Button({title, type, handler, icon}){
    return(
        <button onClick={handler} type={type} >{title} {icon}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired
}

Button.defaultProps = {
    title: "Click me"
}