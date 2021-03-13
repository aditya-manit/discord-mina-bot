require("dotenv").config();

const { Client } = require('discord.js');




const client = new Client();

const PREFIX = "!";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME.toLowerCase() === 'mina') {
      message.channel.send('**Mina is the world\'s lightest blockchain, powered by participants.**\n' +
          'By design, the entire Mina blockchain is and will always be about 22kb - the size of a couple of tweets. So anyone with a smartphone will be able to sync and verify the network in seconds.')
    }
    else if (CMD_NAME.toLowerCase() === 'sale') {
      message.channel.send('There is no annoucement of sale at the moment, keep an eye on announcement channel.\n' +
          'Meanwhile you can read the tokenomics here: https://minaprotocol.com/blog/mina-token-distribution-and-supply ')
    }
    else if (CMD_NAME.toLowerCase() === 'earn') {
      message.channel.send('There is an ongoing community challenge. Top 25 will earn 20k Mina Tokens each, To take part refer:\n' +
          'https://forums.minaprotocol.com/t/mina-community-leaderboard-challenges/1449')
    }
    else if (CMD_NAME.toLowerCase() === 'learn') {
      message.channel.send('This is a great source to start with:\n' +
          'https://minaprotocol.com/get-started#knowledge-base')
    }
    else if (CMD_NAME.toLowerCase() === 'help') {
      message.channel.send('Possible Commands: \n' +
          '```!mina\n' +
          '!sale\n' +
          '!earn\n' +
          '!learn\n```')
    }
    else {
      message.channel.send('Sorry ! But I don\'t know, what to say !')
    }
  }
});


client.login(process.env.DISCORDJS_BOT_TOKEN);
