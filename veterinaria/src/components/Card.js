import React, { Component } from 'react';
import { todos } from '../todos.json';
import Form from './Form'
import './../css/cards.css'

class Cards extends Component{
    constructor(){
        super();
        this.state = {
            todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    handleAddTodo(todo){ // agregar mascota nueva
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    handleRemoveTodo(index){
        if(window.confirm("¿Estas seguro?")){
            this.setState({
                todos : this.state.todos.filter((e,i) =>{
                    return i != index
                })
            })
        }
    }
    render(){
        const todos = this.state.todos.map((todo, i) =>{
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <header className="card-header">
                            <h1 className="card-title">{todo.name}</h1>
                            <span className="badge badge-dark">{todo.service}</span>
                        </header>
                        <main className="card-body">
                            <p>{todo.sex}</p>
                            <p>{todo.age}</p>
                            <p>{todo.type}</p>
                        </main>
                        <footer className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={this.handleRemoveTodo.bind(this,i)}
                            >
                                Borrar
                            </button>
                        </footer>
                    </div>
                </div>
            )
        })
        return(
            <>
            <div className="body-main">
                <Form onAddTodo={this.handleAddTodo}/>
                <div className="container">
                    <div className="row mt-4">
                        { todos }
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Cards;