// fetch('https://swapi.co/api/people/1').then((res)=> {console.log(res)})

export default class SwapiService {
  _baseApi = "https://swapi.co/api";

  async getResponse(url) {
    const res = await fetch(`${this._baseApi}${url}`);
    if (!res.ok) {
      throw new Error(`Couldn not received data from ${this._baseApi}${url}`);
    }
    return res.json();
  }

  async getPerson(id) {
    const res = await this.getResponse(`/people/${id}`);
    return this._transformPerson(res);
  }

  async getAllPeople() {
    const res = await this.getResponse("/people/");
    return res.results.map(this._transformPerson);
  }

  async getPlanet(id) {
    const res = await this.getResponse(`/planets/${id}`);
    // console.log(this._transformPlanet(res))
    return this._transformPlanet(res);
  }

  async getAllPlanets() {
    const res = await this.getResponse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getStarship(id) {
    const res = await this.getResponse(`/starships/${id}`);
    return this._transformStarship(res);
  }

  async getAllStarships() {
    const res = await this.getResponse(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    // console.log(item.url.match(idRegExp)[1])
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
        // console.log(planet)

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }
}

// const getResponse = new GetResponse();
// getResponse.getAllPeople().then(response => {
//   console.log(response);
// });

// getResponse.getPerson(1).then(response => {
//   console.log(response);
// });
