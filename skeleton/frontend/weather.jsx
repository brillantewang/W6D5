import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.location = null; 
    
    }

    render () {
        return (
            <h1>yeee</h1>
        )
    }

    componentDidMount () {
        navigator.geolocation.getCurrentPosition((position) => {
            this.location = position;
            this.request();
        });
    }

    request () {
        let xhr = new XMLHttpRequest();
        console.log(this.location);
        let latitude = this.location.coords.latitude;
        let longitude = this.location.coords.longitude;


        xhr.open('GET', `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=edbe7261dc4a4c9b48b91d7326cb1841`);
        xhr.onload = () =>{
            console.log(xhr.status) // for status info
            console.log(xhr.responseType) // the type of data that was returned
            console.log(xhr.response) // the actual response. For json api calls, this will be a json string
        }
        xhr.send()
    }
}

export default Weather;