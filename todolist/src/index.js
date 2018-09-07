import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ToDoList from './components/ToDoList';

ReactDOM.render(<ToDoList />, document.getElementById('root'));
registerServiceWorker();
