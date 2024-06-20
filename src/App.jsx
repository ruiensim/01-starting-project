import CoreConcepts from './Component/CoreConcepts.jsx';
import Example from './Component/Example.jsx';
import Header from './Component/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Example/>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;