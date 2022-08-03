/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, mentionedJid, ChatModification } = require('@adiwajshing/baileys')
const fs = require('fs')
const ra = require("ra-api");
const util = require('util')
const hx = require("hxz-api")
const dbot = require('dbot-api');
const xfar = require('xfarr-api');
const hxz = require("hxz-api")
const toMs = require('ms')
const yts = require("yt-search");
const fetch = require('node-fetch')
const ytdl = require('ytdl-core');
const imageToBase64 = require('image-to-base64');
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fse = require('fs-extra');
const os = require('os')
const calip = require('caliph-api')
const { removeBackgroundFromImageFile } = require('remove.bg')
const cheerio = require('cheerio')
const matematik = require('mathjs')
const request = require('request');
const jimp = require("jimp");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const Download = require("@phaticusthiccy/open-apis");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const ameClient = require("amethyste-api")
const { BitlyClient } = require('bitly');
const gcbt = ["120363041984430206@g.us"] //ID GC GRUB BOT "120363041984430206@g.us"  
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
const { youtubeSearch, mediafiredl,  lyricsv2,  lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2,  googleImage,  jadwalTVNow,  gempa,  stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusna, asmaulhusnajson, alquran, jadwalsholat, listJadwalSholat, gempaNow, instagramdl } = require('@bochilteam/scraper')
const stringSimilarity = require("string-similarity");

//=======================[ LIB ]=======================//
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { ghstalk,facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('./lib/scraper2') 
const photooxy = require('./lib/photoxy')
const textpro = require('./lib/textpro')
const cerpen = require('./lib/cerpen.js')
const { pinterest } = require("./lib/pinterest")
const {color } = require('./lib/color')
const translate = require('./lib/translate')
const {TelegraPh} = require('./lib/uploader')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const { h2k, FileSize, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, pickRandom, short } = require('./lib/myfunc')
const { Nothing, Succes } = require("./lib/totalcmd");
const { virtex } = require('./lib/virtex.js')
const { recognize } = require('./lib/ocr')


//=======================[ SETTINGS ]=======================//
Qoted = `${global.qoted}`
modelmenu = `${global.setmenu}`
replyType = `${global.setreply}`
let thumbnya = fs.readFileSync('./media/thumb.jpeg')
let thumbdoc = fs.readFileSync('./media/thumbnaildokumen.jpg')
let fakee = fs.readFileSync('./media/fake.jpeg')
betaapi = "BetaBotz"

//=======================[ DATABASE ]=======================//
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const autoreadd = JSON.parse(fs.readFileSync('./database/autoread.json'))
const autoketikk= JSON.parse(fs.readFileSync('./database/autoketik.json'))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
const ban = JSON.parse(fs.readFileSync('./database/ban.json'))
const audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const totaluser = `${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}`

/*
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const allcommand = JSON.parse(fs.readFileSync('./database/allcommand.json'));
*/

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
 

module.exports = aqua = async (aqua, m, chatUpdate, store, baterai) => {
try {
let { menu, menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10, menu11, menu12, menu13 , menu14, menu15, menu16, menu17, menu18, menu19, menu20, menu21, menu22, menu23, menu24, menu25, menu26, menu27, menu28 } = require('./massege/help')

var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
//const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''

var budy = (typeof m.text == 'string' ? m.text : '')
//const budy = (m.type === 'conversation') ? m.message.conversation : (m.type === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''

//var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var prefix = /^[#+,.=''!¦|/\\©^]/.test(body) ? body.match(/^[#+,.=''!¦|/\\©^]/gi) : '.'

const { isBaileys } = m
const sender = m.sender
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const lah = m.chat
const ads = lah
const getCase = (cases) => { return `'${cases}'`+fs.readFileSync("./kimmy.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"}
const botNumber = await aqua.decodeJid(aqua.user.id)
const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender)
const itsMe = sender == botNumber ? true : false
const pes = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim()
const text = q = args.join(" ")        
const from = m.chat
const grop = from.endsWith('@g.us')
const isGroup = m.isGroup
const isUser = user.includes(sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const mentionByReply = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const mentionByTag = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false


	
//=======================[ GROUPS ]=======================//        
// const groupMetadata = isGroup ? await aqua.groupMetadata(m.chat).catch(e => {}) : ''
const groupMetadata = isGroup ? await aqua.groupMetadata(from) : ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isPremium = isOwner || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender) || false

const isAntiLink = isGroup ? antilink.includes(m.chat) : false 
const isAntiVirtex = isGroup ? antivirtex.includes(m.chat) : false      
const isAntiWaMe = isGroup ? antiwame.includes(m.chat) : false      

const isStop = isGroup ? gcbt.includes(from) : false
const isAutoRead = botNumber ? autoreadd.includes(botNumber) : false 
const isAutoKetik = botNumber ? autoketikk.includes(botNumber) : false 


//=======================[ WAKTU ]=======================//
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

//Ucapan Waktu
if(wita < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(wita < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(wita < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(wita < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(wita < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(wita < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
  
      
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    
    
//=======================[ QUOTE ]=======================//
const content = JSON.stringify(m.message)
const isImage = (m.mtype == 'imageMessage')
const isVideo = (m.mtype == 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
const isviewOnce = isQuotedTeks ? content.includes('viewOnceMessage') ? true : false : false


//=======================[ TYPE DOKUMEN ]=======================// 
const pptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
const xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
const zip = "application/zip"
const pdf = "application/pdf"
const docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"


//=======================[ FAKE QUOTED ]=======================//
const ftroli = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {})},
message: {
orderMessage: {
itemCount : 2022, 
status: 1,
surface : 2,
message: ` Hii ${pushname}\n𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝑡𝑎𝑘𝑖𝑚-𝑡𝑜𝑑`,
orderTitle: `Hi kak`,
thumbnail: thumbnya,
sellerJid: `0@s.whatsapp.net`
}
}
}


const fkontak = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {}) }, 
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': thumbnya}}}


const fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, 
"remoteJid": "6282363250061-1627622544@g.us"},
"message": {
"groupInviteMessage": {
"groupJid": "120363041984430206@g.us",
"inviteCode": "https://chat.whatsapp.com/DaBXFf82aqwHc03v22E09D",
"groupName": "P", 
"caption": `${ucapanWaktu}`, 
'jpegThumbnail': thumbnya}}}

const fbc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, 
"remoteJid": "status@broadcast" },
message: {
"liveLocationMessage": {
"title":`${global.botnma}`}
}
}

const ftoko = { 
key: {fromMe: false,
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {})},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fakee},
"title": `${pushname}`,
"description": `${ucapanWaktu} kak`,
"currencyCode": "IDR", 
"priceAmount1000": `Tes`, 
"retailerId": `Rp10`,
"productImageCount": 1},
"businessOwnerJid": `0@s.whatsapp.net`}}}

const ftext = { 
key: {fromMe: false,
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {})},
message: { 
"extendedTextMessage": {
"text": `${global.botnma}`,
"title": `Hmm`,
'jpegThumbnail': fakee
}
}
}

const fsticker = { 
key: {fromMe: false,
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {})},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc",
"fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=",
"fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=",
"mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73",
"fileLength": "7186",
"mediaKeyTimestamp": "1622815545",
"isAnimated": false
}
}
}

const fvn = { 
key: {fromMe: false,
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {})},
message: {
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999",
"ptt": "true"
}
}
}

const fbug = () => { 
return { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumbnya
            } 
        } 
    }
    }
    
const floc = { 
    key: {
"fromMe": false,
"participant": `0@s.whatsapp.net`},
message: {
"liveLocationMessage": {
"title":`${global.botnma}`
}
}
}

//bug kontak
const lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6287721317870:+62 877-2131-7870\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}


const fvideo = { 
key: {fromMe: false,
participant: `62895619083555@s.whatsapp.net`,
...(m.chat ? {} : {}) },
message: { 
"videoMessage": {
"title":"hallo bang",
"h": `Hmm`,
'seconds': '-99999',
'caption': `${global.botnma}`,
'jpegThumbnail': fakee
}
}
}

const fgif = { 
key: {
fromMe: false,
participant: `6285842369183@s.whatsapp.net`,
 ...(m.chat ? {} : {}) },
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '99999', 
'gifPlayback': 'true', 
'caption': `${global.botnma}`,
'jpegThumbnail': fakee
}
}
} 

const fimage = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(m.chat ? {} : {})}, 
message: {
"imageMessage": { 
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
"mimetype": "image/jpeg", 
"caption": `${global.botnma}`, 
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080, 
"width": 1079, 
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", 
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", 
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fakee,
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
 }
}
}


//=======================[ SET REPLY ]=======================//
const reply = async(teks) => { 
try {
    ppuser = await aqua.profilePictureUrl(sender, 'image')
} catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppumser = await getBuffer(ppuser)
if(replyType === "web"){
aqua.sendMessage(from, { text: teks, contextInfo: { externalAdReply: { title: `${pushname}`, body: `${ucapanWaktu}`, previewType:"PHOTO", thumbnail: ppumser, mediaUrl: `${global.grub1}`}}}, {quoted:m})
//aqua.sendMessageV2(from, { text: teks, contextInfo: { externalAdReply:{ title: `${pushname}`,body: `${ucapanWaktu}, previewType:"PHOTO",thumbnail: thumbnya, sourceUrl:`https://youtube.com/watch?v=TOmXzkWuCWk`}}},{quoted: })

//aqua.sendMessage(m.chat, { text: teks, contextInfo:{ "externalAdReply": { "title": `Hallo ${pushname} ${ucapanWaktu}`, "body": `Jangan Lupa Sewa Bot :v`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppumser,  "sourceUrl": `${global.web}`}}}, { quoted: m})
} else if(replyType === "web2"){
aqua.sendMessage(from, { contextInfo: { externalAdReply:{showAdAttribution: true, title: `Hallo ${pushname} ${ucapanWaktu}`,body:`Jangan Lupa Sewa Bot :v `,previewType:"PHOTO",thumbnail: ppumser, sourceUrl:`${global.grub1}`}},showAdAttribution: true, text: teks }, { 
quoted: m })
} else if(replyType === "mess"){
aqua.sendMessage(from, {text: teks}, { quoted: m });
} else if(replyType === "quoted"){
aqua.sendMessage(from,{ text: teks}, { quoted: setQuoted });
} else if(replyType === "troli"){
let template = generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': ppumser,
'itemCount': "2022",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': `${global.botnma}`,
'sellerJid': `62887435047326@s.whatsapp.net`,
'token': 'notoken',
}
}, { 'quoted': m });
await aqua.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
aqua.sendMessage(from, {text: "Error Reply Tidak Di Temukan"})
}
}


//=======================[ SET QUOTED ]=======================//
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "fsticker"){
var setQuoted = fsticker
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "floc"){
var setQuoted = floc
}else if(Qoted === "fvideo"){
var setQuoted = fvideo
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "m"){
var setQuoted = m
}


//=======================[ CONST CONST ]=======================//
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  aqua.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }}):  aqua.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}
const sendGif = (teks, teksnya) => {
aqua.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: m})
};        
const reactionMessage = { react: { text: args[0], key: { remoteJid: m.chat, fromMe: true, id: quoted.id }}
}              
const textTemplateButtons = (from, text, footer, buttons) => {
return aqua.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}

let options1 =
{ mentionedJid: [sender],
externalAdReply: {
title: `                    ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
description: 'Now Playing...',
mediaType: 2,
thumbnail: thumbdoc, 
mediaUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM',
sourceUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM'
}
}
     
//Seend StickerUrl
const sendStickerUrl = async(to, url) => {
console.log(chalk.black(chalk.bgWhite('[ Otw Build ]')))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
aqua.sendMessage(to, {sticker:media}, m)
console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
fs.unlinkSync(names)
    fs.unlinkSync(namea)
});
});
});
}

//sendFileUrl
const sendFileFromUrl = async (from, url, caption, m, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return aqua.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return aqua.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			} else if (mime.split("/")[0] === "video") {
				return aqua.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			} else if (mime.split("/")[0] === "audio") {
				return aqua.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			} else {
				return aqua.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			}
		}


try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[sender]
            if (typeof user !== 'object') global.db.users[sender] = {}
            if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('wame' in chats)) chats.wame = false
} else global.db.chats[m.chat] = {
mute: false,
wame: false,
}
let setting = global.db.settings[botNumber]
        if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('autoread' in setting)) setting.autoread = false
		if (!('autoketik' in setting)) setting.autoketik = false
		if (!('autorecord' in setting)) setting.autoketik = false
		if (!('autoonline' in setting)) setting.autoonline = true
		if (!('autooffline' in setting)) setting.autooffline = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		autobio: false,
		autoread: false,
		autoketik: false,
		autorecord: false,
		autoonline: true,
		autooffline: false,
	    }
        } catch (err) {
        console.error(err)
        }
	

//Auto Ketik
if (isAutoKetik) {
aqua.sendPresenceUpdate('composing', m.chat)
}
	
//Auto Read
if(isAutoRead){
aqua.readMessages([m.key])
}
   
// Public & Self
if (!aqua.public) {
if (!isOwner) return
}

     
// Auto Regist
if (isCmd && !isUser) {
user.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }

//consol log        
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))


// Detect User Banned
if (ban[sender] && isCmd ) {
return
}

//ban user
if (sender.startsWith('212')) {
return
}
if (sender.startsWith('6282238671268')) {
return
} 
 

const toFirstCase = (str) =>{
 let first = str.split(" ")              // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1))                 // Ganti huruf besar kata-kata pertama
.join(" ");

return first
 }


//AUTO RESPON VN
for (let anju of audionye){
//if (budy === anju){
if(budy.includes(anju)){
let buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
aqua.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4', ptt:true }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${ucapanWaktu} ${pushname}`,"title": `Hmm`,'jpegThumbnail': thumbnya}}}})
}
}

//AUTO RESPON STICKER
for (let namastc of setiker){
//if (budy === namastc){
if(budy.includes(namastc)){
let buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
aqua.sendMessage(from, {sticker: buffer}, {quoted:m })
}
}

/*
	//Auto Reachh
 let regex =["ping","anj","kon","Anj","Kon","Lah","Oi","tod","F","menu","tes","Tes","bilek","Banh","cum","kntl","anjing","mmk","Bang","Wibu","Pantek","pepek","hentai"]
for (let i of regex){
if ( budy.includes(i)){ 
/////addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = ["😀","😃","😄","😆","😂","😙","😚","😍","🤗","🙂","😊","😌","🤭","😐","🤯","😧","😳","😒","😨","🤐","🌝","🤕","🤠","🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"]
const emk = emot[Math.floor(Math.random() * emot.length)]
aqua.sendMessage(from, { react: { text: emk, key: m.key } })	
}
}
*/
    
//AUTO UPDET BIO ( RUNTIME BIO )
if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await aqua.setStatus(`Jika Bot ini Off Silahkan Chat No ini 08388024064 untuk mengetahui No Bot Yang Baru `)
		setting.status = new Date() * 1
	    }
	}
	
	

