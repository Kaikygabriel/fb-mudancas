const divm = document.getElementById('divmenu')
const menu = document.getElementById('menu')


function INmenu(){
    if(menu.style.height == '40px'){

     divm.style.left = '0%'
    menu.style.height = '41px'
    menu.style.border = '2px solid black'

     } else if (menu.style.height == '41px') {

        menu.style.height = '40px'
    divm.style.left = '-65%'
menu.style.border = '1px solid black'

     }
     else {
        alert(' [ERROR-01]Não foi possivel abrir o menu')
       }
   }











// manjo muito 


//    menu.addEventListener('click', (e) =>{
   
//     function inmenu(e){
//       if(e.style.height == '40px'){
//          return true
//       } else {
//          return false
//       }
//     }
//     function sair(e){
//      if(e.style.height == '41px'){
//         return true
//      } else {
//         return false
//      }
//    }
//     if(inmenu(menu) ){
//      divm.style.left = '0%'
//      menu.style.height = '41px'
//     } else if (sair(menu)){
//      menu.style.height = '40px'
//      divm.style.left = '-65%'
//     } else {
//      alert(' [ERROR-01]Não foi possivel abrir o menu')
//     }
//  })