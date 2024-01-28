import { useState } from "react"
import './add_todo_item.css'

export default function Add_todo_item({setTodoList}) {

    let [taskTitle, setTaskTitile] = useState('')

    function handleTitleChange(event) {
        setTaskTitile(event.target.value)
    }

    return (
        <section className="add-todo-section">
            <input
                type="text"
                placeholder="Новая задача"
                value={taskTitle}
                onChange={handleTitleChange}
            />
            <button
                onClick={() => {
                    setTaskTitile('')
                    setTodoList(taskTitle)
                    }}>
                Добавить
            </button>
        </section>
    )
}