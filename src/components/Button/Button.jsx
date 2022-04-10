import styles from './button.module.css'

const Button = (props) =>{

return (
<button className={styles.btnContainer} onClick={props.btnClickHandler}>{props.btnText}</button>);
};

export default Button;