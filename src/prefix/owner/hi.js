const { Client, Message, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'hi',
    aliases: [],
    usage: '',
    description: 'Ping the bot',
    voiceChannel: false,
    nsfw: false,
    disabled: false,
    ownerOnly: false,
    guildOwnerOnly: false,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Array<String>} args
    */
    run: async (client, message, args) => {
       await message.channel.send('Hello');
    }
}