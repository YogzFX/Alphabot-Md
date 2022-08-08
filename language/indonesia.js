exports.needReg = (a, b, c) =>{
	return`Halo ${a}, sepertinya kamu belum terdaftar di database ${b}. Daftar dulu yuk dengan cara berikut 👇\n\n${c}register nama|umur|gender|hobi\nContoh : ${c}register botwa|18|cowo|Game`
	}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ⚠️\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`Gini bro ${c}register nama|umur|gender|hobi\nContoh penggunaan : \n${c}register botwa|18|pria|Game`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFIKASI BERHASIL* 」
│\`\`\`Verifikasi Sukses Dengan\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`Pada : ${b}\`\`\`
│\`\`\`Nama : ${c}\`\`\`
│\`\`\`Umur : ${d}\`\`\`
│\`\`\`Hobi : ${e}\`\`\`
│\`\`\`Nomor : @${f}\`\`\`
│\`\`\`Untuk menggunakan bot silahkan \`\`\`
│\`\`\`Kirim perintah ${g}menu\`\`\`
│\`\`\`atau ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} 🤗, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `❌ Tidak ada absen berlangsung di group ini !`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`✅ Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`✅ Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Masih Ada Sesi Yang Belum Diselesaikan!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Contoh penggunaan : \n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Jawaban Salah`
}

exports.JwbTrue = (tebak) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find(v => v.includes(' ')) ? '(Beberapa Jawaban Terdapat Spasi)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time}`
}
exports.TbBendera = (time) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `✅ Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `⚠️ Sesi chat ini telah diberhentikan oleh teman chat kamu`
}
exports.AnonOn = () => {
    return `⚠️ Kamu masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `🔎 Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `⚠️ Kamu belum pernah memulai chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu Joestar-Md :*

「 Bot Info 」 
𐁘 ${prefix}owner
𐁘 ${prefix}rules
𐁘 ${prefix}sc
𐁘 ${prefix}ping
𐁘 ${prefix}runtime
𐁘 ${prefix}botstatus
𐁘 ${prefix}donate

「 Owner 」 
𐁘 ${prefix}setmenu [query]
𐁘 ${prefix}setwm packname|author
𐁘 ${prefix}sendsesi
𐁘 ${prefix}listpc
𐁘 ${prefix}listgc
𐁘 ${prefix}broadcast [text]
𐁘 ${prefix}bc [text]
𐁘 ${prefix}bcgc 
𐁘 ${prefix}bcimage
𐁘 ${prefix}bcaudio
𐁘 ${prefix}bcstiker
𐁘 ${prefix}bcvn
𐁘 ${prefix}bcvideo
𐁘 ${prefix}mute [on/off]
𐁘 ${prefix}banchat
𐁘 ${prefix}unbanchat
𐁘 ${prefix}autorespond [on/off]
𐁘 ${prefix}antiviewonce [on/off]
𐁘 ${prefix}autobio [on/off]
𐁘 ${prefix}join [link]
𐁘 ${prefix}self
𐁘 ${prefix}public [only bot]
𐁘 ${prefix}del [reply pesan bot]
𐁘 ${prefix}setppbot [reply image]

「 Anonymous 」
𐁘 ${prefix}anonymous 
𐁘 ${prefix}start
𐁘 ${prefix}skip [daerah]
𐁘 ${prefix}stop [surah|ayat]

「 Database 」 
𐁘 ${prefix}setcmd [reply stiker]
𐁘 ${prefix}delcmd [reply stiker]
𐁘 ${prefix}listcmd
𐁘 ${prefix}absen
𐁘 ${prefix}cekabsen
𐁘 ${prefix}deleteabsen
𐁘 ${prefix}absenstart
𐁘 ${prefix}addmsg [nama file]
𐁘 ${prefix}getmsg [nama file]
𐁘 ${prefix}listmsg
𐁘 ${prefix}delmsg [nama file]

「 Rpg Games 」
𐁘 ${prefix}adventure
𐁘 ${prefix}weekly
𐁘 ${prefix}use
𐁘 ${prefix}transfer
𐁘 ${prefix}slot
𐁘 ${prefix}shop
𐁘 ${prefix}pasar
𐁘 ${prefix}ojek
𐁘 ${prefix}nguli
𐁘 ${prefix}narik
𐁘 ${prefix}nabung
𐁘 ${prefix}monthly
𐁘 ${prefix}mining
𐁘 ${prefix}merampok
𐁘 ${prefix}mancing
𐁘 ${prefix}kolam
𐁘 ${prefix}koboy
𐁘 ${prefix}kerja
𐁘 ${prefix}kandang
𐁘 ${prefix}judi
𐁘 ${prefix}inventory
𐁘 ${prefix}hourly
𐁘 ${prefix}fishop
𐁘 ${prefix}feed
𐁘 ${prefix}duel
𐁘 ${prefix}daily
𐁘 ${prefix}craft
𐁘 ${prefix}cooldown
𐁘 ${prefix}cook
𐁘 ${prefix}collect
𐁘 ${prefix}chop
𐁘 ${prefix}casino
𐁘 ${prefix}buy
𐁘 ${prefix}bank 
𐁘 ${prefix}bansos
𐁘 ${prefix}berdagang
𐁘 ${prefix}berkebon
𐁘 ${prefix}build

「 Group 」 
𐁘 ${prefix}register
𐁘 ${prefix}unregister
𐁘 ${prefix}ceksn
𐁘 ${prefix}listonline
𐁘 ${prefix}sider
𐁘 ${prefix}wm packname|author
𐁘 ${prefix}infochat
𐁘 ${prefix}setdesk [text]
𐁘 ${prefix}setppgrup [reply image]
𐁘 ${prefix}revoke
𐁘 ${prefix}leave
𐁘 ${prefix}add [62***]
𐁘 ${prefix}kick @tag
𐁘 ${prefix}leave
𐁘 ${prefix}linkgc
𐁘 ${prefix}welcome [on/off]
𐁘 ${prefix}goodbye [on/off]
𐁘 ${prefix}demotedetect [on/off]
𐁘 ${prefix}promotedetect  [on/off]
𐁘 ${prefix}setwelcome
𐁘 ${prefix}updatewelcome
𐁘 ${prefix}delwelcome
𐁘 ${prefix}cekwelcome
𐁘 ${prefix}setgoodbye
𐁘 ${prefix}updategoodbye
𐁘 ${prefix}delgoodbye
𐁘 ${prefix}cekgoodbye
𐁘 ${prefix}setpromote
𐁘 ${prefix}updatepromote
𐁘 ${prefix}setdemote
𐁘 ${prefix}updatedemote
𐁘 ${prefix}cekpromote
𐁘 ${prefix}cekdemote
𐁘 ${prefix}delpromote
𐁘 ${prefix}deldemote
𐁘 ${prefix}antilink [on/off]
𐁘 ${prefix}take packname|author
𐁘 ${prefix}group [open/close]
𐁘 ${prefix}tagall [text]
𐁘 ${prefix}hidetag [text]

「 Anime 」 
𐁘 ${prefix}quotesanime
𐁘 ${prefix}anime [query]
𐁘 ${prefix}manga [query]
𐁘 ${prefix}character [query]

「 Tag 」 
𐁘 ${prefix}stickertag
𐁘 ${prefix}videotag [query]
𐁘 ${prefix}vntag [query]
𐁘 ${prefix}imagetag [query]

