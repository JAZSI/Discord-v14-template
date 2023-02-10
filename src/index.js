const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('../config.json');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

client.prefix = new Collection();
client.aliases = new Collection();
client.commands = new Collection();
client.button = new Collection();
client.select = new Collection();
client.modal = new Collection();
client.config = config;

require('./handlers')(client);

client.login(process.env.DISCORD_TOKEN);