import './search_todos.css'

export default function Search_todos({searchString, findTodos, cats, setCat}) {

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
            <select onChange={e => setCat(e.target.value)}>
                {cats.map(el => {
                    return <option key={el}>{el}</option>
                })}
            </select>
        </section>
    )
}
