import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[Wa-MD-v1]───╮
│*BOT IS ALIVE NOW*`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
