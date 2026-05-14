import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Test from './Test.jsx'
import {Nameexport as NameExport} from './Nameexport'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// ReactDOM.createRoot(document.getElementById('root')).render(Test())

let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Test></Test>);
// root.render(<Test />);
root.render(<NameExport />);
