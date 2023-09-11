import classes from './Cart.module.css'

const Cart =(props)=>{
    return(
        <div className={`${classes.cart} ${props.className}`} style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Cart;