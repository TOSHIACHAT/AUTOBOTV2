const { RsnChat } = require("rsnchat");

module.exports.config = {
  name: "gpt3",
  version: "1.0",
  role: 0,
  hasPrefix: false,
  credits: "shiki",
  description: "AI powered by gpt4 ",
  aliases: ["gpt4"],
  cooldowns: 0,
};

module.exports.run = async function ({api, event, args}) {
  if (!args[0]) {
    api.sendMessage("Please provide a question.", event.threadID, event.messageID);
    return;
  }

  const query = args.join(" ");
  const rsnchat = new RsnChat("rsnai_AUgQA7ynbftgoQIFoOWNW5Lp");

  try {
    const response = await rsnchat.openchat(query);
    const ans = response.message;
    api.sendMessage(ans, event.threadID, event.messageID);
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage("An error occurred while fetching the response.", event.threadID, event.messageID);
  }
};
