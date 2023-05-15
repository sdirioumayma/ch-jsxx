
import './App.css';
import Address from './Component/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/ProfilePhoto';

function App() {
  return (
    <div className="App">
    <FullName />
    <Address />
    <ProfilePhoto /> 
    </div>
  );
}

export default App;
