let handler = async function (m, { conn }) {
  conn.sendContact(m.chat, '94771323434', 'ZED')
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler
