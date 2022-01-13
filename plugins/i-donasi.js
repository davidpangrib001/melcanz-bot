let handler = async (m) => {
    m.reply(`
┌「 *donasi* 」
├ Dana : +6283147787992
├ GoPay: +6283147787992
├ Pulsa: +6283147787992
├ OVO  : +6283147787992
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
