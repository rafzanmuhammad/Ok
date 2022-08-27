/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { default: aquaConnect, 
useSingleFileAuthState,
 DisconnectReason,
 fetchLatestBaileysVersion,
 generateWAMessage, 
getContentType, 
generateForwardMessageContent, 
prepareWAMessageMedia,
 generateWAMessageFromContent,
 generateMessageID, 
downloadContentFromMessage, 
makeInMemoryStore, 
jidDecode, 
proto, 
relayMessage,
mentionedJid } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const { color, bgcolor } = require("./lib/color")
const  { Boom } = require('@hapi/boom')
const figlet = require('figlet')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, getRandom, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kimtod:AKYQneA6S2DKuS@cluster0.p5h5oy6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


let baterai = {
    baterai: 0,
    cas: false
};

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

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startAqua() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const aqua = aquaConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
       // browser: ["Kimtod", "Safari", "3.0"],        
       // browser: ['Takim Tod Multi Device','Safari','1.0.0'],
        browser: ['Takim Tod','IOS','4.1.0'],
        auth: state,
        version
    })
    console.log(chalk.bold.green(figlet.textSync('BOT MD', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	})))

        console.log(color('========================================>', 'cyan'))
        console.log(color('CREATOR :', 'cyan'), color(`T A K I M`, 'red'))
        console.log(color('INSTAGRAM :', 'cyan'), color(`https://instagram.com/zyee_ez`, 'yellow'))
        console.log(color('GITHUB :', 'cyan'), color(`https://github.com/takimtod`, 'yellow'))
        console.log(color('WHATSAPP :', 'cyan'), color(`https://wa.me/6282194424412`, 'yellow'))
        console.log(color('========================================>', 'cyan'))
        console.log(color('\n', 'cyan'))     

	
    store.bind(aqua.ev)



 
    //anti call+block
     aqua.ws.on('CB:call', async (json) => {
     const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await aqua.sendContact(callerId, global.owner)
    aqua.sendMessage(callerId, { text: `Sistem Blokir Otomatis!\nJangan Telfon dan Vc Bot!\nSilakan Chat Kontak Ini Untuk Membuka Blokir Anda!\nKlo Mau Di Bukain Wokwokwokwok`}, { quoted : pa7rick })
    await sleep(4000)
    await aqua.updateBlockStatus(callerId, "block")
    }
    })
   



    // Action Battery
    aqua.ws.on('CB:action,,battery', async (json) => {
        const a = json[2][0][1].value
        const b = json[2][0][1].live
        baterai.baterai = a
        baterai.cas = b
    })

    aqua.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!aqua.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(aqua, mek, store)
        require("./kimmy")(aqua, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    aqua.ev.on('group-participants.update', async (anu) => {
require('./massege/group.js')(aqua, anu)       
    })
	
    // Setting
    aqua.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    aqua.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = aqua.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    aqua.getName = (jid, withoutContact  = false) => {
        id = aqua.decodeJid(jid)
        withoutContact = aqua.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = aqua.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === aqua.decodeJid(aqua.user.id) ?
            aqua.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    aqua.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await aqua.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await aqua.getName(i + '@s.whatsapp.net')}\nFN:${await aqua.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:takimtod@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/zyee_ez\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	aqua.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    
    aqua.setStatus = (status) => {
        aqua.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    aqua.public = true

    aqua.serializeM = (m) => smsg(aqua, m, store)

    aqua.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
          if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
           if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startAqua(); }
           else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startAqua(); }
           else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
           else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
           else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startAqua(); }
           else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startAqua(); }
           else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }            
        } else if (connection === 'open') {
           aqua.sendText(`628388024064@s.whatsapp.net`, `Tersambung bang`)
    }
        console.log('Connected...', update)
    })

    aqua.ev.on('creds.update', saveState)

    // Add Other

/**
   * sendMessage v2
   * @param {String} chatId
   * @param {import('@adiwajshing/baileys').AnyMessageContent} message
   * @param {import('@adiwajshing/baileys').MiscMessageGenerationOptions} options
   * @returns
   */
  aqua.sendMessageV2 = async (chatId, message, options = {}) => {
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await aqua.relayMessage(chatId, generate.message, { messageId: generate.key.id })
  }
  

