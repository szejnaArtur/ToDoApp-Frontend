import { React, useState } from 'react';

import TodoDataService from '../api/TodoDataService';
import AuthenticationService from '../components/AuthenticationService.js';

const ListTodosComponent = (props) => {

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    const refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retireveAllTodos(username)
            .then(response => {
                    setTodos(response.data);
            })
    }

    const deleteTodoClicked = (todoId) =>  {
        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.deleteTodo(username, todoId)
            .then(
                response => {
                    setMessage({message: `Delete of todo ${todoId}, successful.`});
                    refreshTodos();
                }
            )
    }

        return (
            <>
                {refreshTodos()}
                {message && <div className='alert alert-success'>
                    {message}
                </div>}
                <div className='container text-center'>
                    <h1>List Todos!</h1>
                    <div className='table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>description</th>
                                    <th>Is Completed?</th>
                                    <th>Target Date</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map(todo => {
                                    return (
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>
                                                <button className='btn btn-warning' onClick={() => deleteTodoClicked(todo.id) }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }


export default ListTodosComponent;