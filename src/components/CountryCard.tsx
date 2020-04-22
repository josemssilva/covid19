import React from 'react'
import '../App.scss'

const CountryCard = (props: any) => (
	<div className="CountryCard">
		<div className="name">{props.Country}</div><br/>
		🚑 Confirmed {props.TotalConfirmed} (+{props.NewConfirmed})<br/>
		⚰️ Deaths {props.TotalDeaths} (+{props.NewDeaths})<br/>
		💪 Recovered {props.TotalRecovered} (+{props.NewRecovered})
	</div>
)

export default CountryCard