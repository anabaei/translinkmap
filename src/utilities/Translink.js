
const proxyurl = "http://localhost:3000/";
const url = 'http://api.translink.ca/RTTIAPI/V1/buses?apiKey=I9V5BVca2ycYQfSEdqQ5&lat=49.187706&long=-122.850060';
const header = new Headers({
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Credentials": "true",
   "Accept": "application/json",
   "Type": "application/json"
});

const Translink = {
  getbuses() {
    return fetch( proxyurl+url ,{
    headers:header
  }).then(res => res.json());
  }
}

export {Translink};
