import logo from './logo.svg';
import './App.css';

function App() {
const image = `https://images.pexels.com/photos/27224216/pexels-photo-27224216/free-photo-of-agua-pura.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`
  return (
    <div className='App'>
    <p>First React Test Case</p>
    <input type='text' placeholder='Enter User Name' />
    <img title={"AI generated image"} src={image} />
    </div>
  );
}

export default App;
