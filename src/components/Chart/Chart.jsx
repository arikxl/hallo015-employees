import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Bar from './Bar';

const ChartStyled = styled.section`
  width :90%;

`;

const Chart = () => {

  const [popularityData, setPopularityData] = useState([]);


  useEffect(() => {

    fetch('https://hallo015employees.herokuapp.com/popularity')
      .then(response => response.json())
      .then(data => setPopularityData(data))
  }, [])

  return (
    <ChartStyled className="section">
      <h1>Popularity Of Positions</h1>
      <div className="bar-container flex">
        {popularityData.map((p, index) => (
          <Bar key={index} position={p}/>
        ))}
      </div>
    </ChartStyled>
  )
}

export default Chart