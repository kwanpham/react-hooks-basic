import React, {useEffect, useState} from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";


function App() {

  const [postList , setPostList] = useState([]);
  const [pagination , setPagination] = u

  useEffect(() => {

    async function fetchPostList() {
      const  requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const  response = await fetch(requestUrl);
      const  responseJson = await response.json();
      console.log({ responseJson})

      const {data} = responseJson;
      setPostList(data);

    }
    console.log('Post List effect');
    fetchPostList();

  } , []);

  useEffect(() =>{
    console.log('Todo list effect');
  })

  function handlePageChange(newPage) {

  }

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ])

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index , 1);
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    // add new todo to current todo list
    const newTodo = {
      id : todoList.length + 1 ,
      ...formValues
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);

  }

  return (
    <div className="app">
      <h1>TodoList</h1>

      <PostList posts={postList}/>

      {/*<TodoForm onSubmit={handleTodoFormSubmit}/>*/}
      {/*<TodoList todos={todoList} onTodoClick={handleTodoClick}/>*/}
    </div>
  );
}

export default App;
