//วิธีใช้งาน ไปที่ https://play.farmersworld.io/ กด F12 ไปที่ Console แล้ววางโค้ดเลย
//กด Auto login ด้วยนะครับ

const style = "color:green; font-size:30px; font-weight: bold; -webkit-text-stroke: 1px black;";
console.log("%c Farmers Words บอทที่เขียนเล่นๆ", style);

let Account = "srvxi.wam";
let RpcEndpoint = "https://wax.pink.gg";

console.log("FB: https://facebook.com/h4xtx");
console.log("Account: "+Account);
console.log("RpcEndpoint: "+RpcEndpoint);

async function getavailability(){
  const rawResponse = await fetch(RpcEndpoint+"/v1/chain/get_table_rows", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"json":true,"code":"farmersworld","scope":"farmersworld","table":"tools","lower_bound":Account,"upper_bound":Account,"index_position":2,"key_type":"i64","limit":"100","reverse":false,"show_payer":false})
  });
  const content = await rawResponse.json();
  window.next_availabilityData = content["rows"]
  checktimeforclaim();
};

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
};

async function checktimeforclaim(){
for (i=0;i<window.next_availabilityData.length;i++){
  if(Math.round(new Date().getTime()/1000) >= window.next_availabilityData[i]["next_availability"]){
    if(typeof(document.getElementsByClassName("carousel__img--item")[i]) !== undefined){
      document.getElementsByClassName("carousel__img--item")[i].click()
    }
    let delayres = await delay(5000);
    if(document.getElementsByClassName("button-section set-height")[0].innerText == "Mine"){
        document.getElementsByClassName("button-section set-height")[0].click();
        delayres
        if(typeof(document.getElementsByClassName("modal-content mid")[0]) !== undefined){
            console.log(document.getElementsByClassName("modal-content mid")[0].innerText)
        }
        getavailability()
      }
    
}

}

};

getavailability();
setInterval(checktimeforclaim, 5000);
