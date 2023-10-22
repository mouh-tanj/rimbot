module.exports.config = {
	name: "احذف",
	version: "1.1.1",
	hasPermssion: 1,
	credits: "محمد تانجيرو",
	description: "تأمر البوت بحذف رسالته",
	commandCategory: "𝔾ℝ𝕆𝕌ℙ",
	usages: "حذف رسائل البوت",
	cooldowns: 0
};

module.exports.languages = {
	"en": {
		"returnCant": "من أنت حتى تأمرني 🤔، لن أحذف 😝.",
		"missingReply": "رد علي رسالة يا غبي."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}