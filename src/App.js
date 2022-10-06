

// import axios from "axios";

function App() {

  componentDidMount() {

    if ("geolocation" in navigator) {

      console.log("Available");

    } else {

      console.log("Not Available");

    }

  }

  // geras kvietimas viskas veikia !
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.ambeedata.com/weather/latest/by-lat-lng',
  //   params: {lat: ' 54.687157', lng: '25.279652'},
  //   headers: {'x-api-key': '3fe96bf3e5bd44af35b33481b154709fdea07726ed31f735b67045567ab46e80', 'Content-type': 'application/json'}
  // };
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
}

export default App;
