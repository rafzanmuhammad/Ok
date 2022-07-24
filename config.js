/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

//Apikey lolhuman
global.apikey = '280805'


// Other

global.owner = ['628388024064']

global.pemilik = ['628388024064']

global.premium = ['6289616316534','628388024064', '6285794545046', '6285263200437',' 6283832831300', '6281414145513', '6282281779177', '6287851970594', '6281213673925', '62881025087439', '6285330274500','6281227326587']

global.creator = ['628388024064', '6288292024190', '6283127014833']


global.pengguna = 'TakimTzy'
global.botnma = 'Aqua Bot - Md'

global.grub1 = 'https://chat.whatsapp.com/DaBXFf82aqwHc03v22E09D'  //GRUB LU
global.grub2 = '-'  //GRUB LU

global.melcanz = 'melcantik'

global.footer = '© Bot WhatsApp⁰⁵⠀ ོ' //FooterText Biar Di Bawah Nya Ada Text 

global.web = 'https://wa.me/628388024064?text=Bang+mo+sewa+bot' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/takimtod' //Ubah Jga Bebas Sama lu 
global.ganti = 'WhatsApp' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Github'

global.accestken = 'Takimtod'
global.ownernma = 'TakimTzy'
global.packname = '\n            Created By'
global.author = 'Aqua Bot - Md\ntakimtod\nBot Wa Auto Sticker'

global.sessionName = 'takim'

global.prefa = ['','!','.','🐦','🐤','🗿','#','/']
global.sp = '⭔' 
global.apibg = 'qhWucnuLruQzVASYoFxwkzGn'
global.qoted = 'fkontak'
global.setmenu = 'list'
global.setreply = 'web'

global.mess = {
    success: '✓ S u c c e s s',
    admin: 'Fitur Khusus Admin Group!',
    prem: 'Fitur Khusus User Premium, Silahkan Ketik .buyprem Untuk Beli',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!❌',
    owner: 'Fitur Khusus Owner Bot❌',
    group: 'Fitur Digunakan Hanya Untuk Group!❌',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!❌',
    bot: 'Fitur Khusus Pengguna Nomor Bot❌',
    wait: 'Sedang Di Proses . . .',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap 2x Dalam 24 Jam',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./media/thumb.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