aqua.logger = {
        ...aqua.logger,
        info(...args) { console.log(chalk.bold.rgb(57, 183, 16)(`INFO [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.cyan(...args)) },
        error(...args) { console.log(chalk.bold.rgb(247, 38, 33)(`ERROR [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.rgb(255, 38, 0)(...args)) },
        warn(...args) { console.log(chalk.bold.rgb(239, 225, 3)(`WARNING [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.keyword('orange')(...args)) }
    }


//sendButImage
aqua.sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
let buttonMessage = {
image: gam1,
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
return await aqua.sendMessage(id, buttonMessage, options1)
}  


//sendButText
aqua.sendButMessage = async(id, text1, desc1, but = [], options) => {
let buttonMessage = {
text: text1,
footerc: desc1,
buttons: but,
headerType: 1,
}
 return aqua.sendMessage(id, buttonMessage, {quoted: m})
}  


//sendButDoc
aqua.sendButDoc = async(id, text1, desc1, gam1, but = [], options, options1 = {}) => {	
const asuu =['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const mimitny = asuu[Math.floor(Math.random() * asuu.length)]                    
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/file.docx'),
mimetype: mimitny, 
title : "Footer text", 
fileLength : 999999999, 
pageCount: 1, 
fileName : "𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗠𝘂𝗹𝘁𝗶 𝗗𝗲𝘃𝗶𝗰𝗲", 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

return await aqua.sendMessage(id, buttonMessage,options1)
} 

 
 //send Katalog 
aqua.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam    }, { upload: aqua.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "20000",
//"url": `Jangan lupa Join:\n• ${global.grub1}\n`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${global.owner}@s.whatsapp.net`
}
}, options)
return aqua.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

aqua.sendImageAsSticker2 = async (jid, media, m, options = {}) => {
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let jancok = new Sticker(media, {
    pack: packname, // The pack name
    author: author, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 50, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await aqua.sendMessage(jid,{sticker: nah},{quoted: m})
return await fs.unlinkSync(stok)
 }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    aqua.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: aqua.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            aqua.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    /** Send Button 5 Vifio
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    aqua.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: aqua.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            aqua.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    

     /** Send Button 5 Location
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
     
    aqua.send5Loc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
               "hydratedContentText": text,
               "locationMessage": {
               "jpegThumbnail": img },
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options )
            aqua.relayMessage(jid, template.message, { messageId: template.key.id})
    }


    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    aqua.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        aqua.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    aqua.sendText = (jid, text, quoted = '', options) => aqua.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    aqua.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await aqua.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
/**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    aqua.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await aqua.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    aqua.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await aqua.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    aqua.sendTextWithMentions = async (jid, text, quoted, options = {}) => aqua.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
     
     
    aqua.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await aqua.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    aqua.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await aqua.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    aqua.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    aqua.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    aqua.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await aqua.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await aqua.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    aqua.sendMedia2 = async (jid, path, quoted, options = {}) => {
    let { ext, mime, data } = await aqua.getFile2(path)
    let messageType = mime.split("/")[0]
    let pase = messageType.replace('application', 'document') || messageType
    return await aqua.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
    } 
    
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    aqua.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await aqua.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    aqua.cMod = (jid, copy, text = '', sender = aqua.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === aqua.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
     
    aqua.getFile2 = async (path, save) => {
    let res, filename
    let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
    if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/vnd.android.package-archive',
    ext: '.bin'
    }
    if (data && save && !filename) (filename = path.join(__dirname, './src/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
    return {
    res,
    filename,
    ...type,
    data
    }
    }
    
    aqua.getFile = async (path, save) => {
    let res, filename
    let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
    if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/octet-stream',
    ext: '.bin'
    }
    if (data && save && !filename) (filename = path.join(__dirname, './src/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
    return {
    res,
    filename,
    ...type,
    data
    }
    }

    aqua.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return aqua
}

startAqua()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
