


const interval = setInterval(()=>{
    const header = document.querySelector("._3auIg");
    if(header){
        console.log(header)
        clearInterval(interval)
        const button = document.createElement('button')
        button.innerHTML = "1.5x";
        button.classList.add("buttonVel");
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
        var pressionado2 = false
        const button2 = document.createElement('button')
        button2.innerHTML = "#";
        button2.classList.add("buttonVel");
        header.appendChild(button2)
        button2.addEventListener("click", ()=>{
            if( pressionado2)
            {
                pressionado2 = !pressionado2
                document.querySelector(":root").classList.remove("dark")
                button2.classList.remove('buttonPress');
            }else{
                pressionado2 = !pressionado2
                
                document.querySelector(":root").classList.add("dark")
                button2.classList.add("buttonPress");            
            }

        })
    }
},1000)
