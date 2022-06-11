import React, { Component } from 'react';

class ListTodosComponent extends Component {

    state = {
        todos: [
            { id: 1, description: "React", done: false, targetDate: new Date() },
            { id: 2, description: "SQL", done: false, targetDate: new Date() },
            { id: 3, description: "Spring Boot", done: false, targetDate: new Date() },
            { id: 4, description: "Maven", done: false, targetDate: new Date() },
            { id: 5, description: "Hibernate", done: false, targetDate: new Date() },
        ]
    }

    render() {
        return (
            <>
                <h1>List Todos!</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListTodosComponent;