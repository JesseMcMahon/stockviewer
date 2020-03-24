import React from "react";
import "./Table.css";

const Table = ({ open, high, low, close }) => {
  return (
    <div>
      <table className="tableDiv">
        <tbody>
          <tr id="row0">
            <td id="cell0-0">
              Today's Open <span>${open}</span>
            </td>
            <td id="cell0-1">
              Last Close <span>${close}</span>
            </td>
            <td id="cell0-2">
              Today's High <span>${high}</span>
            </td>
            <td id="cell0-3">
              Today's Low <span>${low}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
