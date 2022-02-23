import './App.css';
import Profile from './component/Profile';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';
import Comp4 from './component/Comp4';

function App() {
  return (
    <div className="App">
      <Profile name="Rita"/>
      <Comp1 CarName="Audi"/>
      <Comp2 VixeName="Mission"/>
      <Comp3 Gender="Unisex"/>
      <Comp4 Data="Transport"/>

    </div>
  );
}

export default App;
