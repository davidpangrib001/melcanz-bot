let handler  = async (m, { conn, args }) => {
   m.reply(`Bot Script : wa.me/94771323434`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
