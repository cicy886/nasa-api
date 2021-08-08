export class Nasa {
  static getImages(date) {
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/planetary/apod?api_key=7UsKmdbnAq9yWWFvOrZpxRxPdMpSNicIZPgxvghZ&date=${date}`;
      // const earthUrl =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=7UsKmdbnAq9yWWFvOrZpxRxPdMpSNicIZPgxvghZ`;
      // console.log(request);
    
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

export class Mars {
  static getImages(date) {
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      // const url = `https://api.nasa.gov/planetary/apod?api_key=7UsKmdbnAq9yWWFvOrZpxRxPdMpSNicIZPgxvghZ&date=${date}`;
      const earthUrl =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=7UsKmdbnAq9yWWFvOrZpxRxPdMpSNicIZPgxvghZ`;
      // console.log(request);
    
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
    
      request.open("GET", earthUrl, true);
      request.send();
    });
  }
}
