export let CoreConcept = (props) => {
    return (
      <li>
        <img src={props.img}/>
        <h3>{props.title}</h3>
        <p>{props.Des}</p>
      </li>
    )
  }