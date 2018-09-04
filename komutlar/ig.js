const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**ISTIKLAL GAMING**")
        .setImage("https://hizliresim.com/vPGa3v")
        .setThumbnail("https://hizliresim.com/vPGa3v")
        .setColor(0x00AE86)
        .addField("Yönetici", "Serkan Tuna", true)
        .addField("Özellikler", `
        *Türkiye'de neredeyse sadece biz kendi kodlarımızı yazıyoruz
   *En aktif yönetim ekibine sahibiz
   `, true)
   .addField("Serkan Tuna", `Genç Yazılımcımız (Kurucu)`, true)
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
  description: 'Istiklal Gaming hakkında bilgi verir',
  usage: 'ig'
};
