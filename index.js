const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

if (!process.env.TOKEN) throw new Error("Missing TOKEN environment variable");
if (!process.env.CLIENT_ID) throw new Error("Missing CLIENT_ID environment variable");

/** ---------- Discord ---------- **/
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

client.commands = new Collection();

if (!process.env.GUILD_ID) {
    // Deploy the commands globally 
    deployCommands("./commands", process.env.TOKEN, process.env.CLIENT_ID); 
} else {
    // Deploy the commands in a guild
    deployCommands("./commands", process.env.TOKEN, process.env.CLIENT_ID, process.env.GUILD_ID); 
}

// Slash Command Handler
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'run' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required 'data' or 'run' property.`);
	}
}

// Event Handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, event.run.bind(null, client));
	} else {
		client.on(event.name, event.run.bind(null, client));
	}
}

// Discord bot log in
client.login(process.env.TOKEN);

// Deploy Slash Commands
function deployCommands(cmdPath, token, clientId, guildId) {
    const commands = [];
    const commandFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(process.cwd(), cmdPath, file));
        commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: '10' }).setToken(token);

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            if (guildId) {
                const data = await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: commands },
                );
                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            } else {
                const data = await rest.put(
                    Routes.applicationCommands(clientId),
                    { body: commands },
                );
                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
                
            }
        } catch (error) {
            console.error(error);
        }
    })();
}