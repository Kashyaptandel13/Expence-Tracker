import clasess from './Button.module.css'

const Button = (props) => {
    return (
        <button className={`${clasess.btn} ${props.className}`}
            type={props.type || 'button'}
            onClick={props.onClick}
            style={props.style}
         >
             {props.children}
        </button>
    )
}

export default Button;