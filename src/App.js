//import logo from './logo.svg';
import './App.css';

function Header() {

  var curHour = new Date();
  let hourOutput;
  let hour = curHour.getHours();
  let minute = curHour.getMinutes();

  if(hour > 12){
    hourOutput = (hour - 12).toString() +":"+ minute.toString() + " PM";
  }
  else{
    hourOutput = (hour).toString() +":"+ minute.toString() + " AM";
  }

  return(
    <div>
      <header>
        <h1>Welcome to Our Site</h1>
        <p>Current time: {hourOutput}</p>
      </header>
    </div>
  )
}

const Primary = () => {

  return(
    <div className="Pri">
      <h1>Hello World!</h1>
    </div>
  );
}



const App = () => {

  console.log("Peek-A-Boo!")

  return (
    <div className="App">
    <Header />
    <Primary />
    </div>
   
  );
}

export default App;
