import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const add = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, toggled: false }]);
        }
        setTask("");
    };

 
    const Toggle = (index) => {
        const toggleTask = tasks.map((val, i) => 
            i === index ? { ...val, toggled: !val.toggled } : val
        );
        setTasks(toggleTask);
    };
    
    
    const removeTask = (index) => {
        const change = tasks.filter((_, i) => i !== index);
        setTasks(change)
    }

    return (
       
        <div style={{padding:" auto 0", alignContent:"center", width:"100%"}}>
            <h2 style={{textAlign:"center"}}>Todo  list</h2>
            <input type="text" value={task} placeholder='Enter your name' onChange={(e) => setTask(e.target.value)} />
            <button  style={{marginLeft:"20px"}} onClick={add}>Add</button>
            <ul style={{listStyle:"none"}}>
                <li textAlign="start"> name   </li>
                {tasks.map((t, i) => (
                    <li key={i}  
                    
                    style={{ textDecoration: t.toggled ? "line-through" : "none" }}>
                        <span onClick={()=>(Toggle(i))} >{t.text}</span>
                    <button  style={{marginLeft:"20px", padding:"0 5px"}} onClick={()=>{removeTask(i)}}>Delete</button>
                    </li>
                ))}

            </ul>
            </div>
    );
}

export default Todo;
