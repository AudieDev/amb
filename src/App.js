import './App.css';
import React from "react";
import Header from "./Header";
import { render } from '@testing-library/react';

function App() {
const newList = render();
return (
<div>
  <h1> Here is some text to practice my react</h1>
<ol>
  <li> Hey There </li>
  <li>Have some text</li>
  <li>With a little react on the side</li>
</ol>
</div>
); 
// Using the newly created Header
// component in this main component
<Header/>
;
}
export default App;


