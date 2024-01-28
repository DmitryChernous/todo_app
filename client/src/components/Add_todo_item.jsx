import { useState } from "react"
import './add_todo_item.css'

export default function Add_todo_item({setTodoList, cats}) {

    let [taskTitle, setTaskTitile] = useState('')
    let [taskCat, setTaskCat] = useState('')

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
            <select onChange={e => setTaskCat(e.target.value)}>
                {cats.map(el => {
                    return <option key={el}>{el}</option>
                })}
            </select>
            <button
                onClick={() => {
                    setTaskTitile('')
                    setTodoList({taskTitle, taskCat})
                    }}>
                Добавить
            </button>
        </section>
    )
}