module.exports.config = {
  name: "غوجو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "محمد تانجيرو",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور  غوجو",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/ex5rYTW.jpeg",
"https://i.imgur.com/DUgx742.jpeg",
"https://i.imgur.com/9evPSVx.jpeg",
"https://i.imgur.com/YbPN6Cj.jpeg",
"https://i.imgur.com/rvQ3Lzx.jpeg",
"https://i.imgur.com/Hw12zud.jpeg",
"https://i.imgur.com/Hx6ePcO.jpeg",
"https://i.imgur.com/3JrrHWm.jpeg",
"https://i.imgur.com/RbjvCMf.jpeg",
"https://i.imgur.com/B5r6HmA.jpeg",
"https://i.imgur.com/jm0rRLw.jpeg",
"https://i.imgur.com/EHOAIBr.jpeg",
"https://i.imgur.com/oZkFxj8.jpeg",
"https://i.imgur.com/9otwuJi.jpeg",
"https://i.imgur.com/Ec1CubD.jpeg",
"https://i.imgur.com/WltPCWY.jpeg",
"https://i.imgur.com/QErJRiv.png",
"https://i.imgur.com/nVdAxgT.png",
"https://i.imgur.com/AcBicWS.png",
"https://i.imgur.com/nYHDRtw.png",
"https://i.imgur.com/PsE2j75.png",
"https://i.imgur.com/taOVi3D.jpeg",
"https://i.imgur.com/SqHzpsr.jpeg",
"https://i.imgur.com/eUOpB13.jpeg",
"https://i.imgur.com/5Su8Ro7.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور   غوجو 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور غوجو     \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 