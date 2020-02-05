// fetch('https://swapi.co/api/people/1').then((res)=> {console.log(res)})

const url = "https://swapi.co/api/people/1";

const getResponse = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }

  return res.json();
};

getResponse(url)
  .then(body => {
    console.log(body.name);
  })
  .catch(err => {
    console.log(err);
  });