「 Stalking 」 
𐁘 ${prefix}igstalk [username]
𐁘 ${prefix}ghstalk [username]
𐁘 ${prefix}ytstalk [channel]


「 Search 」 
𐁘 ${prefix}ytsearch [query]
𐁘 ${prefix}wallpaper [query]
𐁘 ${prefix}google [query]
𐁘 ${prefix}wikimedia [query]
𐁘 ${prefix}wattpad [query]
𐁘 ${prefix}webtoons [query]
𐁘 ${prefix}drakor [query]
𐁘 ${prefix}pinterest [query]


「 Converter 」
𐁘 ${prefix}emoji [😭]
𐁘 ${prefix}emojimix [😭+💩]
𐁘 ${prefix}toaudio [video]
𐁘 ${prefix}tomp3 [video]
𐁘 ${prefix}tovn [video]
𐁘 ${prefix}stiker [reply image]
𐁘 ${prefix}tourl [image/video/stiker]
𐁘 ${prefix}togif [sticker]
𐁘 ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]

「 Sticker Effect 」 
𐁘 ${prefix}jail [reply image/stiker]
𐁘 ${prefix}red [reply image/stiker]
𐁘 ${prefix}gay [reply image/stiker]
𐁘 ${prefix}bloo [reply image/stiker]
𐁘 ${prefix}blue [reply image/stiker]
𐁘 ${prefix}sepia [reply image/stiker]
𐁘 ${prefix}green [reply image/stiker]
𐁘 ${prefix}glass [reply image/stiker]
𐁘 ${prefix}invert [reply image/stiker]
𐁘 ${prefix}blurple [reply image/stiker]
𐁘 ${prefix}blurple2 [reply image/stiker]
𐁘 ${prefix}wasted [reply image/stiker]
𐁘 ${prefix}passed [reply image/stiker]
𐁘 ${prefix}triggered [reply image/stiker]
𐁘 ${prefix}comrade [reply image/stiker]
𐁘 ${prefix}greyscale [reply image/stiker]
𐁘 ${prefix}threshold [reply image/stiker]
𐁘 ${prefix}brightness [reply image/stiker]
𐁘 ${prefix}invertgreyscale [reply image/stiker]

「 Download 」 
𐁘 ${prefix}tiktok [link]
𐁘 ${prefix}tiktoknowm [link]
𐁘 ${prefix}tiktokwm [link]
𐁘 ${prefix}tiktokaudio [link]
𐁘 ${prefix}ytdl [link]
𐁘 ${prefix}play [query]
𐁘 ${prefix}ytmp3 [link]
𐁘 ${prefix}ytshortmp3 [link]
𐁘 ${prefix}ytmp4 [link]
𐁘 ${prefix}ytshorts [link]
𐁘 ${prefix}facebook [link]
𐁘 ${prefix}facebooksd [link]
𐁘 ${prefix}facebookhd [link]
𐁘 ${prefix}fbaudio [link]
𐁘 ${prefix}igstory [username]
𐁘 ${prefix}igdl [link]
𐁘 ${prefix}igphoto [link]
𐁘 ${prefix}igvideo [link]
𐁘 ${prefix}igreels [link]
𐁘 ${prefix}igtv [link]
𐁘 ${prefix}soundcloud [link]
𐁘 ${prefix}gitclone [link repo]
𐁘 ${prefix}gitrepo [username repo branch]
𐁘 ${prefix}mediafire [link]
𐁘 ${prefix}twitter link

「 Primbon 」
𐁘 ${prefix}nomorhoki 887435047326
𐁘 ${prefix}artimimpi [query]
𐁘 ${prefix}artinama [query]
𐁘 ${prefix}ramaljodoh
𐁘 ${prefix}ramaljodohbali
𐁘 ${prefix}suamiistri
𐁘 ${prefix}ramalcinta
𐁘 ${prefix}cocoknama
𐁘 ${prefix}pasangan
𐁘 ${prefix}jadiannikah
𐁘 ${prefix}sifatusaha
𐁘 ${prefix}rezeki
𐁘 ${prefix}pekerjaan
𐁘 ${prefix}nasib
𐁘 ${prefix}penyakit
𐁘 ${prefix}tarot
𐁘 ${prefix}fengshui
𐁘 ${prefix}haribaik
𐁘 ${prefix}harisangar
𐁘 ${prefix}harisial
𐁘 ${prefix}nagahari
𐁘 ${prefix}arahrezeki
𐁘 ${prefix}peruntungan
𐁘 ${prefix}weton
𐁘 ${prefix}karakter
𐁘 ${prefix}keberuntungan
𐁘 ${prefix}memancing
𐁘 ${prefix}masasubur
𐁘 ${prefix}zodiak 
𐁘 ${prefix}shio [query]

「 Random Anime 」
𐁘 ${prefix}loli
𐁘 ${prefix}neko
𐁘 ${prefix}waifu
𐁘 ${prefix}shinobu
𐁘 ${prefix}megumin
𐁘 ${prefix}bully
𐁘 ${prefix}cuddle
𐁘 ${prefix}cry
𐁘 ${prefix}hug
𐁘 ${prefix}awoo
𐁘 ${prefix}kiss
𐁘 ${prefix}lick
𐁘 ${prefix}pat
𐁘 ${prefix}smug
𐁘 ${prefix}bonk
𐁘 ${prefix}yeet
𐁘 ${prefix}blush
𐁘 ${prefix}smile
𐁘 ${prefix}wave
𐁘 ${prefix}highfive
𐁘 ${prefix}handhold
𐁘 ${prefix}nom
𐁘 ${prefix}bite
𐁘 ${prefix}glomp
𐁘 ${prefix}slap
𐁘 ${prefix}kill
𐁘 ${prefix}happy
𐁘 ${prefix}wink
𐁘 ${prefix}poke
𐁘 ${prefix}dance
𐁘 ${prefix}cringe

「 Voice Change Menu 」
𐁘 ${prefix}bass
𐁘 ${prefix}blown
𐁘 ${prefix}deep
𐁘 ${prefix}earrape
𐁘 ${prefix}fast
𐁘 ${prefix}fat
𐁘 ${prefix}nightcore
𐁘 ${prefix}reverse
𐁘 ${prefix}robot
𐁘 ${prefix}slow
𐁘 ${prefix}smooth
𐁘 ${prefix}tupai

「 Storage Menu 」
𐁘 ${prefix}addvn
𐁘 ${prefix}listvn
𐁘 ${prefix}addimage
𐁘 ${prefix}listimage
𐁘 ${prefix}addvideo
𐁘 ${prefix}listvideo
𐁘 ${prefix}addstik
𐁘 ${prefix}liststik

「 Game Menu 」
𐁘 ${prefix}kuismath
𐁘 ${prefix}tebakgambar
𐁘 ${prefix}tebakkata
𐁘 ${prefix}tebakbendera
𐁘 ${prefix}tebakkalimat
𐁘 ${prefix}tebaksiapa
𐁘 ${prefix}tebakkabupaten
𐁘 ${prefix}tebakkimia
𐁘 ${prefix}tebaklirik
𐁘 ${prefix}tebaktebakan
𐁘 ${prefix}tekateki
𐁘 ${prefix}susunkata
𐁘 ${prefix}caklontong

