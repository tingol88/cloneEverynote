import React from "react";
import Author from "./Author/Author"

export interface AuthorsProps {
    
}
 
const Authors: React.FC<AuthorsProps> = () => {
    return ( <div> 
        list of authors
        <Author />
    </div> );
}
 
export default Authors;
