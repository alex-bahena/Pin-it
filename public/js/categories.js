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
  const Tvalue = e.target;
  console.log(Tvalue.innerHTML);
  });
 
// $(".categorie-list").click(function(element){
//   var el = $(this).val();
//   console.log(el);
// })
//   console.log(document + 'aqui');
//   ${this.category}




