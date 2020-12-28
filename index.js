// Revolution
const Discord = require("discord.js");
const client = new Discord.Client();

// Const Embed
const footer = "Revolution Bot";
const color = "0xB0B0B0";

// Check bolean
var del = new Boolean(false);

const cancelexecute = new Discord.RichEmbed()
            .setTitle(`[Warning]`)
            .setDescription(`Bạn không được phép sử dụng.`)
            .setColor(color)
            .setFooter(footer)
            .setTimestamp(); // Cancelled embed

// Set prefix
const prefix = "%";

// Token
const token = require('dotenv').config();

const config = {
  token: process.env.token
};

client.on('ready', () => {
	    // log if bot started
		console.log('Bot is online!');

		// Startup bot
		client.user.setPresence({
    		status: "online",
    		game: {
    		name: "RESTARTING",
    		type: "PLAYING"
    		}
  		});

});

client.on("guildMemberAdd", member => {
    const channel = client.channels.get("756029760047677492");

     //channel.send(`{member.user.tag}, welcome to Revolution`)
});



client.on("message", async message => {

	if(message.author == client.user) return;

	// Auto react
	const emoji = client.emojis.find(emoji => emoji.name === "verify") ;

	if (message.author.id === '425599739837284362') {
			message.react(emoji);
	}

	// Set status
	client.user.setPresence({
		status: "online",
		game: {
		name: "Revolution 2021",
		type: "WATCHING"
		}
	});

	// Auto react
//	if(message.channel.id === "792631698147377192") {
//		message.react('👍').then(r => {
//                message.react('👎');
//        });
//	}

	// Prefiexes
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// Embed
    const usernotfound = new Discord.RichEmbed()
		    .setTitle("[Kick Command]")
			.setDescription(`Không tìm thấy user.`)
			.setColor(color)
            .setFooter(footer)
            .setTimestamp();
    const usernotfound2 = new Discord.RichEmbed()
		    .setTitle("[Kick Command]")
			.setDescription(`Không tìm thấy user.`)
			.setColor(color)
            .setFooter(footer)
            .setTimestamp();


    const notaguser = new Discord.RichEmbed()
		    .setTitle("[Kick Command]")
			.setDescription(`Bạn cần tag user.`)
			.setColor(color)
            .setFooter(footer)
            .setTimestamp();

   const cannotkick = new Discord.RichEmbed()
			.setTitle("[Kick Command]")
			.setDescription(`Không thể kick user này.`)
			.setColor(color)
			.setFooter(footer)
			.setTimestamp();

	// On bot ping
	if(message.isMentioned(client.user)) {

		const embed = new Discord.RichEmbed()
								.setColor(color)
								.setTitle('[Bot Command]')
								.setDescription('Prefix mặc định là ' + prefix)
								.setFooter("Dev by Moonz#0001")
								.setTimestamp();

		message.channel.send(embed).then(message => {
			message.delete(10000);
		});

	}

	// Ban Command
	if(command === "ban") {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
			return message.channel.send(cancelexecute);

		const member = message.mentions.members.first();

		const embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle('[Ban Command]')
				.setDescription(`Đã ban **${id.id}** ra khỏi server.`)
                .setFooter(footer)
                .setTimestamp();

		 message.author.send(`> ID: ${id.id}\nID Này dùng để unban.`);

         if(member){
           member.ban().then((member) => {
               message.channel.send(embed);
           }).catch(() => {
               message.channel.send(cancelexecute).then(msg => {
					message.delete(10000); // 10 seconds
				});
           });
         } else {
           message.channel.send(usernotfound2).then(msg => {
					message.delete(10000); // 10 seconds
			});
         }
	}

	// Kick command
	if(command === "kick") {
		if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
            return message.channel.send(cancelexecute);

        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

			const embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('[Kick Command]')
					.setDescription(`Đã kick **${user.tag}** ra khỏi server.`)
                    .setFooter(footer)
                    .setTimestamp();

            if(member){
                member.kick('You got kicked!').then(() =>{
                    message.channel.send(embed);
                }).catch(err =>{
                    message.channel.send(cannotkick).then(msg => {
						message.delete(10000); // 10 seconds
					});
                });
            } else {
                message.channel.send(usernotfound).then(msg => {
					message.delete(10000); // 10 seconds
				});
            }
        } else {
            message.channel.send(notaguser).then(msg => {
					message.delete(10000); // 10 seconds
			});
        }
	}

	// Test
	if(command ===  "test") {
			const member = message.mentions.members.first();
		if(member) {
			message.channel.send("User: " + member + `ID: ${member.id}`)
		}
		message.reply("Your stuff").then(sent => { // 'sent' is that message you just sent
		  let id = sent.id;
		  console.log(id);
		});
	}

	// Help command
    if(command === "help") {

        const embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('[Help Command]')
                    .addField("*[Help Command]*", prefix + 'help', false)
                    //.addField("*[Minecraft Status Command]*", prefix + 'queue', false)
                    //.addField("*[Update Command]*", prefix + 'update', false)
                    .setFooter(footer)
                    .setTimestamp();

        message.channel.send(embed).then(message => {
            message.delete(10000);
        });

    }

	// Check if channel
	let catChannel = client.channels.get("782617703445692437");
	let botChannel = client.channels.get("756030382595637258");
	let botOnCustom = client.channels.get("756487071148933143");

	// On cats command
	if(!catChannel || !botChannel || !botOnCustom) return;
		if(message.content.startsWith("cats")) {
			setTimeout(function(){
				message.delete();
			}, 60000);
		}

		if(!catChannel || !botChannel || !botOnCustom) return;
			if(message.content.startsWith(",s")) {
				setTimeout(function(){
					message.delete();
				}, 60000);
			}
});



// Catch error on console
client.on("error", (e) => console.error(e));

// Login with token
client.login(config.token);
