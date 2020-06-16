import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hello() {
  return (
  <div className="main"> 
    Hello 
    <strong> Muhammad Baqir!  </strong>
    
    <h3>List of fruits</h3>
    <ul className="list">
      <li>Mango</li>
      <li>Orange</li>
      <li>Banana</li>
      <li>Water Melon</li>
    </ul>
  
    <h4>Let's do some Math</h4>
    <div className = "math">
      <div>{1} + {2} = {1+2}</div>
      <div>{4} * {10} = {4*10}</div>
    </div>
  </div>
  );
}

ReactDOM.render(
  <Hello/>, document.querySelector('#root')
);