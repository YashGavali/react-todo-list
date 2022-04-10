const Input = (props) =>{
    return (<input type="text" 
    onChange={props.inputChangeHandler} 
    value = {props.value}
    onKeyUp ={props.onKeyUpHandler} />);
};

export default Input;