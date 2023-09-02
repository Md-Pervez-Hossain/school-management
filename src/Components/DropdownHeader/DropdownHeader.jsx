import Link from "next/link";
import React from "react";

const DropdownHeader = () => {
  return (
    <div>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <details open>
            <summary>Parent item</summary>
            <ul>
              <li>
                <a>level 2 item 1</a>
              </li>
              <li>
                <a>level 2 item 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>item 1</a>
                    </li>
                    <li>
                      <a>item 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownHeader;
