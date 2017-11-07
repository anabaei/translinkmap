
const proxyurl = "http://localhost:3000/";
const url = 'http://api.translink.ca/rttiapi/v1/buses';
const header = new Headers({
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Credentials": "true",
   "Accept": "application/json",
   "Type": "application/json"
});

const Translink = {
  getbuses() {
    return fetch(url,{
    headers:header
  }).then(res => res.json());
  }
}

export {Translink};
