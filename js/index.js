const database = firebase.database(); 

const usuario = document.querySelector('.user'); 
const publicacion = document.querySelector('.comment'); 
const send = document.querySelector('.sendComment'); 

const sectionComments = document.querySelector('.publicaciones'); 


send.addEventListener('click', ()=>{
    let reference =  database.ref('Facebook/publicaciones').push(); 
    let array = []; 
    let obj = {id: reference.key ,user: usuario.value, comment: publicacion.value, replys: array}; 
    reference.set(obj);

});



database.ref('Facebook/publicaciones').on('value',data=>{
    sectionComments.innerHTML = ''; 
    data.forEach(
        element => {
           
           // console.log(element.val()); 
            let comen = new comentario(element.val()); 
            sectionComments.appendChild(comen.render()); 

      
    });
}); 

