import './App.css';
import Profile from './component/Profile';
import mystyle from './component/Style/mystyle';


function App() {
  //console.log(mystyle.header)
  return (
    <div style={mystyle.header} className='container' >
      <Profile/>
    
    </div>
    
  );
}

export default App;
