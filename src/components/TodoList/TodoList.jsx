import { useEffect, useState } from "react";
import Button from "../Button/Button"
import Input from "../Input/Input"
import List from "../List/List"

const TodoList =()=>{
    const [list, setList] = useState([]);
    const [inputText,setInputText] = useState('');

    useEffect(()=>{
        const items = localStorage.getItem('todoList');
        if(items){
            setList(JSON.parse(items));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('todoList',JSON.stringify(list));
    },[list])

    const addToListHandler = () =>{
        const items = [...list];
                    if(inputText.trim()){
                        items.push({
                            item: inputText,
                            isDone: false,
                            dueDate:'',
                            dueDatePassed:false,
                        });
                        setList(items);
                   }
                    setInputText('');
    }
    return (
        <>
        <Input inputChangeHandler = {(e)=>{
            const value = e.target.value;
            setInputText(value);
        }} value = {inputText} 
        onKeyUpHandler = {(e) =>{
            if(e.keyCode === 13){
                addToListHandler();
            }
        }}
        />
        <Button btnText ="Add to list"
                btnClickHandler={addToListHandler}/>
        <List 
        list={list}
        isDoneHandler={(itemIndex)=>{
            console.log('done click',itemIndex)
        const items =[...list];
        if(items[itemIndex].isDone === false){
        items[itemIndex].isDone = true;
    }else{
        items[itemIndex].isDone = false;
    }
        setList(items);
        }}
        deleteHandler = {(itemIndex)=>{
            console.log('delete', itemIndex);
            const items = [...list];
            items.splice(itemIndex,1);
            setList(items);
        }}

        dateHandler ={(event,itemIndex)=>{
const items =[...list];
const date = new Date(event.target.value);
items[itemIndex].dueDate = date;
const currentDate = new Date();
console.log(currentDate);
console.log(date);

if(currentDate>date){
    items[itemIndex].dueDatePassed = true;
}else{
    items[itemIndex].dueDatePassed = false; 
}
setList(items);
        }}
        />
        </>
    )
};

export default TodoList;