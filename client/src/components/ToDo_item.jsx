import { useState } from 'react'
import './todo_item.css'

export default function ToDo_item({ params, onDelete, onEdit, cats }) {

    const [isEditing, setIsEditing] = useState(false)
    const [taskParams, setTaskParams] = useState(params)

    function handleEdite(){
        setIsEditing(false)
        onEdit(taskParams)
    }

    let taskValue

    if (isEditing) {
        taskValue = (
            <>
                <input
                    value={params.title}
                    onChange={(e) => {
                        setTaskParams({
                            ...params,
                            title: e.target.value
                        });
                    }}
                />
                <select
                    onChange={(e) => {
                        setTaskParams({
                            ...params,
                            category: e.target.value
                        });
                    }}>
                    {cats.map(el => {

                        console.log(el)
                        return <option key={el}>{el}</option>
                    })}
                </select>
                <button onClick={() => handleEdite()}>Сохранить</button>
            </>
        );
    } else {
        taskValue = (
            <>
                {params.title}
                <button onClick={() => setIsEditing(true)}>Редактировать</button>
            </>
        );
    }


    return (
        <div className="todo-item">
            <input
                type="checkbox"
                id="name"
                name="name"
                size="10"
                checked={params.complited}
                onChange={(e) => {
                    onEdit({
                        id,
                        title,
                        complited: e.target.checked,
                    });
                }}
            ></input>
            {taskValue}
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
}
