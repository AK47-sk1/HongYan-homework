const input=document.getElementById('input');
const button=document.getElementsByClassName("button1")[0];
const user={
    name:"柳贯一",
    img:"./古月方源.jpg"
};

button.onclick=()=>{
    const inputValue = input.value.trim();
    if (!inputValue) {
        alert("请输入评论内容！");
        return;
    }
    const comment=`
        <div class="div4">
            <div class="div3">
                <img src="${user.img}" class="img">
                <span>${user.name}</span>
            </div>
            <div>                
                <div>${input.value}</div>
            </div>
        </div>
    `;
    const timeout=setTimeout(() => {
        const insert=document.getElementsByClassName("container")[0];
        insert.innerHTML+=comment;
        input.value='';        
        alert("评论成功");
    }, 1000); 
};