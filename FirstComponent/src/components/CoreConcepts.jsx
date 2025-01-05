import {CoreConcept} from "./CoreConcept"
import { CORE_CONCEPTS } from "../data.js"


export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept 
            key={conceptItem.title}
            title={conceptItem.title}
            img = {conceptItem.image}
            Des={conceptItem.description}
            
            />
          ))}        
        </ul>
      </section>
    )
}