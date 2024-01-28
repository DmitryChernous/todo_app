import { useMemo, useState } from 'react'
import './App.css'
import ToDo_List from './components/ToDo_List'
import Add_todo_item from './components/add_todo_item'
import Search_todos from './components/Search_todos'
import Layout from './components/Layout'

const initTodoList = [
  { id: 1, title: 'Очень важное дело', complited: false },
  { id: 2, title: 'Неотложное дело', complited: false },
  { id: 3, title: 'Супер важное дело', complited: false }
]



function App() {

  const [todoList, setTodoList] = useState(initTodoList)
  const [searchString, setSearchString] = useState('')

  let maxId = 0

  function calculateMaxId() {
    todoList.forEach(el => {
      if (el.id > maxId) {
        maxId = el.id
      }
    })
  }

  const filteredTodoList = useMemo(()=> {
    if (searchString) {
      return [...todoList].filter((el) => el.title.toLowerCase().includes(searchString.toLowerCase()))
    }
    return todoList
  }, [todoList, searchString])


  function addTodo(todoItem) {
    calculateMaxId()
    const todo = {
      id: maxId + 1,
      title: todoItem,
      complited: false
    }
    setTodoList([...todoList, todo])
  }

  function handleDeleteTodo(todoId) {
    setTodoList(todoList.filter((el) => el.id !== todoId));
  }

  function handleEditTodo(todo) {
    setTodoList(
      todoList.map((el) => {
        if (el.id === todo.id) {
          return todo;
        } else {
          return el;
        }
      })
    );
  }

  return (
    <>
      <Layout>
        <div className='app'>
          <h1>Список задач</h1>
          <Add_todo_item setTodoList={addTodo} />
          <Search_todos searchString={searchString} findTodos={setSearchString} />
          <ToDo_List todoList={filteredTodoList} deleteTodo={handleDeleteTodo} editTodo={handleEditTodo} />
        </div>
      </Layout>
    </>
  )
}

export default App
