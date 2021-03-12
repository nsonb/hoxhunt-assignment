import React from 'react';
import styled from 'styled-components'

const Dsplay = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: .3rem;
  
  & .attr {
    width: 80%;
    text-align: left;
    color: white;
  }

  & .attr-value {
    width: 20%;
    text-align: right;
    color: #FC427B;
  }

  & .attr-slider {
    width: 100%;
    background-color: beige;
    height: 5px;
    border-radius: 3px;
  }

  & .attr-slider--value {
    background-color: #FC427B;
    height: 100%;
    border-radius: 3px;
  }
`
// this component takes in the name of the value and the value to display it in a row
// the value is displayed in a slider that with maximum value being at 100 and minimum at 0

const AttributeDsplay = (props: { name: string, value: number}) => {
    const {name, value} = props
    return (
    <Dsplay>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div className="attr">{name}</div>
                <div className="attr-value">{value}</div>
            </div>
            <div className="attr-slider">
                <div className="attr-slider--value" style={{width: `${value / 100 * 100}%`}}/>
            </div>
    </Dsplay>
    )
}

export default AttributeDsplay