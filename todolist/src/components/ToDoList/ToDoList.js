import React    from "react";
import template from "./ToDoList.jsx";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUSerInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  removeItem(val) {
    let listArray = this.state.list;
    let index = listArray.indexOf(val);
    listArray.splice(index, 1);

    this.setState({
      list: listArray
    })
  }

  render() {
    // return template.call(this);
    return (
      <div className="to-do-list-main">
        <input 
          onChange={ (e)=> this.changeUSerInput(e.target.value)}
          value={this.state.userInput} 
          type="text"/>
        <button onClick={ ()=> this.addToList(this.state.userInput) }>Add</button>

        <ul>
          {this.state.list.map( (val)=> <li onClick={ ()=> this.removeItem(val) } >{val}</li>)}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
