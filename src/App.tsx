import React from 'react';
import './App.scss';
import axios from 'axios'
import CountryCard from './components/CountryCard';
import GlobalCard from './components/GlobalCard';

class App extends React.Component {

	componentDidMount() {
		this.requestData()
	}

	requestData = async () => {
		const response = await axios.get("https://api.covid19api.com/summary")
		this.setState(previous => {
			return { ...previous, data: response.data }
		})
	}

	state = {
		data: {
			"Global" : {},
			"Countries": []
		}
	}

	render() {
		return <div className="App">
			<GlobalCard {...this.state.data.Global} />
			{
				this.state.data.Countries
					.sort((a: any, b: any) => (b.TotalConfirmed - a.TotalConfirmed)*10000 + (b.TotalDeaths - a.TotalDeaths))	
					.map((country: any, index: number) => <CountryCard key={country.Slug} position={index + 1} {...country} />)
			}
		</div>
	}
}

export default App;
