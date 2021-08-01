

function traer(){
    fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>{
            const resul =  data.results[0];
            const nombre = resul.name.first;
            const apellido = resul.name.last;
            const imagen = resul.picture.large;
            const container = document.createElement("div");
            const p = document.createElement("p");
            p.className="text-center ";
            p.textContent = `${nombre} ${apellido}`;
            container.className="col";
            container.style ="padding-top:30px";
            const img =document.createElement('img');
            img.className ="rounded mx-auto d-block img-circle";
            img.src = imagen; 
            const app = document.querySelector('.app'); 
            container.appendChild(p);
            container.appendChild(img); 
            app.append(container);  
        })
}


const button = document.querySelector('#button');
button.addEventListener("click", ()=>{

    i=1;
    for (var i=0;i <=6;i++)
    {
    console.log(traer());
    }
});

