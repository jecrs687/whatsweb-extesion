
async function buttonVelocidade(header){
    const button = document.createElement('button')
    button.innerHTML = "1.5x";
    button.classList.add("buttonVel");
    button.ondblclick = () => {
        
    }
    header.appendChild(button)
    var pressionado = false
    window.addEventListener("click",()=>{
        const audios = document.querySelectorAll("audio")

        if(pressionado)
        {
            audios.forEach((audio)=>{
                audio.playbackRate = 1.5
            })
        }else{     
            audios.forEach((audio)=>{
            audio.playbackRate = 1
        })
        }
    })
    button.addEventListener("click", ()=>{
        if( pressionado)
        {
            pressionado = !pressionado
            button.classList.remove('buttonPress');
        }else{
            pressionado = !pressionado
            button.classList.add("buttonPress");            
        }

    })

}

async function buttonDark(header){
    
    var pressionado2 = false
    const button = document.createElement('button')
    button.innerHTML = "#";
    button.classList.add("buttonVel");
    header.appendChild(button)
    button.addEventListener("click", ()=>{
        if( pressionado2)
        {
            pressionado2 = !pressionado2
            document.querySelector(":root").classList.remove("dark")
            button.classList.remove('buttonPress');
        }else{
            pressionado2 = !pressionado2
            
            document.querySelector(":root").classList.add("dark")
            button.classList.add("buttonPress");            
        }

    })

}

async function statusDownload(){
    async function awaitEvent(){
        console.log("deu certo")
    }
    const button = document.querySelector(".rAUz7").firstChild
    button.onmouseover = ()=>{
        document.querySelector('._3auIg').addEventListener("click", ()=>{
            const header = document.querySelector(".zjFBX")
            if(header){
                awaitEvent()
            }})

    }
}

const interval = setInterval(()=>{
    const header = document.querySelector("._3auIg");
    if(header){
        clearInterval(interval)
        buttonVelocidade(header);
        buttonDark(header)
        // statusDownload()
    }
},1000)
