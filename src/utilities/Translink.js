

const header = new Headers({
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Credentials": "true",
   "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
});

const Translink = {
  getbuses() {
    return fetch('http://api.translink.ca/RTTIAPI/V1/stops?apiKey=I9V5BVca2ycYQfSEdqQ5&lat=49.187706&long=-122.850060',{
    headers:header,
    method: 'get',
    mode: 'no-core'
  }).then(res => res.json());
  }
}

export {Translink};
