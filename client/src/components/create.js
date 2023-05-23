import React from 'react';
import ReactDom from 'react-dom/client'
import '../create.css';



export default function Workstation() {
    return(
        <body>
            <h1 className='title'>Create an outfit</h1>
            <div className = "ws-card">Choose Wisely</div>
        </body>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Workstation />)