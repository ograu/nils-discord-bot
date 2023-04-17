const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()
const respostes = require('./respostes')

console.log(respostes)

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


const TOKEN = process.env['TOKEN']
// const CLIENT_ID = process.env['CLIENT_ID']

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord after ready is emitted
client.on('ready', () => {
  // console.log('I am ready!' + JSON.stringify(client));
  console.log(`Logged in as ${client.user.tag}!`);
});


// Respostes
client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return

  // console.log({ content: msg })

  if (msg.content === "ping") {
    msg.reply("pong")
    return
  }

  if (msg.content === "mamawuebo") {
    msg.reply("ijue pu...")
    return
  }

  if (msg.content === "marco") {
    msg.reply("polo")
    return
  }

  if (respostes.isHolaBot(msg)) {
    msg.reply(`Hola ${msg.author.username}!`)
    return
  }

  if (respostes.isXD(msg)) {
    msg.reply(`LOL!!! 🤣🤣🤣`)
    return
  }

  if (respostes.isQue(msg)) {
    msg.reply(`SO 🧀`)
    return
  }

  if (respostes.isRa(msg)) {
    msg.reply(`llado tu culo 🍑 empanado`)
    return
  }

  // msg.reply('Qué disee!')
});


// Commands
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'troll') {
    await interaction.reply('Sé donde vives!');
  }
});

// Log our bot in
client.login(TOKEN);