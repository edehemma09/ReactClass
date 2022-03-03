import './Style/Input.css';
import React,{useState} from 'react';

function Input() {
  const [name, setName]=useState ('');
  const [stack, setStack]=useState ('');
  const [contact, setContact]=useState ('');

  const inputs =[ 
    {
    name:"Name",
    func:()=>{},
    placeholder:"Enter Name",
    type:"text",
  },

  {
    name:"Stack",
    func:()=>{},
    placeholder:"Stack",
    type:"text",
  },
  {

    name:"Contact",
    func:()=>{},
    placeholder:"Contact",
    type:"number",
  },
 
]
    return (
      <div className="inp">
        {inputs.map ((e,i)=>
          {return (
          <div className='inpcont'key={i} >
        <label className='label' >{e.name}</label>
        <input type="e.type" className='input' id='name' placeholder={e.placeholder}>
        </input>
        </div>
        );
      }
      )
    }
         
      </div>

     
    );
 
  }
  
  export default Input;