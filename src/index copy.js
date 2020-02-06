// fetch('https://swapi.co/api/people/1').then((res)=> {console.log(res)})

class SwapiService {
  _apiBase = "https://swapi.co/api";

  async getResponse(url) {
    const res = await fetch(this._apiBase + url);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase + url}, received ${res.status}`
      );
    }

    // console.log(res.json());

    return res.json();
  }

  getAllPeople() {
    return this.getResponse(`/people`);
  }

  // getPerson() {
  //   return this.getResponse(`/people/${id}`);
  // }
}

// const url = "https://swapi.co/api/people/1";

let swapiService = new SwapiService();
swapiService.getAllPeople().then(response => {
  console.log(response);
});
// swapiService.getPerson(1);
