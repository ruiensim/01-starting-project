import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from '../data.js';
import Section from "./Section.jsx";

export default function CoreConcepts(){
    return(
        <Section id="core-concepts" title="Core Concepts">
        <ul>
        {CORE_CONCEPTS.map((item) => <CoreConcept key = {item.title} {...item}/>)}
        </ul>
        </Section>
    );

}