let a="千古地仙随风逝，昔日三王归青冢。阳莽憾陨谁无败？卷土重来再称王。天河一挂淘龙鱼，逆天独行顾八荒。今日暂且展翼去，明朝登仙笞凤凰！";
let b="当时年少掷春光，花马踏蹄酒溅香。爱恨情仇随浪来，夏蝉歌醒夜未央。光阴长河种红莲，韶光重回泪已干。今刻沧桑登舞榭，万灵且待命无缰！";
const user1={
    img:"./定仙游.webp"
}
const user2={
    img:"./红莲.webp"
}
let judge1=false;
let judge2=false;
let timer1=null;
const button1=document.getElementsByClassName("button1")[0];
const button2=document.getElementsByClassName("button2")[0];
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
button1.onclick=()=>{
    judge2 = false;
    if(timer1){
        clearInterval(timer1);
    }
    const output=document.getElementsByClassName("output")[0];
    const img=document.getElementsByClassName("img")[0];
    output.innerHTML="";
    let i=0;
    img.src=user1.img;
    img.style.display="block";
    judge1=true;
    const timer=setInterval(()=>{
        if(!judge1){
            clearInterval(timer);
            timer1 = null;
            return;
        }
        if(i<a.length){
            output.textContent+=a[i];
            if((i+1)%16==0){
                output.textContent+="\n";
            }
            i++;
        }
        else{
            clearInterval(timer);
            timer1 = null;
            judge1 = false;
        }
    },300);
};
button2.onclick=async()=> {
    judge1=false;
    if(timer1){
        clearInterval(timer1);
    }
    const output=document.getElementsByClassName("output")[0];
    const img=document.getElementsByClassName("img")[0];
    output.innerHTML="";
    img.src=user2.img;
    img.style.display="block";
    judge2=true;
    for(let i=0;i<b.length;i++){
        if(!judge2){
            break;   
        }
        output.textContent+=b[i];
        if((i+1)%16==0){
            output.textContent+="\n";
        }
        await delay(300);
    }
    judge2=false;
}

