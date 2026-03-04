import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About This App</h1>
        <p>
          This simple React app shows a few popular dog breeds and some of
          their key traits and also has photos of each breed.
        </p>
      </header>
    </div>
  );
}

export default About;export function BreedCard({ id, name, size, traits, image: images }) { }

