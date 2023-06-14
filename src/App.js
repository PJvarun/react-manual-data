import logo from './logo.svg';
import './App.css';
import User from './component/User';
import users from './data/users';
// import User from './component/User';
// import users from './data/users';


function App() {
  return (
    <div className="App">
      {/* <h1>Props</h1>
      <User x={55} userData={users} /> */}

      <h1></h1>
      <User x={99} userData={users} />
      {/* always pass the props in the attribute */}
    </div>
  );
}

export default App;

