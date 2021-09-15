import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { links, page },
  } = useGlobalContext();
  const container = useRef(null);
  const [colums, setColums] = useState("col-2");

  useEffect(() => {
    setColums("col-2");
    const submenu = container.current;
    const { center } = location;
    submenu.style.left = `${center}px`;
    if (links.length === 3) {
      setColums("col-3");
    }
    if (links.length > 3) {
      setColums("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu "}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${colums}`}>
        {links.map((el, ind) => {
          const { url, label, icon } = el;
          return (
            <a href={url} key={ind}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