//Antilink Nya
if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
if (!m.key.fromMe) {
if (!isBotAdmins) return reply (`Ehh bot gak admin T_T`)      
if (isOwner) return reply (`Ehh maaf gjdi kik krna owner bot ku`)
if (isAdmins) return reply ('admin mah bebas :v')
linkggc = await aqua.groupInviteCode(m.chat)
if (budy.includes(`${linkggc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick :v')          
let sianj = sender
setTimeout( () => {                    
					}, 1100) 
					setTimeout( () => {
					aqua.groupParticipantsUpdate(m.chat, [sianj], 'remove').catch((err) => reply(jsonformat(err)))   
					}, 500)
					setTimeout( () => {
					reply('*L I N K  G R U B  T E R D E T E K S I*\nWahh Nakal Sekaliii, Grup Ini Sudah Dipasang Antilink Grub!!, Byee....')
					}, 0)       
               }
	  }
	

//antivirtex
if (isAntiVirtex)
if (budy.includes('๒๒๒๒') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') ) {
if (!m.key.fromMe) {
if (!isBotAdmins) return reply (`Ehh bot gak admin T_T`)      
let sianj = sender
if (ban[sianj] && isCmd) return      
               await aqua.groupParticipantsUpdate(m.chat, [sianj], 'remove').catch((err) => reply(jsonformat(err)))              
               await aqua.groupSettingUpdate(m.chat, 'announcement').catch((err) => reply(jsonformat(err)))
               await aqua.sendText(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)         
               aqua.sendMessage(`628388024064@s.whatsapp.net`, {text: `*Bang Laporan, Ada yg ngirim virtex nih:* wa.me/${sender.split("@")[0]}` })
               }
	  }
	
if (isAntiWaMe) {
if (budy.match(`wa.me/`) || budy.match(`Wa.me/`) || budy.match(`Wa.Me/`)) {
if (!isBotAdmins) return reply (`Ehh bot gak admin T_T`)      
if (isAdmins) return reply(`Ehh maaf kamu admin`)
if (isOwner) return reply (`Ehh maaf gjdi kik krna owner bot ku`)
setTimeout( () => {                    
					}, 1100) 
					setTimeout( () => {
					aqua.groupParticipantsUpdate(m.chat, [sender], 'remove')
					}, 500)
					setTimeout( () => {
					reply('*「 ANTI LINK WA.ME 」*\n\nKamu terdeteksi mengirim link wa.me, maaf kamu akan di kick !')
					}, 0)         
                  }
              }
/*
setTimeout ( ()=> {
aqua.sendMessage(from, {audio: {url: 'https://a.uguu.se/aTwJoZEM.mp3', mimetype: 'audio/mp4', ptt:true }})
}, 3000000)
*/

	// Mute Chat
if (db.chats[m.chat].mute && !isAdmins && !isOwner) {
return
}      
            
// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	
// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
 })



   
   
// Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: aqua.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(sender, aqua.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (isGroup) messages.participant = sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        aqua.ev.emit('messages.upsert', msg)
        }
	    

//Const Game
if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            aqua.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete tebaklagu[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar ??\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete tebakgambar[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete tebakkata[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[sender.split('@')[0]]
	    deskripsi = caklontong_desk[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete caklontong[sender.split('@')[0]]
		delete caklontong_desk[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete tebakkalimat[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete tebaklirik[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await aqua.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, aqua.user.name, m)
delete tebaktebakan[sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await aqua.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await aqua.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    aqua.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    aqua.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) aqua.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) aqua.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) aqua.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    aqua.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) aqua.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) aqua.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    aqua.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[sender].afkTime > -1) {
            let user = global.db.users[sender]
            reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

      
//=======================[ BUTTONS ]=======================//  

let butn1 = [
               	{ urlButton: { displayText: `Group Me`, url : `${global.grub1}` } },
                   { quickReplyButton: { displayText: `Donasi`, id: 'donasi'} },
                   { quickReplyButton: { displayText: `Sewa Bot`, id: 'sewa'} }]

let komt = [           
                    { urlButton: { displayText: 'Group Bot', url: `${global.grub1}` }}, 
                    { quickReplyButton: { displayText: '💰 DONASI', id: `${prefix}donasi`}}, 
                    { quickReplyButton: { displayText: '🛒 SEWA BOT', id: `${prefix}sewabot`}}]
  
let hhhhh = [ 
                    { index: 1, urlButton: { displayText: `Grub Bot`, url: `https://www.whatsapp.com/otp/copy/${global.grub1}`}},  
                    { quickReplyButton: { displayText: '💰 DONASI', id: `${prefix}donasi`}}, 
                    { quickReplyButton: { displayText: '🛒 SEWA BOT', id: `${prefix}sewabot`}}]


/*
 x aqua.sendMessage(from, { text: `Kode verifikasi Anda adalah 577345`,
  templateButtons: [{ index: 1, urlButton: { displayText: `Salin kode`, url: 'https://www.whatsapp.com/otp/copy/577345'}}], footer: `FRM`
})                    
 */
 
let mok = [{"buttonId": `${prefix}infobot`,"buttonText": {"displayText": `🐥 INFO BOT`},"type": "RESPONSE"},
                   {"buttonId": `${prefix}sewabbot`,"buttonText": {"displayText": `🛒 SEWA BOT`},"type": "RESPONSE"}]
  
  let mokk = [{"buttonId": `${prefix}ok`,"buttonText": {"displayText": `OK`},"type": 1}]
  


let copyy = [{ index: 1, urlButton: { displayText: `Salin Link`, url: `${global.grub1}`}}]
  
  /*
if(isCmd) Succes(toFirstCase(command), dash, allcommand)
*/

switch(command) {
        	
//=======================[ CASE CASE ]=======================//       
case 'allmenuu':
anu = menu(global, m, prefix, pushname, isPremium)
aqua.sendButDoc(from, anu, `Ketika anda menemukan error silahkan ketik .report <kendala anda>, kami akan segera fix yang error tersebut, terimakasih telah menggunakan bot ini!!\nSupport by WhatsApp.com`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu1':
anu = menu1(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu2':
anu = menu2(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu3':
anu = menu3(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu4':
anu = menu4(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu5':
anu = menu5(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu6':
anu = menu6(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu7':
anu = menu7(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu8':
anu = menu8(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu9':
anu = menu9(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu10':
anu = menu10(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu11':
anu = menu11(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu12':
anu = menu12(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu13':
anu = menu13(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu14':
anu = menu14(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu15':
anu = menu15(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu16':
anu = menu16(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu17':
anu = menu17(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu18':
anu = menu18(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu19':
anu = menu19(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu20':
anu = menu20(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu21':
anu = menu21(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu22':
anu = menu22(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu23':
anu = menu23(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu24':
anu = menu24(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu25':
anu = menu25(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu26':
anu = menu26(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu27':
anu = menu27(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break
case 'menu28':
anu = menu28(prefix)
aqua.sendButDoc(from, anu, `${global.footer}`, thumbdoc, mokk, options1, {quoted:m})
break





case 'setreply':{
if(!isOwner) return reply (mess.owner)
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return reply ("Udah aktif")
replyType = "web"
reply (`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'web2'|| (args[0]) === 'situs' ){
if(replyType === "web2") return reply ("Udah aktif")
replyType = "web2"
reply (`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return reply ("Udah aktif")
replyType = "mess"
reply (`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return reply ("Udah aktif")
replyType = "troli"
reply (`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return reply ("Udah aktif")
replyType = "quoted"
reply (`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
reply(`*--------------[ Settings Reply ]--------------*
1. ${prefix + command} web
2. ${prefix + command} web2
3. ${prefix + command} mess
4. ${prefix + command} troli
5. ${prefix + command} quoted`)

 } else {
 reply ("Set Reply Tidak Di Temukan")
}
}
break


case 'getname':
if(isGroup) {
console.log(m.quoted.sender)
const sname = await aqua.getName(m.quoted.sender)
reply (sname)
} else if(!isGroup) {
const yahu = await aqua.getName(m.quoted.sender)
reply (yahu)
} else{
reply ("Reply targetnya")
}
break


case 'anime':
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
aqua.sendMessage(from,{ image: media,caption:'NIH' },{quoted:m})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break  


case 'kodepos':
try{
let nana = await kodepos(q)
console.log(nana)
let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of nana){
 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
reply (teks)
} catch (err){
reply ("Kodepos tidak di temukan")
console.log(err)
}
break  
  

case 'chat':   
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)    
if (args[0].startsWith('08')) return reply ('Awali nomor dengan 62')
	if (isMedia && !m.message.videoMessage || isQuotedImage) {
const bufff = await aqua.downloadAndSaveMediaMessage(quoted)
  var nomorr = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  var orgg = q.split("|")[1];
 aqua.sendMessage(nomorr, {caption: `*「 CHAT DARI 」*\n\nNama: @${sender.split('@')[0]}\n\nINGFO CHAT :\n${orgg}`, mentions:[sender], image: {url: bufff}})
  reply (`Sukses Cuy`)
  } else {
  var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  var org = q.split("|")[1];
aqua.sendText(nomor, `*「 CHAT DARI 」*\n\nNama : @${sender.split('@')[0]}\n\nINGFO CHAT :\n${org}`, floc, { contextInfo: { mentionedJid: [sender] }})
  reply (`Sukses Cuy`)
 }
 break

case 'getid': case 'pe':
if(!isOwner) return
aqua.sendText(`628388024064@s.whatsapp.net`, `${m.chat}`, m)
 break


case 'reportbug': case 'report':
if(!q) return reply (`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)     
if(!args[0]) return reply (`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)     
	if (isMedia && !m.message.videoMessage || isQuotedImage) {
const bufff = await aqua.downloadAndSaveMediaMessage(quoted)
 aqua.sendMessage(`628388024064@s.whatsapp.net`, {caption: `*「 REPORT ERORR DARI 」*\n\nNama: ${pushname}\nNomor: ${sender.split('@')[0]}\n\nINGFO CHAT :\n${q}`, mentions:[sender], image: {url: bufff}})
  reply (`Sukses Lapor Kepada Owner Silahkan Tunggu Dalam Waktu 24 Jam\n\nJika Main - Main Dengan Fitur Ini Maka Anda Mendapatkan Block Nomor Selama 2 Hari `)
  } else {
aqua.sendText(`628388024064@s.whatsapp.net`, `*「 REPORT ERORR DARI 」*\n\nNama: ${pushname}\nNomor: ${sender.split('@')[0]}\n\nINGFO CHAT :\n${q}\n\n ketik .balas <no user> untuk membalas laporan user`, floc, { contextInfo: { mentionedJid: [sender] }})
  reply (`Sukses Lapor Kepada Owner Silahkan Tunggu Dalam Waktu 24 Jam\n\nJika Main - Main Dengan Fitur Ini Maka Anda Mendapatkan Block Nomor Selama 2 Hari `)
 }
 break
 
 
case 'balas':  
if (!isOwner) return reply (mess.owner)
if (!q) return reply (`mau chat siapa?\nContoh: ${prefix + command} 628219442xxxx|oioioi`) 
if (args[0].startsWith('08')) return reply ('Awali nomor dengan 62')
	if (isMedia && !m.message.videoMessage || isQuotedImage) {
const bufff = await aqua.downloadAndSaveMediaMessage(quoted)
  var nomorr = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  var orgg = q.split("|")[1];
 aqua.sendMessage(nomorr, {caption: `*「 CHAT DARI OWNER BOT 」*\n\nNama: @${sender.split('@')[0]}\n\nINGFO CHAT :\n${orgg}`, mentions:[sender], image: {url: bufff}})
  } else {
  var nomor = args[0]
aqua.sendText(nomor + '@s.whatsapp.net', `Terima kasih telah mengajukan laporan erorr\n\nKami mengerti bahwa saat ini Anda tidak dapat menggunakan vitur tersebut dan kami sedang bekerja dengan giat untuk memperbaiki, Terima kasih untuk kesabaran Anda`, floc, { contextInfo: { mentionedJid: [sender] }})
 }
 break
 
case 'balasp':  
if (!isOwner) return reply (mess.owner)
if (!args[0]) return reply (`mau chat siapa?\nContoh: ${prefix + command} 628219442xxxx|oioioi`) 
if (args[0].startsWith('08')) return reply ('Awali nomor dengan 62')
	if (isMedia && !m.message.videoMessage || isQuotedImage) {
const bufff = await aqua.downloadAndSaveMediaMessage(quoted)
  var nomorr = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  var orgg = q.split("|")[1];
 aqua.sendMessage(nomorr, {caption: `*「 CHAT DARI OWNER BOT 」*\n\nNama: @${sender.split('@')[0]}\n\nINGFO CHAT :\n${orgg}`, mentions:[sender], image: {url: bufff}})
  } else {
  var nomor = args[0]
aqua.sendText(nomor + '@s.whatsapp.net', `Hallo User Premium, Syaa Nomor Aqua Bot Md, Silahkan ketik .menu untuk memulai bot.\nTerima kasih telah menggunakan bot ini`, floc, { contextInfo: { mentionedJid: [sender] }})
 }
 break
 




case 'jpeg': case 'jpg': case 'get':{
if (!args[0])  return reply ('link fotonya mana tuan')
aqua.sendMessage(from, {image: {url: args[0]},caption: `done kak`}, {quoted: m})
}
break


case 'infobot':{
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime();
let timestamp = speed()
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
let latensi = speed() - timestamp
//var total = math(`${groups.length} ${privat.length}`)
var wa_version = aqua.waVersion
let mok = [{"buttonId": `${prefix}ok`,"buttonText": {"displayText": `Omke`},"type": "RESPONSE"}]
let menunya = `──────[  𝗜 𝗡 𝗙 𝗢  𝗕 𝗢 𝗧 𝗭  ]──────

• Bot Nama : Aqua Bot - Md
• Owner : ${global.owner}
• Speed : ${latensi.toFixed(4)} _Second_
• Runtime : ${runtime(process.uptime())}
• Penggunaan Ram : ${ram2}
• Hostname : ${os.hostname()}
• Platform : ${os.platform()}
• Device Model: ${device_model}
• Device Manufactur : ${device_manufacturer}
• Wa Version: ${wa_version}
• Os Version: ${os_version}
• Tanggal : ${date}
• Hari : ${week} ${weton}
• Tanggal Islam : ${dateIslamic}

*Grub Bot*
• ${global.grub1}

• ${global.grub2}

*Thanks To*
• Dika Ardnt
• Ditazz
• Xyann & Irfan H
• Kahfz 
• Takimtod
• Para Creator Bot
• Para Penyedia Modul ` 
           
let options1 =
{ mentionedJid: [sender],
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: thumbnya,
mediaUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM',
sourceUrl: 'https://www.youtube.com/watch?v=JJwLesqqcmM'
}
}
aqua.sendButDoc(from, menunya, `${global.footer}`, thumbdoc, mok, options1, {quoted: floc })
 }
break

case 'play':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if(!q) return reply ("Teksnya mana")
let rus = await yts(q)
if(rus.all.length == "0") return reply ("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')

try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}

let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });

try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/sqdefault.jpg`
}

let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}
  
var toks =`
🕵️ Judul : ${res.title}
👀 Viewers : ${h2k(res.views)} Kali 
🌺 Duration : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}ytmp3 ${res.url} `,"buttonText": {"displayText": `Audio`},"type": "RESPONSE"},
{"buttonId": `${prefix}ytmp4 ${res.url}`,"buttonText": {"displayText": `Video`},"type": "RESPONSE"}
]
aqua.sendButDoc(from, `*YOUTUBE DOWNLOADER*\n${toks}`, `${global.footer}`, fs.readFileSync('./media/thumbnaildokumen.jpg'), aklo, options2, {quoted:m})
}
db.users[sender].limit -= 1 // -1 limit
break

			

case 'cry':
case 'kill':
case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
aqua.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break


case 'setquoted':
    if(!isOwner) return reply (mess.owner)
    if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
        if(Qoted === "ftoko") return reply("Udah aktif")
        Qoted = "ftoko"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
        } else if ((args[0]) === 'fkontak' ){
        if(Qoted === "fkontak") return reply("Udah aktif")
        Qoted = "fkontak"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
        } else if ((args[0]) === 'ftext'){
        if(Qoted === "ftext") return reply("Udah aktif")
        Qoted = "ftext"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
        } else if ((args[0]) === 'ftroli'){
        if(Qoted === "ftroli") return reply("Udah aktif")
        Qoted = "ftroli"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
        }else if ((args[0]) === 'fsticker' ){
        if(Qoted === "fsticker") return reply("Udah aktif")
        Qoted = "fsticker"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fsticker})
        } else if ((args[0]) === 'fvn'){
        if(Qoted === "fvn") return reply("Udah aktif")
        Qoted = "fvn"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
        } else if ((args[0]) === 'floc'){
        if(Qoted === "floc") return reply("Udah aktif")
        Qoted = "floc"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
        } else if ((args[0]) === 'fvideo' ){
        if(Qoted === "fvideo") return reply("Udah aktif")
        Qoted = "fvideo"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvideo})
        } else if ((args[0]) === 'fgc'){
        if(Qoted === "fgc") return reply("Udah aktif")
        Qoted = "fgc"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
        } else if ((args[0]) === 'fgif'){
        if(Qoted === "fgif") return reply("Udah aktif")
        Qoted = "fgif"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
        }else if ((args[0]) === 'fimage'){
        if(Qoted === "fimage") return reply("Udah aktif")
        Qoted = "fimage"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
        } else if ((args[0]) === 'm'){
        if(Qoted === "m") return reply("Udah aktif")
        Qoted = "m"
        await aqua.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: m})
        } else {
 let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.m`
 reply (teks)
 }
    break



case 'playstore':
if(!q) return reply ('lu nyari apa?')
let play = await hx.playstore(q)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply (store)
break


case 'cekbapak': // By Ramlan ID
		const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
		const cek = bapak[Math.floor(Math.random() * bapak.length)]
		reply (`${cek}`)
		break
					
			
case 'truth':
		const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		reply (`${ttrth}`) 
		break
			

case 'dare':
		const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		reply (`${der}`) 
		break



case 'list': case 'menu': case 'help': case '?': {
anu = menu(global, m, prefix, pushname, isPremium)

if (modelmenu == 'location') {
aqua.send5Loc(m.chat, anu, `${global.footer} `, thumbnya, komt)                
} else if (modelmenu == 'gif') {
	let message = await prepareWAMessageMedia({ video: { url: "./media/gif.mp4" }, gifPlayback: true, gifAttribution: "TENOR" }, { upload: aqua.waUploadToServer })
        const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `${anu}`,
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: hhhhh,
                        }
                    }
}), { userJid: m.chat })
aqua.relayMessage(m.chat, template.message, { messageId: template.key.id })
} else if (modelmenu == 'image') {
aqua.send5ButImg(m.chat, anu, `Ketika anda menemukan error silahkan ketik .report <kendala anda>, kami akan segera fix yang error tersebut, terimakasih telah menggunakan bot ini!!`, thumbnya, komt)
} else if (modelmenu == 'doc') {
  
const asuu =['https://www.youtube.com/watch?v=JJwLesqqcmM', 'https://instagram.com/zyee_ez']
const fek = asuu[Math.floor(Math.random() * asuu.length)]
                    
let options1 =
{ mentionedJid: [sender],
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: thumbnya,
mediaUrl: fek,
sourceUrl: fek
}
}
aqua.sendButDoc(from, anu, `Ketika anda menemukan error silahkan ketik .report <kendala anda>, kami akan segera fix yang error tersebut, terimakasih telah menggunakan bot ini!!\nSupport by WhatsApp.com`, thumbdoc, mok, options1, {quoted:m})
 } else if (modelmenu == 'katalog') {
aqua.sendKatalog(from, `${global.botnma}`, anu, thumbnya, {quoted: setQuoted})
}else if (modelmenu == 'list') {

let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
    title: `Hi ${pushname} ${ucapanWaktu}`,
    description: `
*USER-INFO*   
女 : Nama                      : ${pushname}
女 : Nomor                    : ${sender.split("@")[0]}
女 : Status                     : ${isPremium ? 'Premium' : 'Free'}
女 : Limit                        : ${isPremium ? 'Unlimited' : `${global.db.users[m.sender].limit}`}

*BOT-INFO*
女 : Library                     : _Baileys MD_
女 : Creator                    : Takimtod
女 : Runtime                   : ${runtime(process.uptime())}

*TIME-INFO*
女 : Hari                          : ${week} ${weton}
女 : Tanggal                   : ${date} 
女 : Hijriah                      : ${dateIslamic}

*GRUB-BOT*
女: Grub 1 : ${global.grub1}`,
    buttonText: "KLIK DI SINI",
  // footerText: ``,
    listType: "SINGLE_SELECT",
    sections: [{
								 "title": "Syarat Dan Ketentuan Bot",
								     "rows": [{
										"title": "[🛸] RULES BOT",
										"description": "Menampilkan Syarat && Ketentuan Bot",
										"rowId": `${prefix}rules`
										},
									   {
										"title": "[ ⛓️ ] MAIN MENU",
										"description": "Menampilkan Fitur",
										"rowId": `${prefix}menu1`
									}]
							},
						    {
								"title": "List Menu Bot Yang Tersedia",
								"rows": [{
										"title": "[ 📚 ] ALL MENU",
										"description": "Menampilkan Semua Fitur!",
										"rowId": `${prefix}allmenuu`
									},
									{
										"title": "[ 📥 ] DOWNLOAD FITUR",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}menu2`
									},
									{
										"title": "[ 🔍 ] SEARCH FITUR",
										"description": "Menampilkan Search Fitur",
										"rowId": `${prefix}menu4`
									},
									{
										"title": "[ 🎐 ] RANDOM FITUR",
										"description": "Menampilkan Random Fitur",
										"rowId": `${prefix}menu13`
										},
										{
										"title": "[ 🌀 ] CONVERT FITUR",
										"description": "Menampilkan Convert Sticker",
										"rowId": `${prefix}menu3`
										},
										{
										"title": "[ 🛠️ ] TOOLS",
										"description": "menampilkan Tools",
										"rowId": `${prefix}menu14`
										},
										{
										"title": "[ 🎋 ] TEKS TO PNG",
										"description": "Menampilkan Attp Fitur",
										"rowId": `${prefix}menu19`
									},
									{
									 "title": "[ 👥 ] GRUP FITUR",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}menu10`
										},
                                       {
                                       "title": "[ 🐚 ] KERANG AJAIB",
										"description": "Menampilkan Fitur Kerang Ajaib",
										"rowId": `${prefix}menu18`
										},
										{
										"title": "[ 🖌️ ] TEXT PRO FITUR",
										"description": "Menampilkan TextPro Fitur",
										"rowId": `${prefix}menu23`
										},
										{
										"title": "[ 🎨 ] PHOTO OXY ",
										"description": "Menampilkan Photo Oxy Fitur",
										"rowId": `${prefix}menu24`
										},
										{
										"title": "[ 🎧 ] RANDOM SOUND",
										"description": "Menampilkan List Sound",
										"rowId": `${prefix}menu26 `
										},
										{
										"title": "[ 👻 ] SEMOJI",
										"description": "Menampilkan Vitur Semoji",
										"rowId": `${prefix}menu11`
										},
										{
										"title": "[ ✈️ ] FUN VITUR",
										"description": "Menampilkan Fun Fitur",
										"rowId": `${prefix}menu17`
										},
										{
										"title": "[ 📑 ] PRIMBON FITUR",
										"description": "Menampilkan Primbon Fitur",
										"rowId": `${prefix}menu25`
										},
										{
										"title": "[ 🖼️ ] RANDOM WALLPAPER",
										"description": "Menampilkan Random Wallpapers",
										"rowId": `${prefix}menu28`
										},
										{
										"title": "[ 💱 ] RANDOM STICKER",
										"description": "Menampilkan Random Sticker Wa",
										"rowId": `${prefix}menu7`
										},
										{
										"title": "[ 📁 ] DATABASE",
										"description": "Menampilkan Database",
										"rowId": `${prefix}menu8`
										},
										{
										"title": "[ 🗣️ ] ANONYMOUS CHAT",
										"description": "menampilkan Fitur Anonymous Chat",
										"rowId": `${prefix}menu5`
										},
										{
										"title": "[ 💞 ] PROFIL WA COUPLE",
										"description": "menampilkan Fitur Profil Wa Couple",
										"rowId": `${prefix}menu12`
										},
										{
										"title": "[ 🕌 ] ISLAMI FITUR",
										"description": "menampilkan Islami Fitur",
										"rowId": `${prefix}menu16`
										},
										{
										"title": "[ 📺 ] JADWAL TV",
										"description": "menampilkan Jadwal && Berita",
										"rowId": `${prefix}menu6`
										},
										{
										"title": "[ 🛸 ] RANDOM ANIME",
										"description": "menampilkan Random Anime",
										"rowId": `${prefix}menu15`
										},
										{
										"title": "[ 📰 ] BERITA",
										"description": "menampilkan Fitur Berita",
										"rowId": `${prefix}menu20`
										},
										{
										"title": "[ 🦂 ] CERPEN",
										"description": "menampilkan Fitur Cerita Pendek",
										"rowId": `${prefix}menu21`
										},
										{
										"title": "[ 🎠 ] STALKING",
										"description": "menampilkan Fitur Stalking",
										"rowId": `${prefix}menu9`
										},
										{
										"title": "[ 🎙️ ] VOICE CHANGER FITUR",
										"description": "Menampilkan Voice Changer Fitur",
										"rowId": `${prefix}menu22`
										} ,
										{
										"title": "[ 🛡️ ] OWNER FITUR",
										"description": "menampilkan Vitur Owner",
										"rowId": `${prefix}menu27`
										}    
								]
							},
							{
								"title": "Group Bot",
								"rows": [
									{
										"title": "[ 🛩️ ] GROUP BOT",
										"description": "menampilkan Group Bot",
										"rowId": `${prefix}grubbot`
									}
								]
							},
							{
								"title": "Pemilik Botz Ini",
								"rows": [
									{
										"title": "[ 🤵 ] OWNER BOT",
										"description": "menampilkan Kontak Pemilik Bot",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "Developer && Creator Bot",
								"rows": [
									{
										"title": "[ 🤴 ] DEVELOPER && CREATOR",
										"description": "menampilkan Kontak Developer Bot",
										"rowId": `${prefix}creator`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "[ 🌟 ] CONTRIBUTOR",
										"description": "menampilkan Nama Yang Sudah Membantu Merakit Bot Ini !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
}
            }), {userJid: m.chat, quoted: setQuoted }, { contextInfo: { mentionedJid: [sender] }})
            aqua.relayMessage(m.chat, template.message, { messageId: template.key.id})
            } 


}
break


case 'cecan':{ 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next" }, type: 1 }]
aqua.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
db.users[sender].limit -= 1 // -1 limit
}
break

case 'cogan': {
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next" }, type: 1 }]
aqua.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
db.users[sender].limit -= 1 // -1 limit
}
break 

case 'ss':{
	if(!args[0]) return reply ("masukkan link")
if(!q) return reply ("Masukan Link")
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await aqua.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: m})
}
break



case "character":
		case "chara":
		case "char":
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
			if (!q) return reply(`masukkan teks`)
			//await replylink(ind.wait(), "Character", `~> Request By ${pushName}`, msg)
			try {
				const getchar = await hxz.chara(q)
				for (let i = 0; i < 3; i++) {
					sendFileFromUrl(from, getchar[i], `*${q}*`)
				}
			} catch (err) {
				reply(util.format(err))
			}
			break

	
case "waifu":
		if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
			//await replylink(ind.wait(), "Waifu", `~> Request By ${pushName}`, msg)
			try {
				const {
					data
				} = await axios.get("https://api.waifu.im/random/?selected_tags=waifu")
				sendFileFromUrl(from, data.images[0].url, data.images[0].tags[0].description, {quoted: m})
			} catch (err) {
				reply(util.format(err))
			}
			break

case 'film':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
	if(!q) return reply (`Mau cari ${command} apa?\nContoh: ${prefix + command} dora`)
xfar.Film(q).then(res =>  {
let tekss = '*============[ FILM ]===========*'
for (var i of res){
tekss +=`
•  Judul: ${i.judul}
• Kualitas: ${i.quality}
• Type: ${i.type}
• Upload: ${i.upluad}
• Link: ${i.link}\n•------------------------------------------------•\n`}

aqua.sendMessage(from, {caption: tekss, image:{url: i.thumb}}, {quoted:m})})
}
db.users[sender].limit -= 1 // -1 limit
break

		

case 'bet':
reply (`*Baterai :* ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charging ✅⚡' : 'Not Charging ❌🔌'}`)
break

	case 'github': case 'gitdl': case 'gitclone': {
	reply (mess.wait)
                if (!text) return reply ( `Example : ${prefix + command} https://github.com/takimtod/takimtod`)
                let gitRegex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
		if (!gitRegex.test(args[0])) return reply ('link salah!')
                let [, user, repo] = args[0].match(gitRegex) || []
    		repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
		let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                aqua.sendMedia(m.chat, url, filename, m)
            }
            break
		
		case "wattpad":
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
			if (!q) return reply(`masukkan teks`)
			//await replylink(ind.wait(), "Wattpad", `~> Request By ${pushName}`, msg)
			try {
				const getwp = await xfar.Wattpad(q)
				let hajdhsdjasks = `「 *WATTPAD* 」\n\n`
				for (audhjds of getwp) {
					hajdhsdjasks = `*Judul:* ${audhjds.judul}\n`
					hajdhsdjasks += `*Read:* ${audhjds.dibaca}\n`
					hajdhsdjasks += `*Rating:* ${audhjds.divote}\n`
					hajdhsdjasks += `*Link:* ${audhjds.url}\n`
					hajdhsdjasks += `*Desc:* ${audhjds.description}\n\n`
				}
				sendFileFromUrl(from, getwp[0].thumb, hajdhsdjasks)
			} catch (err) {
				reply(util.format(err))
			}
			db.users[sender].limit -= 1 // -1 limit
			break

case 'totd':
reply(`${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}`)
break


		case  "drakor":
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
			if (!q) return reply(`masukkan teks`)
			//await replylink(ind.wait(), "Drakor", `~> Request By ${pushName}`, msg)
			try {
				const getdr = await xfar.Drakor(q)
				let hajdhsdjaska = `「 *DRAKOR* 」\n\n`
				for (audhjds of getdr) {
					hajdhsdjaska += `*Judul:* ${audhjds.judul}\n`
					hajdhsdjaska += `*Tahun:* ${audhjds.years}\n`
					hajdhsdjaska += `*Genre:* ${audhjds.genre}\n`
					hajdhsdjaska += `*Link:* ${audhjds.url}\n\n`
				}
				sendFileFromUrl(from, getdr[0].thumbnail, hajdhsdjaska)
			} catch (err) {
				reply(util.format(err))
			}
			db.users[sender].limit -= 1 // -1 limit
			break


case 'pinterest':
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if (args.length < 0) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
reply(mess.wait)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
aqua.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
aqua.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
}
})
break

		

case "gempa":
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
			//await replylink(ind.wait(), "BMKG Gempa", `~> Request By ${pushName}`, msg)
			try {
				const {
					data
				} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
				let asbnfvashfgyjas = `┌──「 *G E M P A* 」
│
├ *TimeStamp:* ${data.Infogempa.gempa.Tanggal}
├ *Time:* ${data.Infogempa.gempa.Jam}
├ *Coordinates:* ${data.Infogempa.gempa.Coordinates}
├ *Magnitude:* ${data.Infogempa.gempa.Magnitude}
├ *Depth:* ${data.Infogempa.gempa.Kedalaman}
├ *Region:* ${data.Infogempa.gempa.Wilayah}
├ *Potention:* ${data.Infogempa.gempa.Potensi}
├ *Effect:* ${data.Infogempa.gempa.Dirasakan}
│
└──「 *I C Z A* 」 `
				sendFileFromUrl(from, "https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap, asbnfvashfgyjas)
			} catch (err) {
				reply(util.format(err))
			}
			db.users[sender].limit -= 1 // -1 limit
			break


case 'totag': {
			if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isOwner) return reply (mess.admin)
            if (quoted.mtype == 'conversation') {
            aqua.sendMessage(m.chat, { text : quoted.text , mentions: participants.map(a => a.id), contextInfo: { forwardingScore: 5, isForwarded: true } }, { quoted: m })
            } else {
                let _msg = JSON.parse(JSON.stringify(quoted.fakeObj.message))
                if (typeof _msg[quoted.mtype].contextInfo !== 'object') _msg[quoted.mtype].contextInfo = {}
                if (typeof _msg[quoted.mtype].contextInfo.mentionedJid !== 'array') _msg[quoted.mtype].contextInfo.mentionedJid = participants.map(a => a.id)
                let _pesan = quoted.fakeObj
                _pesan.message = _msg
                aqua.copyNForward(m.chat, _pesan, true)
              }
            }
            break


case 'tagme':  {  
       aqua.sendMessage(from, { text: `@${sender.split("@")[0]}`, mentions: [sender] })
  }
    break



case 'setmenu':
if (!isOwner) return reply(mess.owner)
            if (!q) return reply(`Masukan model menunya :
⭔${command} lokasi
⭔${command} image
⭔${command} katalog
⭔${command} list
⭔${command} dokumen
⭔${command} gif`)
            if (q == "lokasi") {
            modelmenu = "location"
            reply("Done change menu to "+q)
            } else if (q == "gif") {
           modelmenu = "gif"
            reply("Done change menu to "+q)
            } else if (q == "image") {
           modelmenu = "image"
            reply("Done change menu to "+q)
            } else if (q == "dokumen") {
          modelmenu = "doc"
            reply("Done change menu to "+q)
            } else if (q == "katalog") {
          modelmenu = "katalog"
            reply("Done change menu to "+q)
            } else if (q == "list") {
          modelmenu = "list"
            reply("Done change menu to "+q)
            } 
           break
            


case 'apatuh':
case  'read': {
			if (!isviewOnce) return reply('Itu bukan pesan viewOnce')
			pel = `*User* : @${m.quoted.sender.split("@")[0]} mengirim pesan viewOnce `
			aqua.sendMessage(from, { text: pel, mentions: [m.quoted.sender] }, {quoted: m })
			await sleep(2000)
			m.quoted.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
			m.quoted.copyNForward(m.chat, true).catch(_ => reply('Mungkin dah pernah dibuka bot'))
		}
		break


 case 'stalkff':{
if (!args[0])  return reply ('id ff lu bang')
i = await calip.search.freefireid(args[0])
console.log(i)
let lajh = `*STALK FREE FIRE*

• Nick : ${i.result}
• Id : ${args[0]}`
reply (lajh)
}
break

case 'stalkff':{
if (!args[0])  return reply ('Nama tiktok lu mana')
i = await calip.search.ttstalk(args[0])
console.log(i)
let lajh = `*STALK TIKTOK*

• Nama : ${args[0]}
• gatau : ${i.result}
`
reply (lajh)
}
break


case 'cuaca':{
if (!args[0])  return reply ('Nama wilayah nya kak mana')
calip.search.cuaca(args[0]).then(res => {
(console.log(res))
reply(`*---------[ Data Berhasil Diperoleh ]---------*

• Wilayah: ${args[0]}
• Longitude : ${res.data.Longitude}
• Cuaca: ${res.data.Cuaca}
• Suhu: ${res.data.Suhu}
• Angin : ${res.data.Angin}
• Udara : ${res.dataUdara}
• Kelembaban: ${res.data.Kelembaban}
• Keterangan: ${res.data.Keterangan}`)
})
}
break


case 'mediafiredl': case 'mediafire':{
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
let nana = await mediafiredl(q)
console.log(nana)
let tuks =`*---------[ Data Berhasil Diperoleh ]---------*

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
 reply (tuks)
if(nana.filesize > 90000){
return reply ("File size melebihi batas,\nbatas yang di tentukan adalah 90mb")              
}
 aqua.sendMedia2 (from, nana.url, m, {fileName: nana.filename})
} 
break


case 'jadwalsholat':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`) 
i = await xfar.JadwalSholat(q)
console.log(i)
let ini_txt = `*-------「 JADWAL SHOLAT 」-------*

📅 Tanggal : ${i.tanggal}

• Subuh : ${i.subuh}
• Dzuhur : ${i.dzuhur}
• Ashar : ${i.ashar}
• Maghrib : ${i.maghrib}
• Isya : ${i.isya}`
reply(ini_txt)
}
break


case 'heppymod': case 'happymod':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
dataa = await calip.search.happymod(q)
data = dataa.result
console.log(data)
let ini_txt = '❉─────────────────────❉\n'
 for (var i of data) {
 ini_txt += `\n*------------「 Happy Mod 」-----------*\n

• Nama : ${i.title}
• Url : ${i.link}
• Thumb : ${i.thumb}\n❉─────────────────────❉`
} 
let imgny = await getBuffer('https://telegra.ph/file/346bc2d0123fb5d739586.jpg')
aqua.sendMessage(m.chat, { image: imgny, caption: ini_txt }, { quoted: m })
  // reply(ini_txt)
    }
    db.users[sender].limit -= 1 // -1 limit
    break

case 'por':{
 
        if (!q) return reply (`Example: ${prefix + command} jong`)
        data = await fetchJson(`https://sewa4yeye.herokuapp.com/api/search/pornhub?query=${q}&apikey=BetaBotz`)
        dataa = data.result.results
        console.log(dataa)
        let ini_txt = '❉─────────────────────❉\n'
        for(var i of dataa){
        ini_txt += `POR HUB\n
        • Title : ${i.title}
        • Views : ${i.views}
        • Link : ${i.link}\n❉─────────────────────❉`
        }
        reply (ini_txt)
        }
        break

case 'jadwalbola':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
 xfar.JadwalBola().then(res =>  {
let tekss = '*========[ JADWAL BOLA ]========*'
for (var i of res){
tekss +=`
• Jam: ${i.jam}
• Jadwal: ${i.jadwal}
• Tanggal: ${i.tanggal}
• Link: ${i.url}\n•------------------------------------------------•\n`}
aqua.sendMessage(from, {caption: tekss, image:{url: i.thumb}}, {quoted:m})})
}
db.users[sender].limit -= 1 // -1 limit
break

 
   
case 'jadwaltv': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
dataa = await xfar.JadwalTv()
let ini_txt = '*========[ JADWAL TV NOW ]========*'
 for (var i of dataa) {
 ini_txt += `\n*-------「 JADWAL TV 」-------*\n

• Jam : ${i.jam}
• Channel : ${i.channel}
• Acara : ${i.acara}
• Url : ${i.source}\n❉─────────────────────❉`
} 
   reply(ini_txt)
    }
    db.users[sender].limit -= 1 // -1 limit
    break



        case 'tts':	
                try{
					if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
					if (args.length < 1) return reply (`Kode bahasanya mana kak? ketik ${command}kodebahasa untuk mengetahui code bahasa lainya `)
					//////if (args.length < 2) return setReply(`Textnya mana kak? contoh: *${command} id* Saya suka makan`)
					const gtts = require('./lib/gtts')(args[0])
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply ('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
					aqua.sendMessage(m.chat, {audio: fs.readFileSync(ranm), mimetype:'audio/mpeg', ptt:true }, {quoted:m})
					//aqua.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
					fs.unlinkSync(ranm)
					})   } catch (err){
					console.log(err)
               	reply (`Kode bahasanya mana kak?\n Contoh: ${prefix}tts id saya suka tidur\n\nAtau ketik ${prefix}kodebahasa untuk mengetahui kode bahasa lainya `)
                 }
					db.users[sender].limit -= 1 // -1 limit
					break


case 'runtime':
rt = `*Runtime : ${runtime(process.uptime())}*`.trim()
reply(rt)
break
           

case 'wallpaper': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
                if (!text) return reply ( `Mau cari ${command} apa?\nContoh: ${prefix + command} dora`)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➣ Title : ${result.title}\n➣ Category : ${result.type}\n➣ Detail : ${result.source}\n➣ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            db.users[sender].limit -= 1 // -1 limit
            break
					
					
case 'gimage': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
        if (!text) return reply ( `Example : ${prefix + command} kaori cicak`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: images },
    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
    footer: aqua.user.name,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        db.users[sender].limit -= 1 // -1 limit
        break
	

case 'getppgc':
if (!isGroup) return 
try {
var ppimg = await aqua.profilePictureUrl(m.chat, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await aqua.sendMessage(m.chat, { image: { url: ppimg }}, { quoted: m })
break 

case 'getpp':
if (!isGroup) return 
try {
    ppuser = await aqua.profilePictureUrl(m.quoted.sender, 'image')
} catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

await aqua.sendMessage(m.chat, { image: { url: ppuser }}, { quoted: m })
break 

    
case 'grupwa': 
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if (!q) return reply(`Kirim perintah ${command} nama grup`)
reply (mess.wait)
hx.linkwa(q).then(async(data) => {
if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
}).catch(() => reply(mess.error.api))
break
			

case 'stikpetrik':
case 'petrik':
case 'petrick':
case 'patrick':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var arrra = await fetchJson('https://raw.githubusercontent.com/ardastore/datastickerurl/main/patrik')
var ardanya = arrra.split('\n')
var sendarda = ardanya[Math.floor(Math.random() * ardanya.length)]
sendStickerUrl(from, sendarda, { pack: packname, author: author})}
db.users[sender].limit -= 1 // -1 limit
break

  
  case 'doge':
case 'stikdoge':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
}
db.users[sender].limit -= 1 // -1 limit
break       

case 'stikgura':
case 'gurastick':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
}
db.users[sender].limit -= 1 // -1 limit
break       

case 'stikbucin':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
}
db.users[sender].limit -= 1 // -1 limit
break   

case 'resize':
if (isQuotedImage || isImage) {
if(!q) return reply (`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
reply (mess.wait)
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await aqua.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply (`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await aqua.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
reply ("Reply Imagenya")
}
break

case 'obsuf': case 'deobfus':{

  function beautifyJavaScript (source) {
    const beautify = require('js-beautify').js_beautify
    return beautify(source, {indent_size: 2})
   }
   
  if(q){
    let teks = await beautifyJavaScript(q)
    reply (teks)
  } else if(isQuotedTeks){
    let teks = await beautifyJavaScript(m.quoted.text)
    reply (teks)
  } else reply ("Masukan code java script")
  }
  break


case 'packer':{
var UglifyJS = require("uglify-js");
if(q){
let result  = await UglifyJS.minify(q)
 reply(result.code)
} else if(isQuotedTeks){
  console.log(isQuotedTeks)
let result  = await UglifyJS.minify(m.quoted.text)
 reply(result.code)
} else reply ("Masukan code java script atau reply file.js")
}
break


case 'brainly':{
 const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) reply ( 'Soalnya apa kakk?')
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   
let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


  teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [{"buttonId": `makasih`,"buttonText": {"displayText": `Makasih`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `Donasi`},"type": "RESPONSE"}]
aqua.sendButImage(from, teks, `${global.footer}`, foto, mok, {contextInfo: forward})             

}
break

//Case By Irfan
case 'tod':
case 'sendbug':
try{
	if(!isOwner) return reply(mess.owner) 
if(!q) return reply("Masukan nomer target")
await reply("Sending...")
let Pe = isQuotedTag[0]? isQuotedTag[0] : isQuotedReply ? isQuotedReply : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let a = await aqua.sendMessage(from, { react: { text: "𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿𝘿️", }}, { quoted : fbug() })
aqua.sendMessage(Pe, { text: "Oii kimoyasaaa" }, { quoted: fbug()});
reply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
reply("Gagal mengirim bug, Terjadi Error")
}
break


case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (isQuotedVideo || isQuotedTag || isQuotedImage || isQuotedSticker || isImage) {
reply (mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await aqua.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
let owgi = await aqua.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return reply (`${err}`)
await aqua.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: m})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
  
} else if (isQuotedTeks) {
reply (mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await aqua.profilePictureUrl(m.quoted.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
console.log(err)
let oppp = await aqua.profilePictureUrl(m.quoted.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return reply (`${err}`)
await aqua.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: m})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
reply ('Gunakan foto!')
}
db.users[sender].limit -= 1 // -1 limit
break 

case 'kbbi':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (args.length < 1) return reply ('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
reply ('Menurut Kbbi:\n\n'+asw.result)
}
db.users[sender].limit -= 1 // -1 limit
break



case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if(isStop) return ('khsus private chat bot')
	if (args.length < 0) return reply(`Masukan Nama!! Contoh\n ${prefix + command} loli`)
	let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)

	let button = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: 'Mext'}, type: 1}
]
let buttonMessage = {
    image: kentir,
    caption: `Random ☕`,
    footer: `${global.footer}`,
    buttons: button,
    headerType: 5
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })

break


case 'bitly':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if(!q) return reply ("Masukan link")
if(!isUrl) return reply ("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
reply (`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
  reply (`Url invalid`)
}
}
db.users[sender].limit -= 1 // -1 limit
break;


case '3000years':
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (isQuotedImage) {
try{
reply (mess.wait)
let ahah = await aqua.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
aqua.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: m})
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return reply ('Reply targetnya kak atau Tag')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
reply (mess.wait)
let ghost = users 
let oppp = await aqua.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
aqua.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: m})
}).catch(err => {
aqua(`${err}`)
});    
} else {
reply ("Reply targetnya")
}
db.users[sender].limit -= 1 // -1 limit
break


case 'snobg': case 'nobg':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
    if ((isMedia || isQuotedImage && !isQuotedSticker)) {
    const media = await aqua.downloadAndSaveMediaMessage(quoted)
    ranw = getRandom('.webp')
    ranp = getRandom('.png')
    keyrmbg = `${global.apibg}`
    await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, bufferir9vn5, (err) => {
  if (err) return reply ('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
        })
        exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
  fs.unlinkSync(ranp)
  if (err) return reply(`emror bang ${err}`)
  aqua.sendMessage(from, {sticker: fs.readFileSync(ranw)}, {quoted: m})
      fs.unlinkSync(ranw)
  })
        }) 
        }
        db.users[sender].limit -= 1 // -1 limit
break


case 'qrcode':
if (args.length < 1) return reply(`Linknya?\nContoh:\n${prefix + command} https://github.com/`)
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
			const tex = encodeURIComponent(body.slice(8))
			if (!text) return aqua.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: dev})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)
			await aqua.sendMessage(from, {image: buff, caption: `Nih`},{quoted: m})
			db.users[sender].limit -= 1 // -1 limit
			break


case  'setthumb':{
	if (!isOwner) return reply(mess.owner)
if(isImage || isQuotedImage){
let delb = await aqua.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/thumb.jpeg`)
fs.unlinkSync(delb)
reply (`Berhasil mengubah thumbnail`)
} else {
reply (`Kirim gambar dengan caption ${prefix}sethumb`);
}
}
break

case  'setthumbdoc':{
	if (!isOwner) return reply(mess.owner)
if(isImage || isQuotedImage){
let delb = await aqua.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
reply (`Berhasil mengubah thumbnail doc`)
} else {
reply (`Kirim gambar dengan caption ${prefix}sethumbdoc`);
}
}
break

case  'setgif':{
	if (!isOwner) return reply(mess.owner)
if(isVideo || isQuoteVideo){
let delb = await aqua.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/gif.mp4`)
fs.unlinkSync(delb)
reply (`Berhasil mengubah thumbnail`)
} else {
reply (`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break

case 'ghstalk':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
let nana = await ghstalk(q)
console.log(nana)
let foto = nana.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks =`
Nama: ${nana.name}
Bio: ${nana.bio}
Followers: ${nana.followers}
Following: ${nana.following}
Repository: ${nana.public_repos}
Created at: ${nana.created_at}
Update at: ${nana.updated_at}
Twitter: ${nana.twitter_username}
Email: ${nana.email}
Lokasi: ${nana.location}
Website: ${nana.blog}
Github url: ${nana.url}
`
console.log(toks)
await aqua.sendMessage(from, {image:gambar, caption: toks},{quoted: m})
//await xdev.sendMedia (from, foto, dev, {caption: toks})
}
db.users[sender].limit -= 1 // -1 limit
break

case 'kalkulator':
try{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
reply (teks)
} catch (err){
reply ( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
db.users[sender].limit -= 1 // -1 limit
break

case 'quotes':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
reply (data.result.quotes+'\n\n-- '+data.result.author)
db.users[sender].limit -= 1 // -1 limit
break

case 'lirik':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (args.length < 0) return reply(`Kirim perintah ${command} judul lagu`)
reply (mess.wait)
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
aqua.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: m })
}).catch(() => reply(`Judul lagu tidak ditemukan`))
}
db.users[sender].limit -= 1 // -1 limit
break



case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
             if (!q) return reply(`Example : ${prefix + command} Deff`) 
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                aqua.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
             db.users[sender].limit -= 1 // -1 limit
break


case 'searchgc': {
	if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if (args.length < 0) return reply (`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
reply(teks)
})
}
break



case 'cerpen':{
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
db.users[sender].limit -= 1 // -1 limit
break


case 'fajar-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks)  
})
db.users[sender].limit -= 1 // -1 limit
break

case "quotes2":
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks) 
db.users[sender].limit -= 1 // -1 limit
break

case 'cnn-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
CNNNews().then(res => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks)  
})
db.users[sender].limit -= 1 // -1 limit
break
case 'layarkaca-search':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `.•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•.`
reply(teks)  
})
db.users[sender].limit -= 1 // -1 limit
break
case 'cnbc-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
CNBCNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break
case 'tribun-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
TribunNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
db.users[sender].limit -= 1 // -1 limit
break
case 'indozone-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
IndozoneNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
db.users[sender].limit -= 1 // -1 limit
break
case 'kompas-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
KompasNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break
case 'detik-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
DetikNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break
case 'daily-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
DailyNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break

