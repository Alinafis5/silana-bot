let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
https://whatsapp.com/channel/0029VaX4b6J7DA
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
