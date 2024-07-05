import React, { useState } from "react";
const TreeView = ({ menus , level=0 }) => {
  const [abs_index, setAbs_index] = useState(null);
  return (
    <div style={{marginLeft: `${level * 20}px` }} >
      {menus?.map((menu, index) => {
        return   <div>
        <span onClick={()=>setAbs_index( prev => prev == index ? null :index)} > {menu.label}</span>
        {menu?.children && 
        <span> { (abs_index === index) ? '-' :'+'  } </span>
        } 
        {(abs_index === index) && 
          (<TreeView menus={menu?.children} level={level+1} />)
        }
      </div>
      })}
    </div>
  );
};

export default TreeView;

