import './App.css';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import About from './About';
import dogBreeds from './dogBreeds';

function BreedCard({ name, size, traits, image }) {
  return (
    <li className="breed-card">
      {image && (
        <img src={image} alt={name} className="breed-image" />
      )}
      <h2>{name}</h2>
      <p>
        <strong>Size:</strong> {size}
      </p>
      <p>
        <strong>Traits:</strong> {traits}
      </p>
    </li>
  );
}

function Home() {
  const [search, setSearch] = useState('');

  const filteredBreeds = dogBreeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Dog Breeds and What They Are</h1>
      <p>Here are some popular dog breeds and their key traits:</p>
      <input
        type="text"
        className="breed-search"
        placeholder="Search breeds..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="breed-list">
        {filteredBreeds.map((breed) => (
          <BreedCard
            key={breed.name}
            name={breed.name}
            size={breed.size}
            traits={breed.traits}
            image={breed.image}
          />
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

