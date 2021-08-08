export default class Nasa {
  static getImages(date) {
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/planetary/apod?api_key=vqiUBDjfEb87JrTX1jp1vYN8UIviXAOGCzeJe7aY&date=${date}`;
    
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
    
      request.open("GET", url, true);
      request.send();
    });
  }
}
