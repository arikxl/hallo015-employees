import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TableSelect from './TableSelect';

const TableStyled = styled.section`
  width :70%;
  margin-bottom: 50px !important;
 
  table {
   width: 70%;
   border-collapse: collapse;
   border-left: 2px solid red;
   border-right: 2px solid green;
   border-bottom: 2px solid black;
   text-align: center;
   
   thead{
     background: var(--gradient);
   }  
   td{
     border-bottom: 1px solid black;
     width: 33%;
   }

  }
  @media (max-width: 444px){
   width:100%;
    
   table{
     width: 90%;
   }
 }
`;

const Table = () => {
  const [positions, setPositions] = useState([]);
  const [highestSalaries, setHighestSalaries] = useState([]);
  const [query, setQuery] = useState('All');

  useEffect(() => {
    if (query === 'All') {
      fetch('https://hallo015employees.herokuapp.com/highestSalary')
        .then(response => response.json())
        .then(data => setPositions(data))
        .finally(setHighestSalaries([]))
    } else {
      fetch(`https://hallo015employees.herokuapp.com/${query}`)
        .then(response => response.json())
        .then(data => setHighestSalaries(data))
    }
  }, [query])

  return (
    <TableStyled className="section">
      <h1>Salary Stats</h1>
      <TableSelect setQuery={setQuery} positions={positions} />

      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Avg salary</th>
            <th>Highest earner in this job</th>
          </tr>
        </thead>

        {highestSalaries.length < 1 ?
          (
            positions.map((p, index) => (
              <tbody key={index}>
                <tr>
                  <td>{p.position}</td>
                  <td>${p.averageSalary.toLocaleString()}</td>
                  <td>{p.name} (${p.highestSalary.toLocaleString()})</td>
                </tr>
              </tbody>
            ))
          ) : (
            highestSalaries.map((s, index) => (
              <tbody key={index}>
                <tr>
                  <td>{s.position}</td>
                  <td>${s.averageSalary.toLocaleString()}</td>
                  <td>{s.name} (${s.highestSalary.toLocaleString()})</td>
                </tr>
              </tbody>
            )))
        }
      </table>
    </TableStyled>
  );
};

export default Table;