process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const fconfig = {

   method: "get",
}
fetch('https://api.openweathermap.org/data/2.5/weather?q=Chongqing&appid=a37cd0a6f5940686f5f3d60823155c45&units=metric&lang=zh_cn',fconfig)
  .then ( res => res.json() )
  .then( data => console.log(data) )