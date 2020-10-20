import React, { Component } from 'react';

import './../css/form.css'

class Form extends Component {
    constructor () {
        super();
        this.state = {
          name: '',
          sex: '',
          age: '',
          type: '',
          service: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            name: '',
            sex: '',
            age: '',
            type: '',
            service: ''
        });
      }

      handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

      render() {
        return (
          <div className="form-right">
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      placeholder="Nombre"
                      required
                      />
                  </div>
                  <div className="form-group">
                    <select
                        name="sex"
                        className="form-control"
                        value={this.state.sex}
                        onChange={this.handleInputChange}
                        required
                      >
                        <option value="">Sexo</option>
                        <option>Macho</option>
                        <option>Hembra</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.handleInputChange}
                      placeholder="Edad"
                      required
                      />
                  </div>
                  <div className="form-group">
                    <select
                        name="type"
                        className="form-control"
                        value={this.state.type}
                        onChange={this.handleInputChange}
                      >
                    <option value="">Tipo de animal</option>
                      <option>Perro</option>
                      <option>Gato</option>
                      <option>Hámster</option>
                      <option>Ave</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                        name="service"
                        className="form-control"
                        value={this.state.service}
                        onChange={this.handleInputChange}
                        required
                      >
                    <option value="">Servicio</option>
                    <option>Valoración</option>
                    <option>Urgencias</option>
                    <option>Hospitalización</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Guardar
                  </button>
                </form>
            </div>
          </div>
        )
      }
}
export default Form;