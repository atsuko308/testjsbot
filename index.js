const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ">";
console.log("Pret à raid !")

client.login("Njk0OTkzMzU5MDcyMTMzMTQx.XqNKJw.MpXt4LbJQ7U4OjwSGY9pMNbjhTc")

client.on("message", message =>{
	if(!message.guild) return
	if(message.content === prefix + "hello"){
		message.channel.send("Bonjour ! ")
	}
	if(message.content === prefix + "spam"){
		message.channel.send("Hacked By Atsuko_o @everyone")
		message.guild.createChannel("Hacked By Atsuko_o")
	}
});
