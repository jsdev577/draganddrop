import React,{useRef,useState} from 'react'
import { Rnd } from 'react-rnd'
import { VictoryPie,VictoryChart, VictoryLine,VictoryTheme} from "victory";
// import the component
import ReactSpeedometer from "react-d3-speedometer"
// and just use it

import GaugeChart from 'react-gauge-chart'
 

export default function DemoBoard() {
	const myRef = useRef(null)
	const [height, setHeight] = useState(300)
	const [width, setWidth] = useState(300)
	return (
		<div style={{ width: '100ww', height: '100vh', backgroundColor: '#bdb9b9' }}>
			<Rnd
				default={{
					x: 0,
					y: 0,
					width: 320,
					height: 200,
				}} 
				style={{border:'1px solid black',backgroundColor:'white'}}>
				<VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
			{ x: 5, y: 7 },
			{ x: 6, y: 2 },
			{ x: 7, y: 3 },
			{ x: 8, y: 2 },
      { x: 9, y: 3 },
    ]}
  />
</VictoryChart>
      </Rnd>

			<Rnd
				default={{
					x: 0,
					y: 0,
					width: 320,
					height: 200,
				}} 
				size={{ width: width,  height: height }}
				ref= {myRef}
				onResizeStop={(e, direction, ref, delta, position) => {
					setWidth(ref.style.width)
					setHeight(ref.style.height)
				}}
				style={{border:'1px solid black',backgroundColor:'white'}}>
				<ReactSpeedometer height={height} width={width} forceRender fluidWidth/>
      </Rnd>
		</div>
	)
}
