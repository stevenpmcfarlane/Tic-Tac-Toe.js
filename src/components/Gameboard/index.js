import React from "react";
import { useSelector } from "react-redux";

import GameTile from "./GameTile";
import "./index.css";

const Gameboard = () => {
  const board = useSelector((state) => state.board);

  return (
    <>
      {board.map((row, rowIndex) => (
        <div className="gameboard-row">
          {row.map((col, colIndex) => (
            <div className="gameboard-col">
              <GameTile
                key={"" + rowIndex + colIndex}
                row={rowIndex}
                col={colIndex}
                value={col}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Gameboard;
