import { useState } from 'react';
import ReactJson from 'react-json-view';
import './App.css';

const isBase64 = str => {
  try {
    return btoa(atob(str)) === str;
  } catch(e) {
    return false;
  };
};

const decode = str => {
  const defaultValue = {};
  if(str.trim().length === 0) return defaultValue;
  if(!isBase64(str)) {
    return defaultValue;
  }
  try {
    return JSON.parse(atob(str));
  } catch(e) {
    console.log(e)
    return defaultValue;
  }
}


const App = () => {
  const [base64, setBase64] = useState("");
  return(
    <div className="container">
      <textarea value={base64} onChange={e => setBase64(e.target.value)}></textarea>
      <ReactJson src={decode(base64)} indentWidth="2"></ReactJson>
    </div>
  );
}
export default App;
