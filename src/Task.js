import React from 'react';

export default function Task({task, onDelete, onCompleteToggle}) {
    const deleteItem = () => {
        onDelete(task.id);
    }

    const changeCompleted = () => {
        onCompleteToggle(task.id);
    }

    let stil = {};
    if(task.completed) {
        stil = {textDecoration: 'line-through'};
    }

    return (<div>
        <span style={stil} onClick={changeCompleted}>{task.text}</span>
        <button onClick={deleteItem} style={{color: 'red'}}>X</button>
    </div>);
}