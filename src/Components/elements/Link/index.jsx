import React from "react";

const LinkItem = ({href,children, clasName}) => {
 return (
    <div>
      <a href={href} className={clasName}>
        {children}
      </a>
    </div>
 )
}

export default LinkItem