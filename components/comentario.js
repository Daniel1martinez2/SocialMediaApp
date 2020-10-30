class comentario{

    constructor(comment){
        this.comment = comment; 
      

    }

    database = firebase.database(); 
    

    render = ()=>{
        
        let component = document.createElement('div'); 
        component.classList.add('aloha');
        let current = document.createElement('div'); 
        current.innerHTML=  this.comment.user; 
        current.classList.add('commentMajor'); 
        component.appendChild(current); 

        var replicas = document.createElement('div'); 

    

        let attachComment = document.createElement('div'); 
        attachComment.classList.add('commentSend'); 

        let textfield = document.createElement("input");
        textfield.type = 'text'; 
        textfield.value = "";

        let sendSubComment = document.createElement('button');
        sendSubComment.innerText = 'send';  

        attachComment.appendChild(textfield); 
        attachComment.appendChild(sendSubComment); 
       
     


        sendSubComment.addEventListener('click', ()=>{
           
            database.ref('Facebook/publicaciones/'+this.comment.id+'/array').push().set(textfield.value);
            /*let reply = document.createElement('p'); 
            reply.innerText = textfield.value; 
            replicas.appendChild(reply); */
           
        }); 

        var replyArray =[]; 

        database.ref('Facebook/publicaciones/'+this.comment.id+'/array').on('value',data=>{

            data.forEach(
                element => {

                    replyArray.push(element.val()); 
                   // console.log(element.val()+'------>'+this.comment.id); 
                 
                   let reply = document.createElement('p'); 
                   reply.innerText = element.val(); 
                   replicas.appendChild(reply)
              
            });
            console.log(replyArray); 
            console.log('---------------------------END'); 
        }); 

      

        component.appendChild(replicas); 
        component.appendChild(attachComment); 
       // console.log(this.comment); 
        return component; 
    }


  
}