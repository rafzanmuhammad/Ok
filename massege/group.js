const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins} = require("../lib/myfunc");
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
let thumbdoc = fs.readFileSync('./media/thumbnaildokumen.jpg')
//require("../settings.js")

let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})

module.exports = async(aqua, anu) => {
try{
	
let type1 = false
let type2 = false
let type3 = true

let metadata = await aqua.groupMetadata(anu.id)
const from = anu.id
const memb = metadata.participants.length
const botNumber = aqua.user.id 
const groupMet = await aqua.groupMetadata(from)
const groupName = metadata.subject  
const desc = metadata.desc
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
//const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await aqua.getName(mem)
const copyright = `${week} ${calender}`
const Add = anu.action == 'add'
const Remove = anu.action == 'remove'
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 


const intro = `Halo @${memNumber}
Selamat Datang Di ${groupName} 

*_JANGAN LUPA INTRO_*
» Nama: 
» Umur:
» Askot:
Semoga Betah Kak ><`;

const outro = `Selamat Tinggal @${memNumber}

Sisa Peserta Grub ${memb}
`

try {
if(mem.includes(botNumber)) { return }
var pp_user = await aqua.profilePictureUrl(mem, 'image')
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
};    
try {
var pp_grup = await aqua.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)

let gmbr = await getBuffer(`https://mogabisab.herokuapp.com/api/canvas/welcome?nama=${pushname}&namaGb=${groupName}&pepeGb=${ppGc}&totalMem=${allmem}&pepeUser=${ppUser}&bege=${bg}&apikey=BetaBotz`)

let options1 =
{ mentionedJid: [mem],
externalAdReply: {
title: `         ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
description: 'Now Playing...',
mediaType: 2,
thumbnail: ppUser,
mediaUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM',
sourceUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM'
}
}
                  
//Button In    
let butIn = [{ buttonId: `intro`, buttonText: { displayText: "Omke" }, type: 1 }];         
 
//Button out
let butOut= [{ buttonId: `y`, buttonText: { displayText: "Good Bye" },type: 1 }];   

 
 
const WelcomeType1 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{
const canvacord = require("canvacord");
 
if (Add) {
var image3 = await new canvacord.Welcomer()
        .setUsername(pushname)
        .setDiscriminator(memb)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setAvatar(gam1)
        .setBackground(bg)  
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `+ 1 member!`)
        .setText("title", "welcome")
        .setText("message", `welcome in ${groupName}`)
} else if (Remove) {
var image3 = await new canvacord.Leaver()
        .setUsername(pushname)
        .setDiscriminator(memb)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setBackground(bg)  
        .setAvatar(gam1)
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `- 1 member!`)
        .setText("title", "good bye")
        .setText("message", `we will miss you friends`)
}

let foto = await getRandom(".png")
image3.build()
    .then(async data => {
       await canvacord.write(data,foto);
          let gambar = await fs.readFileSync(foto)

let buttonMessage = {
    contextInfo:options,
    image:gambar,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}
await aqua.sendMessage(from, buttonMessage)
await fs.unlinkSync(foto)
});
  
} catch(err){
console.log(err)
let autoButton = Remove? butOut : butIn
await aqua.sendButImage(id, text1, desc1, gam1, autoButton, options)
}
}


const WelcomeType2 = async(id, text1, desc1, gam1, but = [], options = {}) => {	
try{        
let buttonMessage = {
    contextInfo:options,
    image: gam1,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}
await aqua.sendMessage(from, buttonMessage)
        
} catch(err){
console.log(err)
let autoButton = Remove? butOut : butIn
await aqua.sendButImage(id, text1, desc1, gam1, autoButton, options)
}
}

//sendButDoc
const sendButDoc = async(id, text1, desc1, gam1, but = [], options, options1 = {}) => {	
try{
const asuu =['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const mimitny = asuu[Math.floor(Math.random() * asuu.length)]                    
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/file.docx'),
mimetype: mimitny, 
title : "Footer text", 
fileLength : 999999999, 
pageCount: 1, 
fileName : "𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽", 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

return await aqua.sendMessage(id, buttonMessage,options1)
} catch(err){
console.log(err)
let autoButton = Remove? butOut : butIn
await aqua.sendButDoc(id, text1, desc1, gam1, autoButton, options)
}
} 


   
//Group Update Console
if (Remove && OneMem){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}


//Welcome ny
if(Add && OneMem && NotMe){ 
if(type1){
WelcomeType1(from, intro, copyright, ppUser, ppGc, butIn,{ "mentionedJid": [mem]})
} else if(type2){
WelcomeType2(from, intro, copyright, ppUser, ppGc, butIn,{ "mentionedJid": [mem]})
} else if(type3){
sendButDoc(from, intro, `Rules:
${desc}`, ppUser, butIn, options1)
}

} else if(Remove && NotMe){      
if(type1){
WelcomeType1(from, outro,  `Hm Kok Keluar ^_^`, ppUser, ppGc, butOut,{ "mentionedJid": [mem]})
} else if(type2){
WelcomeType2(from, outro,  `Hm Kok Keluar ^_^`, ppUser, ppGc, butOut,{ "mentionedJid": [mem]})
} else if(type3){
sendButDoc(from, outro, `Hm Kok Keluar ^_^`, ppUser, butOut, options1)
}
}



 
} catch (err) {
console.log(color('GROUP : %s', 'white'), color(err, 'green'))
}   
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
