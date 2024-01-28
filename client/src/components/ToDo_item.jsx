import { useState } from 'react'
import './todo_item.css'

export default function ToDo_item({ id, title, complited, onDelete, onEdit }) {

    const [isEditing, setIsEditing] = useState(false)
    let taskValue

    if (isEditing) {
        taskValue = (
            <>
                <input
                    value={title}
                    onChange={(e) => {
                        onEdit({
                            id,
                            title: e.target.value,
                            complited
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Сохранить</button>
            </>
        );
    } else {
        taskValue = (
            <>
                {title}
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
                checked={complited}
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
