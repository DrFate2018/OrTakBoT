exports.run = (client, message) => {
    if (message.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription('Özel mesajlarını kontrol et. :postbox:');
      message.channel.send(ozelmesajkontrol) }
      const pingozel = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription('Bot sürümü: v' + ayarlar.surum + ' Yapımcı: Barış Demirci');
      return message.author.send(pingozel)
  };