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
		console.log(response)
		console.log(response.data)
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
			{this.state.data.Countries.map(country => <CountryCard {...country} />)}
		</div>
	}
}

export default App;
