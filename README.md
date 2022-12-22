# Discord Bot Template

## Prerequisites

Before you can run this bot, you will need the following:

- A Discord account and server: If you don't already have a Discord account, you can create one for free at https://discord.com. To use the bot on your server, you will need to have owner or admin permissions.

- [Node.js](https://nodejs.org/) and npm: Node.js is a JavaScript runtime that allows you to run JavaScript on your computer. npm (short for Node Package Manager) is a tool that comes with Node.js and allows you to install and manage packages (libraries and tools) that you can use in your projects. You can download and install Node.js and npm from https://nodejs.org/.

- [Git](https://git-scm.com/): Git is a version control system that allows you to track changes to your code and collaborate with others. You can download and install Git from https://git-scm.com/.

- A text editor: A text editor is a program that allows you to write and edit code. Some popular text editors include [Visual Studio Code](https://code.visualstudio.com/)
, Sublime Text, and [Atom](https://atom.io/). You can choose any text editor that you prefer.

- A Discord bot token: A bot token is a unique code that identifies your bot and allows it to connect to the Discord API. You can get a bot token by creating a new bot at https://discord.com/developers/applications. Click on the "New Application" button and follow the prompts to create a new bot. Once you have created the bot, click on the "Copy" button next to the "Token" field to copy the token to your clipboard. Keep this token safe and do not share it with anyone.

## Installing
To install the dependencies for this project, navigate to the project directory in your terminal and run the following command:
```
npm install
```
This will install all the necessary dependencies for the project.

## Running the Bot
To run the bot, you'll need to provide your Discord bot token, client ID, and guild ID as environment variables. You can do this by creating a file named `.env` in the project directory and adding the following lines:
```
TOKEN="YOUR_DISCORD_BOT_TOKEN"
CLIENT_ID="YOUR_DISCORD_BOT_CLIENT_ID"
GUILD_ID="YOUR_DISCORD_GUILD_ID"
```
Replace `YOUR_DISCORD_BOT_TOKEN` with the actual bot token that you copied from the Discord developer portal

Replace `YOUR_DISCORD_BOT_CLIENT_ID` with the id of the bot

Replace `YOUR_DISCORD_GUILD_ID` with the guild id that you want to deploy the commands at or leave it empty to deploy the commands in every guild the bot is in

Once you've set the environment variables, you can start the bot by running the following command in the terminal:
```
node index.js
```
This will start the bot and make it available to use in your Discord server.

## Customizing the Bot
You can customize the bot by modifying the commands and events in the `commands` and `events` directories.

## Credits
This project was created by Jaszi.

## License
This project is licensed under the MIT License.