const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**ISTIKLAL GAMING**")
        .setImage("https://cdn.discordapp.com/icons/462629397644443668/02f06aa5ae63941fd9dfaf66fc16ec69.jpg")
        .setThumbnail("https://cdn.discordapp.com/icons/462629397644443668/02f06aa5ae63941fd9dfaf66fc16ec69.jpg")
        .setColor(0x00AE86)
        .addField("Yönetici", "Serkan TUNA", true)
        .addField("Özellikler", `
        *Türkiye'de neredeyse sadece biz kendi kodlarımızı yazıyoruz
   *En aktif yönetim ekibine sahibiz
   `, true)
   .addField("Serkan TUNA", `Genç Yazılımcımız (Kurucu)`, true)
   .addField("ISTIKLAL GAMING", "Gelmeyi Unutma")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'ig', 
  description: 'Istiklal Gaming hakkında bilgi verir./KATILMAYI UNUTMA',
  usage: 'ig'
};