case 'inews-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
iNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks)  
})
db.users[sender].limit -= 1 // -1 limit
break
case 'okezone-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
OkezoneNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break

case 'sindo-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
SindoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks)  
})
db.users[sender].limit -= 1 // -1 limit
break
case 'tempo-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
TempoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break
case 'antara-news':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
AntaraNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
db.users[sender].limit -= 1 // -1 limit
break

case "kontan-news":
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
  KontanNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    aqua.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  db.users[sender].limit -= 1 // -1 limit
break
case "merdeka-news":
reply (mess.wait)
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
  MerdekaNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    aqua.sendMessage(ads, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  db.users[sender].limit -= 1 // -1 limit
break

case "jalantikus-meme":
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
  var res = await JalanTikusMeme()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
aqua.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })

db.users[sender].limit -= 1 // -1 limit
break


case 'tt': case 'tiktok': case 'ttnowm': case 'tiktoknowm':    
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis 
try{   
if (args.length < 1) return reply('Link?')
if (!args[0]) return reply (`linkny?`)
reply (mess.wait)
arg = args.join(' ')
calip.downloader.tiktok(args[0]).then(res => {
console.log(res)
console.log('[ T I K T O K ] downloader')

aqua.sendMessage(m.chat, { video: { url: res.nowm }, caption: `*------------[ TIKTOKNOWM ]------------*

• Autor: ${res.author}
${res.title}`}, { quoted: m })          
})
} catch (err){
return reply ('Link Erorr, Video Tidak di Temukan!!')
}
db.users[sender].limit -= 1 // -1 limit
break

