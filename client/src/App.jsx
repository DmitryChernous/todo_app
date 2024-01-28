import { useMemo, useState } from 'react'
import './App.css'
import ToDo_List from './components/ToDo_List'
import Add_todo_item from './components/add_todo_item'
import Search_todos from './components/Search_todos'
import Layout from './components/Layout'

const initTodoList = [
  { id: 1, title: 'Очень важное дело', complited: false, category: '' },
  { id: 2, title: 'Неотложное дело', complited: false, category: 'Дом' },
  { id: 3, title: 'Супер важное дело', complited: false, category: 'Работа' }
]

function App() {

  const [todoList, setTodoList] = useState(initTodoList)
  const [category, setCategory] = useState('')
  const [searchString, setSearchString] = useState('')
  
  // переделать со строк на объекты чтобы позволить показывать текщее значение при редактировании задачи
  const [todoListCategories, setTodoListCategories] = useState(['Все', 'Дом', 'Работа', 'Дача'])

  

  let maxId = 0

  function calculateMaxId() {
    todoList.forEach(el => {
      if (el.id > maxId) {
        maxId = el.id
      }
    })
  }

  const filteredTodoList = useMemo(() => {
    if (searchString) {
      return [...todoList].filter((el) => el.title.toLowerCase().includes(searchString.toLowerCase()))
    }
    return todoList
  }, [todoList, searchString])

  const getTodosByCategory = useMemo(() => {
    if (category && category !== 'Все') {
      return filteredTodoList.filter((el) => el?.category?.toLowerCase().includes(category?.toLowerCase()))
    }
    return filteredTodoList
  }, [filteredTodoList, category])

  function handleCategory(category){
    setCategory(category)
  }

  function addTodo(params) {
    calculateMaxId()
    const todo = {
      id: maxId + 1,
      title: params.taskTitle,
      complited: false,
      category: params.taskCat
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
          <Add_todo_item 
            setTodoList={addTodo} 
            cats={todoListCategories} 
          />
          <Search_todos
            searchString={searchString}
            findTodos={setSearchString}
            cats={todoListCategories}
            setCat={handleCategory}
          />
          <ToDo_List 
            todoList={getTodosByCategory} 
            deleteTodo={handleDeleteTodo} 
            editTodo={handleEditTodo} 
            cats={todoListCategories}
          />
        </div>
      </Layout>
    </>
  )
}

export default App
