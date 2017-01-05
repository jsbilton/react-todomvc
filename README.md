# React Todo Exercise
http://jaredreacttodo.surge.sh/

A simple react todo application

## Setup

```
git clone ...
cd react-todo
npm install
atom .
npm start
```

## Step 1 - paint items from app state

* create initial state

```
{
  todos: [{
    id: 1,
    title: 'Pick Final Project',
    completed: false
  }, {
    id: 2,
    title: 'Plan Final Project',
    completed: false
  }]
}
```

* render state using map

> Included is a module fun-fp you can use the
map function from fun-fp or you can use the array
map function, but the goal is to map over the
todos and display them using the `TodoItem`
component

## Step 2 - add todo item

* create controlled input and submit form
* append new item to state

## Step 3 - toggle complete

* create onToggle function
* pass to todo-item as prop

## Step 4 - edit item

## Step 5 - delete item

## Step 6 - show active item count

## Step 7 - filter active items

## Step 8 - filter completed items

## Step 9 - remove filter

## Step 10 - clear completed


Process:
Setup: 
Initial State
Give Array some values
Require Map
Create unordered list

Next Step:
value
form
add handle submit and handle change
need to be able to control component value on change
select value on change
input would be checked if checkbox, if input it is value on change
https://facebook.github.io/react/docs/forms.html#controlled-components

Edit todo item:
Todo Item needs its own state
editText: this.props.todo.title
Todo Item needs to handle the events: edit, change, submit

View label should listen for double click event 

Edit Input should be controlled 
value = this.state.editText
onChange = this.state.handleChange
onBlur = this.state.handleSubmit

Implement edit text, handle change, handle submit, on the Todo Item Component

Render method should change the list item class name to editing if this.props.editing is not null 

App should pass the following props to Todo Item: editing, onEdit, onSave

Implement edit Todo and save Todo on app component 

Next step is Remove

Next step is show active item count 

Then we want to filter through the active items/completed items as well as all items 

Want to clear the completed tasks


