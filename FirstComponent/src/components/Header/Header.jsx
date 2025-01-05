import "./Header.css"


let arr = ["Fundamental","Crucial","Core"];

    let randomName = (max) => {
    return Math.floor(Math.random() * (max+1));
    }

export function Header(){
    
    return (
      <>
      <header>
        <img src="download.png" alt="" />
        <h1>React Essentials</h1>
        <p>{arr[randomName(2)]}   React concepts you will need for almost any app you are going to build.
          React is a very popular frame work you should definetely use it.</p>
      </header>
      </>
    );
  }