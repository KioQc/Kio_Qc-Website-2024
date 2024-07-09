const Discord = require('discord.js');
const client = new Discord.Client();

client.login('MTI1NjcwNjU3ODUxMDI1MDAyNQ.G-fUz9.rFp7M742Hmhoo9O9DstZ9e5EkASv-1wg5ULuyk');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const user = newPresence.user;
  const status = newPresence.status;
  const activities = newPresence.activities;

  // Affichez ces informations sur votre site web
  // Utilisez une technologie comme Socket.io pour envoyer ces données à votre front-end
});


