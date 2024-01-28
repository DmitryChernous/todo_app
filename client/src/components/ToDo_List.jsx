import ToDo_item from './ToDo_item'
import './todo_list.css'


export default function ToDo_List({ todoList, deleteTodo, editTodo, cats }) {

    //console.log(todoList)

    return (
        <div className='todo-list'>
            {todoList.map(el => {
                return <ToDo_item
                    key={el.id}
                    params={el}
                    cats={cats}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                />
            })}
        </div>
    )
}