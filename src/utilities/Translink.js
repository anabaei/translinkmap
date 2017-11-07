const Translink = {
  getAll() {
    return fetch('http://api.translink.ca/RTTIAPI/V1/stops?apiKey=I9V5BVca2ycYQfSEdqQ5&lat=49.187706&long=-122.850060').then(res => res.json());

  }
}

export { Translink};
