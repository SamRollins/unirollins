//random number

//TODO GESTIONAR ERRORES Y EXITOS
id = Math.floor(Math.random() * 101);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((json) => console.log(json));
