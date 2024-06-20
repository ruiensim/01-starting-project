import { useState } from 'react';
import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import Header from './Component/Header.jsx'
import CoreConcept from './Component/CoreConcept.jsx';
import TableButton from './Component/TableButton.jsx';


function App() {

  const [selected,setSelected] = useState();
  function handleSelect(selectedButton){
    setSelected(selectedButton);
    console.log(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((item) => <CoreConcept key = {item.title} {...item}/>)}
        </ul>
        </section>
        <section id="examples">
           <h2>Examples</h2>
           <menu>
           <TableButton isSelected = {selected === 'components'} onSelect={()=>handleSelect('components')}>Components</TableButton>
           <TableButton isSelected = {selected === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TableButton>
           <TableButton isSelected = {selected === 'props'} onSelect={()=>handleSelect('props')}> Props</TableButton>
           <TableButton isSelected = {selected === 'state'} onSelect={()=>handleSelect('state')}>State</TableButton>
           </menu>
        <div id="tab-content">
        {selected !== undefined ? (
        <div>
          <h3>{EXAMPLES[selected].title}</h3>
          <p>{EXAMPLES[selected].description}</p>
          <pre>
          <code>
            {EXAMPLES[selected].code}
          </code>
        </pre>
        </div>
      ) : (
      <p>Please select a value</p>
      )}
          
        </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;