import { Dispatch, SetStateAction, useState } from "react";

export const TO_LIST_STATES = [
  "Completed",
  "Dropped",
  "Planned to Watch",
  "Watching",
];

interface ISelectTitle {
  toList: number;
  setToList: (input: number) => void;
}

const SelectTitle = ({ toList, setToList }: ISelectTitle) => {
  const [openList, setOpenList] = useState<boolean>(false);

  return (
    <div className="select" onClick={() => setOpenList(!openList)}>
      <div className={`select-box ${openList && "active"}`}>
        <div className="select-box-title">
          {toList === 0 ? "Add to My List" : TO_LIST_STATES[toList - 1]}
        </div>
        <div className="select-box-icon"></div>
      </div>
      <div className={`select-options ${openList && "open"}`}>
        {TO_LIST_STATES.map((el, index) => (
          <div
            className="select-options-element"
            key={index}
            onClick={() => setToList(index + 1)}
          >
            {el}
          </div>
        ))}
        {toList !== 0 && (
          <div
            className="select-options-element delete"
            onClick={() => setToList(0)}
          >
            Remove from My List
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectTitle;
