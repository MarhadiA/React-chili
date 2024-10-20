import React from "react";
import LinkItem from "../Link";

const NavItem = ({href,className, children}) => {
 return (
      <>
      <LinkItem href={href} className={className}>
            {children}
      </LinkItem>
      </>

 )
}

export default NavItem