import './search_todos.css'

export default function Search_todos({searchString, findTodos}) {

    return (
        <section className="search-todo-section">
            <input
                type="text"
                placeholder="Найти задачи"
                value={searchString}
                onChange={(e) => {
                    findTodos(e.target.value)
                }}
            />
        </section>
    )
}
