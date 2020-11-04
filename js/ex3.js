const traveled = {
  name: "Bryan",
  countries: [
    {
      name: "vietnam",
      year: 2000
    },
    {
      name: "thailand",
      year: 2004
    },
    {
      name: "Laos",
      year: 2003
    },
    {
      name: "United States",
      year: 2005
    },
    {
      name: "Mexico",
      year: 2019
    }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries",{
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveled)
})

  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });