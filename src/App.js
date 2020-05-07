import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/covid19.png';




class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : {},
      country : ''
    }
  }

  handleCountryChange = async (country)=> {

    //fetch the data
    const fetchedData = await fetchData(country);
    // set the state
    this.setState({data : fetchedData, country: country})
  }

 async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data : fetchedData})
  }

  render(){
    const {data, country}  = this.state;
    return (
      <div className = {styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data = {data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country = {country} />
        <div className={styles.footer}>Created and developed at Elisia</div>
      </div>
    );
  }
}
export default App;
