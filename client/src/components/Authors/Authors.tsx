import React, { useState } from "react";
import Author from "./Author/Author";
import { useInput } from "../../hooks/useInput.js";

export interface AuthorsProps {}

const Authors: React.FC<AuthorsProps> = () => {
  const { value, onChange, onBlur, error } = useInput("hello world", true);
  console.log(error);
  
  return (
    <div>
      <form style={{ marginLeft: "auto", width: "300px" }}>
        <input value={value} onChange={onChange} onBlur={onBlur}/>
        {value && value} {error? error: null}
        
      </form>
      list of authors
      <Author />
    </div>
  );
};

export default Authors;