「 Telegram Sticker 」
𐁘 ${prefix}awoawo
𐁘 ${prefix}benedict
𐁘 ${prefix}chat
𐁘 ${prefix}dbfly
𐁘 ${prefix}dino_kuning
𐁘 ${prefix}doge
𐁘 ${prefix}gojosatoru
𐁘 ${prefix}hope_boy
𐁘 ${prefix}jisoo
𐁘 ${prefix}kr_robot
𐁘 ${prefix}kucing
𐁘 ${prefix}manusia_lidi
𐁘 ${prefix}menjamet
𐁘 ${prefix}meow
𐁘 ${prefix}nicholas
𐁘 ${prefix}patrick
𐁘 ${prefix}popoci
𐁘 ${prefix}sponsbob
𐁘 ${prefix}kawan_sponsbob
𐁘 ${prefix}tyni

「 Sound Menu 」
𐁘 ${prefix}sound1
𐁘 ${prefix}sound2
𐁘 ${prefix}sound3
𐁘 ${prefix}sound4
𐁘 ${prefix}sound5
𐁘 ${prefix}sound6
𐁘 ${prefix}sound7
𐁘 ${prefix}sound8
𐁘 ${prefix}sound9
𐁘 ${prefix}sound10
𐁘 ${prefix}sound11
𐁘 ${prefix}sound12
𐁘 ${prefix}sound13
𐁘 ${prefix}sound14
𐁘 ${prefix}sound15
𐁘 ${prefix}sound16
𐁘 ${prefix}sound17
𐁘 ${prefix}sound18 
𐁘 ${prefix}sound19
𐁘 ${prefix}sound20
𐁘 ${prefix}sound21
𐁘 ${prefix}sound22
𐁘 ${prefix}sound23
𐁘 ${prefix}sound24
𐁘 ${prefix}sound25
𐁘 ${prefix}sound26
𐁘 ${prefix}sound27
𐁘 ${prefix}sound28
𐁘 ${prefix}sound29
𐁘 ${prefix}sound30
𐁘 ${prefix}sound31
𐁘 ${prefix}sound32
𐁘 ${prefix}sound33
𐁘 ${prefix}sound34
𐁘 ${prefix}sound35
𐁘 ${prefix}sound36
𐁘 ${prefix}sound37
𐁘 ${prefix}sound38
𐁘 ${prefix}sound39
𐁘 ${prefix}sound40
𐁘 ${prefix}sound41
𐁘 ${prefix}sound42
𐁘 ${prefix}sound43
𐁘 ${prefix}sound44
𐁘 ${prefix}sound45
𐁘 ${prefix}sound46
𐁘 ${prefix}sound47
𐁘 ${prefix}sound48
𐁘 ${prefix}sound49
𐁘 ${prefix}sound50
𐁘 ${prefix}sound51
𐁘 ${prefix}sound52
𐁘 ${prefix}sound53
𐁘 ${prefix}sound54
𐁘 ${prefix}sound55
𐁘 ${prefix}sound56
𐁘 ${prefix}sound57
𐁘 ${prefix}sound58
𐁘 ${prefix}sound59
𐁘 ${prefix}sound60
𐁘 ${prefix}sound61
𐁘 ${prefix}sound62
𐁘 ${prefix}sound63
𐁘 ${prefix}sound64
𐁘 ${prefix}sound65
𐁘 ${prefix}sound66
𐁘 ${prefix}sound67
𐁘 ${prefix}sound68
𐁘 ${prefix}sound69
𐁘 ${prefix}sound70
    `
}

exports.rules = () => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot.
2. Jangan telepon bot.
3. Jangan membandingkan bot.

🗯️ Bot tidak atau lambat merespon ?
➡️ kata owner, kalau bales cepet nanti dikira suka.

🗯️ bagaimana cara membuka fitur premium bot ini ?
➡️ kasi ownernya batagor.

🗯️ Boleh saya menambah ke grup?
➡️ boleh, gausah izin owner, lu ganggu banget.

🗯️ Bagaimana agar privasi aman?
➡️ pake pesan 24J. karna owner sering cek keamanan bot dan semua chat bot setiap hari minggu.

aku tahu aku lemah, tidak ada yang peduli padaku,
tidak ada yang pernah mengerti aku, aku sudah melalui semua itu aku mengatasi semua kelemahanku, sendiri,
aku juga ingin seseorang selalu menemaniku.
anjay mabar slebew, nulisnya malem malem jadi lgi ngerasa manusia paling menyedihkkan.

Terimakasih! 
`
}
exports.welcome = () =>{
	return` gausah intro`
}
exports.leave = () =>{
	return`gausah balik lagi`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/handrameizaluna
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 GITHUB 」 -------*

follow github handra bang

https://github.com/handrameizaluna
Thanks!
    `
}

exports.info = (prefix) =>{
	return`「 bot info 」 
𐁘 ${prefix}owner
𐁘 ${prefix}rules
𐁘 ${prefix}sc
𐁘 ${prefix}ping
𐁘 ${prefix}runtime
𐁘 ${prefix}botstatus
𐁘 ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`「 Owner 」 
𐁘 < evaluate
𐁘 > evaluate
𐁘 $ exec
𐁘 => exec
𐁘 ${prefix}setmenu [query]
𐁘 ${prefix}setmenu templateLocation
𐁘 ${prefix}setmenu templateTenor
𐁘 ${prefix}setmenu katalog
𐁘 ${prefix}setmenu katalog2
𐁘 ${prefix}setmenu list
𐁘 ${prefix}setwm packname|author
𐁘 ${prefix}sendsesi
𐁘 ${prefix}listpc
𐁘 ${prefix}listgc
𐁘 ${prefix}broadcast [text]
𐁘 ${prefix}bc [text]
𐁘 ${prefix}bcgc 
𐁘 ${prefix}bcimage
𐁘 ${prefix}bcaudio
𐁘 ${prefix}bcstiker
𐁘 ${prefix}bcvn
𐁘 ${prefix}bcvideo
𐁘 ${prefix}nsfw [on/off]
𐁘 ${prefix}mute [on/off]
𐁘 ${prefix}banchat
𐁘 ${prefix}unbanchat
𐁘 ${prefix}autorespond [on/off]
𐁘 ${prefix}antiviewonce [on/off]
𐁘 ${prefix}autobio [on/off]
𐁘 ${prefix}join [link]
𐁘 ${prefix}self
𐁘 ${prefix}public [only bot]
𐁘 ${prefix}del [pesan bot]
𐁘 ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`「 Database 」 
𐁘 ${prefix}setcmd [reply stiker]
𐁘 ${prefix}delcmd [reply stiker]
𐁘 ${prefix}listcmd
𐁘 ${prefix}absen
𐁘 ${prefix}cekabsen
𐁘 ${prefix}deleteabsen
𐁘 ${prefix}absenstart
𐁘 ${prefix}addmsg [nama file]
𐁘 ${prefix}getmsg [nama file]
𐁘 ${prefix}listmsg
𐁘 ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`「 Group 」 
𐁘 ${prefix}register
𐁘 ${prefix}unregister
𐁘 ${prefix}ceksn
𐁘 ${prefix}listonline
𐁘 ${prefix}sider
𐁘 ${prefix}wm packname|author
𐁘 ${prefix}infochat
𐁘 ${prefix}setdesk [text]
𐁘 ${prefix}setppgrup [reply image]
𐁘 ${prefix}revoke
𐁘 ${prefix}leave
𐁘 ${prefix}add [62***]
𐁘 ${prefix}kick @tag
𐁘 ${prefix}leave
𐁘 ${prefix}linkgc
𐁘 ${prefix}welcome [on/off]
𐁘 ${prefix}goodbye [on/off]
𐁘 ${prefix}demotedetect [on/off]
𐁘 ${prefix}promotedetect  [on/off]
𐁘 ${prefix}setwelcome
𐁘 ${prefix}updatewelcome
𐁘 ${prefix}delwelcome
𐁘 ${prefix}cekwelcome
𐁘 ${prefix}setgoodbye
𐁘 ${prefix}updategoodbye
𐁘 ${prefix}delgoodbye
𐁘 ${prefix}cekgoodbye
𐁘 ${prefix}setpromote
𐁘 ${prefix}updatepromote
𐁘 ${prefix}setdemote
𐁘 ${prefix}updatedemote
𐁘 ${prefix}cekpromote
𐁘 ${prefix}cekdemote
𐁘 ${prefix}delpromote
𐁘 ${prefix}deldemote
𐁘 ${prefix}nsfw [on/off]
𐁘 ${prefix}antilink [on/off]
𐁘 ${prefix}take packname|author
𐁘 ${prefix}group [open/close]
𐁘 ${prefix}tagall [text]
𐁘 ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`「 Anime 」 
𐁘 ${prefix}quotesanime
𐁘 ${prefix}anime [query]
𐁘 ${prefix}manga [query]
𐁘 ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`「 Tag 」 
𐁘 ${prefix}stickertag
𐁘 ${prefix}videotag [query]
𐁘 ${prefix}vntag [query]
𐁘 ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`「 Stalking 」 
𐁘 ${prefix}igstalk [username]
𐁘 ${prefix}ghstalk [username]
𐁘 ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`「 Search 」 
𐁘 ${prefix}ytsearch [query]
𐁘 ${prefix}wallpaper [query]
𐁘 ${prefix}google [query]
𐁘 ${prefix}wikimedia [query]
𐁘 ${prefix}hentai
𐁘 ${prefix}wattpad [query]
𐁘 ${prefix}webtoons [query]
𐁘 ${prefix}drakor [query]
𐁘 ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`「 Converter 」 
𐁘 ${prefix}emoji [😭]
𐁘 ${prefix}emojimix [😭+💩]
𐁘 ${prefix}toaudio [video]
𐁘 ${prefix}tomp3 [video]
𐁘 ${prefix}tovn [video]
𐁘 ${prefix}stiker [reply image]
𐁘 ${prefix}tourl [image/video]
𐁘 ${prefix}togif [sticker]
𐁘 ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`「 Image Effect 」 
𐁘 ${prefix}wanted [reply image/stiker]
𐁘 ${prefix}utatoo [reply image/stiker]
𐁘 ${prefix}unsharpen [reply image/stiker]
𐁘 ${prefix}thanos [reply image/stiker]
𐁘 ${prefix}sniper [reply image/stiker]
𐁘 ${prefix}sharpen [reply image/stiker]
𐁘 ${prefix}sepia [reply image/stiker]
𐁘 ${prefix}scary [reply image/stiker]
𐁘 ${prefix}rip [reply image/stiker]
𐁘 ${prefix}redple [reply image/stiker]
𐁘 ${prefix}rejected [reply image/stiker]
𐁘 ${prefix}posterize [reply image/stiker]
𐁘 ${prefix}ps4 [reply image/stiker]
𐁘 ${prefix}pixelize [reply image/stiker]
𐁘 ${prefix}missionpassed [reply image/stiker]
𐁘 ${prefix}moustache [reply image/stiker]
𐁘 ${prefix}lookwhatkarenhave [reply image/stiker]
𐁘 ${prefix}jail [reply image/stiker]
𐁘 ${prefix}invert [reply image/stiker]
𐁘 ${prefix}instagram [reply image/stiker]
𐁘 ${prefix}greyscale [reply image/stiker]
𐁘 ${prefix}glitch [reply image/stiker]
𐁘 ${prefix}gay [reply image/stiker]
𐁘 ${prefix}frame [reply image/stiker]
𐁘 ${prefix}fire [reply image/stiker]
𐁘 ${prefix}distort [reply image/stiker]
𐁘 ${prefix}dictator [reply image/stiker]
𐁘 ${prefix}deepfry [reply image/stiker]
𐁘 ${prefix}ddungeon [reply image/stiker]
𐁘 ${prefix}circle [reply image/stiker]
𐁘 ${prefix}challenger [reply image/stiker]
𐁘 ${prefix}burn [reply image/stiker]
𐁘 ${prefix}brazzers [reply image/stiker]
𐁘 ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`「 Sticker Effect 」 
𐁘 ${prefix}jail [reply image/stiker]
𐁘 ${prefix}red [reply image/stiker]
𐁘 ${prefix}gay [reply image/stiker]
𐁘 ${prefix}bloo [reply image/stiker]
𐁘 ${prefix}blue [reply image/stiker]
𐁘 ${prefix}sepia [reply image/stiker]
𐁘 ${prefix}green [reply image/stiker]
𐁘 ${prefix}glass [reply image/stiker]
𐁘 ${prefix}invert [reply image/stiker]
𐁘 ${prefix}blurple [reply image/stiker]
𐁘 ${prefix}blurple2 [reply image/stiker]
𐁘 ${prefix}wasted [reply image/stiker]
𐁘 ${prefix}passed [reply image/stiker]
𐁘 ${prefix}triggered [reply image/stiker]
𐁘 ${prefix}comrade [reply image/stiker]
𐁘 ${prefix}greyscale [reply image/stiker]
𐁘 ${prefix}threshold [reply image/stiker]
𐁘 ${prefix}brightness [reply image/stiker]
𐁘 ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`「 Download 」 
𐁘 ${prefix}tiktok [link]
𐁘 ${prefix}tiktoknowm [link]
𐁘 ${prefix}tiktokwm [link]
𐁘 ${prefix}tiktokaudio [link]
𐁘 ${prefix}ytdl [link]
𐁘 ${prefix}play [query]
𐁘 ${prefix}ytmp3 [link]
𐁘 ${prefix}ytshortmp3 [link]
𐁘 ${prefix}ytmp4 [link]
𐁘 ${prefix}ytshorts [link]
𐁘 ${prefix}facebook [link]
𐁘 ${prefix}facebooksd [link]
𐁘 ${prefix}facebookhd [link]
𐁘 ${prefix}fbaudio [link]
𐁘 ${prefix}igstory [username]
𐁘 ${prefix}igdl [link]
𐁘 ${prefix}igphoto [link]
𐁘 ${prefix}igvideo [link]
𐁘 ${prefix}igreels [link]
𐁘 ${prefix}igtv [link]
𐁘 ${prefix}soundcloud [link]
𐁘 ${prefix}gitclone [link repo]
𐁘 ${prefix}gitrepo [username repo branch]
𐁘 ${prefix}mediafire [link]
𐁘 ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`「 Random Anime 」
𐁘 ${prefix}loli
𐁘 ${prefix}neko
𐁘 ${prefix}waifu
𐁘 ${prefix}shinobu
𐁘 ${prefix}megumin
𐁘 ${prefix}bully
𐁘 ${prefix}cuddle
𐁘 ${prefix}cry
𐁘 ${prefix}hug
𐁘 ${prefix}awoo
𐁘 ${prefix}kiss
𐁘 ${prefix}lick
𐁘 ${prefix}pat
𐁘 ${prefix}smug
𐁘 ${prefix}bonk
𐁘 ${prefix}yeet
𐁘 ${prefix}blush
𐁘 ${prefix}smile
𐁘 ${prefix}wave
𐁘 ${prefix}highfive
𐁘 ${prefix}handhold
𐁘 ${prefix}nom
𐁘 ${prefix}bite
𐁘 ${prefix}glomp
𐁘 ${prefix}slap
𐁘 ${prefix}kill
𐁘 ${prefix}happy
𐁘 ${prefix}wink
𐁘 ${prefix}poke
𐁘 ${prefix}dance
𐁘 ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`「 Nsfw & Sfw 」
𐁘 ${prefix}cuddle
𐁘 ${prefix}feed
𐁘 ${prefix}foxgirl
𐁘 ${prefix}kemonomimi2
𐁘 ${prefix}woof
𐁘 ${prefix}holo2
𐁘 ${prefix}hug
𐁘 ${prefix}kiss
𐁘 ${prefix}lizard
𐁘 ${prefix}meowi
𐁘 ${prefix}neko2
𐁘 ${prefix}pat
𐁘 ${prefix}poke
𐁘 ${prefix}slap
𐁘 ${prefix}tickle
𐁘 ${prefix}baka
𐁘 ${prefix}smug
𐁘 ${prefix}neko_sfw
𐁘 ${prefix}hentai
𐁘 ${prefix}hentai_gif
𐁘 ${prefix}spank
𐁘 ${prefix}blowjob
𐁘 ${prefix}cumarts
𐁘 ${prefix}eroyuri
𐁘 ${prefix}eroneko
𐁘 ${prefix}erokemonomimi
𐁘 ${prefix}erokitsune
𐁘 ${prefix}ero
𐁘 ${prefix}feet
𐁘 ${prefix}erofeet
𐁘 ${prefix}feetgif
𐁘 ${prefix}femdom
𐁘 ${prefix}futanari
𐁘 ${prefix}hentai
𐁘 ${prefix}holoero
𐁘 ${prefix}holo
𐁘 ${prefix}keta
𐁘 ${prefix}kitsune
𐁘 ${prefix}kemonomimi
𐁘 ${prefix}pussyart
𐁘 ${prefix}pussywankgif
𐁘 ${prefix}girl_solo
𐁘 ${prefix}girl_solo_gif
𐁘 ${prefix}tits
𐁘 ${prefix}trap
𐁘 ${prefix}yuri
𐁘 ${prefix}avatar2
𐁘 ${prefix}anal
𐁘 ${prefix}bj
𐁘 ${prefix}boobs
𐁘 ${prefix}classic
𐁘 ${prefix}cumsluts
𐁘 ${prefix}kuni
𐁘 ${prefix}lesbian
𐁘 ${prefix}neko
𐁘 ${prefix}neko_gif
𐁘 ${prefix}ahegao
𐁘 ${prefix}bdsm
𐁘 ${prefix}cuckold
𐁘 ${prefix}cum
𐁘 ${prefix}foot
𐁘 ${prefix}gangbang
𐁘 ${prefix}glasses
𐁘 ${prefix}jahy
𐁘 ${prefix}masturbation
𐁘 ${prefix}nsfw_neko
𐁘 ${prefix}orgy
𐁘 ${prefix}panties
𐁘 ${prefix}tentacles
𐁘 ${prefix}thighs
𐁘 ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`「 Textpro Menu 」
𐁘 ${prefix}halloween2 text|text2
𐁘 ${prefix}horror text|text2
𐁘 ${prefix}game8bit text|text2
𐁘 ${prefix}layered text|text2
𐁘 ${prefix}glitch2 text|text2
𐁘 ${prefix}coolg text|text2
𐁘 ${prefix}coolwg text|text2
𐁘 ${prefix}realistic text|text2
𐁘 ${prefix}space3d text|text2
𐁘 ${prefix}gtiktok text|text2
𐁘 ${prefix}stone text|text2
𐁘 ${prefix}marvel text|text2
𐁘 ${prefix}marvel2 text|text2
𐁘 ${prefix}pornhub text|text2
𐁘 ${prefix}avengers text|text2
𐁘 ${prefix}metalr text|text2
𐁘 ${prefix}metalg text|text2
𐁘 ${prefix}metalg2 text|text2
𐁘 ${prefix}halloween2 text|text2
𐁘 ${prefix}lion text|text2
𐁘 ${prefix}wolf_bw text|text2
𐁘 ${prefix}wolf_g text|text2
𐁘 ${prefix}ninja text|text2
𐁘 ${prefix}3dsteel text|text2
𐁘 ${prefix}horror2 text|text2
𐁘 ${prefix}lava text|text2
𐁘 ${prefix}bagel text|text2
𐁘 ${prefix}blackpink text
𐁘 ${prefix}rainbow2 text
𐁘 ${prefix}water_pipe text
𐁘 ${prefix}halloween text
𐁘 ${prefix}sketch text
𐁘 ${prefix}sircuit text
𐁘 ${prefix}discovery text
𐁘 ${prefix}metallic2 text
𐁘 ${prefix}fiction text
𐁘 ${prefix}demon text
𐁘 ${prefix}transformer text
𐁘 ${prefix}berry text
𐁘 ${prefix}thunder text
𐁘 ${prefix}magma text
𐁘 ${prefix}3dstone text
𐁘 ${prefix}neon text
𐁘 ${prefix}glitch text
𐁘 ${prefix}harry_potter text
𐁘 ${prefix}embossed text
𐁘 ${prefix}broken text
𐁘 ${prefix}papercut text
𐁘 ${prefix}gradient text
𐁘 ${prefix}glossy text
𐁘 ${prefix}watercolor text
𐁘 ${prefix}multicolor text
𐁘 ${prefix}neon_devil text
𐁘 ${prefix}underwater text
𐁘 ${prefix}bear text
𐁘 ${prefix}wonderfulg text
𐁘 ${prefix}christmas text
𐁘 ${prefix}neon_light text
𐁘 ${prefix}snow text
𐁘 ${prefix}cloudsky text
𐁘 ${prefix}luxury2 text
𐁘 ${prefix}gradient2 text
𐁘 ${prefix}summer text
𐁘 ${prefix}writing text
𐁘 ${prefix}engraved text
𐁘 ${prefix}summery text
𐁘 ${prefix}3dglue text
𐁘 ${prefix}metaldark text
𐁘 ${prefix}neonlight text
𐁘 ${prefix}oscar text
𐁘 ${prefix}minion text
𐁘 ${prefix}holographic text
𐁘 ${prefix}purple text
𐁘 ${prefix}glossyb text
𐁘 ${prefix}deluxe2 text
𐁘 ${prefix}glossyc text
𐁘 ${prefix}fabric text
𐁘 ${prefix}neonc text
𐁘 ${prefix}newyear text
𐁘 ${prefix}newyear2 text
𐁘 ${prefix}metals text
𐁘 ${prefix}xmas text
𐁘 ${prefix}blood text
𐁘 ${prefix}darkg text
𐁘 ${prefix}joker text
𐁘 ${prefix}wicker text
𐁘 ${prefix}natural text
𐁘 ${prefix}firework text
𐁘 ${prefix}skeleton text
𐁘 ${prefix}balloon text
𐁘 ${prefix}balloon2 text
𐁘 ${prefix}balloon3 text
𐁘 ${prefix}balloon4 text
𐁘 ${prefix}balloon5 text
𐁘 ${prefix}balloon6 text
𐁘 ${prefix}balloon7 text
𐁘 ${prefix}steel text
𐁘 ${prefix}gloss text
𐁘 ${prefix}denim text
𐁘 ${prefix}decorate text
𐁘 ${prefix}decorate2 text
𐁘 ${prefix}peridot text
𐁘 ${prefix}rock text
𐁘 ${prefix}glass text
𐁘 ${prefix}glass2 text
𐁘 ${prefix}glass3 text
𐁘 ${prefix}glass4 text
𐁘 ${prefix}glass5 text
𐁘 ${prefix}glass6 text
𐁘 ${prefix}glass7 text
𐁘 ${prefix}glass8 text
𐁘 ${prefix}captain_as2 text
𐁘 ${prefix}robot text
𐁘 ${prefix}equalizer text
𐁘 ${prefix}toxic text
𐁘 ${prefix}sparkling text
𐁘 ${prefix}sparkling2 text
𐁘 ${prefix}sparkling3 text
𐁘 ${prefix}sparkling4 text
𐁘 ${prefix}sparkling5 text
𐁘 ${prefix}sparkling6 text
𐁘 ${prefix}sparkling7 text
𐁘 ${prefix}decorative text
𐁘 ${prefix}chocolate text
𐁘 ${prefix}strawberry text
𐁘 ${prefix}koifish text
𐁘 ${prefix}bread text
𐁘 ${prefix}matrix text
𐁘 ${prefix}blood2 text
𐁘 ${prefix}neonligth2 text
𐁘 ${prefix}thunder2 text
𐁘 ${prefix}3dbox text
𐁘 ${prefix}neon2 text
𐁘 ${prefix}roadw text
𐁘 ${prefix}bokeh text
𐁘 ${prefix}gneon text
𐁘 ${prefix}advanced text
𐁘 ${prefix}dropwater text
𐁘 ${prefix}wall text
𐁘 ${prefix}chrismast text
𐁘 ${prefix}honey text
𐁘 ${prefix}drug text
𐁘 ${prefix}marble text
𐁘 ${prefix}marble2 text
𐁘 ${prefix}ice text
𐁘 ${prefix}juice text
𐁘 ${prefix}rusty text
𐁘 ${prefix}abstra text
𐁘 ${prefix}biscuit text
𐁘 ${prefix}wood text
𐁘 ${prefix}scifi text
𐁘 ${prefix}metalr text
𐁘 ${prefix}purpleg text
𐁘 ${prefix}shiny text 
𐁘 ${prefix}jewelry text
𐁘 ${prefix}jewelry2 text
𐁘 ${prefix}jewelry3 text
𐁘 ${prefix}jewelry4 text
𐁘 ${prefix}jewelry5 text
𐁘 ${prefix}jewelry6 text
𐁘 ${prefix}jewelry7 text
𐁘 ${prefix}jewelry8 text
𐁘 ${prefix}metalh text
𐁘 ${prefix}golden text
𐁘 ${prefix}glitter text
𐁘 ${prefix}glitter2 text
𐁘 ${prefix}glitter3 text
𐁘 ${prefix}glitter4 text
𐁘 ${prefix}glitter5 text
𐁘 ${prefix}glitter6 text
𐁘 ${prefix}glitter7 text
𐁘 ${prefix}metale text
𐁘 ${prefix}carbon text
𐁘 ${prefix}candy text
𐁘 ${prefix}metalb text
𐁘 ${prefix}gemb text
𐁘 ${prefix}3dchrome text
𐁘 ${prefix}metalb2 text
𐁘 ${prefix}metalg text
𐁘 ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`「 Others 」
𐁘 ${prefix}ttp [text]
𐁘 ${prefix}attp [text]
𐁘 ${prefix}afk [reason]
𐁘 ${prefix}translate kode_bahasa text
𐁘 ${prefix}kalkulator [query]
𐁘 ${prefix}smeme [text]
𐁘 ${prefix}smeme2 [text|text]
𐁘 ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`「 Game Menu 」
𐁘 ${prefix}kuismath
𐁘 ${prefix}tebakgambar
𐁘 ${prefix}tebakkata
𐁘 ${prefix}tebakbendera
𐁘 ${prefix}tebakkalimat
𐁘 ${prefix}tebaksiapa
𐁘 ${prefix}tebakkabupaten
𐁘 ${prefix}tebakkimia
𐁘 ${prefix}tebaklirik
𐁘 ${prefix}tebaktebakan
𐁘 ${prefix}tekateki
𐁘 ${prefix}susunkata
𐁘 ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`「 Asupan Menu 」
𐁘 ${prefix}chika
𐁘 ${prefix}delvira
𐁘 ${prefix}ayu
𐁘 ${prefix}bunga
𐁘 ${prefix}aura
𐁘 ${prefix}nisa
𐁘 ${prefix}ziva
𐁘 ${prefix}yana
𐁘 ${prefix}viona
𐁘 ${prefix}syania
𐁘 ${prefix}riri
𐁘 ${prefix}syifa
𐁘 ${prefix}mama_gina
𐁘 ${prefix}alcakenya
𐁘 ${prefix}mangayutri
𐁘 ${prefix}rikagusriani
𐁘 ${prefix}asupan
𐁘 ${prefix}bocil
𐁘 ${prefix}geayubi
𐁘 ${prefix}santuy
𐁘 ${prefix}ukhty
𐁘 ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`「 Random Cewe 」
𐁘 ${prefix}china 
𐁘 ${prefix}indonesia 
𐁘 ${prefix}malaysia 
𐁘 ${prefix}thailand 
𐁘 ${prefix}korea 
𐁘 ${prefix}japan 
𐁘 ${prefix}vietnam 
𐁘 ${prefix}jenni 
𐁘 ${prefix}jiso 
𐁘 ${prefix}lisa  
𐁘 ${prefix}rose
`
}

exports.tqto = () =>{
	return`「 TqTo 」 
𐁘 My God
𐁘 My Parents
𐁘 Fatih A.
𐁘 Ferdi
𐁘 DikaArdnt
𐁘 Mhankbarbar
𐁘 Nurutomo
𐁘 Rashid
𐁘 ZeeoneOfc
𐁘 Penyedia Module
𐁘 And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`「 Primbon 」
𐁘 ${prefix}nomorhoki 887435047326
𐁘 ${prefix}artimimpi [query]
𐁘 ${prefix}artinama [query]
𐁘 ${prefix}ramaljodoh
𐁘 ${prefix}ramaljodohbali
𐁘 ${prefix}suamiistri
𐁘 ${prefix}ramalcinta
𐁘 ${prefix}cocoknama
𐁘 ${prefix}pasangan
𐁘 ${prefix}jadiannikah
𐁘 ${prefix}sifatusaha
𐁘 ${prefix}rezeki
𐁘 ${prefix}pekerjaan
𐁘 ${prefix}nasib
𐁘 ${prefix}penyakit
𐁘 ${prefix}tarot
𐁘 ${prefix}fengshui
𐁘 ${prefix}haribaik
𐁘 ${prefix}harisangar
𐁘 ${prefix}harisial
𐁘 ${prefix}nagahari
𐁘 ${prefix}arahrezeki
𐁘 ${prefix}peruntungan
𐁘 ${prefix}weton
𐁘 ${prefix}karakter
𐁘 ${prefix}keberuntungan
𐁘 ${prefix}memancing
𐁘 ${prefix}masasubur
𐁘 ${prefix}zodiak 
𐁘 ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`「 Telegram Sticker 」
𐁘 ${prefix}awoawo
𐁘 ${prefix}benedict
𐁘 ${prefix}chat
𐁘 ${prefix}dbfly
𐁘 ${prefix}dino_kuning
𐁘 ${prefix}doge
𐁘 ${prefix}gojosatoru
𐁘 ${prefix}hope_boy
𐁘 ${prefix}jisoo
𐁘 ${prefix}kr_robot
𐁘 ${prefix}kucing
𐁘 ${prefix}lonte
𐁘 ${prefix}manusia_lidi
𐁘 ${prefix}menjamet
𐁘 ${prefix}meow
𐁘 ${prefix}nicholas
𐁘 ${prefix}patrick
𐁘 ${prefix}popoci
𐁘 ${prefix}sponsbob
𐁘 ${prefix}kawan_sponsbob
𐁘 ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`「 Ephoto360 Menu 」
𐁘 ${prefix}youtubegold text
𐁘 ${prefix}youtubesilver text
𐁘 ${prefix}facebookgold text
𐁘 ${prefix}facebooksilver text
𐁘 ${prefix}instagramgold text
𐁘 ${prefix}instagramsilver text
𐁘 ${prefix}twittergold text
𐁘 ${prefix}twittersilver text
𐁘 ${prefix}retrotext text
𐁘 ${prefix}halloweenbats text
𐁘 ${prefix}texthalloween text
𐁘 ${prefix}cardhalloween text
𐁘 ${prefix}birthdaycake text
𐁘 ${prefix}thundertext text
𐁘 ${prefix}icetext text
𐁘 ${prefix}milkcake text
𐁘 ${prefix}snowontext text
𐁘 ${prefix}metalstar text
𐁘 ${prefix}dragonfire text
𐁘 ${prefix}zombie3d text
𐁘 ${prefix}merrycard text
𐁘 ${prefix}generalexam text 
𐁘 ${prefix}viettel text
𐁘 ${prefix}embroider text
𐁘 ${prefix}graffititext text
𐁘 ${prefix}graffititext2 text
𐁘 ${prefix}graffititext3 text
𐁘 ${prefix}covergraffiti text
𐁘 ${prefix}moderngold text
𐁘 ${prefix}capercut text
𐁘 ${prefix}lovecard text
𐁘 ${prefix}heartflashlight text
𐁘 ${prefix}heartcup text
𐁘 ${prefix}sunglightshadow text
𐁘 ${prefix}graffiti3d text
𐁘 ${prefix}moderngoldsilver text
𐁘 ${prefix}moderngold2 text
𐁘 ${prefix}moderngold3 text
𐁘 ${prefix}fabrictext text
𐁘 ${prefix}masteryavatar text
𐁘 ${prefix}messagecoffee text
𐁘 ${prefix}announofwin text
𐁘 ${prefix}writeblood text
𐁘 ${prefix}horrorletter text
𐁘 ${prefix}writehorror text
𐁘 ${prefix}shirtclub text
𐁘 ${prefix}angelwing text
𐁘 ${prefix}christmasseason text
𐁘 ${prefix}projectyasuo text
𐁘 ${prefix}lovelycute text
𐁘 ${prefix}womansday text
𐁘 ${prefix}covergamepubg text
𐁘 ${prefix}nameonheart text
𐁘 ${prefix}funnyhalloween text
𐁘 ${prefix}lightningpubg text
𐁘 ${prefix}greetingcardvideo text 
𐁘 ${prefix}christmascard text 
𐁘 ${prefix}galaxybat text
𐁘 ${prefix}writegalaxy text
𐁘 ${prefix}starsnight text
𐁘 ${prefix}noeltext text
𐁘 ${prefix}textcakes text
𐁘 ${prefix}pubgbirthday text
𐁘 ${prefix}galaxywallpaper text
𐁘 ${prefix}pubgglicthvideo text 
𐁘 ${prefix}pubgmascotlogo text
𐁘 ${prefix}realembroidery text
𐁘 ${prefix}vintagetelevision text
𐁘 ${prefix}funnyanimations text
𐁘 ${prefix}glowingtext text
𐁘 ${prefix}textonglass text
𐁘 ${prefix}cartoonstyle text
𐁘 ${prefix}multicolor text
𐁘 ${prefix}watercolor2 text
𐁘 ${prefix}textsky text
𐁘 ${prefix}summerbeach text
𐁘 ${prefix}1917text text
𐁘 ${prefix}puppycute text
𐁘 ${prefix}rosebirthday text
𐁘 ${prefix}steellettering text|text2
𐁘 ${prefix}letterstext text|text2
𐁘 ${prefix}barcashirt text|text2
𐁘 ${prefix}premiercup text|text2
𐁘 ${prefix}stylepoligon text|text2
𐁘 ${prefix}lifebuoys text|text2
𐁘 ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`「 Logo Menu 」
𐁘 ${prefix}coverbannerlol text|heroes
𐁘 ${prefix}pubglogomaker text|style
𐁘 ${prefix}colorfulpubg text|color
𐁘 ${prefix}astronotspace text|style
𐁘 ${prefix}wallpaperaov text|heroes
𐁘 ${prefix}maketeamlogo text|style
𐁘 ${prefix}circlemarcotteam text|logo
𐁘 ${prefix}wallpaperml text|heroes
𐁘 ${prefix}dragonballfb text|character
𐁘 ${prefix}bannerofaov text|character
𐁘 ${prefix}effect3donbeach text|background
𐁘 ${prefix}cutegirlgamer text|logo
𐁘 ${prefix}footballteam text|logo
𐁘 ${prefix}beautifulshimmering text|champion
𐁘 ${prefix}pubgcutelogo text|logo
𐁘 ${prefix}elegantrotation text|logo
𐁘 ${prefix}logogamingassasin text|logo
𐁘 ${prefix}introvideomaker text|logo
𐁘 ${prefix}gaminglogo4fvs text|logo
𐁘 ${prefix}blueneon text|logo
𐁘 ${prefix}metalmascot text|logo
𐁘 ${prefix}anonymous2 text|style
𐁘 ${prefix}lolpentakill text|style
𐁘 ${prefix}avatarleagueofking text|style
𐁘 ${prefix}avatarff text|character
𐁘 ${prefix}overwatchwallpaper text|character
𐁘 ${prefix}rovwallpaperhd text|hero
𐁘 ${prefix}rovwallpaper text|avatar
𐁘 ${prefix}beautifulgalaxylol text|style
𐁘 ${prefix}crossfirecover text|character
𐁘 ${prefix}lolwallpaper text|wallpaper
𐁘 ${prefix}coverdota2 text|heroes
𐁘 ${prefix}coverleagueofking text|character
𐁘 ${prefix}avatar3q360 text|avatar
𐁘 ${prefix}coverofwarface text|character
𐁘 ${prefix}newlolavatar text|avatar
𐁘 ${prefix}csgocover text|background
𐁘 ${prefix}coverloknew text|hero
𐁘 ${prefix}coverfblol text|letters
𐁘 ${prefix}overwatchcover text|hero
𐁘 ${prefix}crossfirestyle text|avatar
𐁘 ${prefix}avatarlolbyname text|style
𐁘 ${prefix}lolcoverbyname text|avatar
𐁘 ${prefix}cyberhunterfb text|character
𐁘 ${prefix}coverfreefirefb text|character
𐁘 ${prefix}gamingmascot text|style
𐁘 ${prefix}coveronepiecefb text|character
𐁘 ${prefix}bannerytcsgo text|banner
𐁘 ${prefix}fbgamepubgcover text|template
𐁘 ${prefix}banneroflol text|text2|banner
𐁘 ${prefix}bannerofaov2 text|text2|banner
𐁘 ${prefix}teamlogo text|text2|background
𐁘 ${prefix}companylogo2 text|text2|background
𐁘 ${prefix}companylogo text|text2|background
𐁘 ${prefix}gradientlogo text|text2|background
𐁘 ${prefix}pencilsketch text|text2|icon
𐁘 ${prefix}gunlogogaming text|text2|background
𐁘 ${prefix}banneroffreefire text|text2|background
𐁘 ${prefix}letterlogos text|text2|thumb
𐁘 ${prefix}bannerofoverwatch text|text2|background
𐁘 ${prefix}bannerofapex text|text2|background
𐁘 ${prefix}bannerofpubg text|text2|background
𐁘 ${prefix}mascotstyle text|text2|thumb
𐁘 ${prefix}logoaccording text|text2|thumb
𐁘 ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`「 Islamic Menu 」
𐁘 ${prefix}asmaulhusna
𐁘 ${prefix}kisahnabi [nabi]
𐁘 ${prefix}jadwalshalat [daerah]
𐁘 ${prefix}randomquran
𐁘 ${prefix}randomquran2
𐁘 ${prefix}listsurah
𐁘 ${prefix}tafsirsurah [surah]
𐁘 ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`「 Anonymous 」
𐁘 ${prefix}anonymous 
𐁘 ${prefix}start
𐁘 ${prefix}skip [daerah]
𐁘 ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`「 Store Menu 」
𐁘 ${prefix}list
𐁘 ${prefix}addlist [key|respond]
𐁘 ${prefix}dellist [key]
𐁘 ${prefix}update [key|respond]
𐁘 ${prefix}store
𐁘 ${prefix}kali
𐁘 ${prefix}bagi
𐁘 ${prefix}tambah
𐁘 ${prefix}kurang
𐁘 ${prefix}kalkulator
𐁘 ${prefix}setproses
𐁘 ${prefix}updateproses
𐁘 ${prefix}cekproses
𐁘 ${prefix}delproses
𐁘 ${prefix}setdone
𐁘 ${prefix}updatedone
𐁘 ${prefix}cekdone
𐁘 ${prefix}deldone
𐁘 ${prefix}pay
𐁘 ${prefix}setcaptionpay
𐁘 ${prefix}proses
𐁘 ${prefix}done
`
}

