import React from "react";
import { AiOutlineFilter, AiOutlineSetting } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";

const Filter = ({
  statusFilter,
  setStatusFilter,
  setShowFilter,
  showFilter
}) => {
  return (
    <div>
      
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ alignSelf: "center" }}>Your Employees</h3>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "space-around"
          }}
        >
          <AiOutlineFilter onClick={() => setShowFilter(!showFilter)}>
            Filter
          </AiOutlineFilter>
          {showFilter && (
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="In Work">In Work</option>
                <option value="Pending">Pending</option>
                <option value="On Vacation">On Vacation</option>
              </select>
            </div>
          )}
          <FaRegShareSquare style={{ size: 70 }} />
          <AiOutlineSetting style={{ size: 70 }} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
