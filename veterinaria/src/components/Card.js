import React, { Component } from 'react';
import { todos } from '../todos.json';
import Form from './Form';
import './../css/cards.css';
var cont = 1;
class Cards extends Component{
    constructor(){
        super();
        if(cont == 1){
            for(var i = 0; i < localStorage.length; i++){
                let keyJSON = localStorage.key(i);
                let dateJSON = JSON.parse(localStorage.getItem(keyJSON));
                todos.push(dateJSON);
            }
        }
        cont = 0;
        this.state = {
            todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    handleAddTodo(todo){ // agregar mascota nueva
        this.setState({
            todos: [...this.state.todos, todo]
        })
        let key = localStorage.length+1;
        let item = JSON.stringify(todo);
        localStorage.setItem(key,item);
    }
    render(){
        const todos = this.state.todos.map((todo, i) =>{
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <header className="card-header">
                            <h1 className="card-title">{todo.name}</h1>
                            <span className="badge badge-danger">{todo.service}</span>
                        </header>
                        <main className="card-body">
                            <p>{todo.sex}</p>
                            <p>{todo.age} años</p>
                            <p>{todo.type}</p>
                        </main>
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