case 'tiktokwm': case 'ttwm':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis 
try{   
if (args.length < 1) return reply('Link?')
if (!args[0]) return reply (`linkny?`)
reply (mess.wait)
calip.downloader.tiktok(args[0]).then(res => {
console.log('[ T I K T O K ] downloader')
aqua.sendMessage(m.chat, { video: { url: res.watermak }, caption: `*------------[ TIKTOKNOWM ]------------*

• Autor: ${res.author}
${res.title}` }, { quoted: m })          
//aqua.sendMessage(from, {caption: "Nih", video: {url: ep}},{quoted: dev})
})
} catch (err){
reply (`${err}`)
}
db.users[sender].limit -= 1 // -1 limit
break


case 'tiktokaudio': case 'tiktokmp3': case 'tiktokmusik':{     
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis 
if (args.length < 0) return reply ('Link?')
reply (mess.wait)
calip.downloader.tiktok(args[0]).then( async res => {
console.log(res)
console.log('[ T I K T O K ] downloader')
aqua.sendMessage(from, { audio: {url: res.audio, mimetype: 'audio/mpeg'}}, { quoted: m })
})
}
db.users[sender].limit -= 1 // -1 limit
 break



case 'react': { 
aqua.sendMessage(m.chat, reactionMessage)}
break  



