let handler = async (m, { text }) => {
  let user = db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
Anda sekarang AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
