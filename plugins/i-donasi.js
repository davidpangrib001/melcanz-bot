let handler = async (m) => {
    m.reply(`
┌「 *Donate* 」
├ MOBITEL: +94711117547
├ DIALOG : +94771323434
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