case 'take':
case 'colong':
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `kimtod`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await aqua.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
    pack: satu, // The pack name
    author: dua, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 70, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await aqua.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break


case 'grubbot':
case 'grubwa': {
reply (`*Grub Wa*
────────────────────────

1. ${global.grub1}

2. ${global.grub2}

3. -

`)}
break 
 
 case 'culik':
            if (!isOwner) return reply (mess.owner)
            if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
            let pantek = []
            for (let i of groupMembers) {
console.log(i.id)
                await pantek.push(i.id)
            }
          await aqua.groupParticipantsUpdate(q, pantek, 'add')
            break
	
case 'kickall':
if (!isOwner && !m.key.fromMe) return reply ("khsus owner tod")
      if (!isBotAdmins) return reply (mess.botAdmin)
if (!isGroup) return
			        members_id = []
					for (let mem of participants) {
						await sleep(1000)
						members_id.push(mem.jid)
					}
					await aqua.groupParticipantsUpdate(from, members_id, 'remove')
					break 


case 'ramaltogel':
case 'ramalantogel':
				ppopo = Math.floor(Math.random() * 10000)
				reply (`*Ramalan angka togel adalah:* ${ppopo}`)
				break
  


case 'pinterestdl': case 'pndl':{
reply (mess.wait)
if (!q) return reply ('Linknya?')
let fotony = budy.includes("https://pin.it/")

if(fotony){
calip.downloader.pindl(q).then(res => {
(console.log(res))
aqua.sendMessage(from, {image:{url: res.result}}, {quoted:m})
})
} else {
calip.downloader.pindl(q).then(res => {
(console.log(res))
aqua.sendMessage(from, {video:{url: res.result}}, {quoted:m})
})
}
}
db.users[sender].limit -= 1 // -1 limit
break

case 'igstory': {
if (!q) return reply ( `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${prefix + command} alinursetiawan24`)
let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${q}`)
console.log(res)
if (!res.ok) return reply ('Error')
let json = await res.json()
if (!json.status) return reply (json)
await reply ('Sedang di proses..')
for (let { url, type } of json.data) {
await sleep(2000)
aqua.sendMedia (from, url, m, {caption: "INSTAGRAM STORY"})      
}
}
break


case 'igdl': case 'instagram': case 'ig':{
reply (mess.wait)
if (!q) return reply ('Linknya?')
let igreel = budy.includes("https://www.instagram.com/reel/")
let igtv = budy.includes("https://www.instagram.com/tv/")
let igstory = budy.includes("https://instagram.com/stories/")

if(igreel){
let results = await instagramdl(q)
for (const { url } of results) await aqua.sendMedia2(from, url, m, {caption: "*INSTAGRAM DOWNLOAD*"})
/*
Download.insta_reel(q).then(async (data) => {
aqua.sendMessage(from, {caption: '*INSTAGRAM*', video: {url: data.url} }, {quoted: m})
console.log(data)
console.log(data.url)
})*/
} else if(igtv){
Download.insta_post(q).then(async (data) => {
aqua.sendMessage(from, {caption: data.title, video: {url: data.post1.url} }, {quoted: m})
console.log(data)
console.log(data.url)
})
} else if(igstory){
Download.insta_story(q).then(async (data) => {
//aqua.sendMessage(from, {caption: `Nih`, video: {url: data.data} }, {quoted: m})
console.log(data)
console.log(data.url)
})
} else {
let { instagramdl, instagramdlv2 } = require('@bochilteam/scraper')
let results = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0]))
for (const { url } of results) await aqua.sendMedia(from, url, m)
console.log(results)
}
}
db.users[sender].limit -= 1 // -1 limit
break



case 'stalkig': case 'igstalk':{
if (!q) return reply ('namany?')
Download.insta_profile(q).then(async (data) => {
	
aqua.sendMessage(from, {caption: `───────────────────────
• Nama : ${q}
• Bio: ${data.bio}                                                   
• Post_count : ${data.post_count}                                       
• Pengikut : ${data.followers}                                                 
• Mengikuti : ${data.following}                                                                          
• Kepopuleran : ${data.popularity}                                
• Like : ${data.avarage_likes}                                  
• Komentar : ${data.avarage_comments}                                           
• Terkhir Update : ${data.avarage_post_time}`, image: {url: data.profile_pic } }, {quoted: m})
console.log(data)
})
}
break
                                                         


case 'emojiap':{
	 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji Apple")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[0].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	            

  case 'emojigo':{
  if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji Google")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[1].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	             

case 'emojisa':{
 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji Samsung")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[2].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	             

case 'emojims':{
 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji Microsoft")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[3].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	             

case 'emojiwa':{
 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji WhatsApp")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[4].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	

case 'emojitw':{
 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji Twitter")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[5].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	

case 'emojifb':{
 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!q) return reply('emojinya?')
reply("Converting to emoji Facebook")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[6].url}`
aqua.sendImageAsSticker2(m.chat, teks, m)
})
}
db.users[sender].limit -= 1 // -1 limit
break	


case 'makasih': case 'thanks':
reply (`*sama - sama kak ${pushname}*`)
break

case 'bugpc': {
if (!isOwner) return reply ('khsus owner')
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
try {
    ppuser = await aqua.profilePictureUrl(m.quoted.sender, 'image')
} catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppuser = await getBuffer(ppuser)

num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppuser }, { upload: aqua.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes Doank`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
aqua.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(toMs(waktu))
}
reply(`Sukses`)
}
break

case 'buggc': {
if (!isOwner) return reply ('khsus owner')
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
aqua.sendMessage(num, { text: 'Oii kimoyasaaa' }, { quoted: lep})
await sleep(toMs(waktu))
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tekteka)
}
break

case 'developer':
let developer = [
            { "nama": "T A K I M", "nomor": "628388024064" },
            { "nama": "D I K A", "nomor": "6288292024190" },
            { "nama": "K A H F Z", "nomor": "6283127014833" },
            ]
let xensz = []
for (let i = 0; i < developer.length; i++){
    const getnumber = developer [i].nama
    const cyanz = developer [i].nomor
    const f = { displayName: getnumber, vcard: 'BEGIN:VCARD\n' + 
    'VERSION:3.0\n' + 
    'FN:' + getnumber + '\n' + 
    'item1.TEL;waid=' + cyanz + ':+' + cyanz + '\n' + 
    'item1.X-ABLabel:Telepon\n\n' +       
    'item2.ADR:;; Makassar;;;;\n' +
    'item2.X-ABLabel:🏙️ Kota\n' + 
    'item3.URL:https://instagram.com/zyee_ez\n'+
    'item3.X-ABLabel:Instagram Owner\n\n' +
    'item4.ADR:;;Indonesia;;;;\n' +
    'item4.X-ABLabel:🌐Region\n\n' +     
    'item5.X-ABLabel:Developer Bot\n' +
    'item6.URL:https://takimtod@gmail.com\n'+    
    'END:VCARD'.trim()}
    xensz.push(f)
}
       aqua.sendMessage(m.chat, { contacts: xensz}, { quoted: m }).then((res) => aqua.sendMessage(m.chat, `*Developer Bot*`, { quoted: m }))
       break

	
case 'zettai': case 'thighs': case 'panties': case 'pussy': case 'tentacles':
case 'masturbasi': case 'jahy': case 'glases':  case 'foot': case 'hentai': 
case 'orgy': case 'nekopoi': case 'manga': case 'ass': case 'ahegao':
case 'bdsm': case 'cuckold': case 'cum': case 'femdom': case 'ero':{
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if(isStop) return ('khsus private chat bot')
aqua.sendMessage(from, {image: {url: `https://sewa4yeye.herokuapp.com/api/nsfw/${command}?apikey=BetaBotz`}})
}
break

case 'yuri': case 'kiss': case 'cum': case 'futanari': case 'hentai': 
case 'eroyuri': case 'eron': case 'erok': case 'ero': case 'solo': 
case 'erokemo':  case 'fox_girl': case 'feet': case 'les': case 'feed': case 'bj':{
if(isStop) return ('khsus private chat bot')
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
              let waifu = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
              aqua.sendMessage(m.chat, { image: waifu, caption: `${q}` }, { quoted: m})
}
break
				

