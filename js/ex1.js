fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings => {
    const info = document.getElementById("paintings");
    paintings.forEach(painting => {
      const paint = document.createElement("tr");
      paint.innerHTML = `<td> ${painting.name} </td> 
      <td> ${painting.year} </td>
      <td> ${painting.artist} </td>`;
      info.appendChild(paint);
    });
  })
  .catch(err => {
    console.error(err.message);
  });