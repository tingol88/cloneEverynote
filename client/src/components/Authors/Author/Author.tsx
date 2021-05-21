import React from "react";
export interface AuthorProps {}
const divStyles = {
  border: "1px solid black",
  display: 'flex',
  justifyContent: "center",
};
const wrStyles = {
  display: 'grid',
}

const img = {
  order: -1,
}
const Author: React.FC<AuthorProps> = () => {
  return (
    <div style={divStyles} className="author">
      <div style={wrStyles} className="wrapper">
        <h2> Иван Иванович </h2>
        <img style={img} src="https://globalmsk.ru/usr/person/big-person-15629077401.jpg" />
        <p>Описание про автора </p>
      </div>
    </div>
  );
};

export default Author;
