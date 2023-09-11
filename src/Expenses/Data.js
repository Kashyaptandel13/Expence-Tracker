import Cart from "../UI/Cart"


const Data=(props)=>{
    const dataClickHandler=(e)=>{
        props.onDelete(props.savedId)
    }
return(
    <Cart style={{backgroundColor:'rgb(68,66,68)', margin:'2rem 2rem'}} onClick={dataClickHandler}>
        <h1 style={{color:'white'}}>{props.savedTitle}</h1>
        <Cart style={{backgroundColor:'rgb(57,0,84',textAlign:'center',color:'white',fontSize:'large'}}>{props.savedAmound}$</Cart>
    </Cart>
)
}

export default Data;