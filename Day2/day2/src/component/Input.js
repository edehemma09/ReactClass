import './Style/Input.css';

function Input() {
  
    return (
      <div className="inp">
        <div className='inpcont'>
        <label className='label' >Name:</label>
        <input type="text" className='input' id='name' placeholder='Enter name'>
        </input></div>
        <div className='inpcont'>
        <label className='label' >Stack:</label>
        <input type="text" className='input' id='stack' placeholder='Stack' >
        </input></div>
        <div className='inpcont'>
        <label className='label' >Contact:</label>
        <input type="text" className='input' id='contact' placeholder='Contact '>
        </input></div>
        
      </div>
     
    );
 
  }
  
  export default Input;