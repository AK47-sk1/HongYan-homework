let obj_={
    name:"柳贯一",
    gender:"男",
    region:"北原",
    poem:"曲折穷途天地窄，重重灾劫生死危，身如柳絮随风扬，无论云泥意贯一"
}
function copy(obj){
    let newobj={};
    for(let i in obj){
        newobj[i]=obj[i];
    }
    return newobj;
}
let obj1=copy(obj_);
let obj2=copy(obj_);
let obj3=copy(obj_);
let arr=[];
arr.push(obj1,obj2,obj3);
console.table(arr);