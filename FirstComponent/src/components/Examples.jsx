import { TabButton } from "./TabButton"
import { useState } from 'react';
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples(){
    const [selectedTopic,setSelectedTopic] = useState("");
  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton)
  }
    let tabContent = <p>Please select a topic.</p>

  if(selectedTopic){
    tabContent = (
    <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    )
  }
    return(
        <Section title="Examples" id="examples">
          <Tabs 
          buttons={<><TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton></>}>
          {tabContent}</Tabs>
      </Section>
    )
}
<input type="text" />