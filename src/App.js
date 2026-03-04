import './App.css';
import { useState } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import About, { BreedCard } from './About';
import dogBreeds from './dogBreeds';

/ }) {
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
      <Link to={`/breed/${id}`} className="breed-link">
        Learn more
      </Link>
    </li>
  );
}

function BreedDetails() {
  const { id } = useParams();
  const breed = dogBreeds.find((b) => b.id === id);

  if (!breed) {
    return <p>Sorry, that dog breed was not found.</p>;
  }

  return (
    <div className="breed-details">
      {breed.image && (
        <img src={breed.image} alt={breed.name} className="breed-details-image" />
      )}
      <h1>{breed.name}</h1>
      <p>
        <strong>Size:</strong> {breed.size}
      </p>
      {breed.weight && (
        <p>
          <strong>Weight:</strong> {breed.weight}
        </p>
      )}
      {breed.origin && (
        <p>
          <strong>Origin:</strong> {breed.origin}
        </p>
      )}
      {breed.lifespan && (
        <p>
          <strong>Lifespan:</strong> {breed.lifespan}
        </p>
      )}
      {breed.description && <p className="breed-description">{breed.description}</p>}
      <Link to="/" className="back-link">
        ← Back to all breeds
      </Link>
    </div>
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
            id={breed.id}
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
          <Route path="/breed/:id" element={<BreedDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

