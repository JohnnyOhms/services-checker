const bgColor = document.querySelector("body"),
        text = document.querySelector(".connection-status"),
        img = document.getElementById('img'),
        text2 = document.querySelector(`#monitor`)

function setColor(){
    bgColor.classList.add("setColor")
}
async function connectionStatus(){
    try {
        let fetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
        text.textContent ="You Are Online";
        setColor();
        img.src = "./image/online.jpg";
        if (!Response.status >= 200 && Response.status <= 300) {
            return alert(`Refreash Page ${Response.error} found`);
        }else {
            return fetchData;
        }
    } catch (error) {
        img.src = "./image/offline.jpg";
        text.textContent = "You Are Offline, Connect to an Internet Service.";
    }
}

setInterval(async ()=>{
    let result = await connectionStatus();
    if(result){
        text2.textContent = "Conection Looks Good";
    }else{
        bgColor.classList.remove("setColor");
        text2.textContent = 'Opps Conection Down';
    }
},3000)

window.onload = (async ()=>{
    if (await connectionStatus()) {
        text.textContent ="You Are Online";
        text2.textContent = "",
        setColor();
        img.src = "./image/online.jpg";
        console.log("internet Service");
    } else {
        img.src = "./image/offline.jpg"
        text.textContent= "You Are Offline, Connect to an internet service "
        text2.textContent = "";
        console.log("internet down");
    }
})