case 'cyberspace': case 'games': case 'pubg': case 'islamic': case 'mountain':
case 'programming': case 'technology': case 'tatasurya':  case 'hekel': 
case 'motor': case 'mobil': case 'aesthetic': case 'wallhp': case 'anjing':
case 'kucing': case 'keneki': case 'megumin': case 'yotsuba': case 'kartun':
case 'chiho': case 'tejina': case 'yumeko': case 'shinomiya': case 'pentol':
case 'toukachan': case 'akira': case 'itori': case 'kurumi':
case 'sagiri': case 'eba': case 'deidara': case 'itachi': case 'madara':{
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
aqua.sendMessage(from, {image: {url: `https://sewa4yeye.herokuapp.com/api/wallpaper/${command}?apikey=${betaapi}`}})
}
db.users[sender].limit -= 1 // -1 limit
break


          
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
ini_buffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
aqua.sendMessage(m.chat, {audio: ini_buffer, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
 
case 'setpp':
if (!isOwner) return reply (mess.owner)
if (!quoted) reply ( `Kirim/Reply Image Dengan Caption ${prefix + command}` )               
                   if (isImage || isQuotedImage) {
                     var media = await aqua.downloadAndSaveMediaMessage(quoted)
                     if (args[0] == '\'panjang\'') {
                       var { img } = await exports.generateProfilePicture(media)
                       await aqua.query({
                         tag: 'iq',
                         attrs: {
                           to: botNumber,
                           type:'set',
                           xmlns: 'w:profile:picture'
                         },
                         content: [
                           {
                             tag: 'picture',
                             attrs: { type: 'image' },
                             content: img
                           }
                         ]
                       })
                       fs.unlinkSync(media)
                       reply (`Sukses`)
                     } else {
                       var data = await aqua.updateProfilePicture(botNumber, { url: media })
                      fs.unlinkSync(media)
                       reply (`ok`)
                     }
                   } else {
                     reply (`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
                   }
break

case 'setppgc':
if (!isAdmins && !isOwner) return reply (mess.admin)
if (!quoted) reply ( `Kirim/Reply Image Dengan Caption ${prefix + command}` )               
                   if (isImage || isQuotedImage) {
                     var media = await aqua.downloadAndSaveMediaMessage(quoted)
                     if (args[0] == '\'panjang\'') {
                       var { img } = await exports.generateProfilePicture(media)
                       await aqua.query({
                         tag: 'iq',
                         attrs: {
                           to: m.chat,
                           type:'set',
                           xmlns: 'w:profile:picture'
                         },
                         content: [
                           {
                             tag: 'picture',
                             attrs: { type: 'image' },
                             content: img
                           }
                         ]
                       })
                       fs.unlinkSync(media)
                       reply (`Sukses`)
                     } else {
                       var data = await aqua.updateProfilePicture(m.chat, { url: media })
                      fs.unlinkSync(media)
                       reply (`ok`)
                     }
                   } else {
                     reply (`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil grub`)
                   }
break

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
 case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 🙉','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					aqua.sendMessage(m.chat, { text: keh }, { quoted: m })
					break



case 'kapan':
case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','YNTKTS','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					aqua.sendMessage(m.chat, { text: koh }, { quoted: m })
					break

					

case 'apakah':
apakah = body.slice(1)
					const apa =['iya dong jelas itu','YNTKTS','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak 🙀','Haha mna mungkin 😎']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					aqua.sendMessage(m.chat, { text: kah }, { quoted: m })
					break
					


case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					aqua.sendMessage(m.chat, { text: mana }, { quoted: m })
					break
					


case 'goblokcek': case 'jelekcek': case 'rate':case 'haram':case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
aqua.sendMessage(m.chat, { text: yn+'%'}, { quoted: m })
db.users[sender].limit -= 1 // -1 limit
break

case'readmore': case 'more':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  reply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break

case 'berkas':
case 'pile':
if (isGroup) return reply ( mess.private)
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari file apa kak*")
sendfile = `${q}`
anuu = fs.readFileSync(sendfile)
aqua.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})  
break 

case 'getcase':
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
if (!q) return reply ("*Mau nyari Case apa kak*") 
let nana = await getCase(q)
reply (nana)
break

case 'getidgc':
if (!isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

   case 'afk': {
   	if (!isGroup) return reply(mess.group)
let user = global.db.users[sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
       

 case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
        	if (!isGroup) return reply(mess.group)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(sender))) return reply ( 'Kamu masih didalam game')
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await aqua.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await aqua.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
case 'delttc': case 'delttt': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
       	if (!isGroup) return reply(mess.group)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            aqua.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
            } else return '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break


case 'suitpvp': case 'suit': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
	if (!isGroup) return reply(mess.group)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await aqua.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) aqua.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    
            
case 'sc': {
reply(`
👾 Script Ori : https://github.com/DikaArdnt/Hisoka-Morou
🌐 Penyusun Script : Takimtod && KahfzXzyy
`)
            }
            break

case 'intro': {
reply(`
𒊹︎︎︎ 𝙸𝙽𝚃𝚁𝙾 𝙳𝚄𝙻𝚄 𒊹︎︎︎

┌ > ɴᴀᴍᴀ   : 
┌ > ᴀsᴀʟ       : 
┌ > ᴜsɪᴀ         : 
┌ > ᴊ. ᴋᴇʟᴀᴍɪɴ  : 
`)
            }
            break

            case 'chatsbot': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply ( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
    aqua.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
    aqua.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
    aqua.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
    aqua.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
    aqua.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
    aqua.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
    aqua.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
            }
            break
	    case 'family100': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
		if (!isGroup) return reply(mess.group)
if ('family100'+m.chat in _family100) {
    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
    return false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
    id: 'family100'+m.chat,
    pesan: await aqua.sendText(m.chat, hasil, m),
    ...random,
    terjawab: Array.from(random.jawaban, () => false),
    hadiah: 6,
}
            }
            break
           
 

case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
            if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            if (!m.quoted && !text) return reply ( `Kirim/reply text dengan caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            texx = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(texx.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            }
            break
            

case 'tebak': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            	if (!isGroup) return reply(mess.group)
if (!text) return reply ( `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
    if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply ( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    let msg = await aqua.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
    aqua.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
    tebaklagu[sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    aqua.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, aqua.user.name, m)
    delete tebaklagu[sender.split('@')[0]]
    
    }
} else if (args[0] === 'gambar') {
    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply ( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    aqua.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
    tebakgambar[sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    aqua.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, aqua.user.name, m)
    delete tebakgambar[sender.split('@')[0]]
    
    }
} else if (args[0] === 'kata') {
    if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply ( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    aqua.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkata[sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    aqua.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, aqua.user.name, m)
    delete tebakkata[sender.split('@')[0]]
    
    }
} else if (args[0] === 'kalimat') {
    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply ( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    aqua.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkalimat[sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    aqua.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, aqua.user.name, m)
    delete tebakkalimat[sender.split('@')[0]]
    
    }
} else if (args[0] === 'lirik') {
    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply ("Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    aqua.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaklirik[sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    aqua.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, aqua.user.name, m)
    delete tebaklirik[sender.split('@')[0]]
    
    }
} else if (args[0] === 'lontong') {
    if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply ( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    aqua.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
    caklontong[sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[sender.split('@')[0]] = result.deskripsi
    })
    await sleep(60000)
    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    aqua.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, aqua.user.name, m)
    delete caklontong[sender.split('@')[0]]
		    delete caklontong_desk[sender.split('@')[0]]
		
    }
}
            }
            db.users[sender].limit -= 1 // -1 limit
            break
            

case 'kuismath': case 'math': {
            	if (!isGroup) return reply(mess.group)
if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply ( "Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./lib/math')
if (!text) return reply ( `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
aqua.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
    kuismath[sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    reply("Waktu Habis\nJawaban: " + kuismath[sender.split('@')[0]])
    delete kuismath[sender.split('@')[0]]
}
            }
            break
            

case 'jodohku': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
            if (!isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let me = sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, jawab, aqua.user.name, m, {mentions: ments})
            }
            break
            

case 'jadian': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
            if (!isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, jawab, aqua.user.name, m, {mentions: menst})
            }
            break
            

case 'join2': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply ( 'Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply ( 'Link Invalid!')
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await aqua.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
           

case 'out2': {
if (!isOwner) return reply(mess.owner)
await aqua.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	


case 'kick': {
		if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isOwner) return reply (mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
	break
	

case 'add': {
		if (args[0] == '08') return reply('Awali nomor dengan 62 atau reply pesan user')
		if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isOwner) return reply (mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
	break
	

case 'promote': {
		if (args[0] == '08') return reply('Awali nomor dengan 62 atau reply pesan user' )
		if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isOwner) return reply (mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
	break
	

case 'demote': {
		if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isOwner) return reply (mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
	break


case 'shutdown':
 if (!isOwner) return 
reply(`Bye...`)
 await sleep(3000)
 process.exit()
 break
 

case 'restart':
 if (!isOwner) return 
reply(mess.wait)
 exec(`node index`)
 reply('_Restarting Bot Success_')
 break
       

 case 'block': {
		if (!isOwner) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break


case 'ban': case 'banned': {
			if (!isOwner) return reply(mess.owner)
			let who
			if (isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = true
			m.reply('Sukse Membanned '+who)
		}
		break
		

case 'unban': case 'unbanned': {
			if (!isOwner) return reply(mess.owner)
			let who
			if (isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = false
			m.reply('Sukses Unban '+who)
		}
		break
        

case 'unblock': {
		if (!isOwner) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await aqua.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    

case 'setname': case 'setsubject': {
if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isOwner) return reply (mess.admin)
if (!text) throw 'Text ?'
await aqua.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          

case 'setdesc': case 'setdesk': {
if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins) return reply (mess.admin)
await aqua.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break

         
 case 'setppbot': {
if (!isOwner) return reply(mess.owner)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await aqua.downloadAndSaveMediaMessage(quoted)
await aqua.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break


case 'setppgroup': case 'setppgrup': {
if (!isGroup) return reply(mess.group)
if (!isAdmins) return reply (mess.admin)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await aqua.downloadAndSaveMediaMessage(quoted)
await aqua.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break


case 'grubinfo':
case 'grupinfo':
if (!isGroup) return reply(mess.group)
try{
 var pic = await aqua.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P I N F O*

*System* 
AntiLink : *${isAntiLink ? 'Aktif✅' : 'Mati❌'}*
AntiVirtex : *${isAntiVirtex ? 'Aktif✅' : 'Mati❌'}*
Mute : *${db.chats[m.chat].mute ? 'Aktif✅' : 'Mati❌'}* 
AntiWaMe : *${isAntiWaMe ? 'Aktif✅' : 'Mati❌'}*

*Name :* ${groupName}
*ID Grup :* ${m.chat}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Owner Grup :* @${groupMetadata.owner.split('@')[0]}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${participants.length}
*Desc :* 
${groupMetadata.desc}`
ds = await getBuffer(pic)
aqua.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
           

case 'tagall': {
	if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)              
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `➟ @${mem.id.split('@')[0]}\n`
}
aqua.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break


case 'hidetag': {
            if (!isGroup) return reply(mess.group)
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
            aqua.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    

case 'style': case 'styletext': {      
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
    teks += `➟ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
	    }
	db.users[sender].limit -= 1 // -1 limit
	    break
              


 case 'vote': {
            if (!isGroup) return reply(mess.group)
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅??𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
text: teks_vote,
footer: aqua.user.name,
buttons: buttonsVote,
headerType: 1
            }
            aqua.sendMessage(m.chat, buttonMessageVote)
	    }
            break
              


 case 'upvote': {
            if (!isGroup) return reply(mess.group)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
text: teks_vote,
footer: aqua.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
             }
            aqua.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break



case 'devote': {
            if (!isGroup) return reply(mess.group)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅??𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
text: teks_vote,
footer: aqua.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
            }
            aqua.sendMessage(m.chat, buttonMessageDevote)
	}
            break
 


case 'cekvote':
if (!isGroup) return reply(mess.group)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${aqua.user.id}
`
aqua.sendTextWithMentions(m.chat, teks_vote, m)
break
		

case 'deletevote': case'delvote': case 'hapusvote': {
            if (!isGroup) return reply(mess.group)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break

               

case 'gc': case 'group': case 'grup': {
if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins) return reply (mess.admin)
if (args[0] === 'close'){
    await aqua.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await aqua.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `Mode Group`, aqua.user.name, m)

             }
            }
            break
            


case 'editinfo': {
if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins) return reply (mess.admin)
             if (args[0] === 'open'){
await aqua.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
await aqua.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `Mode Edit Info`, aqua.user.name, m)

            }
            }
            break


case 'antilink':
	        if (!isGroup) return reply(`Khusus Grup`)
			if (!isAdmins && !isOwner) return reply(`Khusus Admin Om`)
			if (!isBotAdmins) return reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur anti link')
						aqua.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur anti link')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					
					
					
case 'autoread':
	if(!isOwner) return reply(mess.owner)
					if (args[0] === 'on') {
						if (isAutoRead) return reply('Sudah Aktif Kak')
						autoreadd.push(botNumber)
						fs.writeFileSync('./database/autoread.json', JSON.stringify(autoreadd))
						reply('Sukses mengaktifkan autoread')
					} else if (args[0] === 'off') {
						if (!isAutoRead) return reply('Sudah Mati Kak')
						var ini = autoreadd.indexOf(botNumber)
						autoreadd.splice(ini, 1)
						fs.writeFileSync('./database/autoread.json', JSON.stringify(autoreadd))
						reply('Sukses menonaktifkan autoread')
					 }else if (!q) {
  aqua.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
  {buttonId: `${prefix}autoread on`, buttonText: {displayText: 'On' },type: 1},
  {buttonId: `${prefix}autoread off`, buttonText: { displayText: 'Off' },type: 1}]);
   }
       break

case 'autoketik':
	if(!isOwner) return reply(mess.owner)
					if (args[0] === 'on') {
						if (isAutoKetik) return reply('Sudah Aktif Kak')
						autoketikk.push(botNumber)
						fs.writeFileSync('./database/autoketik.json', JSON.stringify(autoketikk))
						reply('Sukses mengaktifkan Autoketik')
					} else if (args[0] === 'off') {
						if (!isAutoKetik) return reply('Sudah Mati Kak')
						var ini = autoketikk.indexOf(botNumber)
						autoketikk.splice(ini, 1)
						fs.writeFileSync('./database/autoread.json', JSON.stringify(autoketikk))
						reply('Sukses menonaktifkan autoketik')
					 }else if (!q) {
  aqua.sendButMessage(from, `MODE AUTOKETIK`, `Silahkan pilih salah satu`, [
  {buttonId: `${prefix}autoketik on`, buttonText: {displayText: 'On' },type: 1},
  {buttonId: `${prefix}autoketik off`, buttonText: { displayText: 'Off' },type: 1}]);
   }
       break;


case 'yahh':{
aqua.sendButMessage(from, `Peh ganti nomor`, `y`, [
  {buttonId: `${prefix}t`, buttonText: { displayText: 'Off' },type: 1}])
}
break

case 'antivirtex':
	        if (!isGroup) return reply(`Khusus Grup`)
			if (!isAdmins && !isOwner) return reply(`Khusus Admin Om`)
			if (!isBotAdmins) return reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiVirtex) return reply('Sudah Aktif Kak')
						antivirtex.push(m.chat)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukses mengaktifkan fitur antivirtex')
						aqua.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti virtex\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiVirtex) return reply('Sudah Mati Kak')
						var inii = antivirtex.indexOf(m.chat)
						antivirtex.splice(inii, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukses menonaktifkan fitur anti virtex ')
					} else if (!q){
 reply(`Pilih antivirtex On / Off `)
					}
					break 
					

case 'antiwame':
	        if (!isGroup) return reply(`Khusus Grup`)
			if (!isAdmins && !isOwner) return reply(`Khusus Admin Om`)
			if (!isBotAdmins) return reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiWaMe) return reply('Sudah Aktif Kak')
						antiwame.push(m.chat)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Sukses mengaktifkan fitur antiwame')
						aqua.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiWaMe) return reply('Sudah Mati Kak')
						var inii = antiwame.indexOf(m.chat)
						antiwame.splice(inii, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Sukses menonaktifkan fitur anti wa.me ')
					} else if (!q){
 reply(`Pilih antiwame On / Off `)
					}
					break 
				


case 'mute': {
if (!isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply (mess.admin)
if (args[0] === "on") {
if (db.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.chats[m.chat].mute = true
reply(`${aqua.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.chats[m.chat].mute = false
reply(`${aqua.user.name} telah di unmute di group ini !`)
} else {
 let buttons = [
        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `Mute Bot`, aqua.user.name, m)
}
             }
             break


case 'autobio': {
if (!isOwner) return reply(mess.owner)
if (args[0] === "on") {
if (db.settings[botNumber].autobio) return reply(`Sudah Aktif Sebelumnya`)
db.settings[botNumber].autobio = true
reply(`Sukses`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].autobio) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.settings[botNumber].autobio = false
reply(`Sukses`)
} else {
 let buttons = [
        { buttonId: 'autobio on', buttonText: { displayText: 'On' }, type: 1 },
        { buttonId: 'autobio off', buttonText: { displayText: 'Off' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `Auto Bio`, aqua.user.name, m)
}
             }
             break


  
     
case 'linkgroup': case 'linkgc': {
if (!isGroup) return reply(mess.group)
let response = await aqua.groupInviteCode(m.chat)
aqua.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            

case 'ephemeral': {
if (!isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins) return reply (mess.admin)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
    await aqua.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
    await aqua.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
            }
            break
  
case  'dell':
if(!mentionByReply) return reply ("Reply pesan")
if (mentionByReply == botNumber) {
aqua.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotAdmins){
aqua.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
} 
break
          

case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
aqua.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            

case 'bcuser':{
	if(!q) return reply (`mau bc apa`)
	         if (!isOwner && !itsMe) throw mess.owner
	reply (mess.wait)
for(var i of user){
await sleep(8000)  
aqua.sendMessage(i, { text : `${q}`}, { quoted: floc })      
}
reply(`Sukses Mengirim`)
}
break

case 'bcgc': case 'bcgroup': {
                if (!isOwner && !itsMe) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} kimtod`
                let getGroups = await aqua.groupFetchAllParticipating()
                let groupps = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groupps.map(v => v.id)
                reply(mess.wait)
                for (var i of anu) {
                    await sleep(9000)  
                    aqua.sendTextWithMentions(i, `${text}`, fbc, { contextInfo: { mentionedJid: [i] }})
                     //aqua.sendText(i, `${text}`, floc)  
                     //aqua.sendMessage(i, { text : q ?, mentions}, { quoted: floc })                                   
                     //  aqua.sendText(i, `${text}`)
                    }
                reply(`Sukses Mengirim Broadcast`)
            }
            break


case 'bcimg': case 'bcvidio': case 'bcaudio': {
if (!isOwner) return reply(mess.owner)
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
    await sleep(1500)
    let butoon = [{
urlButton: {
    displayText: `${global.ganti}`,
    url: `${global.web}`
}
            },
            {
quickReplyButton: {
    displayText: '📚 VITUR BOT',
    id: 'menu'
}
            }]
    let media = await aqua.downloadAndSaveMediaMessage(quoted)
    let buffer = fs.readFileSync(media)
    if (/webp/.test(mime)) {
    aqua.sendMessage(i, { sticker: { url: media } }, { quoted: fkontak })
    } else if (/image/.test(mime)) {
    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
    aqua.send5ButImg(i, junn, `${global.footer}`, buffer, butoon)
    } else if (/video/.test(mime)) {
    let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
    aqua.send5Vid(i, junn, `${global.footer}`, buffer, butoon)
    } else if (/audio/.test(mime)) {
    aqua.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : fvn })
    } else {
    reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
    }
    await fs.unlinkSync(media)
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            

case 'bctext': {
                if (!isOwner) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} oioi semua`
                let anu = await store.chats.all().map(v => v.id)        
		for (let yoi of anu) {
		    await sleep(5000)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))    
                      let txtt = `${text}`
                      aqua.sendMessage(yoi, { text : txtt }, { quoted: floc })                                                         
		}
		reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
           

case 'infochat': {
if (!m.quoted) reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
    let read = i.readTimestamp
    let unread = i.receiptTimestamp
    let waktu = read ? read : unread
    teks += `➟ @${i.userJid.split('@')[0]}\n`
    teks += ` ┗━➟ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➟ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
aqua.sendTextWithMentions(m.chat, teks, m)
            }
            break
            

case 'q': case 'quoted': {
            	    if (!isOwner) throw mess.owner
		if (!m.quoted) return reply('Reply Pesannya!!')
		let wokwol = await aqua.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            

case 'listpc': {
 let anu = await totalchat.filter(v => v.endsWith('.net'))
 let teks = `✅ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
     let nama = store.messages[i].array[0].pushName
     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 aqua.sendTextWithMentions(m.chat, teks, m)
             }
             break


case 'listgc': {
 let anu = await totalchat.filter(v => v.endsWith('@g.us'))
 let teks = `✅ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
     let metadata = await aqua.groupMetadata(i)
     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 aqua.sendTextWithMentions(m.chat, teks, m)
             }
             break
             

case 'listonline': case 'liston': {
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    aqua.sendText(m.chat, 'List Online:\n\n' + online.map(v => '➟ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break


case 'ttp':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh #ttp ${pushname}`)
var anjay = `https://hadi-api.herokuapp.com/api/canvas/ttp?text=${text}`
sendStickerUrl(m.chat, anjay)
db.users[sender].limit -= 1 // -1 limit
break



case 'ttpred':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=red`
sendStickerUrl(m.chat, anjay)
db.users[sender].limit -= 1 // -1 limit
break


case 'ttpblue':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=blue`
sendStickerUrl(m.chat, anjay)
db.users[sender].limit -= 1 // -1 limit
break


case 'ttpyellow':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=yellow`
sendStickerUrl(m.chat, anjay)
break


case 'ttpgreen':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=green`
sendStickerUrl(m.chat, anjay)
break


case 'ttppurple':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=purple`
sendStickerUrl(m.chat, anjay, m, { packname: global.packname, author: global.author })
break


case 'ttppink':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=deeppink`
sendStickerUrl(m.chat, anjay)
break
	
	
case 'ttpviolet':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=violet`
sendStickerUrl(m.chat, anjay)
break


case 'ttpmagenta':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=magenta`
sendStickerUrl(m.chat, anjay)
break
	
	
	
case 'ttp2': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=white`
sendStickerUrl(m.chat, buffer)
break


case 'ttp2red': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=red`
sendStickerUrl(m.chat, buffer, {quoted: m})
break

case 'ttp2blue': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=blue`
sendStickerUrl(m.chat, buffer)
break

case 'ttp2green': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=green`    
sendStickerUrl(m.chat, buffer)
break
	
case 'ttp2yellow': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=yellow`
sendStickerUrl(m.chat, buffer)
break

case 'ttp2pink': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=deeppink`
sendStickerUrl(m.chat, buffer)
break


case 'ttp2magenta': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=magenta`
sendStickerUrl(m.chat, buffer)
break
	
case 'ttp2purple': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=purple`
sendStickerUrl(m.chat, buffer)
break

case 'ttp2violet': 
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!q)return reply (`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=violet`
sendStickerUrl(m.chat, buffer)
break


case 'smeme': case 'stickermeme': case 'stickmeme': {
	try{
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
arg = args.join(' ')
mee = await aqua.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await aqua.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
} catch (err){
return reply ('Erorr, Jangan Memakai Emoji atau Tanda Baca')
}
}
break


case 'facebook': case 'fbdl': case 'fb': 
try{
let {MessageType} = require('@adiwajshing/baileys')
if (!args[0]) return reply ('Putting *URL* Facebook..')
if (!args[0].includes("facebook")) return reply (`Url is wrong..\n\n*Example:*\n${prefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
let url = json.videoUrl
reply (mess.wait)
if (url) await aqua.sendMedia2 (from, url, m, {caption: "*FACEBOOK*"})
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
else reply ('Link download tidak ditemukan')
} catch (e){
    let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
    let json = await res.json()
    if (!json.status) reply ( json)
    await reply (mess.wait)
    await aqua.sendMedia2 (from, json.data[1].url, m, {caption: "*FACEBOOK*"})
}
break

case 'attp':
 try {
 if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (args.length == 0) return reply(`Example: ${prefix + command} aoakowk`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await aqua.sendMessage(m.chat, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m }, { packname: global.packname, author: global.author })
} catch (err) {
 console.log(err)
 reply(`Maap sedang error coba lagi besok`)            
}
db.users[sender].limit -= 1 // -1 limit
break


case 'memegen': case 'smeme2': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
m.reply(mess.wait)
arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
let abeb = await aqua.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./lib/uploader')
let abe = await TelegraPh(abeb)
let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
let mengmeme = await aqua.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(mengmeme)
}
break

            
case 'stiker': case 'sticker': case 's': case 'setikerin': case 'sgif': {            	
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
   if (!quoted) return reply (`Balas Video/Image Dengan Caption ${prefix + command}`)
    if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await aqua.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await aqua.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
            } else {
throw reply (`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
            }
            db.users[sender].limit -= 1 // -1 limit
            break
                        

case 'emojimix': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
	        if (!text) throw `Example : ${prefix + command} 🤣+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await aqua.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	db.users[sender].limit -= 1 // -1 limit
	    break
            
case 'toimage': case 'toimg': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!quoted) return reply ('Reply Image')
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply(mess.wait)
let media = await aqua.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) throw err
    let buffer = fs.readFileSync(ran)
    aqua.sendMessage(m.chat, { image: buffer }, { quoted: m })
    fs.unlinkSync(ran)
})
            }
            break
	        
case 'tomp4': case 'tovideo': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!quoted) return reply ('Reply Image')
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await aqua.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await aqua.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            
case 'toaud': case 'toaudio': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            aqua.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            
case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            aqua.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${aqua.user.name}.mp3`}, { quoted : m })
            }
            break
            
case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            aqua.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await aqua.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await aqua.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
	        
case 'tourl': {
reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await aqua.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    reply(util.format(anu))
} else if (!/image/.test(mime)) {
    let anu = await UploadFileUgu(media)
    reply(util.format(anu))
}
await fs.unlinkSync(media)
            }
            break
            

	    
case 'yts': case 'ytsearch': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
    teks += `➟ No : ${no++}\n➟ Type : ${i.type}\n➟ Video ID : ${i.videoId}\n➟ Title : ${i.title}\n➟ Views : ${i.views}\n➟ Duration : ${i.timestamp}\n➟ Upload At : ${i.ago}\n➟ Author : ${i.author.name}\n➟ Url : ${i.url}\n\n─────────────────\n\n`
}
aqua.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        
case 'google': {
        	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `➟ *Title* : ${g.title}\n`
teks += `➟ *Description* : ${g.snippet}\n`
teks += `➟ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
       
 case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: images },
    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
    footer: aqua.user.name,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    
	    
case 'ytmp3': case 'ytaudio': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))

aqua.sendMessage(m.chat, {audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` ,
contextInfo: {
externalAdReply: {
title: 'play music', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/5ad51566ce5ae7ac710b7.jpg')).buffer(),
mediaUrl: `${q}`
}}}, { quoted: m })
            }
            break
            
case 'ytmp4': case 'ytvideo': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
aqua.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➟ Title : ${media.title}\n➟ File Size : ${media.filesizeF}\n➟ Url : ${isUrl(text)}\n➟ Ext : MP3\n➟ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    
case 'getmusic': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
aqua.sendImage(m.chat, media.thumb, `➟ Title : ${media.title}\n➟ File Size : ${media.filesizeF}\n➟ Url : ${isUrl(text)}\n➟ Ext : MP3\n➟ Resolusi : ${args[1] || '128kbps'}`, m)
aqua.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            
case 'getvideo': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
aqua.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➟ Title : ${media.title}\n➟ File Size : ${media.filesizeF}\n➟ Url : ${isUrl(text)}\n➟ Ext : MP3\n➟ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
           
           

	    case 'couple': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
aqua.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
aqua.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
            db.users[sender].limit -= 2 // -1 limit
	    break
            

case 'coffe': case 'kopi': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            let buttons = [
    {buttonId: `coffe`, buttonText: {displayText: '𝐍𝐞𝐱𝐭'}, type: 1}
]
let buttonMessage = {
    image: { url: 'https://coffee.alexflipnote.dev/random' },
    caption: `☕ Random Coffe`,
    footer: aqua.user.name,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            db.users[sender].limit -= 1 // -1 limit
            break


case 'guralogo': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
	reply(mess.wait)
	if (args.length < 1) return reply(`Masukan Nama!! Contoh\n ${prefix + command} gatau`)
	anj = await getBuffer(`https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${text}`)
	let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
]
let buttonMessage = {
    image: anj,
    caption: `Gura ☕`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 5
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
}
db.users[sender].limit -= 1 // -1 limit
break


case 'sadboylogo': {
	reply(mess.wait)
	if (args.length < 1) return reply(`Masukan Nama!! Contoh\n ${prefix + command} kom Tod`)
  text11 = args[0]
  text22 = args[1]
	ngen = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${text11}&text22=${text22}`)
	let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
]
let buttonMessage = {
    image: ngen,
    caption: `Sadboy Logo ☕`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 5
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break

case 'logo1': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
	reply(mess.wait)
	if (args.length < 1) return reply(`Masukan Nama!! Contoh\n ${prefix + command} gatau`)
	asu = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${text}`)
	let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
]
let buttonMessage = {
    image: asu,
    caption: ` Logo ☕`,
    footer: `Created Bot By ${global.pengguna}`,
    buttons: buttons,
    headerType: 5
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
}
db.users[sender].limit -= 1 // -1 limit
break


case 'wikimedia': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
if (!text) throw 'Mau cari apa kak'
		let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: result.image },
    caption: `➟ Title : ${result.title}\n➟ Source : ${result.source}\n➟ Media Url : ${result.image}`,
    footer: aqua.user.name,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            db.users[sender].limit -= 1 // -1 limit
            break


case 'meme': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
	bufff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')
	let buttons = [
    {buttonId: `meme`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
    image: bufff ,
    caption: `meme ${global.botnma}`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
	}
	break


case 'darkjoke': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
	dp = await getBuffer ('https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=IkyOgiwara')
	let buttons = [
    {buttonId: `darkjoke`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
    image: dp,
    caption: `Dark Cuy`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
	}
	break


case 'ppcouple': case 'ppcp': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 2 // -1 limit
	anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buff2 = await getBuffer(anu.result.female)
let buttons = [
    {buttonId: `ppcp`, buttonText: {displayText: 'Next'}, type: 1}
]

let buttonMessage = {
    image: buff1 ,
    caption: `Cowok Nya`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
await sleep(1000)
let buttonMessagee = {
    image: buff2 ,
    caption: `Cwek Nya`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessagee, { quoted: m })
}
break
            

case 'quotesanime': case 'quoteanime': {
            	if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.prem)
		let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
    footer: 'Press The Button Below',
    buttons: buttons,
    headerType: 2
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            db.users[sender].limit -= 1 // -1 limit
            break
	       
 
case 'pornhub':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
	if(!q) return reply (`Penggunaan ${prefix + command} teks`)
	reply (mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => aqua.sendMessage(m.chat, { image: { url: data }, caption: `Nih Hasil Dari: text` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dbox':case 'drapwater':case 'lion2':case 'papercut':
case 'transformer':case 'herryp':case 'neondevil':case '3dstone':
case '3davengers':case 'thunder':case 'window':case 'graffiti':case 'pornhub':
case 'glitch':case 'blackping':case 'glitch3':case 'glitch2':case '3dspace':
case 'lion':case '3dneon':case 'neon':case 'greenneon':case 'bokeh':
case 'hollographic':case 'bear':case 'wolf':case 'joker':case 'dropwater':
case 'neonlight':case 'thewall':case 'natural':case 'carbon':case 'pencil': {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} kimto`
reply(mess.wait)
let link
if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
if (/drapwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/herryp/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/window/.test(command)) link = 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html'
if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/blackping/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
if (/3dneon/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/neon/.test(command)) link = 'https://textpro.me/neon-text-effect-online-879.html'
if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
if (/bokeh/.test(command)) link = 'https://textpro.me/bokeh-text-effect-876.html'
if (/hollographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
if (/bear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
if (/thewall/.test(command)) link = 'https://textpro.me/break-wall-text-effect-871.html'
if (/natural/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
if (/carbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
   let anu = await textpro(link, text)
         aqua.sendMessage(m.chat, { image: { url: anu }, caption: `Nih Hasil Dari: text` }, { quoted: m })
             }
             break

	    
	    
case 'nomerhoki': case 'nomorhoki': {
		if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!Number(text)) throw `Example : ${prefix + command} 628388024064`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nomor HP :* ${anu.message.nomer_hp}\n➟ *Angka Shuzi :* ${anu.message.angka_shuzi}\n➟ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n➟ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            

case 'artimimpi': case 'tafsirmimpi': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Mimpi :* ${anu.message.mimpi}\n➟ *Arti :* ${anu.message.arti}\n➟ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            

case 'ramalanjodoh': case 'ramaljodoh': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama Anda :* ${anu.message.nama_anda.nama}\n➟ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➟ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➟ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➟ *Hasil :* ${anu.message.result}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
           

 case 'ramalanjodohbali': case 'ramaljodohbali': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama Anda :* ${anu.message.nama_anda.nama}\n➟ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➟ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➟ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➟ *Hasil :* ${anu.message.result}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'suamiistri': {
            	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama Suami :* ${anu.message.suami.nama}\n➟ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n➟ *Nama Istri :* ${anu.message.istri.nama}\n➟ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n➟ *Hasil :* ${anu.message.result}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama Anda :* ${anu.message.nama_anda.nama}\n➟ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➟ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➟ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➟ *Sisi Positif :* ${anu.message.sisi_positif}\n➟ *Sisi Negatif :* ${anu.message.sisi_negatif}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'artinama': {
if (!text) throw `Example : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama :* ${anu.message.nama}\n➟ *Arti :* ${anu.message.arti}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
         

   case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama :* ${anu.message.nama}\n➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Life Path :* ${anu.message.life_path}\n➟ *Destiny :* ${anu.message.destiny}\n➟ *Destiny Desire :* ${anu.message.destiny_desire}\n➟ *Personality :* ${anu.message.personality}\n➟ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            

case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
aqua.sendImage(m.chat,  anu.message.gambar, `➟ *Nama Anda :* ${anu.message.nama_anda}\n➟ *Nama Pasangan :* ${anu.message.nama_pasangan}\n➟ *Sisi Positif :* ${anu.message.sisi_positif}\n➟ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            

case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Tanggal Pernikahan :* ${anu.message.tanggal}\n➟ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            

case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Lahir :* ${anu.message.hari_lahir}\n➟ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            

case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Lahir :* ${anu.message.hari_lahir}\n➟ *Rezeki :* ${anu.message.rejeki}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Lahir :* ${anu.message.hari_lahir}\n➟ *Pekerjaan :* ${anu.message.pekerjaan}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Analisa :* ${anu.message.analisa}\n➟ *Angka Akar :* ${anu.message.angka_akar}\n➟ *Sifat :* ${anu.message.sifat}\n➟ *Elemen :* ${anu.message.elemen}\n➟ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            

case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Analisa :* ${anu.message.analisa}\n➟ *Sektor :* ${anu.message.sektor}\n➟ *Elemen :* ${anu.message.elemen}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendImage(m.chat, anu.message.image, `➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Simbol Tarot :* ${anu.message.simbol_tarot}\n➟ *Arti :* ${anu.message.arti}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama :* ${anu.message.nama}\n➟ *Lahir :* ${anu.message.tahun_lahir}\n➟ *Gender :* ${anu.message.jenis_kelamin}\n➟ *Angka Kua :* ${anu.message.angka_kua}\n➟ *Kelompok :* ${anu.message.kelompok}\n➟ *Karakter :* ${anu.message.karakter}\n➟ *Sektor Baik :* ${anu.message.sektor_baik}\n➟ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            

case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Kala Tinantang :* ${anu.message.kala_tinantang}\n➟ *Info :* ${anu.message.info}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Hasil :* ${anu.message.result}\n➟ *Info :* ${anu.message.info}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
           

 case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Hari Lahir :* ${anu.message.hari_lahir}\n➟ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➟ *Hari Naas :* ${anu.message.hari_naas}\n➟ *Info :* ${anu.message.catatan}\n➟ *Catatan :* ${anu.message.info}`, m)
            }
            break
            

case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Hari Lahir :* ${anu.message.hari_lahir}\n➟ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➟ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Hari Lahir :* ${anu.message.hari_lahir}\n➟ *tanggal Lahir :* ${anu.message.tgl_lahir}\n➟ *Arah Rezeki :* ${anu.message.arah_rejeki}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama :* ${anu.message.nama}\n➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n➟ *Hasil :* ${anu.message.result}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Tanggal :* ${anu.message.tanggal}\n➟ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n➟ *Watak Hari :* ${anu.message.watak_hari}\n➟ *Naga Hari :* ${anu.message.naga_hari}\n➟ *Jam Baik :* ${anu.message.jam_baik}\n➟ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            

case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama :* ${anu.message.nama}\n➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            

case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Nama :* ${anu.message.nama}\n➟ *Lahir :* ${anu.message.tgl_lahir}\n➟ *Hasil :* ${anu.message.result}`, m)
            }
            break
           

 case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Tanggal :* ${anu.message.tgl_memancing}\n➟ *Hasil :* ${anu.message.result}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Hasil :* ${anu.message.result}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
    ["capricorn", new Date(1970, 0, 1)],
    ["aquarius", new Date(1970, 0, 20)],
    ["pisces", new Date(1970, 1, 19)],
    ["aries", new Date(1970, 2, 21)],
    ["taurus", new Date(1970, 3, 21)],
    ["gemini", new Date(1970, 4, 21)],
    ["cancer", new Date(1970, 5, 22)],
    ["leo", new Date(1970, 6, 23)],
    ["virgo", new Date(1970, 7, 23)],
    ["libra", new Date(1970, 8, 23)],
    ["scorpio", new Date(1970, 9, 23)],
    ["sagittarius", new Date(1970, 10, 22)],
    ["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Zodiak :* ${anu.message.zodiak}\n➟ *Nomor :* ${anu.message.nomor_keberuntungan}\n➟ *Aroma :* ${anu.message.aroma_keberuntungan}\n➟ *Planet :* ${anu.message.planet_yang_mengitari}\n➟ *Bunga :* ${anu.message.bunga_keberuntungan}\n➟ *Warna :* ${anu.message.warna_keberuntungan}\n➟ *Batu :* ${anu.message.batu_keberuntungan}\n➟ *Elemen :* ${anu.message.elemen_keberuntungan}\n➟ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            

case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
aqua.sendText(m.chat, `➟ *Hasil :* ${anu.message}`, m)
            }
            break

           
			
case 'iqra': {
			if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		aqua.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
			if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
		if (args[0] === 'pdf') {
		reply(mess.wait)
		aqua.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		aqua.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		aqua.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		aqua.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		

case 'hadis': case 'hadist': {
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		

case 'alquran': {
			if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		aqua.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		

case 'tafsirsurah': {
			if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break

		   
case 'gemuk': case 'balikin': case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/gemuk/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/balikin/.test(command)) set = '-filter_complex "areverse"'
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
	if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[sender].limit -= 1 // -1 limit
reply(mess.wait)
let media = await aqua.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
aqua.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
            

case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.sticker[hash] = {
    text,
    mentionedJid: m.mentionedJid,
    creator: sender,
    at: + new Date,
    locked: false,
}
reply(`Done!`)
            }
            break
            

case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.sticker[hash]
reply(`Done!`)
            }
            break
            

case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
aqua.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            

case 'lockcmd': {
if (!isOwner) return reply(mess.owner)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) throw 'Hash not found in database'
global.db.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
            }
            break
            

case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            

case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
aqua.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            

case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            

case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    

case 'anonymous': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
urlButton: {
    displayText: `${global.ganti}`,
    url: `${global.web}`
}
            }, {
quickReplyButton: {
    displayText: 'Start Anonymous',
    id: 'start'
}
            }]
aqua.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await aqua.getName(sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, aqua.user.name, m)
            }
			break


case 'sendkontak': case 'sendcontact': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(sender))
if (!room) {
    let buttons = [
        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `_Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner_`)
    throw false
}
let profile = await aqua.profilePictureUrl(room.b)
let status = await aqua.fetchStatus(room.b)
let msg = await aqua.sendImage(room.a, profile, `Nama : ${await aqua.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
aqua.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            

case 'keluar': case 'leave': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(sender))
if (!room) {
    let buttons = [
        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `_Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner_`)
    throw false
}
reply('Ok')
let other = room.other(sender)
if (other) await aqua.sendText(other, `_Partner Telah Meninggalkan Sesi Anonymous_`, m)
delete this.anonymous[room.id]
if (command === 'leave') break
            }
            

case 'mulai': case 'start': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(sender))) {
    let buttons = [
        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `_Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda_`, aqua.user.name, m)
    throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
if (room) {
    let buttons = [
        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await aqua.sendButtonText(room.a, buttons, `_Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan_`, aqua.user.name, m)
    room.b = sender
    room.state = 'CHATTING'
    await aqua.sendButtonText(room.b, buttons, `_Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan_`, aqua.user.name, m)
} else {
    let id = + new Date
    this.anonymous[id] = {
        id,
        a: sender,
        b: '',
        state: 'WAITING',
        check: function (who = '') {
            return [this.a, this.b].includes(who)
        },
        other: function (who = '') {
            return who === this.a ? this.b : who === this.b ? this.a : ''
        },
    }
    let buttons = [
        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `_Mohon Tunggu Sedang Mencari Partner_`, aqua.user.name, m)
}
break
            }
            

case 'next': case 'lanjut': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(sender))
if (!romeo) {
    let buttons = [
        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
    throw false
}
let other = romeo.other(sender)
if (other) await aqua.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
if (room) {
    let buttons = [
        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await aqua.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, aqua.user.name, m)
    room.b = sender
    room.state = 'CHATTING'
    await aqua.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, aqua.user.name, m)
} else {
    let id = + new Date
    this.anonymous[id] = {
        id,
        a: sender,
        b: '',
        state: 'WAITING',
        check: function (who = '') {
            return [this.a, this.b].includes(who)
        },
        other: function (who = '') {
            return who === this.a ? this.b : who === this.b ? this.a : ''
        },
    }
    let buttons = [
        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await aqua.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, aqua.user.name, m)
}
break
            }
            

case 'public': {
if (!isOwner) return reply(mess.owner)
aqua.public = true
reply('Sukse Ubah Ke mode public')
            }
            break


case 'self': {
if (!isOwner) return reply(mess.owner)
aqua.public = false
reply('Sukses Change To Self Usage')
            }
            break



case 'ssweb-hp': {
		if(args.length < 1) return reply(`Url Nya Mana?`)
		anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
	let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
]
let buttonMessage = {
    image: anu ,
    caption: `Ssweb Url ( HP )`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
  

case 'ssweb-pc': {
	if(args.length < 1) return reply(`Url Nya Mana?`)
	anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${text}&apikey=hardianto`)
let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
]
let buttonMessage = {
    image: anu ,
    caption: `Ssweb Url ( PC )`,
    footer: `${global.footer}`,
    buttons: buttons,
    headerType: 4
}
aqua.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break


case 'translate': case 'tr':
if (!isPremium && global.db.users[sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
					try {
					if (args.length < 1)return reply (`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
					if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) {
					translate(`${body.slice(10+args[0].length+1)}`, args[0])
					.then((res) => { reply (`${res}`) })
					} else {
					tolang = args[0]
					entah = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					translate(entah, tolang)
					.then((res) => { reply (`${res}`) })
					}
					} catch (e) {
					reply (`${e}`)
					}
					db.users[sender].limit -= 1 // -1 limit
					break


case 'kodebahasa':
pref = 1
let LANGUAGES = `
             *❲ KODE BAHASA ❳*
             
*${pref++}.* af: Afrikaans 
*${pref++}.* sq: Albanian
*${pref++}.* ar: Arabic
*${pref++}.* hy: Armenian
*${pref++}.* ca: Catalan 
*${pref++}.* zh: Chinese 
*${pref++}.* zh-cn: Chinese (Mandarin/China)
*${pref++}.* zh-tw: Chinese (Mandarin/Taiwan)
*${pref++}.* zh-yue: Chinese (Cantonese)
*${pref++}.* hr: Croatian
*${pref++}.* cs: Czech
*${pref++}.* da: Danish
*${pref++}.* nl: Dutch
*${pref++}.* en: English    
*${pref++}.* en-au: English (Australia)
*${pref++}.* en-uk: English (United Kingdom)
*${pref++}.* en-us: English (United States) 
*${pref++}.* eo: Esperanto 
*${pref++}.* fi: Finnish 
*${pref++}.* fr: French
*${pref++}.* de: German
*${pref++}.* el: Greek 
*${pref++}.* ht: Haitian Creole 
*${pref++}.* hi: Hindi 
*${pref++}.* hu: Hungarian 
*${pref++}.* is: Icelandic 
*${pref++}.* id: Indonesian 
*${pref++}.* it: Italian
*${pref++}.* ja: Japanese
*${pref++}.* ko: Korean
*${pref++}.* la: Latin
*${pref++}.* lv: Latvian
*${pref++}.* mk: Macedonian
*${pref++}.* no: Norwegian
*${pref++}.* pl: Polish
*${pref++}.* pt: Portuguese
*${pref++}.* pt-br: Portuguese (Brazil)
*${pref++}.* ro: Romanian
*${pref++}.* ru: Russian
*${pref++}.* sr: Serbian
*${pref++}.* sk: Slovak
*${pref++}.* es: Spanish 
*${pref++}.* es-es: Spanish (Spain)
*${pref++}.* es-us: Spanish (United States)
*${pref++}.* sw: Swahili
*${pref++}.* sv: Swedish
*${pref++}.* ta: Tamil
*${pref++}.* th: Thai
*${pref++}.* tr: Turkish
*${pref++}.* vi: Vietnamese 
*${pref++}.* cy: Welsh`
reply (LANGUAGES)
break



            
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
}, {
    speed: 0,
    total: 0,
    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
            }
            break
            

case 'owner': {
aqua.sendContact(m.chat, global.pemilik, m)
            }
            break

case 'creator': {
aqua.sendContact(m.chat, global.creator, m)
            }
            break
  
    

case 'tes':
reply(`Bot Aktif Kakk`)
break


case 'rules':
reply(` *SYARAT KETENTUAN BOT

1. ❌ DI LARANG MENYEPAM BOT DENGAN BUTTON YANG TERSEDIA
SANKSI = BLOCK 1 HARI ✅

2. ❌ DI LARANG SPAM BUG / VIRTEX DLL😡 
SANKSI = BLOCK ✅

3. ❌ DILARANG MEMBANDINGKAN BOT 😞 
SANKSI = BANNED ✅

4. ❌ DILARANG CALL BOT 
SANKSI = BLOCK ✅
      ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
ANDA DAPAT MENYEWA BOT INI KEDALAM GRUB SILAHKAN CHAT NO. OWNER DENGAN KETIK .owner
`)
     break

case 'limit':
case 'ceklimit': 
reply(` Limit Kamu Saat ini *${isPremium ? 'Unlimited' : `${global.db.users[sender].limit}`}*`)
break
           

case 'thanksto': case 'tqto': case 'tqtt': {
reply(`
🌟 *Thanks To*
────────────────────────

≻ Dika Ardnt  [BASE]
≻ Dittazz
≻ Takimtod
≻ KahfzXzyy
≻ Xyann && Iyann
≻ Para Creator Bot
≻ Dan Penyedia Modul lainnya
`)}
break 


case 'sewa':
case 'sewalonte':
case 'sewabbot': case 'sewabot': {
let tkm = [{
urlButton: {
    displayText: `${global.ganti}`,
    url: `${global.web}`
}
 }, {
quickReplyButton: {
    displayText: `1`,
    id: 'masukgcc'
}
}, {
quickReplyButton: {
    displayText: `2`,
    id: 'jadibot'
}
}, {
quickReplyButton: {
    displayText: `3`,
    id: 'jasarun'
}
            }]
kimt = `
1. *SEWA KE GRUB*
2. *JADI BOT*
3. *JASA RUN BOT*

`
aqua.send5ButImg(m.chat, kimt, `Silahkan Pilih Salah Satu`, thumbnya, tkm)
}
break 


case 'jadibot': {
	let btns = [{
urlButton: {
    displayText: `Chat Owner`,
    url: `${global.web}`
}
            }, {
quickReplyButton: {
    displayText: `Payment`,
    id: `${prefix}payment`
}
            }]
	textTemplateButtons(m.chat, `*───────────────────────*
◪ *J A D I   B O T*
│ 
├ 7 Hari
├ Rp. 10,000 Gopay/Dana
│
├ 30 Hari 
├ Rp. 20,000 Gopay/Dana
│
├ Permanen 
└ Rp. 35,000 Gopay/Dana 


 *KEUNTUNGAN*
 : Langsung Scan
 : Langsung Jadi Owner Bot
 : Bisa Sewain Ke Grub Lain
 : Pakai Nomor Sendiri
 : Bot Multi Device
 : Tampilan Keren
 : Welcome Otomatis
 : Lainnya Cek Di Bot

`, `${global.footer}`, btns)
}
break


case 'masukgcc': {
	let btns = [{
urlButton: {
    displayText: `Chat Owner`,
    url: `${global.web}`
}
            }, {
quickReplyButton: {
    displayText: `Payment`,
    id: `${prefix}payment`
}
            }]
	textTemplateButtons(m.chat, `*───────────────────────*
_*Mau masukin bot ke grub kamu?*_
_*sewa botnya hehe murah kok*_
_*cek aja di bawah*_

◪ *SEWA KE GRUB*
│ 
├ 7 Hari
├ Rp. 5.000 Gopay/Dana
│
├ 30 Hari 
├ Rp. 10.000 Gopay/Dana
│
├ Permanen 
└ Rp. 20.000 Gopay/Dana 

 *KEUNTUNGAN*
 : Bisa Buat Sticker/attp
 : Welcome Otomatis
 : Bot Multi Device
 : Fast Respon
 : On 24 Jam
 : Antivirtex
 : Antilink
 : Lainnya Cek Di Bot

`, `${global.footer}`, btns)
}
break


case 'jasarun': {
	let btns = [{
urlButton: {
    displayText: `Chat Owner`,
    url: `${global.web}`
}
            }, {
quickReplyButton: {
    displayText: `Payment`,
               id: `${prefix}payment`
}
            }]
	textTemplateButtons(m.chat, `*───────────────────────*
◪ *J A S A  R U N  B O T*
│ 
├ 7 Hari
├ Rp. 10,000 Gopay/Dana
│
├ 30 Hari 
├ Rp. 20,000 Gopay/Dana
│
├ Permanen 
└ Rp. 35,000 Gopay/Dana 

 *SYARAT*
: Sc Sendiri
: Udah Di Recode
: Siap Run

`, `${global.footer}`, btns)
}
break

case 'payment': {
	let btns = [{
urlButton: {
    displayText: `Chat Owner`,
    url: `${global.web}`
}       
            }]

textTemplateButtons(m.chat, `*P A Y M E N T*

GOPAY : CHAT OWNER
DANA : CHAT OWNER 

 `, `Silahkan Klik Di Bawah Untuk Bayar`, btns)
}
break



case 'donasi': {
	let btns = [{
urlButton: {
    displayText: `${global.ganti}`,
    url: `${global.web}`
}
            }]
                    
kemtod = `           *_MAU BER DONASI?_*

GOPAY : CHAT OWNER
DANA : CHAT OWNER 

ISI NOMINAL - TF - SCREENSHOT KE OWNER BIAR DPET FREE PREMIUM !! `

aqua.send5ButImg(m.chat, kemtod, `${week} ${date}`, thumbnya, btns)
}
break 

case 'buyprem': {
	let btns = [{ urlButton: { displayText: `Beli Premium`, url: `https://wa.me/628388024064?text=Bang+mau+beli+premium`}}]          

textTemplateButtons(m.chat, `
Mau jadi premium? harus beli kak
murah kok 5 Rebu dah jadi premium permanen,
Keuntungan, Vitur Anime Terbuka, Dan lain-lain`, `Silahkan Klik Di Bawah Untuk Membeli`, btns)
}
break

case 'listvn':
{
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
reply (teks)
}
break

case 'addvn':{
if (!m.key.fromMe && !isOwner) return reply (mess.owner)
if (!isQuotedAudio) return reply ('Reply vnnya')
if (!q) return reply ('Nama audionya apa')
let delb = await aqua.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./temp/audio/${q}.mp3`)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
reply (`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break  

case 'delvn':{
if (!isOwner)  return reply (mess.owner) 
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./temp/audio/${q}.mp3`)
reply (`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
reply ('eror kak')
}
}
break

           
case 'addstik':{
if (!m.key.fromMe && !isOwner) return reply (mess.owner)
if (!isQuotedSticker) return reply ('Reply stiker nya')
if (!q) return reply ('Nama sticker nya apa?')
let delb = await aqua.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./temp/stick/${q}.webp`)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
reply (`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
				

case 'delstik':{
if(!m.key.fromMe & !isOwner) return reply ('Only owner')
if (!q) return reply ("Masukan query")
try {
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./temp/stick/${q}.webp`)
fs.writeFileSync('./audio/stick.json', JSON.stringify(setiker))
reply (`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
reply (`Gagal delete sticker ${q}!`)
}
}
break

case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
reply (teks)
}
break



case 'inspect': {
  if (!args[0]) return reply("Linknya?")
  let linkRegex = args.join(" ")
  let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
  if (!coded) return reply("Link Invalid")
  aqua.query({
  tag: "iq",
  attrs: {
  type: "get",
  xmlns: "w:g2",
  to: "@g.us"
  },
  content: [{ tag: "invite", attrs: { code: coded } }]
  }).then(async(res) => { 
  tekse = `     「 Group Link Inspector 」
🆔 ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
📛 Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
📛 Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
👦 Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
📆 Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
👥 Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
📋 Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
📋 Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
📋 Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
📋 Description : 
${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
  try {
  pp = await aqua.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
  } catch {
  pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
  }
  aqua.sendMessage(m.chat, { image: { url: pp }, caption: tekse, mentions: await parseMention(tekse) }, { quoted: m })
  //ichi.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await ichi.parseMention(tekse) })
  })
  }
  break







default:
/*
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
 let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
reply (`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 
*/


//Auto Download Video Tiktok
if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
calip.downloader.tiktok(budy).then(res => {
console.log(res)
aqua.sendMessage(m.chat, { video: { url: res.nowm }, caption: `*------------[ TIKTOKNOWM ]------------*

• Autor: ${res.author}
${res.title}`}, { quoted: m })          
})}


//Auto Sticker
if (isImage) {
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await aqua.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pack: global.packname,
type: WSF.StickerTypes.FULL,
author: global.author,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await aqua.sendMessage(from, { sticker: sticBuffer }, {mimetype: 'image/webp', ephemeralExpiration: 86400}, {quoted:m})
}
}

/*
if ((budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini') || budy.startsWith('Undangan untuk')) && !isGroup) {
reply (`*Untuk Memasukan Bot Ke Group*\n*Kamu Harus Sewa Bot Telebih Dahulu*\n_Silahkan Chat Owner_`)
}
 */        
            
if (budy.startsWith('=>')) {
    if (!isOwner) return reply(mess.owner)
    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
            if (sat == undefined) {
bang = util.format(sul)
            }
            return reply(bang)
    }
    try {
        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isOwner) return reply(mess.owner)
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
    } catch (err) {
        await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return reply(mess.owner)
    exec(budy.slice(2), (err, stdout) => {
        if(err) return reply(err)
        if (stdout) return reply(stdout)
    })
}

if (budy.startsWith("x")) {
	    if (!isOwner) return reply(mess.owner)
	    console.log(color('[EVAL]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(budy.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			 reply(`${evaled}`)
		 } catch (err) {
		    reply(`${err}`)
		 }
		}
		
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
    this.anonymous = this.anonymous ? this.anonymous : {}
    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
    if (room) {
        if (/^.*(next|leave|start)/.test(m.text)) return
        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
        let other = [room.a, room.b].find(user => user !== sender)
        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
            contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
            }
        } : {})
    }
    return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
aqua.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

      
} catch (err) {
reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

exports.generateProfilePicture = async(buffer) => {
    const jimp_1 = await jimp.read(buffer);
    const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
    const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
    return {
      img: await resz.getBufferAsync(jimp.MIME_JPEG)
    }
}