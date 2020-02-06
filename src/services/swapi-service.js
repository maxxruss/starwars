// fetch('https://swapi.co/api/people/1').then((res)=> {console.log(res)})

export default class GetResponse {
    _baseApi = "https://swapi.co/api";
  
    async getResponse(url) {
      const res = await fetch(`${this._baseApi}${url}`);
      if (!res.ok) {
        throw new Error(`Couldn not received data from ${this._baseApi}${url}`);
      }
      return res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResponse("/people/");
      return res.results;
    }
  
    async getPerson(id) {
      const res = await this.getResponse(`/people/${id}`);
      return res;
    }
  }
  
  const getResponse = new GetResponse();
  getResponse.getAllPeople().then(response => {
    console.log(response);
  });
  
  getResponse.getPerson(1).then(response => {
    console.log(response);
  });
  