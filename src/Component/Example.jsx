import { useState } from 'react';
import TableButton from "./TableButton";
import { EXAMPLES } from "../data";
import Section from './Section';
import Tab from './Tab';

export default function Example(){
    const [selected,setSelected] = useState();
    function handleSelect(selectedButton){
      setSelected(selectedButton);
    }
    let tablecontent = "Please select a category";
    if(selected){
        tablecontent = <div>
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
        <code>
          {EXAMPLES[selected].code}
        </code>
      </pre>
      </div>
    }
    return(
        <Section id="examples" title = "Examples">
        <Tab button ={
        <>
        <TableButton isSelected = {selected === 'components'} onClick={()=>handleSelect('components')}>Components</TableButton>
        <TableButton isSelected = {selected === 'jsx'} onClick={()=>handleSelect('jsx')}>JSX</TableButton>
        <TableButton isSelected = {selected === 'props'} onClick={()=>handleSelect('props')}> Props</TableButton>
        <TableButton isSelected = {selected === 'state'} onClick={()=>handleSelect('state')}>State</TableButton>
        </>}
        ButtonContainer = "menu" 
        id="tab-content">{tablecontent}
        </Tab>
     </Section>
    );
}