exports.voiceChange = (prefix) =>{
	return`「 Voice Change Menu 」
𐁘 ${prefix}bass
𐁘 ${prefix}blown
𐁘 ${prefix}deep
𐁘 ${prefix}earrape
𐁘 ${prefix}fast
𐁘 ${prefix}fat
𐁘 ${prefix}nightcore
𐁘 ${prefix}reverse
𐁘 ${prefix}robot
𐁘 ${prefix}slow
𐁘 ${prefix}smooth
𐁘 ${prefix}tupai
`
}
exports.storagemenu = (prefix) =>{
	return`「 Storage Menu 」
𐁘 ${prefix}addvn
𐁘 ${prefix}listvn
𐁘 ${prefix}addimage
𐁘 ${prefix}listimage
𐁘 ${prefix}addvideo
𐁘 ${prefix}listvideo
𐁘 ${prefix}addstik
𐁘 ${prefix}liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`「 Rpg Games 」
𐁘 ${prefix}adventure
𐁘 ${prefix}weekly
𐁘 ${prefix}use
𐁘 ${prefix}transfer
𐁘 ${prefix}slot
𐁘 ${prefix}shop
𐁘 ${prefix}pasar
𐁘 ${prefix}ojek
𐁘 ${prefix}nguli
𐁘 ${prefix}narik
𐁘 ${prefix}nabung
𐁘 ${prefix}monthly
𐁘 ${prefix}mining
𐁘 ${prefix}merampok
𐁘 ${prefix}mancing
𐁘 ${prefix}kolam
𐁘 ${prefix}koboy
𐁘 ${prefix}kerja
𐁘 ${prefix}kandang
𐁘 ${prefix}judi
𐁘 ${prefix}inventory
𐁘 ${prefix}hourly
𐁘 ${prefix}fishop
𐁘 ${prefix}feed
𐁘 ${prefix}duel
𐁘 ${prefix}daily
𐁘 ${prefix}craft
𐁘 ${prefix}cooldown
𐁘 ${prefix}cook
𐁘 ${prefix}collect
𐁘 ${prefix}chop
𐁘 ${prefix}casino
𐁘 ${prefix}buy
𐁘 ${prefix}bank 
𐁘 ${prefix}bansos
𐁘 ${prefix}berdagang
𐁘 ${prefix}berkebon
𐁘 ${prefix}build
`
}

exports.soundmenu = (prefix) =>{
return`「 Sound Menu 」
𐁘 ${prefix}sound1
𐁘 ${prefix}sound2
𐁘 ${prefix}sound3
𐁘 ${prefix}sound4
𐁘 ${prefix}sound5
𐁘 ${prefix}sound6
𐁘 ${prefix}sound7
𐁘 ${prefix}sound8
𐁘 ${prefix}sound9
𐁘 ${prefix}sound10
𐁘 ${prefix}sound11
𐁘 ${prefix}sound12
𐁘 ${prefix}sound13
𐁘 ${prefix}sound14
𐁘 ${prefix}sound15
𐁘 ${prefix}sound16
𐁘 ${prefix}sound17
𐁘 ${prefix}sound18 
𐁘 ${prefix}sound19
𐁘 ${prefix}sound20
𐁘 ${prefix}sound21
𐁘 ${prefix}sound22
𐁘 ${prefix}sound23
𐁘 ${prefix}sound24
𐁘 ${prefix}sound25
𐁘 ${prefix}sound26
𐁘 ${prefix}sound27
𐁘 ${prefix}sound28
𐁘 ${prefix}sound29
𐁘 ${prefix}sound30
𐁘 ${prefix}sound31
𐁘 ${prefix}sound32
𐁘 ${prefix}sound33
𐁘 ${prefix}sound34
𐁘 ${prefix}sound35
𐁘 ${prefix}sound36
𐁘 ${prefix}sound37
𐁘 ${prefix}sound38
𐁘 ${prefix}sound39
𐁘 ${prefix}sound40
𐁘 ${prefix}sound41
𐁘 ${prefix}sound42
𐁘 ${prefix}sound43
𐁘 ${prefix}sound44
𐁘 ${prefix}sound45
𐁘 ${prefix}sound46
𐁘 ${prefix}sound47
𐁘 ${prefix}sound48
𐁘 ${prefix}sound49
𐁘 ${prefix}sound50
𐁘 ${prefix}sound51
𐁘 ${prefix}sound52
𐁘 ${prefix}sound53
𐁘 ${prefix}sound54
𐁘 ${prefix}sound55
𐁘 ${prefix}sound56
𐁘 ${prefix}sound57
𐁘 ${prefix}sound58
𐁘 ${prefix}sound59
𐁘 ${prefix}sound60
𐁘 ${prefix}sound61
𐁘 ${prefix}sound62
𐁘 ${prefix}sound63
𐁘 ${prefix}sound64
𐁘 ${prefix}sound65
𐁘 ${prefix}sound66
𐁘 ${prefix}sound67
𐁘 ${prefix}sound68
𐁘 ${prefix}sound69
𐁘 ${prefix}sound70
`
}
