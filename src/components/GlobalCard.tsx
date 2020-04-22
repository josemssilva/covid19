import React from 'react'
import '../App.scss'

const GlobalCard = (props: any) => (
	<div className="GlobalCard">
		<div className="date">{(new Date()).toLocaleDateString()}</div><br/>
		🚑 Confirmed {props.TotalConfirmed} (+{props.NewConfirmed})<br/>
		⚰️ Deaths {props.TotalDeaths} (+{props.NewDeaths})<br/>
		💪 Recovered {props.TotalRecovered} (+{props.NewRecovered})
	</div>
)

export default GlobalCard