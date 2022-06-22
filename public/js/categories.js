// const category = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace(`/`)
//      } else {
//       alert('Failed to log out.');
//     }
//   };

// function hello(){
//     console.log('Hello!')
// }
// const menuItem = document.getElementById("menu-item-0");


//   document.getElementById('menu-item-0').addEventListener('click',hello());

 document.addEventListener("click", e => {
    console.log(e.target);
  });
//   console.log(document + 'aqui');
//   ${this.category}