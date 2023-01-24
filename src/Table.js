import React, { useState, useEffect } from "react";
import dataJson from "./data.json";
import Filter  from "./Filter";

function Table() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedRows, setSelectedRows] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setData(dataJson);
    setFilteredData(dataJson);
  }, []);

  useEffect(() => {
    let filtered = data;
    if (statusFilter !== "All") {
      filtered = data.filter((item) => item.Status === statusFilter);
    }
    setFilteredData(filtered);
  }, [statusFilter, data]);

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((row) => row !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div
      
      style={{
        background: "linear-gradient(to bottom, blue 80%, white 20%)",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
        <h1 style={{ color: "white" }}>Staff Management System</h1>
      
      <table
        style={{
          backgroundColor: "white",
          borderRadius: "1%",
          height: "70vh",
          width: "85vw"
        }}
      >
        {/* <div>
          <button onClick={() => setShowFilter(!showFilter)}>Filter</button>
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
        </div> */}
        <thead>
        <Filter 
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
            setShowFilter={setShowFilter}
            showFilter={showFilter}/>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Skill</th>
            <th>Experience</th>
            <th>Eng lvl</th>
            <th>Start date</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(item.id)}
                  checked={selectedRows.includes(item.id)}
                />
              </td>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Position}</td>
              <td>{item.Skill}</td>
              <td>{item.Experience}</td>
              <td>{item.ENG_Lvl}</td>
              <td>{item.Start_Date}</td>
              <td style={{ color: "lightblue" }}>{item.Project}</td>
              
              <td
                style={{
                  backgroundColor:
                    item.Status === "In Work"
                      ? "lightgreen"
                      : item.Status === "Pending"
                      ? "lightblue"
                      : item.Status === "On Vacation"
                      ? "orange"
                      : "white"
                }}
              >
                {item.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
