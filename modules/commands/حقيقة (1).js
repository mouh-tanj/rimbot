module.exports.config = {
  name: "حقيقة",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "SEN",
  description: "đo độ bê đê",
  commandCategory: "𝕋𝔼𝕏𝕋",
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  const data = ["محمد تانجيرو عمي، وعمك، وعم الكل \n ماذا كنت تتوقع  ", 
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}