import React from 'react'
import '../App.scss'

const GlobalCard = (props: any) => {
	const currentDate = new Date()

	return (
	<div className="GlobalCard">
		<div className="date">{currentDate.toLocaleDateString()} @ {currentDate.toLocaleTimeString()}</div><br/>
		🚑 Confirmed {props.TotalConfirmed} (+{props.NewConfirmed})<br/>
		⚰️ Deaths {props.TotalDeaths} (+{props.NewDeaths})<br/>
		💪 Recovered {props.TotalRecovered} (+{props.NewRecovered})
	</div>
)}

export default GlobalCard