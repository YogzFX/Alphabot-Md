const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
 //  amel: 'https://melcanz.com',
//      bx: 'https://bx-hunter.herokuapp.com',
 //   dhnjing: 'https://dhnjing.xyz',
//    hardianto: 'https://hardianto-chan.herokuapp.com',
 //   jonaz: 'https://jonaz-api-v2.herokuapp.com',
//    neoxr: 'https://neoxr-api.herokuapp.com',
//    nrtm: 'https://nurutomo.herokuapp.com',
//    xteam: 'https://api.xteam.xyz',
//    nzcha: 'http://nzcha-apii.herokuapp.com',
//    bg: 'http://bochil.ddns.net',
//    fdci: 'https://api.fdci.se',
//    dzx: 'https://api.dhamzxploit.my.id',
//    bsbt: 'https://bsbt-api-rest.herokuapp.com',
//    zahir: 'https://zahirr-web.herokuapp.com',
//    zeks: 'https://api.zeks.xyz',
//    zekais: 'http://zekais-api.herokuapp.com',
//    hardianto: 'https://hardianto-chan.herokuapp.com',
 //   pencarikode: 'https://pencarikode.xyz', 
 //   erdwepe: 'https://erdwpe-api.herokuapp.com',
//    lolhuman: 'https://api.lolhuman.xyz',
  //  LeysCoder: 'https://leyscoders-api.herokuapp.com',
   // rey: 'https://server-api-rey.herokuapp.com'
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
    //'https://melcanz.com': 'elaina',
    //'https://server-api-rey.herokuapp.com': 'apirey',
    //'https://api.xteam.xyz': 'd37372311698ed1d',
    //'https://zahirr-web.herokuapp.com': 'zahirgans',
    //'https://bsbt-api-rest.herokuapp.com': 'benniismael',
    //'https://api.zeks.xyz': 'apivinz',
    //'https://hardianto-chan.herokuapp.com': 'hardianto',
    //'https://pencarikode.xyz': 'pais', 
    //'https://leyscoders-api.herokuapp.com': 'dappakntlll',
    //'https://zekais-api.herokuapp.com': 'apikeymu',
    //'https://api.lolhuman.xyz': 'Deffbotz',
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read message
global.autobio = true 
global.userRegister = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "Araa-MD" //namabot kalian
global.ownername= "Ara" //nama kalian
global.myweb ="https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl" //bebas asal jan hapus
global.youtube = "https://instagram.com/karfuanyogich" //bebas asal jan hapus
global.myweb2 = "https://github.com/YogzFX" //bebas
global.email = "ara@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6289504231588'] //premium user
global.owner = ["6289504231588","6289510598381"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6289504231588" // nomor wa kalian
global.ownernomerr = "+6289504231588" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = 'Created By Ara-MD' //sticker wm ubah
global.author = '@Ara' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.adventureRPG = 'https://telegra.ph/file/30bef343159005b622ced.jpg'
global.bankRPG = 'https://telegra.ph/file/1ee3e007de22f6add4a31.jpg'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/82b21932692f82fce8664.jpg'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
