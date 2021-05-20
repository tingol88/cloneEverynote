import React from "react";
export interface AuthorProps {}
const divStyles = {
  border: "1px solid black",
  
};
const wrapper = {
  border: "1px solid black",
  margin: "auto auto",
  width: "300px",
  hight: "300px",
  display: "grid",
};
const Author: React.FC<AuthorProps> = () => {
  return (
    <div style={divStyles} className="author">
      <div className="wrapper">
        <h2> Иван Иванович </h2>
        <img src="https://globalmsk.ru/usr/person/big-person-15629077401.jpg" />
        <p>Описание про автора </p>
      </div>
    </div>
  );
};

export default Author;
