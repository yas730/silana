/**
   * Created By yaser.
   * Contact Me on wa.me/966502948769
   * Follow https://github.com/Lord-official
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '«𝒍𝒐𝒓𝒅.𝒐𝒇𝒄»🇮'
global.ucpn = ''

//================= Url =================//

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'Lord-official'
// Other
global.watermark = '«BOT»🇮🇳'
global.owner = ['966502948769']
global.premium = ['966502948769']
global.packname = 'BOT'
global.author = 'BOT'
global.sessionName = 'lord'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
