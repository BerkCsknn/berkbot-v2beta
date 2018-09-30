client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.channel.send('Aleyküm Selam, Hoşgeldin ❤'); 
		} else {
		msg.channel.send('Aleyküm Selam, Hoşgeldin ❤');
		}
	}
});
P
