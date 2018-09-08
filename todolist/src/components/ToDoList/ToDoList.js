import React    from "react";
import template from "./ToDoList.jsx";

const green = '#39d1b480';
const yellow = '#ffc10759';
const red = '#ff00006e';
const grey = '#8080804d';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: [],
      completeItem: false,
      color: red
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  removeItem(val) {
    let listArray = this.state.list;
    let index = listArray.indexOf(val);
    listArray.splice(index, 1);

    this.setState({
      list: listArray
    })
  }

  changeColor(val) {

    val.color = val.color == red ? yellow : red;

    let listArray = this.state.list;
    let index = listArray.indexOf(val);
    listArray[index] = val;

    this.setState({
        list: listArray
    })
  }

  completeItem(val) {
    val.completeItem = !val.completeItem;
    val.color = val.color == green ? grey : green;

    let listArray = this.state.list;
    let index = listArray.indexOf(val);
    listArray[index] = val;

    this.setState({
        list: listArray
    })
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let listArray = this.state.list;
    let completeItem = false;
    let input = this.state.userInput;
    let color = grey;

    listArray.push({
      input,
      completeItem,
      color
    });
    this.setState({
      list: listArray,
      userInput: ''
    })
    
  }

  render() {
    return (
      <div className="to-do-list-main">


      <form onSubmit={this.handleSubmit}>
        <label>
          <input className="user-input p-20"
          onChange={this.handleChange}
          value={this.state.userInput} 
          type="text"/>
        </label>
        <button type="submit" className="custom-button"><i className="fas fa-2x fa-plus"></i></button>
      </form>

        <ul className="test">
          {this.state.list.map( (val, index)=> 
            <div key={index} className='p-20 box' style={{background: val.color}}>
              <li>
                <label className="custom-label">
                  <input type="checkbox" onChange={ ()=> this.completeItem(val) } />
                  <span key={index} className={val.completeItem == true ? 'line-through' : null}>{val.input}</span>
                </label>
                <span className="pull-right">
                  <a onClick={ ()=> this.changeColor(val) } className="p-10"> <i className="fas fa-palette"></i> </a>
                  <a onClick={ ()=> this.removeItem(val) } ><i className="far fa-trash-alt"></i></a>
                </span>
              </li>
            </div>
          )}
        </ul>
      </div>
    ); 
  }
}

export default ToDoList;
