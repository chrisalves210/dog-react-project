import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import About from './About';

const dogBreeds = [
  {
    name: 'English Bulldog',
    traits: 'Friendly, active sometimes, speaks a lot',
    size: 'Medium',
    weight: '50-55 lbs',
  },
  {
    name: 'Staffordshire Bull Terrier',
    traits: 'Confident, courageous, smart, patient',
    size: 'Medium',
    weight: '24-38 lbs',
  },
  {
    name: 'Golden Retriever',
    traits: 'Intelligent, friendly, devoted',
    size: 'Large',
  },
  {
    name: 'French Bulldog',
    traits: 'Adaptable, playful, smart',
    size: 'Small',
  },
  {
    name: 'Boxer',
    traits: 'Active, proud, very smart',
    size: 'Medium / Large',
  },
];

function Home() {
  return (
    <>
      <h1>Dog Breeds and What They Are</h1>
      <p>Here are some popular dog breeds and their key traits:</p>
      <ul className="breed-list">
        {dogBreeds.map((breed) => (
          <li key={breed.name} className="breed-card">
            <h2>{breed.name}</h2>
            <p>
              <strong>Size:</strong> {breed.size}
            </p>
            <p>
              <strong>Traits:</strong> {breed.traits}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

