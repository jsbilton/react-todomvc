const React = require('react')

const { map } = require('fun-fp')
const TodoItem = require('./todo-item')

const App = React.createClass({
  getInitialState: function() {
    return {
      newTodo: {
        title: '',
        completed: false
      },
      todos: [{
        id: 1,
        title: 'Pick of Destiny',
        completed: false
      }, {
        id: 2,
        title: 'Pick of Irony',
        completed: false
      }]
    }
  },
  handleChange(e) {
    this.setState({
      newTodo: { title: e.target.value
    }})
  },
  handleSubmit(e) {
    e.preventDefault()
    let newTodo = {...this.state.newTodo}
    newTodo.id = new Date().toISOString()
    let todos = [...this.state.todos, newTodo]
    this.setState({
      todos, newTodo: { title: '', completed: false
    }})
  },
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.newTodo.title}
              className="new-todo"
              type="text"
              placeholder="What needs to be done?" autoFocus
            />
          </form>
        </header>
        <section id="main">
          <input type="checkbox" className="toggle-all" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            { map(todo => <TodoItem todo={todo} />, this.state.todos)}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <ul className="filters">
            <li><a href="/">All</a></li>
            <li>
              <a href="/active">Active</a>
            </li>
            <li><a href="/completed">Completed</a></li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    )
  }
})

module.exports = App
