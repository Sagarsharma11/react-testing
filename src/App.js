import logo from './logo.svg';
import './App.css';

function App() {
const image = `https://images.pexels.com/photos/27224216/pexels-photo-27224216/free-photo-of-agua-pura.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`
  return (
    <>
    <p>First React Test Case</p>
    <img title={"AI generated image"} src={image} />
    </>
  );
}

export default App;
