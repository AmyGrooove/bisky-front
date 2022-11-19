import { useState } from "react";

const TO_LIST_STATES = [
  "Completed",
  "Dropped",
  "On Hold",
  "Planned to Watch",
  "Rewatching",
  "Watching",
];

const SelectTitle = () => {
  const [toList, setToList] = useState<number>(0);

  return (
    <div className="select">
      <div className="select-box">
        <label id="openList" className="select-box-text">
          <input
            type="checkbox"
            onClick={(e: any) => console.log(e.target.checked)}
          />
          Add to My List
        </label>
      </div>
      <div className="select-options">asdasd</div>
    </div>
  );
};

export default SelectTitle;
