// fetch('https://swapi.co/api/people/1').then((res)=> {console.log(res)})

export default class SwapiService {
  _baseApi = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResponse = async url => {
    const res = await fetch(`${this._baseApi}${url}`);
    if (!res.ok) {
      throw new Error(`Couldn not received data from ${this._baseApi}${url}`);
    }
    return res.json();
  };

  getPerson = async id => {
    const res = await this.getResponse(`/people/${id}`);
    return this._transformPerson(res);
  };

  getAllPeople = async () => {
    const res = await this.getResponse("/people/");
    return res.results.map(this._transformPerson);
  };

  getPlanet = async id => {
    const res = await this.getResponse(`/planets/${id}`);
    // console.log(this._transformPlanet(res))
    return this._transformPlanet(res);
  };

  getAllPlanets = async () => {
    const res = await this.getResponse(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getStarship = async id => {
    const res = await this.getResponse(`/starships/${id}`);
    return this._transformStarship(res);
  };

  getAllStarships = async () => {
    const res = await this.getResponse(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getPersonImage = ({ id }) => {    
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  _transformStarship = starship => {
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
  };
}
