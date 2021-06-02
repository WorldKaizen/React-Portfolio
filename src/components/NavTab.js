import React from "react";

function NavTab(props) {
  const tabs = ["About Me", "Projects", "Resume", "Contact"];
  return (
    <header>
      <ul className="nav-bar">
        Andrew Zuniga
        {tabs.map((tab) => (
          <li className key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default NavTab;
