import './App.css';
import './components/Navbar';
import data from './data';
import Navbar from './components/Navbar';
import Card from './components/Card'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  
  
  
  return (
    <div className="App">
      <Navbar />
      <div className='cards--list'>
        {cards}
      </div>
    </div>
  );
}
