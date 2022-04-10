import Button from '../Button/Button';
import styles from './List.module.css'

const List =({list, isDoneHandler, deleteHandler, dateHandler}) =>{

const listItems = list.map((task,index)=>{
    return(
    <li className={task.dueDatePassed ? styles.itemContainer1:styles.itemContainer} 
    key = {index}>
        <input type="checkbox" onClick={()=>{isDoneHandler(index)}} />
        <span className={task.isDone ? styles.itemDone:''}>
        {task.item}
        </span>
        <span >
        <input  className={styles.inputDate} type="date" onChange={(event)=>{dateHandler(event,index)}}/>
        </span>
    <span className = {styles.btnContainer}>
<Button  btnText='Delete' btnClickHandler={()=>{deleteHandler(index)}} />
{task.dueDatePassed && (<p className = {styles.dueDate}>Due date has passed</p>)}
    </span>
   
    </li>
    )
})
    return (
    <div className={styles.listContainer}>
    <ul>
        {listItems}
    </ul>
    </div>
)    
};

export default List;