import { useState } from "react";
import classes from "./Header.module.css";
import { styled } from "styled-components";
const Style = styled.h2`
  color: rgb(0, 255, 0);
  font-size: 2rem;
`;

const Input = styled.input`
  width: 30rem;
  height: 3rem;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px black;
  background-color: ${({ myColor }) =>
    myColor ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 255, 0.5)"};
`;
export const Header = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      <h1
        style={{
          color: "blue",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        Header Component
      </h1>
      <Input
        myColor={click}
        // style={{
        //   backgroundColor: click ? "gray" : "green",
        // }}
        type="text"
        placeholder="Don't dare to type"
      />
      <p className={classes.paragraph}>Learning React Css</p>
      <Style>hey i'm Learning styled Component</Style>

      <button
        onClick={() => {
          if (click) {
            setClick(false);
          } else {
            setClick(true);
          }
        }}
      >
        Submit
      </button>
    </>
  );
};
