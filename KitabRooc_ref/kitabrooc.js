/* =============================================
   KITABROOC — Ragnarok Origin Classic
   JavaScript + Data File
   =============================================

   PANDUAN GANTI GAMBAR:
   ---------------------
   1. Buat folder: assets/jobs/ dan assets/cards/
   2. Isi dengan gambar dari Ragnarok client / ratemyserver.net
   3. Edit bagian IMAGE PATHS di bawah ini

   Contoh nama file:
   - assets/jobs/lord_knight.png
   - assets/cards/turtle_general.png
   - assets/cards/thara_frog.png

   ============================================= */

// =============================================
// IMAGE PATHS — Edit bagian ini untuk ganti gambar
// =============================================
const JOB_IMAGES = {
  paladin:   'assets/jobs/paladin.png',
  lk:        'assets/jobs/lord_knight.png',
  hw:        'assets/jobs/high_wizard.png',
  prof:      'assets/jobs/professor.png',
  ms:        'assets/jobs/mastersmith.png',
  bio:       'assets/jobs/biochemist.png',
  sum:       'assets/jobs/summoner.png',
  hp:        'assets/jobs/high_priest.png',
  champ:     'assets/jobs/champion.png',
  ax:        'assets/jobs/assassin_cross.png',
  stk:       'assets/jobs/stalker.png',
  sniper:    'assets/jobs/sniper.png',
  mins:      'assets/jobs/minstrel.png',
};

const CARD_IMAGES = {
  'Dracula Card':          'assets/cards/dracula.png',
  'Osiris Card':           'assets/cards/osiris.png',
  'Thanatos Card':         'assets/cards/thanatos.png',
  'Maya Card':             'assets/cards/maya.png',
  'Turtle General Card':   'assets/cards/turtle_general.png',
  'Baphomet Card':         'assets/cards/baphomet.png',
  'Eddga Card':            'assets/cards/eddga.png',
  'Phreeoni Card':         'assets/cards/phreeoni.png',
  'Mistress Card':         'assets/cards/mistress.png',
  'Ktullanux Card':        'assets/cards/ktullanux.png',
  'Golden Bug Card':       'assets/cards/golden_bug.png',
  'Hunter Fly Card':       'assets/cards/hunter_fly.png',
  'Dark Lord Card':        'assets/cards/dark_lord.png',
  'RSX-0806 Card':         'assets/cards/rsx.png',
  'Eclipse Card':          'assets/cards/eclipse.png',
  'Hydra Card':            'assets/cards/hydra.png',
  'Skeleton Worker Card':  'assets/cards/skeleton_worker.png',
  'Orc Skeleton Card':     'assets/cards/orc_skeleton.png',
  'Soldier Skeleton Card': 'assets/cards/soldier_skeleton.png',
  'Plankton Card':         'assets/cards/plankton.png',
  'Zenorc Card':           'assets/cards/zenorc.png',
  'Matyr Card':            'assets/cards/matyr.png',
  'Sohee Card':            'assets/cards/sohee.png',
  'Verit Card':            'assets/cards/verit.png',
  'Roda Frog Card':        'assets/cards/roda_frog.png',
  'Thara Frog Card':       'assets/cards/thara_frog.png',
  'Alice Card':            'assets/cards/alice.png',
  'Punk Card':             'assets/cards/punk.png',
  'Whisper Card':          'assets/cards/whisper.png',
  'Raydric Card':          'assets/cards/raydric.png',
};

// Helper: render gambar job (fallback ke emoji jika file tidak ada)
function jobImgHTML(id, emoji, size = 44) {
  const src = JOB_IMAGES[id];
  if (!src) return emoji;
  return `<img src="${src}" alt="${id}" onerror="this.parentElement.textContent='${emoji}'" style="width:${size}px;height:${size}px;object-fit:contain;">`;
}

// Helper: render gambar kartu (fallback ke emoji)
function cardImgHTML(name, emoji) {
  const src = CARD_IMAGES[name];
  if (!src) return emoji;
  return `<img src="${src}" alt="${name}" onerror="this.parentElement.textContent='${emoji}'" style="width:100%;height:100%;object-fit:contain;">`;
}

// =============================================
// SKILL TREE DATA — 3 Tiers × 13 Jobs
// Deskripsi berdasarkan Ragnarok Origin Classic
// =============================================
const TREES = {
  lk: {
    tiers: [
      { name:'Swordsman', icon:'🧑‍⚔️', sub:'Job Awal', sp:40, skills:[
        { n:'Increase HP Recovery', i:'💚', d:'HP regen pasif lebih cepat.', max:10, req:null, c:1 },
        { n:'Sword Mastery', i:'⚔️', d:'+ATK saat pakai Sword/Dagger.', max:10, req:null, c:1 },
        { n:'Two-Hand Sword Mastery', i:'⚔️', d:'+ATK saat pakai 2H Sword.', max:10, req:'Sword Mastery 1', c:1 },
        { n:'Magnum Break', i:'🔥', d:'AoE api kecil, knockback.', max:10, req:'Sword Mastery 3', c:1 },
        { n:'Bash', i:'💥', d:'Serangan kuat tunggal, chance stun.', max:10, req:'Sword Mastery 5', c:1 },
        { n:'Provoke', i:'😤', d:'Turunkan DEF musuh, naikkan ATK sementara.', max:10, req:null, c:1 },
        { n:'Endure', i:'🧱', d:'Tahan interrupt saat casting.', max:10, req:null, c:1 },
        { n:'Moving HP Recovery', i:'💓', d:'HP recovery saat bergerak.', max:3, req:'Increase HP Recovery 5', c:1 },
      ]},
      { name:'Knight', icon:'🗡️', sub:'Job 2', sp:40, skills:[
        { n:'Two-Hand Quicken', i:'⚡', d:'ASPD tinggi saat pakai 2H Sword.', max:10, req:null, c:1 },
        { n:'Spear Mastery', i:'🔱', d:'+ATK saat pakai senjata spear.', max:10, req:null, c:1 },
        { n:'Pierce', i:'🔱', d:'Serangan tembus berdasarkan size musuh.', max:10, req:'Spear Mastery 1', c:1 },
        { n:'Spear Stab', i:'🗡️', d:'Serang + knockback linear dengan spear.', max:5, req:'Pierce 3', c:1 },
        { n:'Spear Boomerang', i:'💫', d:'Lempar spear jarak jauh, kembali.', max:5, req:'Pierce 3', c:1 },
        { n:'Bowling Bash', i:'🌀', d:'Serangan AoE pantul ke dinding, damage masif.', max:10, req:null, c:1 },
        { n:'Cavalier Mastery', i:'🐴', d:'Meningkatkan performa naik kuda.', max:5, req:null, c:1 },
        { n:'Charge Attack', i:'💨', d:'Terobos ke target dari jarak jauh.', max:1, req:null, c:2 },
      ]},
      { name:'Lord Knight', icon:'⚔️', sub:'Trans Job', sp:40, skills:[
        { n:'Aura Blade', i:'✨', d:'+ATK flat tidak bisa di-reduce DEF musuh.', max:5, req:null, c:2 },
        { n:'Parry', i:'🛡️', d:'Chance block serangan fisik total.', max:10, req:null, c:1 },
        { n:'Concentration', i:'🎯', d:'+ATK, +HIT; kurangi DEF sementara.', max:5, req:null, c:1 },
        { n:'Tension Relax', i:'🧘', d:'HP regen sangat cepat saat berhenti.', max:3, req:null, c:1 },
        { n:'Berserk', i:'😡', d:'ATK masif, tidak bisa sembuh selama durasi.', max:1, req:'Tension Relax 1', c:4 },
        { n:'Clashing Spiral', i:'💫', d:'Damage besar berdasarkan refine level spear.', max:5, req:null, c:2 },
        { n:'Head Crush', i:'🩸', d:'Chance buat musuh bleeding.', max:5, req:null, c:1 },
        { n:'Brandish Spear', i:'🌪️', d:'AoE 3x3 dengan spear.', max:10, req:null, c:1 },
      ]},
    ]
  },
  paladin: {
    tiers: [
      { name:'Swordsman', icon:'🧑‍⚔️', sub:'Job Awal', sp:40, skills:[
        { n:'Increase HP Recovery', i:'💚', d:'HP regen pasif lebih cepat.', max:10, req:null, c:1 },
        { n:'Sword Mastery', i:'⚔️', d:'+ATK saat pakai Sword/Dagger.', max:10, req:null, c:1 },
        { n:'Bash', i:'💥', d:'Serangan kuat tunggal, chance stun.', max:10, req:'Sword Mastery 5', c:1 },
        { n:'Magnum Break', i:'🔥', d:'AoE api kecil, knockback.', max:10, req:'Sword Mastery 3', c:1 },
        { n:'Provoke', i:'😤', d:'Turunkan DEF musuh, naikkan ATK sementara.', max:10, req:null, c:1 },
        { n:'Endure', i:'🧱', d:'Tahan interrupt saat casting.', max:10, req:null, c:1 },
        { n:'Two-Hand Sword Mastery', i:'⚔️', d:'+ATK saat pakai 2H Sword.', max:10, req:'Sword Mastery 1', c:1 },
        { n:'Moving HP Recovery', i:'💓', d:'HP recovery saat bergerak.', max:3, req:'Increase HP Recovery 5', c:1 },
      ]},
      { name:'Crusader', icon:'✝️', sub:'Job 2', sp:40, skills:[
        { n:'Holy Cross', i:'✝️', d:'Dua serangan Holy element ke target.', max:10, req:null, c:1 },
        { n:'Grand Cross', i:'☩', d:'AoE Holy besar di sekitar tubuh. HP terkuras.', max:10, req:'Holy Cross 5', c:2 },
        { n:'Smite', i:'🛡️', d:'Serangan knockback menggunakan shield.', max:5, req:null, c:1 },
        { n:'Shield Boomerang', i:'⭕', d:'Lempar shield ke musuh.', max:5, req:'Smite 3', c:1 },
        { n:'Resistant Souls', i:'💎', d:'+HP per level.', max:5, req:null, c:1 },
        { n:'Shield Reflect', i:'🔄', d:'Pantulkan damage melee kembali ke penyerang.', max:10, req:null, c:1 },
        { n:'Faith', i:'🙏', d:'+MaxHP dan +Holy resistance.', max:10, req:null, c:1 },
        { n:'Cure', i:'💊', d:'Hilangkan status Blind, Confusion, Silence.', max:1, req:null, c:2 },
      ]},
      { name:'Paladin', icon:'🛡️', sub:'Trans Job', sp:40, skills:[
        { n:'Shield Chain', i:'🛡️', d:'Serangan fisik berbasis DEF shield.', max:5, req:null, c:2 },
        { n:'Devotion', i:'❤️', d:'Serap semua damage anggota party ke diri sendiri.', max:5, req:null, c:2 },
        { n:'Pressure', i:'💫', d:'Serangan Holy yang menguras SP musuh.', max:5, req:null, c:2 },
        { n:'Gospel', i:'✨', d:'AoE random buff/debuff dalam radius besar.', max:10, req:null, c:2 },
        { n:'Defending Aura', i:'🔰', d:'Kurangi damage ranged yang diterima.', max:5, req:null, c:1 },
        { n:'Martyr\'s Reckoning', i:'💀', d:'Korbankan HP sendiri untuk damage sangat tinggi.', max:5, req:null, c:2 },
        { n:'Mana Shield', i:'🔮', d:'Alihkan damage yang diterima ke SP.', max:5, req:null, c:2 },
        { n:'Battle Chant', i:'📯', d:'AoE buff random untuk seluruh party.', max:10, req:null, c:2 },
      ]},
    ]
  },
  hw: {
    tiers: [
      { name:'Mage', icon:'🪄', sub:'Job Awal', sp:40, skills:[
        { n:'Fire Bolt', i:'🔥', d:'Bolt api single target.', max:10, req:null, c:1 },
        { n:'Cold Bolt', i:'❄️', d:'Bolt es single target, chance freeze.', max:10, req:null, c:1 },
        { n:'Lightning Bolt', i:'⚡', d:'Bolt petir single target.', max:10, req:null, c:1 },
        { n:'Fire Wall', i:'🔥', d:'Dinding api yang memblokir jalur.', max:10, req:'Fire Bolt 5', c:1 },
        { n:'Stone Curse', i:'🪨', d:'Ubah musuh menjadi batu (petrify).', max:10, req:null, c:1 },
        { n:'Soul Strike', i:'💜', d:'Serangan soul langsung ke musuh undead.', max:10, req:null, c:1 },
        { n:'Sight', i:'👁️', d:'Munculkan musuh tersembunyi di sekitar.', max:1, req:null, c:2 },
        { n:'Energy Coat', i:'💎', d:'Kurangi damage berdasarkan SP yang tersisa.', max:1, req:null, c:4 },
      ]},
      { name:'Wizard', icon:'🔮', sub:'Job 2', sp:40, skills:[
        { n:'Fire Pillar', i:'🏛️', d:'Jebakan api, meledak saat dilintasi musuh.', max:10, req:'Fire Bolt 5', c:1 },
        { n:'Meteor Storm', i:'☄️', d:'Hujan meteor api random area. MVP killer.', max:10, req:'Fire Pillar 5', c:2 },
        { n:'Storm Gust', i:'🌪️', d:'Tornado es AoE besar, chance freeze massal.', max:10, req:'Cold Bolt 5', c:2 },
        { n:'Lord of Vermillion', i:'⚡', d:'Badai petir AoE besar, chance blind.', max:10, req:'Lightning Bolt 5', c:2 },
        { n:'Heaven\'s Drive', i:'🌍', d:'AoE tanah menghancurkan jebakan musuh.', max:5, req:null, c:1 },
        { n:'Water Ball', i:'💧', d:'Bola air bergulir ke target.', max:5, req:null, c:1 },
        { n:'Sightrasher', i:'🌀', d:'Serang musuh tersembunyi di sekitar dengan api.', max:10, req:'Sight 1', c:1 },
        { n:'Frost Diver', i:'🧊', d:'Freeze satu target secara instan.', max:10, req:null, c:1 },
      ]},
      { name:'High Wizard', icon:'🔮', sub:'Trans Job', sp:40, skills:[
        { n:'Mystical Amplification', i:'💜', d:'Spell berikutnya +50% damage.', max:10, req:null, c:1 },
        { n:'Amplify Magic Power', i:'🔮', d:'+MATK sementara.', max:5, req:null, c:2 },
        { n:'Safety Wall', i:'🧱', d:'Dinding anti melee satu tile.', max:10, req:null, c:1 },
        { n:'Soul Drain', i:'💀', d:'Musuh mati oleh bolt memberikan SP.', max:10, req:null, c:1 },
        { n:'Napalm Vulcan', i:'🔥', d:'AoE api burst yang burn musuh.', max:5, req:null, c:2 },
        { n:'Ganbantein', i:'🌿', d:'Hapus semua magic field di area target.', max:1, req:null, c:4 },
        { n:'Gravitation Field', i:'🌑', d:'Area gravitasi tinggi, kurangi ASPD semua dalam area.', max:5, req:null, c:2 },
        { n:'Stave Crasher', i:'💥', d:'Serangan fisik berbasis MATK.', max:1, req:null, c:3 },
      ]},
    ]
  },
  prof: {
    tiers: [
      { name:'Mage', icon:'🪄', sub:'Job Awal', sp:40, skills:[
        { n:'Fire Bolt', i:'🔥', d:'Bolt api single target.', max:10, req:null, c:1 },
        { n:'Cold Bolt', i:'❄️', d:'Bolt es single target, chance freeze.', max:10, req:null, c:1 },
        { n:'Lightning Bolt', i:'⚡', d:'Bolt petir single target.', max:10, req:null, c:1 },
        { n:'Stone Curse', i:'🪨', d:'Ubah musuh menjadi batu (petrify).', max:10, req:null, c:1 },
        { n:'Soul Strike', i:'💜', d:'Serangan soul untuk musuh undead.', max:10, req:null, c:1 },
        { n:'Fire Wall', i:'🔥', d:'Dinding api yang memblokir jalur.', max:10, req:'Fire Bolt 5', c:1 },
        { n:'Sight', i:'👁️', d:'Munculkan musuh tersembunyi.', max:1, req:null, c:2 },
        { n:'Energy Coat', i:'💎', d:'Kurangi damage berdasarkan SP tersisa.', max:1, req:null, c:4 },
      ]},
      { name:'Sage', icon:'📖', sub:'Job 2', sp:40, skills:[
        { n:'Auto Spell', i:'✨', d:'Chance cast spell otomatis saat menyerang fisik.', max:10, req:null, c:1 },
        { n:'Spell Breaker', i:'❌', d:'Interrupt casting musuh dan serap SP-nya.', max:5, req:null, c:1 },
        { n:'Magic Rod', i:'🪄', d:'Absorb spell yang mengenai diri menjadi SP.', max:5, req:null, c:1 },
        { n:'Dispell', i:'🌀', d:'Hapus semua buff aktif target.', max:5, req:'Magic Rod 3', c:2 },
        { n:'Seismic Weapon', i:'🌍', d:'Ubah senjata menjadi Earth element.', max:5, req:null, c:1 },
        { n:'Lightning Loader', i:'⚡', d:'Ubah senjata menjadi Wind element.', max:5, req:null, c:1 },
        { n:'Dragonology', i:'🐲', d:'+INT dan +damage ke Dragon race.', max:5, req:null, c:1 },
        { n:'Volcano / Deluge', i:'🌋', d:'Ubah terrain jadi api atau air di area.', max:5, req:null, c:1 },
      ]},
      { name:'Professor', icon:'📖', sub:'Trans Job', sp:40, skills:[
        { n:'Soul Burn', i:'💀', d:'Bakar atau serap SP target.', max:5, req:null, c:2 },
        { n:'Soul Change', i:'🔄', d:'Tukar SP pengguna dengan target.', max:1, req:null, c:3 },
        { n:'Cast Cancel', i:'❌', d:'Batalkan casting yang sedang berlangsung instan.', max:5, req:null, c:1 },
        { n:'Fiber Lock', i:'🕸️', d:'Immobilize target di posisinya.', max:5, req:null, c:2 },
        { n:'Quagmire', i:'🌊', d:'Area lumpur kurangi AGI dan DEX target.', max:5, req:null, c:1 },
        { n:'Land Protector', i:'🌿', d:'Area meniadakan semua efek magic field.', max:5, req:'Quagmire 3', c:2 },
        { n:'Memorize', i:'📝', d:'Kurangi cast time spell berikutnya menjadi 0.', max:1, req:null, c:3 },
        { n:'Indulge', i:'🍷', d:'Drain SP sendiri untuk menambah SP target.', max:5, req:null, c:1 },
      ]},
    ]
  },
  ms: {
    tiers: [
      { name:'Merchant', icon:'🛒', sub:'Job Awal', sp:40, skills:[
        { n:'Discount', i:'💲', d:'Beli item dari NPC dengan harga lebih murah.', max:10, req:null, c:1 },
        { n:'Overcharge', i:'💰', d:'Jual item ke NPC dengan harga lebih mahal.', max:10, req:null, c:1 },
        { n:'Pushcart', i:'🛒', d:'Izinkan penggunaan cart.', max:10, req:null, c:1 },
        { n:'Mammonite', i:'💸', d:'Serang musuh dengan uang, damage berbasis zeny.', max:10, req:null, c:1 },
        { n:'Enlarge Weight Limit', i:'⚖️', d:'Meningkatkan kapasitas membawa beban.', max:10, req:'Pushcart 3', c:1 },
        { n:'Vending', i:'🏪', d:'Buka toko untuk jual item ke player lain.', max:10, req:'Pushcart 1', c:1 },
        { n:'Identify', i:'🔍', d:'Identifikasi item tanpa menggunakan magnifier.', max:1, req:null, c:2 },
        { n:'Change Cart', i:'🔄', d:'Ubah tampilan cart.', max:1, req:'Pushcart 5', c:2 },
      ]},
      { name:'Blacksmith', icon:'🔨', sub:'Job 2', sp:40, skills:[
        { n:'Hilt Binding', i:'🗡️', d:'+ATK dan perpanjang durasi Adrenaline Rush.', max:1, req:null, c:2 },
        { n:'Adrenaline Rush', i:'⚡', d:'+ASPD seluruh party (axe/mace).', max:5, req:'Hilt Binding 1', c:2 },
        { n:'Power Thrust', i:'💪', d:'Naikkan ATK semua anggota party sekitar.', max:5, req:null, c:1 },
        { n:'Over Thrust', i:'🔩', d:'+ATK diri sendiri sangat tinggi.', max:5, req:'Power Thrust 3', c:2 },
        { n:'Skin Tempering', i:'🛡️', d:'+DEF dan +Fire resistance pasif.', max:5, req:null, c:1 },
        { n:'Weaponry Research', i:'🔬', d:'+HIT dan +ATK pasif.', max:10, req:null, c:1 },
        { n:'Weapon Perfection', i:'✨', d:'Seluruh serangan dianggap mengenai ukuran optimal.', max:5, req:null, c:1 },
        { n:'Cart Revolution', i:'🛒', d:'AoE menggunakan cart, damage berdasarkan berat isi cart.', max:1, req:'Pushcart 5', c:2 },
      ]},
      { name:'Mastersmith', icon:'⚙️', sub:'Trans Job', sp:40, skills:[
        { n:'Meltdown', i:'🔥', d:'Chance break armor dan senjata musuh.', max:10, req:null, c:1 },
        { n:'Weapon Repair', i:'🔧', d:'Perbaiki equipment rusak di field.', max:5, req:'Weaponry Research 1', c:2 },
        { n:'Upgrade Weapon', i:'⬆️', d:'Upgrade senjata langsung di field.', max:7, req:'Weapon Repair 3', c:2 },
        { n:'Gold Digger', i:'⛏️', d:'Chance dapatkan ore/material saat kill monster.', max:5, req:null, c:1 },
        { n:'Greed', i:'💎', d:'Pickup semua item di sekitar secara otomatis.', max:1, req:null, c:4 },
        { n:'Cart Boost', i:'🚀', d:'+Speed saat menggunakan cart.', max:5, req:'Cart Revolution 1', c:2 },
        { n:'Power Maximize', i:'💪', d:'Semua serangan selalu max damage. Menguras SP.', max:5, req:null, c:2 },
        { n:'Hammerfall', i:'🔨', d:'AoE serangan palu, chance stun dalam area.', max:5, req:null, c:1 },
      ]},
    ]
  },
  bio: {
    tiers: [
      { name:'Merchant', icon:'🛒', sub:'Job Awal', sp:40, skills:[
        { n:'Discount', i:'💲', d:'Beli item NPC lebih murah.', max:10, req:null, c:1 },
        { n:'Overcharge', i:'💰', d:'Jual item NPC lebih mahal.', max:10, req:null, c:1 },
        { n:'Pushcart', i:'🛒', d:'Izinkan penggunaan cart.', max:10, req:null, c:1 },
        { n:'Mammonite', i:'💸', d:'Serang dengan uang, damage berbasis zeny.', max:10, req:null, c:1 },
        { n:'Enlarge Weight Limit', i:'⚖️', d:'Tingkatkan kapasitas membawa beban.', max:10, req:'Pushcart 3', c:1 },
        { n:'Vending', i:'🏪', d:'Buka toko untuk jual item ke player.', max:10, req:'Pushcart 1', c:1 },
        { n:'Identify', i:'🔍', d:'Identifikasi item tanpa magnifier.', max:1, req:null, c:2 },
        { n:'Change Cart', i:'🔄', d:'Ubah tampilan cart.', max:1, req:'Pushcart 5', c:2 },
      ]},
      { name:'Alchemist', icon:'🧪', sub:'Job 2', sp:40, skills:[
        { n:'Pharmacy', i:'⚗️', d:'Buat potion khusus dari material.', max:10, req:null, c:1 },
        { n:'Prepare Potion', i:'💊', d:'Persiapan bahan potion lebih efisien.', max:10, req:'Pharmacy 3', c:1 },
        { n:'Aid Condensed Potion', i:'💉', d:'Lempar condensed potion untuk heal.', max:5, req:'Prepare Potion 3', c:1 },
        { n:'Aid Berserk Potion', i:'😡', d:'Lempar berserk potion ke target.', max:5, req:'Prepare Potion 5', c:1 },
        { n:'Self Destruction', i:'💣', d:'Meledak diri sendiri — damage besar ke sekitar.', max:5, req:null, c:2 },
        { n:'Biotechnology', i:'🔬', d:'+efektivitas potion dan material craft.', max:5, req:null, c:1 },
        { n:'Summon Flora', i:'🌱', d:'Summon tanaman untuk membantu dalam battle.', max:5, req:'Pharmacy 5', c:2 },
        { n:'Sphere Mine', i:'⚡', d:'Bola plasma meledak saat musuh mendekat.', max:5, req:null, c:1 },
      ]},
      { name:'Biochemist', icon:'⚗️', sub:'Trans Job', sp:40, skills:[
        { n:'Acid Bomb', i:'💣', d:'Damage % HP + break armor. Ignore DEF.', max:10, req:null, c:1 },
        { n:'Slim Potion Pitcher', i:'🍶', d:'Lempar potion AoE, heal party dalam area.', max:5, req:'Aid Condensed Potion 5', c:2 },
        { n:'Homunculus Summon', i:'🤖', d:'Panggil Homunculus sebagai companion tempur.', max:5, req:'Summon Flora 3', c:2 },
        { n:'Chemical Protection', i:'🧪', d:'Lindungi equipment dari efek break.', max:5, req:null, c:1 },
        { n:'Aid Potion', i:'💊', d:'Potion yang dipakai lebih efektif.', max:10, req:null, c:1 },
        { n:'Mutation Synthesis', i:'🧬', d:'Modifikasi Homunculus untuk stat lebih baik.', max:5, req:'Homunculus Summon 3', c:2 },
        { n:'Call Homunculus', i:'📣', d:'Panggil kembali Homunculus yang menghilang.', max:1, req:'Homunculus Summon 1', c:2 },
        { n:'Cultivate Plant', i:'🌿', d:'Tanam mushroom yang bisa digunakan skill lain.', max:2, req:null, c:2 },
      ]},
    ]
  },
  hp: {
    tiers: [
      { name:'Acolyte', icon:'🙏', sub:'Job Awal', sp:40, skills:[
        { n:'Heal', i:'💚', d:'HP recovery target. Damage ke undead.', max:10, req:null, c:1 },
        { n:'Blessing', i:'🌟', d:'+STR, +INT, +DEX ke seluruh party.', max:10, req:null, c:1 },
        { n:'Increase AGI', i:'⚡', d:'+AGI dan +MOVE SPD ke seluruh party.', max:10, req:'Blessing 3', c:1 },
        { n:'Angelus', i:'😇', d:'Meningkatkan DEF seluruh party.', max:10, req:null, c:1 },
        { n:'Aqua Benedicta', i:'💧', d:'Ubah Normal Arrow menjadi Holy Water.', max:1, req:null, c:2 },
        { n:'Ruwach', i:'👁️', d:'Tampilkan musuh tersembunyi di sekitar.', max:1, req:null, c:2 },
        { n:'Pneuma', i:'🌀', d:'Satu tile kebal serangan ranged.', max:1, req:null, c:2 },
        { n:'Teleport', i:'✈️', d:'Teleport ke lokasi random atau beranda.', max:2, req:null, c:2 },
      ]},
      { name:'Priest', icon:'✝️', sub:'Job 2', sp:40, skills:[
        { n:'Kyrie Eleison', i:'🛡️', d:'Shield absorb beberapa hit serangan fisik.', max:10, req:null, c:1 },
        { n:'Sanctuary', i:'🏛️', d:'Area healing siapapun yang masuk.', max:10, req:null, c:1 },
        { n:'Turn Undead', i:'☀️', d:'Chance instant kill musuh undead.', max:10, req:null, c:1 },
        { n:'Magnus Exorcismus', i:'☩', d:'AoE Holy damage besar. Masif ke undead.', max:10, req:'Turn Undead 5', c:2 },
        { n:'Resurrection', i:'💫', d:'Hidupkan kembali rekan party yang mati.', max:4, req:null, c:2 },
        { n:'Lex Divina', i:'🔇', d:'Silence target, tidak bisa menggunakan skill.', max:10, req:null, c:1 },
        { n:'Lex Aeterna', i:'🎯', d:'Serangan berikutnya ke target ×2 damage.', max:1, req:'Lex Divina 5', c:3 },
        { n:'Gloria', i:'✨', d:'+LUK seluruh party.', max:5, req:null, c:1 },
      ]},
      { name:'High Priest', icon:'✝️', sub:'Trans Job', sp:40, skills:[
        { n:'Assumptio', i:'🔰', d:'DEF target jadi dua kali lipat sementara.', max:5, req:null, c:2 },
        { n:'Basilica', i:'🏰', d:'Area Holy yang melindungi semua di dalamnya.', max:5, req:null, c:2 },
        { n:'Meditatio', i:'🧘', d:'+MaxSP dan +SP recovery pasif.', max:10, req:null, c:1 },
        { n:'Mace Mastery', i:'🔨', d:'+ATK saat pakai mace.', max:10, req:null, c:1 },
        { n:'Impositio Manus', i:'✋', d:'+ATK sementara untuk target.', max:5, req:null, c:1 },
        { n:'Suffragium', i:'⏩', d:'Kurangi cast time target untuk beberapa waktu.', max:3, req:null, c:2 },
        { n:'Aspersio', i:'💦', d:'Ubah senjata target menjadi Holy element.', max:5, req:null, c:1 },
        { n:'High Heal', i:'💖', d:'Heal dengan bonus MATK, lebih kuat dari Heal biasa.', max:5, req:null, c:2 },
      ]},
    ]
  },
  champ: {
    tiers: [
      { name:'Acolyte', icon:'🙏', sub:'Job Awal', sp:40, skills:[
        { n:'Heal', i:'💚', d:'HP recovery target. Damage ke undead.', max:10, req:null, c:1 },
        { n:'Blessing', i:'🌟', d:'+STR, +INT, +DEX ke seluruh party.', max:10, req:null, c:1 },
        { n:'Increase AGI', i:'⚡', d:'+AGI dan +MOVE SPD ke seluruh party.', max:10, req:'Blessing 3', c:1 },
        { n:'Angelus', i:'😇', d:'Meningkatkan DEF seluruh party.', max:10, req:null, c:1 },
        { n:'Ruwach', i:'👁️', d:'Tampilkan musuh tersembunyi.', max:1, req:null, c:2 },
        { n:'Pneuma', i:'🌀', d:'Satu tile kebal serangan ranged.', max:1, req:null, c:2 },
        { n:'Teleport', i:'✈️', d:'Teleport ke lokasi random atau beranda.', max:2, req:null, c:2 },
        { n:'Cure', i:'💊', d:'Hilangkan status Blind, Confusion, Silence.', max:1, req:null, c:2 },
      ]},
      { name:'Monk', icon:'🥋', sub:'Job 2', sp:40, skills:[
        { n:'Triple Attack', i:'👊', d:'3 serangan cepat, membangun poin combo.', max:10, req:null, c:1 },
        { n:'Chain Combo', i:'💢', d:'Lanjutkan combo setelah Triple Attack.', max:5, req:'Triple Attack 5', c:1 },
        { n:'Occult Impaction', i:'🔮', d:'Damage berbasis VIT musuh.', max:5, req:'Chain Combo 3', c:1 },
        { n:'Steel Body', i:'⛩️', d:'Invulnerable sementara, tidak bisa menyerang.', max:5, req:null, c:2 },
        { n:'Blade Stop', i:'✋', d:'Tangkap serangan melee musuh.', max:5, req:null, c:1 },
        { n:'Call Spirits', i:'🌀', d:'Panggil spirit ball yang meningkatkan damage.', max:5, req:null, c:1 },
        { n:'Absorb Spirits', i:'💫', d:'Serap spirit ball menjadi SP.', max:1, req:'Call Spirits 5', c:2 },
        { n:'Investigate', i:'🔍', d:'Pindai musuh untuk mengetahui HP tersisa.', max:5, req:null, c:1 },
      ]},
      { name:'Champion', icon:'🥋', sub:'Trans Job', sp:40, skills:[
        { n:'Asura Strike', i:'☄️', d:'Gunakan semua SP untuk satu serangan mematikan.', max:5, req:'Chain Combo 3', c:3 },
        { n:'Extremity Fist', i:'🌀', d:'Combo lanjutan Chain Combo, damage kuat.', max:5, req:'Chain Combo 5', c:2 },
        { n:'Tiger Knuckle Fist', i:'🐯', d:'Combo khusus setelah Blade Stop.', max:5, req:'Blade Stop 3', c:2 },
        { n:'Body Relocation', i:'💨', d:'Teleport instan ke target.', max:2, req:null, c:2 },
        { n:'Zen', i:'🌸', d:'Munculkan spirit balls secara instan tanpa cast.', max:1, req:null, c:3 },
        { n:'Raging Palm Strike', i:'🖐️', d:'Serangan yang bisa memotong target dari chain.', max:5, req:null, c:2 },
        { n:'Knuckle Mastery', i:'👊', d:'+ATK saat pakai Knuckle/Claw.', max:10, req:null, c:1 },
        { n:'Mental Strength', i:'🧠', d:'Passive +INT dan +SP saat Zen aktif.', max:5, req:'Zen 1', c:1 },
      ]},
    ]
  },
  ax: {
    tiers: [
      { name:'Thief', icon:'🗡️', sub:'Job Awal', sp:40, skills:[
        { n:'Double Attack', i:'⚡', d:'Chance serangan dua kali saat pakai Dagger.', max:10, req:null, c:1 },
        { n:'Steal', i:'🤏', d:'Curi item dari monster.', max:10, req:null, c:1 },
        { n:'Detoxify', i:'💊', d:'Hilangkan status keracunan.', max:1, req:null, c:2 },
        { n:'Improve Dodge', i:'👟', d:'+Flee pasif.', max:10, req:null, c:1 },
        { n:'Hiding', i:'🙈', d:'Sembunyi dari musuh dan player.', max:10, req:null, c:1 },
        { n:'Envenom', i:'☠️', d:'Serangan dengan racun, chance poison.', max:10, req:null, c:1 },
        { n:'Sand Attack', i:'💨', d:'Lempar pasir, chance blind musuh.', max:5, req:null, c:1 },
        { n:'Peek', i:'👀', d:'Munculkan musuh tersembunyi di sekitar.', max:5, req:'Hiding 5', c:1 },
      ]},
      { name:'Assassin', icon:'🗡️', sub:'Job 2', sp:40, skills:[
        { n:'Katar Mastery', i:'🗡️', d:'+Critical saat pakai Katar.', max:10, req:null, c:1 },
        { n:'Sonic Blow', i:'💨', d:'8 pukulan cepat, damage sangat tinggi.', max:10, req:null, c:1 },
        { n:'Grimtooth', i:'🦷', d:'Serangan jarak menengah saat dalam Hide.', max:5, req:'Hiding 5', c:1 },
        { n:'Right Hand Mastery', i:'✋', d:'+ATK tangan kanan saat dual wield.', max:5, req:null, c:1 },
        { n:'Left Hand Mastery', i:'🤚', d:'+ATK tangan kiri saat dual wield.', max:5, req:'Right Hand Mastery 5', c:1 },
        { n:'Enchant Poison', i:'🧪', d:'Tambahkan poison element ke senjata.', max:10, req:null, c:1 },
        { n:'Venom Dust', i:'🌫️', d:'Tempatkan area beracun di tanah.', max:10, req:'Enchant Poison 5', c:1 },
        { n:'Cloaking', i:'👁️', d:'Invisible sambil bergerak dekat dinding.', max:10, req:'Hiding 5', c:1 },
      ]},
      { name:'Assassin Cross', icon:'🗡️', sub:'Trans Job', sp:40, skills:[
        { n:'Enchant Deadly Poison', i:'☠️', d:'ATK meningkat masif dengan racun. Habiskan Poison Bottle.', max:5, req:null, c:3 },
        { n:'Soul Destroyer', i:'💜', d:'Serangan hybrid menembus DEF dan MDEF.', max:10, req:null, c:1 },
        { n:'Meteor Assault', i:'🌀', d:'AoE di sekitar tubuh, stun dan damage.', max:10, req:null, c:1 },
        { n:'Rolling Cutter', i:'🔄', d:'Spin attack AoE berbasis katar.', max:10, req:null, c:1 },
        { n:'Cross Impact', i:'✖️', d:'7 serangan cepat dari segala arah.', max:5, req:'Rolling Cutter 5', c:2 },
        { n:'Create Deadly Poison', i:'⚗️', d:'Buat Poison Bottle dari material.', max:1, req:null, c:3 },
        { n:'Advanced Katar Mastery', i:'🗡️', d:'+Critical tinggi saat pakai Katar.', max:10, req:'Katar Mastery 10', c:1 },
        { n:'Poison React', i:'💚', d:'Reflect serangan racun musuh.', max:10, req:null, c:1 },
      ]},
    ]
  },
  stk: {
    tiers: [
      { name:'Thief', icon:'🗡️', sub:'Job Awal', sp:40, skills:[
        { n:'Double Attack', i:'⚡', d:'Chance serangan dua kali saat pakai Dagger.', max:10, req:null, c:1 },
        { n:'Steal', i:'🤏', d:'Curi item dari monster.', max:10, req:null, c:1 },
        { n:'Detoxify', i:'💊', d:'Hilangkan status keracunan.', max:1, req:null, c:2 },
        { n:'Improve Dodge', i:'👟', d:'+Flee pasif.', max:10, req:null, c:1 },
        { n:'Hiding', i:'🙈', d:'Sembunyi dari musuh dan player.', max:10, req:null, c:1 },
        { n:'Envenom', i:'☠️', d:'Serangan dengan racun, chance poison.', max:10, req:null, c:1 },
        { n:'Sand Attack', i:'💨', d:'Lempar pasir, chance blind musuh.', max:5, req:null, c:1 },
        { n:'Peek', i:'👀', d:'Munculkan musuh tersembunyi di sekitar.', max:5, req:'Hiding 5', c:1 },
      ]},
      { name:'Rogue', icon:'🕵️', sub:'Job 2', sp:40, skills:[
        { n:'Back Stab', i:'🗡️', d:'Serangan dari belakang, damage sangat tinggi.', max:10, req:null, c:1 },
        { n:'Raid', i:'💥', d:'AoE dari bayangan, blind musuh dalam area.', max:10, req:null, c:1 },
        { n:'Snatcher', i:'🤏', d:'Chance steal item dari musuh saat menyerang.', max:10, req:'Steal 10', c:1 },
        { n:'Divest Armor', i:'🎭', d:'Strip armor musuh secara paksa.', max:5, req:null, c:2 },
        { n:'Divest Weapon', i:'⚔️', d:'Strip senjata musuh secara paksa.', max:5, req:null, c:2 },
        { n:'Divest Helm', i:'👒', d:'Strip helm musuh secara paksa.', max:5, req:null, c:2 },
        { n:'Divest Shield', i:'🛡️', d:'Strip shield musuh secara paksa.', max:5, req:null, c:2 },
        { n:'Gangster\'s Paradise', i:'😈', d:'Jika duduk bersama Rogue lain, kebal bagi-bagi.', max:1, req:null, c:2 },
      ]},
      { name:'Stalker', icon:'🕵️', sub:'Trans Job', sp:40, skills:[
        { n:'Plagiarism', i:'📋', d:'Copy skill yang mengenai Stalker dari monster/player.', max:10, req:null, c:1 },
        { n:'Reproduce', i:'🔄', d:'Gunakan skill copy secara permanen.', max:10, req:'Plagiarism 7', c:1 },
        { n:'Chase Walk', i:'👣', d:'Bergerak dalam invisible.', max:5, req:'Hiding 5', c:2 },
        { n:'Intimidate', i:'😨', d:'Teleport paksa bersama target ke lokasi random.', max:5, req:null, c:2 },
        { n:'Reject Sword', i:'🔙', d:'Pantulkan sebagian damage melee kembali.', max:5, req:null, c:2 },
        { n:'Close Confine', i:'🔒', d:'Lock diri dan target di posisi selama durasi.', max:1, req:null, c:3 },
        { n:'Full Divestment', i:'🎭', d:'Strip semua equipment musuh sekaligus.', max:1, req:null, c:5 },
        { n:'Stealth', i:'👻', d:'+Flee dan chance menghilang dari pandangan.', max:5, req:'Chase Walk 3', c:1 },
      ]},
    ]
  },
  sniper: {
    tiers: [
      { name:'Archer', icon:'🏹', sub:'Job Awal', sp:40, skills:[
        { n:'Double Strafe', i:'💨', d:'Dua panah sekaligus, damage sangat tinggi.', max:10, req:null, c:1 },
        { n:'Arrow Shower', i:'🌧️', d:'Hujan panah AoE 5x5.', max:10, req:null, c:1 },
        { n:'Owl\'s Eye', i:'🦉', d:'+DEX pasif.', max:10, req:null, c:1 },
        { n:'Vulture\'s Eye', i:'🦅', d:'+range jangkauan serangan.', max:10, req:'Owl\'s Eye 5', c:1 },
        { n:'Arrow Repel', i:'↩️', d:'Serangan knockback dengan panah.', max:1, req:null, c:2 },
        { n:'Attention Concentrate', i:'🎯', d:'+DEX dan +AGI sementara.', max:10, req:null, c:1 },
        { n:'Arrow Crafting', i:'🪵', d:'Buat arrow dari material.', max:1, req:null, c:2 },
        { n:'Charge Arrow', i:'💥', d:'Serangan tunggal jarak jauh damage tinggi.', max:5, req:'Double Strafe 5', c:1 },
      ]},
      { name:'Hunter', icon:'🏹', sub:'Job 2', sp:40, skills:[
        { n:'Falcon Mastery', i:'🦅', d:'Izinkan penggunaan Falcon.', max:1, req:null, c:2 },
        { n:'Blitz Beat', i:'🦅', d:'Falcon menyerang, damage magic-physical.', max:5, req:'Falcon Mastery 1', c:1 },
        { n:'Ankle Snare', i:'🪤', d:'Jebakan immobilize musuh.', max:5, req:null, c:1 },
        { n:'Blast Mine', i:'💣', d:'Jebakan AoE wind damage.', max:5, req:'Ankle Snare 3', c:1 },
        { n:'Claymore Trap', i:'⚡', d:'Jebakan AoE fire, damage masif.', max:5, req:'Blast Mine 3', c:1 },
        { n:'Sandman Trap', i:'💤', d:'Jebakan AoE yang menidurkan musuh.', max:5, req:null, c:1 },
        { n:'Remove Trap', i:'❌', d:'Hapus jebakan yang terpasang.', max:1, req:null, c:2 },
        { n:'Improve Concentration', i:'🎯', d:'+DEX dan +AGI sementara (lebih kuat dari Attention).', max:10, req:null, c:1 },
      ]},
      { name:'Sniper', icon:'🏹', sub:'Trans Job', sp:40, skills:[
        { n:'Falcon Assault', i:'🦅', d:'Falcon menyerang target, ignore Flee.', max:5, req:'Blitz Beat 5', c:2 },
        { n:'True Sight', i:'👁️', d:'+semua stat dan HIT sementara.', max:10, req:null, c:1 },
        { n:'Wind Walk', i:'💨', d:'+AGI dan +MOVE SPD seluruh party.', max:10, req:null, c:1 },
        { n:'Sharp Shooting', i:'🎯', d:'Serangan tunggal jarak jauh sangat akurat dan kuat.', max:5, req:null, c:2 },
        { n:'Ranger', i:'🌿', d:'+damage ke specific monster race.', max:10, req:null, c:1 },
        { n:'Frostjoke', i:'❄️', d:'Chance freeze seluruh area sekitar (random).', max:5, req:null, c:1 },
        { n:'Dissonance', i:'🎵', d:'AoE damage sound yang mempengaruhi area.', max:5, req:null, c:1 },
        { n:'Feint Bomb', i:'💣', d:'Trap yang meledak saat Sniper menghilang dari pandangan.', max:5, req:null, c:2 },
      ]},
    ]
  },
  mins: {
    tiers: [
      { name:'Archer', icon:'🏹', sub:'Job Awal', sp:40, skills:[
        { n:'Double Strafe', i:'💨', d:'Dua panah sekaligus, damage tinggi.', max:10, req:null, c:1 },
        { n:'Arrow Shower', i:'🌧️', d:'Hujan panah AoE 5x5.', max:10, req:null, c:1 },
        { n:'Owl\'s Eye', i:'🦉', d:'+DEX pasif.', max:10, req:null, c:1 },
        { n:'Vulture\'s Eye', i:'🦅', d:'+range jangkauan serangan.', max:10, req:'Owl\'s Eye 5', c:1 },
        { n:'Arrow Repel', i:'↩️', d:'Serangan knockback dengan panah.', max:1, req:null, c:2 },
        { n:'Attention Concentrate', i:'🎯', d:'+DEX dan +AGI sementara.', max:10, req:null, c:1 },
        { n:'Arrow Crafting', i:'🪵', d:'Buat arrow dari material.', max:1, req:null, c:2 },
        { n:'Charge Arrow', i:'💥', d:'Serangan tunggal jarak jauh damage tinggi.', max:5, req:'Double Strafe 5', c:1 },
      ]},
      { name:'Bard', icon:'🎸', sub:'Job 2', sp:40, skills:[
        { n:'Melody Strike', i:'🎵', d:'Serangan fisik dengan instrument.', max:5, req:null, c:1 },
        { n:'Unchained Serenade', i:'🎶', d:'Lagu yang mencegah musuh kabur dari area.', max:5, req:null, c:1 },
        { n:'A Whistle', i:'🎼', d:'+AGI dan +Flee seluruh party.', max:10, req:null, c:1 },
        { n:'Apple of Idun', i:'🍎', d:'HP regen pasif masif seluruh party.', max:10, req:'A Whistle 3', c:2 },
        { n:'Poem of Bragi', i:'📜', d:'Kurangi cast time dan after-cast delay party.', max:10, req:'Apple of Idun 5', c:2 },
        { n:'Loki\'s Veil', i:'🔒', d:'Kunci skill semua pihak dalam area.', max:10, req:'Poem of Bragi 5', c:2 },
        { n:'Mr. Kim Rich Man', i:'💰', d:'+drop rate zeny dari monster.', max:10, req:null, c:1 },
        { n:'Invulnerable Siegfried', i:'🛡️', d:'+elemental resistance seluruh party.', max:10, req:null, c:1 },
      ]},
      { name:'Minstrel', icon:'🎵', sub:'Trans Job', sp:40, skills:[
        { n:'Magic Strings', i:'🎻', d:'Kurangi SP cost skill party.', max:10, req:null, c:1 },
        { n:'Drum of Battle', i:'🥁', d:'+ATK dan +MATK seluruh party.', max:10, req:null, c:1 },
        { n:'Assassin Cross of Sunset', i:'🌅', d:'+ASPD dan ATK seluruh party.', max:10, req:null, c:2 },
        { n:'Service for You', i:'🍵', d:'+MaxSP dan SP regen seluruh party.', max:10, req:null, c:1 },
        { n:'Longing for Freedom', i:'💫', d:'Izinkan bergerak saat dalam area lagu sendiri.', max:5, req:null, c:2 },
        { n:'Lullaby', i:'😴', d:'AoE chance tidur seluruh pihak dalam area.', max:1, req:null, c:4 },
        { n:'Cantata of Life', i:'🌿', d:'Regen HP seluruh party sangat cepat.', max:5, req:'Apple of Idun 10', c:2 },
        { n:'Eternal Chaos', i:'💥', d:'Duo skill dengan Dancer — AoE damage masif.', max:1, req:null, c:5 },
      ]},
    ]
  },
  sum: {
    tiers: [
      { name:'Novice Doram', icon:'🐾', sub:'Ras Unik', sp:40, skills:[
        { n:'Scratch', i:'🐾', d:'Serangan cakar melee cepat berbasis AGI.', max:5, req:null, c:1 },
        { n:'Picky Peck', i:'🐦', d:'Serangan paruh dari jarak jauh berbasis DEX.', max:5, req:null, c:1 },
        { n:'Lunatic Carrot Beat', i:'🥕', d:'AoE impact sekitar, chance stun.', max:5, req:null, c:1 },
        { n:'Spirit of Land', i:'🌿', d:'+DEF dan HP regen.', max:5, req:null, c:1 },
        { n:'Spirit of Sea', i:'🌊', d:'AoE heal kecil di sekitar.', max:5, req:'Spirit of Land 1', c:1 },
        { n:'Spirit of Wind', i:'💨', d:'+kecepatan gerak.', max:5, req:null, c:1 },
        { n:'Unleash', i:'🐱', d:'Kerahkan kekuatan penuh sesaat.', max:5, req:null, c:1 },
        { n:'Tuna Belly', i:'🐟', d:'Self-heal berbasis INT.', max:5, req:'Spirit of Sea 3', c:1 },
      ]},
      { name:'Summoner', icon:'🐾', sub:'Job 2', sp:40, skills:[
        { n:'Catnip Meteor', i:'☄️', d:'AoE magic berbasis INT & LUK.', max:5, req:null, c:2 },
        { n:'Silvervine Root Twist', i:'🌿', d:'Immobilize target dengan akar.', max:5, req:null, c:1 },
        { n:'Sandy Body Temp', i:'🌡️', d:'Reduce ATK musuh di area.', max:5, req:null, c:1 },
        { n:'Tuna Party', i:'🎉', d:'AoE heal party dalam area kecil.', max:5, req:'Tuna Belly 3', c:1 },
        { n:'Silvervine Stem Spear', i:'🌱', d:'Projectile jarak jauh, damage solid.', max:5, req:null, c:1 },
        { n:'Popcat', i:'😺', d:'Serangan sonic berbasis AGI dan LUK.', max:5, req:null, c:1 },
        { n:'Fresh Shrimp', i:'🍤', d:'Single target healing yang kuat.', max:5, req:'Tuna Party 3', c:1 },
        { n:'Spirit of Savage', i:'🐗', d:'+STR dan +ATK sementara.', max:5, req:null, c:1 },
      ]},
      { name:'High Summoner', icon:'🐾', sub:'Trans Job', sp:40, skills:[
        { n:'Diamond Storm', i:'💎', d:'AoE es masif, chance freeze.', max:5, req:null, c:2 },
        { n:'Goblin Leader Summon', i:'👺', d:'Panggil Goblin Leader sebagai companion.', max:5, req:null, c:2 },
        { n:'Lord of the Sea', i:'🌊', d:'AoE water besar dari lautan.', max:5, req:null, c:3 },
        { n:'Mushroom Spores', i:'🍄', d:'Tebar spora beracun dalam area.', max:5, req:null, c:2 },
        { n:'Manhole', i:'🕳️', d:'Sembunyikan pemain lain dalam lubang.', max:5, req:null, c:2 },
        { n:'Earth Drive', i:'🌍', d:'AoE tanah, hancurkan armor musuh.', max:5, req:null, c:2 },
        { n:'Spirit of Abyss', i:'🌑', d:'Dark power — +MATK dan +INT besar.', max:5, req:null, c:2 },
        { n:'Warg Bite', i:'🐺', d:'Panggil Warg untuk menggigit musuh.', max:5, req:null, c:2 },
      ]},
    ]
  },
};

// =============================================
// JOBS DATA
// =============================================
const JOBS = [
  { id:'paladin', name:'Paladin', icon:'🛡️', role:'Tank / Support', tags:['tank','support','melee'],
    tier:{all:'A',pve:'A',mvp:'A',woe:'S'}, stats:{str:70,agi:50,vit:90,int:40,dex:60,luk:30},
    desc:`Paladin adalah ksatria suci paling tangguh, turunan dari Crusader. Kemampuan Devotion-nya memungkinkan Paladin menyerap damage rekan party.\n\nShield Chain mengkonversi DEF tinggi menjadi damage mematikan. Build Martyr's Reckoning adalah opsi ekstrem untuk burst damage.`,
    pros:['Devotion — skill proteksi terbaik di game','Sangat tangguh di WoE','Shield Chain damage tinggi untuk tank','Fleksibel: tank, support, atau DPS'],
    cons:['Solo grinding sangat lambat','Equipment shield premium sangat mahal','Devotion butuh healer kuat'],
    builds:{pve:[{name:'Build Tank Devotion',desc:'VIT tinggi untuk absorb Devotion party.',stats:'STR 60 / VIT 99 / DEX 50',equips:['Orleans Server','Stone Buckler','Variant Shoes','Thara Frog Card']}],pvp:[{name:'Build WoE Devotion',desc:'Lindungi core damage dealer guild.',stats:'STR 50 / VIT 99 / DEX 60',equips:["Valkyrja's Shield","Gloom Armor",'Thara Frog','RSX Card']}]},
    reco:{pve:{note:'Fokus pada Devotion dan ketahanan untuk dungeon.',skills:[{n:'Shield Chain',i:'🛡️',lvl:5,reason:'Damage utama PVE.'},{n:'Devotion',i:'❤️',lvl:5,reason:'Wajib max untuk party.'},{n:'Defending Aura',i:'🔰',lvl:5,reason:'Reduce ranged damage.'}]},pvp:{note:'Devotion melindungi core DPS guild.',skills:[{n:'Devotion',i:'❤️',lvl:5,reason:'Skill #1 WoE.'},{n:'Pressure',i:'💫',lvl:5,reason:'Drain SP musuh kaster.'},{n:'Gospel',i:'✨',lvl:10,reason:'AoE buff/debuff massal.'}]}},
    cards:{pve:[{i:'🎀',n:'Alice Card',slot:'Shield',eff:'−40% MVP damage.',prio:'wajib',why:'Kurangi damage MVP saat tank.'},{i:'🐱',n:'Matyr Card',slot:'Footgear',eff:'+10% HP.',prio:'rekomendasi',why:'HP lebih tinggi untuk Devotion.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Wajib WoE.'},{i:'🤖',n:'RSX-0806 Card',slot:'Armor',eff:'Anti-knockback.',prio:'wajib',why:'Tetap di posisi saat WoE.'}]},
    party:{desc:'Paladin paling bersinar melindungi damage dealer guild.',pve:[{i:'✝️',n:'High Priest',desc:'Healer untuk HP yang terserap Devotion.'},{i:'🔮',n:'High Wizard',desc:'Profiter utama Devotion.'}],pvp:[{i:'🔮',n:'High Wizard',desc:'Devotion HW = combo WoE paling ditakuti.'},{i:'🥋',n:'Champion',desc:'Lindungi Champion saat setup Asura.'}],synergy:'Paladin + High Wizard + High Priest = trio terkuat WoE.'}
  },
  { id:'lk', name:'Lord Knight', icon:'⚔️', role:'Melee DPS / Tank', tags:['melee','tank'],
    tier:{all:'S',pve:'S',mvp:'A',woe:'A'}, stats:{str:90,agi:70,vit:70,int:20,dex:50,luk:30},
    desc:`Lord Knight adalah warrior sejati — puncak kekuatan fisik Ragnarok. Bowling Bash AoE crushing, Brandish Spear untuk dungeon, Aura Blade ATK flat yang tidak bisa di-reduce DEF.\n\nClashing Spiral dengan spear refine tinggi menghasilkan damage spike luar biasa.`,
    pros:['Bowling Bash AoE terkuat untuk melee','Serbaguna — cocok semua konten','Aura Blade tidak bisa di-reduce DEF'],
    cons:['Equipment mahal untuk performa optimal','Butuh VIT tinggi untuk survive dungeon keras'],
    builds:{pve:[{name:'Build Bowling Bash',desc:'Two-Hand Sword AoE farming.',stats:'STR 99 / AGI 70 / VIT 50 / DEX 40',equips:['Executioner [3]','Skel Worker Card x3','Tidal Shoes']}],pvp:[{name:'Build WoE BB',desc:'Bowling Bash knockback + damage di WoE.',stats:'STR 90 / VIT 80 / DEX 50',equips:['Excalibur','Valkyrie Armor','Thara Frog Shield']}]},
    reco:{pve:{note:'Bowling Bash untuk AoE farming optimal.',skills:[{n:'Bash',i:'💥',lvl:5,reason:'Syarat Bowling Bash.'},{n:'Bowling Bash',i:'🌀',lvl:10,reason:'Skill farming utama.'},{n:'Aura Blade',i:'✨',lvl:5,reason:'Flat ATK wajib max.'}]},pvp:{note:'Bowling Bash knockback untuk WoE.',skills:[{n:'Bowling Bash',i:'🌀',lvl:10,reason:'Knockback + damage WoE.'},{n:'Parry',i:'🛡️',lvl:10,reason:'Block fisik untuk survive.'},{n:'Clashing Spiral',i:'💫',lvl:5,reason:'Spike damage target prioritas.'}]}},
    cards:{pve:[{i:'🐢',n:'Turtle General Card',slot:'Weapon',eff:'+20% ATK.',prio:'wajib',why:'Boost Bowling Bash.'},{i:'💀',n:'Skeleton Worker Card',slot:'Weapon',eff:'+15% Medium & Large.',prio:'wajib',why:'Mayoritas monster dungeon.'}],pvp:[{i:'🐉',n:'Hydra Card',slot:'Weapon',eff:'+20% Demi-Human.',prio:'wajib',why:'Player = Demi-Human.'},{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Reduce damage dari player.'}]},
    party:{desc:'Lord Knight adalah tulang punggung DPS melee.',pve:[{i:'✝️',n:'High Priest',desc:'Blessing + Inc AGI meningkatkan DPS.'},{i:'🎵',n:'Minstrel',desc:'Bragi mengurangi after-delay BB.'}],pvp:[{i:'🛡️',n:'Paladin',desc:'Devotion saat LK menerobos garis musuh.'},{i:'✝️',n:'High Priest',desc:'Assumptio + Kyrie saat charge.'}],synergy:'Lord Knight + High Priest + Minstrel = trio grinding PVE terbaik.'}
  },
  { id:'hw', name:'High Wizard', icon:'🔮', role:'Magic AoE DPS', tags:['magic'],
    tier:{all:'S',pve:'S',mvp:'S',woe:'B'}, stats:{str:10,agi:30,vit:40,int:99,dex:80,luk:20},
    desc:`High Wizard adalah maestro kehancuran AoE. Storm Gust membekukan seluruh layar, Meteor Storm menghancurkan MVP, Lord of Vermillion membutakan dengan kilat.\n\nMystical Amplification menggandakan damage spell berikutnya secara instan.`,
    pros:['AoE terkuat di game','Mystical Amp burst damage luar biasa','Dominant Endless Tower dan instance'],
    cons:['HP dan DEF sangat rendah','Konsumsi SP sangat besar','Kurang efektif di WoE'],
    builds:{pve:[{name:'Build Storm Gust',desc:'INT dan DEX semaksimal mungkin.',stats:'INT 99 / DEX 99 / VIT 30',equips:['Staff of Destruction',"Orlean's Gown",'Sohee Shoes']}],pvp:[{name:'Build WoE Lord of Vermillion',desc:'Blind massal + AoE damage.',stats:'INT 90 / VIT 60 / DEX 80',equips:["Orlean's Gown",'Thara Frog Shield']}]},
    reco:{pve:{note:'Storm Gust untuk mass kill, Mystical Amp untuk boost.',skills:[{n:'Cold Bolt',i:'❄️',lvl:5,reason:'Syarat Storm Gust.'},{n:'Storm Gust',i:'🌪️',lvl:10,reason:'Skill farming terbaik.'},{n:'Mystical Amplification',i:'💜',lvl:10,reason:'x1.5 damage wajib max.'}]},pvp:{note:'Lord of Vermillion blind massal di WoE.',skills:[{n:'Lord of Vermillion',i:'⚡',lvl:10,reason:'Blind massal WoE.'},{n:'Storm Gust',i:'🌪️',lvl:10,reason:'Freeze musuh.'},{n:'Safety Wall',i:'🧱',lvl:10,reason:'Lindungi diri.'}]}},
    cards:{pve:[{i:'👧',n:'Sohee Card',slot:'Footgear',eff:'+15% Max SP.',prio:'wajib',why:'SP pool lebih besar.'},{i:'🧛',n:'Dracula Card',slot:'Armor',eff:'5 SP per hit.',prio:'rekomendasi',why:'Sustain SP farming.'}],pvp:[{i:'🦋',n:'Maya Card',slot:'Shield',eff:'Reflect spell musuh.',prio:'wajib',why:'Counter kaster musuh.'},{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'HW sangat rapuh.'}]},
    party:{desc:'High Wizard adalah damage dealer utama. Butuh proteksi optimal.',pve:[{i:'🛡️',n:'Paladin',desc:'Devotion membuat HW bisa spam.'},{i:'🎵',n:'Minstrel',desc:'Bragi nol cast time untuk HW.'}],pvp:[{i:'🛡️',n:'Paladin',desc:'Devotion HW = combo WoE mematikan.'},{i:'📖',n:'Professor',desc:'Land Protector + HW = area kontrol.'}],synergy:'High Wizard + Minstrel + Paladin = trio WoE paling menakutkan.'}
  },
  { id:'prof', name:'Professor', icon:'📖', role:'Support / Control', tags:['magic','support','utility'],
    tier:{all:'A',pve:'B',mvp:'B',woe:'S'}, stats:{str:10,agi:30,vit:50,int:90,dex:70,luk:20},
    desc:`Professor adalah master kontrol medan. Dispell menghapus semua buff musuh dalam satu cast. Fiber Lock menghentikan pergerakan. Land Protector meniadakan magic field musuh.\n\nSoul Change adalah senjata paling ampuh untuk mematikan kaster musuh.`,
    pros:['Dispell menghapus semua buff — game changer','Fiber Lock + Quagmire kontrol total','Soul Change mematikan kaster musuh'],
    cons:['Damage DPS jauh di bawah HW','Kurang efektif solo grinding'],
    builds:{pve:[{name:'Build Support Party',desc:'Support dungeon dengan kontrol musuh.',stats:'INT 90 / VIT 60 / DEX 80',equips:["Orlean's Gown",'Sohee Shoes']}],pvp:[{name:'Build Dispell WoE',desc:'Cast Dispell cepat di WoE.',stats:'INT 90 / VIT 70 / DEX 80',equips:["Orlean's Gown",'Thara Frog Shield']}]},
    reco:{pve:{note:'Support dungeon dengan kontrol musuh.',skills:[{n:'Fiber Lock',i:'🕸️',lvl:5,reason:'Immobilize monster.'},{n:'Quagmire',i:'🌊',lvl:5,reason:'Kurangi AGI/DEX monster.'},{n:'Land Protector',i:'🌿',lvl:5,reason:'Batalkan magic field.'}]},pvp:{note:'Dispell dan kontrol musuh di WoE.',skills:[{n:'Dispell',i:'🌀',lvl:5,reason:'Wajib max — hapus buff musuh.'},{n:'Soul Change',i:'🔄',lvl:1,reason:'Kosongkan SP kaster musuh.'},{n:'Land Protector',i:'🌿',lvl:5,reason:'Batalkan Safety Wall musuh.'}]}},
    cards:{pve:[{i:'🐸',n:'Verit Card',slot:'Footgear',eff:'+8% HP & SP.',prio:'rekomendasi',why:'Sustain SP skill support.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Wajib WoE.'},{i:'👻',n:'Whisper Card',slot:'Garment',eff:'+20 Flee.',prio:'rekomendasi',why:'Susah ditangkap di WoE.'}]},
    party:{desc:'Professor adalah controller murni paling efektif di WoE.',pve:[{i:'🔮',n:'High Wizard',desc:'Prof immobilize, HW nuker.'}],pvp:[{i:'🔮',n:'High Wizard',desc:'Dispell musuh lalu HW sweep.'},{i:'🛡️',n:'Paladin',desc:'Paladin tank + Prof kontrol.'}],synergy:'Professor + High Wizard = combo WoE paling sinergis.'}
  },
  { id:'ms', name:'Mastersmith', icon:'⚙️', role:'Support / Melee DPS', tags:['melee','support','utility'],
    tier:{all:'A',pve:'A',mvp:'B',woe:'A'}, stats:{str:80,agi:50,vit:60,int:40,dex:50,luk:30},
    desc:`Mastersmith adalah backbone party melee. Adrenaline Rush meningkatkan ASPD seluruh party pengguna axe/mace. Over Thrust menambah ATK seluruh party.\n\nMeltdown memiliki chance merusak armor dan senjata musuh secara permanen dalam battle.`,
    pros:['Adrenaline Rush buff ASPD party melee','Weapon Repair satu-satunya di lapangan','Meltdown melemahkan armor musuh WoE'],
    cons:['Damage solo tidak setinggi LK','Cart membatasi mobilitas di lorong sempit'],
    builds:{pve:[{name:'Build Support Grind',desc:'Buff party dan Cart Revo.',stats:'STR 80 / VIT 60 / DEX 50',equips:['Upgrade Axe','Tidal Shoes','Sting Armor']}],pvp:[{name:'Build Meltdown WoE',desc:'Melemahkan armor musuh di WoE.',stats:'STR 70 / VIT 70 / DEX 50',equips:['Thara Frog Shield','RSX Armor']}]},
    reco:{pve:{note:'Buff party dan Cart Revolution untuk AoE farming.',skills:[{n:'Adrenaline Rush',i:'⚡',lvl:5,reason:'Buff ASPD party wajib max.'},{n:'Over Thrust',i:'🔩',lvl:5,reason:'ATK buff party.'},{n:'Cart Revolution',i:'🛒',lvl:1,reason:'Hanya butuh level 1.'}]},pvp:{note:'Meltdown untuk melemahkan armor musuh.',skills:[{n:'Meltdown',i:'🔥',lvl:10,reason:'Break armor tank musuh WoE.'},{n:'Adrenaline Rush',i:'⚡',lvl:5,reason:'Support ASPD guild.'},{n:'Cart Revolution',i:'🛒',lvl:1,reason:'AoE knockback musuh menumpuk.'}]}},
    cards:{pve:[{i:'💀',n:'Skeleton Worker Card',slot:'Weapon',eff:'+15% Medium & Large.',prio:'rekomendasi',why:'Damage buff Cart Revolution.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Reduce damage WoE.'},{i:'🤖',n:'RSX-0806 Card',slot:'Armor',eff:'Anti-knockback.',prio:'rekomendasi',why:'Tetap dekat musuh saat Meltdown.'}]},
    party:{desc:'Mastersmith sangat dicari party melee karena Adrenaline Rush.',pve:[{i:'⚔️',n:'Lord Knight',desc:'Profiter utama Adrenaline Rush.'}],pvp:[{i:'⚔️',n:'Lord Knight',desc:'LK + Meltdown = tank musuh hancur.'}],synergy:'Mastersmith + Lord Knight = duo melee paling efisien.'}
  },
  { id:'bio', name:'Biochemist', icon:'⚗️', role:'Support / MVP Hunter', tags:['support','magic'],
    tier:{all:'A',pve:'A',mvp:'S',woe:'B'}, stats:{str:40,agi:30,vit:60,int:80,dex:70,luk:20},
    desc:`Biochemist adalah ilmuwan gila dengan Acid Bomb yang mengabaikan DEF musuh. Tidak ada tank dengan DEF setinggi apapun yang kebal ini.\n\nSlim Potion Pitcher menjadikan Bio sebagai AoE healer unik.`,
    pros:['Acid Bomb menembus DEF apapun','Slim Potion Pitcher AoE heal unik','Sangat efektif MVP besar'],
    cons:['Acid Bomb butuh reagent mahal','Tidak efektif grind monster lemah'],
    builds:{pve:[{name:'Build Acid Bomb MVP',desc:'INT dan DEX tinggi untuk cast cepat.',stats:'INT 90 / DEX 80 / VIT 50',equips:["Orlean's Gown",'Beret','Sohee Shoes']}],pvp:[{name:'Build Support WoE',desc:'Slim Potion dan Chemical Protection.',stats:'INT 70 / VIT 70 / DEX 60',equips:['Thara Frog Shield','Tidal Shoes']}]},
    reco:{pve:{note:'Acid Bomb untuk MVP, Slim Potion sebagai healer cadangan.',skills:[{n:'Acid Bomb',i:'💣',lvl:10,reason:'Wajib max — ignore DEF.'},{n:'Slim Potion Pitcher',i:'🍶',lvl:5,reason:'AoE heal party.'},{n:'Chemical Protection',i:'🧪',lvl:5,reason:'Lindungi equipment party.'}]},pvp:{note:'Acid Bomb melemahkan armor player musuh.',skills:[{n:'Acid Bomb',i:'💣',lvl:10,reason:'Break armor player WoE.'},{n:'Chemical Protection',i:'🧪',lvl:5,reason:'Lindungi armor guild dari Bio musuh.'}]}},
    cards:{pve:[{i:'🎀',n:'Alice Card',slot:'Shield',eff:'−40% MVP damage.',prio:'wajib',why:'Wajib untuk Bio face-to-face MVP.'},{i:'🐸',n:'Verit Card',slot:'Footgear',eff:'+8% HP & SP.',prio:'rekomendasi',why:'SP untuk spam Acid Bomb.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Reduce damage player WoE.'}]},
    party:{desc:'Biochemist adalah MVP partner terbaik.',pve:[{i:'⚔️',n:'Lord Knight',desc:'LK tank sementara Bio Acid Bomb.'},{i:'✝️',n:'High Priest',desc:'Heal + buff di dungeon MVP.'}],pvp:[{i:'⚔️',n:'Lord Knight',desc:'LK + Bio Acid Bomb = tank musuh hancur.'}],synergy:'Biochemist + Lord Knight + High Priest = trio MVP hunting paling nyaman.'}
  },
  { id:'sum', name:'Summoner', icon:'🐾', role:'Hybrid / Solo', tags:['summon','support','melee'],
    tier:{all:'B',pve:'A',mvp:'B',woe:'C'}, stats:{str:50,agi:70,vit:50,int:60,dex:40,luk:80},
    desc:`Summoner (Doram) adalah ras unik dengan playstyle sangat berbeda. Menggunakan kekuatan alam — earth, water, wind, fire — sebagai senjata.\n\nCatnip Meteor AoE magic berbasis INT dan LUK. Self-healing dari Spirit of Sea menjadikan Summoner sangat mandiri.`,
    pros:['Sangat mandiri — bisa heal dan buff sendiri','Playstyle unik berbeda dari semua job','Efektif untuk solo leveling'],
    cons:['Damage ceiling lebih rendah dari DPS murni','Kurang optimal di WoE'],
    builds:{pve:[{name:'Build AGI Crit Solo',desc:'Solo farming efisien.',stats:'AGI 90 / LUK 60 / STR 50',equips:['Cat Ears','Orc Skeleton Card','Matyr Boots']}],pvp:[{name:'Build Hit-and-Run',desc:'Kecepatan tinggi untuk mengganggu.',stats:'AGI 90 / INT 50 / LUK 50',equips:['Whisper Garment','Tidal Shoes']}]},
    reco:{pve:{note:'AGI Crit untuk auto-attack solo farming.',skills:[{n:'Scratch',i:'🐾',lvl:5,reason:'Melee attack utama.'},{n:'Spirit of Land',i:'🌿',lvl:5,reason:'DEF dan HP regen solo.'},{n:'Spirit of Sea',i:'🌊',lvl:5,reason:'Self-heal tanpa potion.'}]},pvp:{note:'Kecepatan dan gangguan di PVP.',skills:[{n:'Spirit of Wind',i:'💨',lvl:5,reason:'Kecepatan tinggi kabur/approach.'},{n:'Catnip Meteor',i:'☄️',lvl:5,reason:'AoE gangguan formasi musuh.'}]}},
    cards:{pve:[{i:'🐱',n:'Matyr Card',slot:'Footgear',eff:'+1 AGI, +10% HP.',prio:'rekomendasi',why:'AGI dan HP untuk AGI Crit.'},{i:'🦴',n:'Orc Skeleton Card',slot:'Weapon',eff:'+15% Crit damage.',prio:'rekomendasi',why:'Boost damage saat critical.'}],pvp:[{i:'👻',n:'Whisper Card',slot:'Garment',eff:'+20 Flee.',prio:'rekomendasi',why:'Flee tinggi untuk hit-and-run.'}]},
    party:{desc:'Summoner paling cocok solo atau party casual.',pve:[{i:'✝️',n:'High Priest',desc:'Blessing meningkatkan AGI Summoner.'}],pvp:[{i:'✝️',n:'High Priest',desc:'Support dasar untuk Summoner.'}],synergy:'Summoner paling efektif sebagai solo player.'}
  },
  { id:'hp', name:'High Priest', icon:'✝️', role:'Healer / Buffer Utama', tags:['support'],
    tier:{all:'S',pve:'A',mvp:'S',woe:'S'}, stats:{str:10,agi:30,vit:70,int:90,dex:70,luk:20},
    desc:`High Priest adalah fondasi setiap party serius. Blessing dan Increase AGI adalah buff paling dicari semua job. Tanpa High Priest, party manapun kesulitan di endgame.\n\nTurn Undead instant-kill di dungeon undead. Assumptio menggandakan DEF target. Pneuma melindungi dari serangan ranged total.`,
    pros:['Buff Blessing + Inc AGI wajib semua party','Turn Undead instant-kill dungeon undead','Assumptio + Kyrie = tank tak tertandingi'],
    cons:['Solo leveling sangat lambat','Bergantung pada SP pool besar'],
    builds:{pve:[{name:'Build Full Support',desc:'INT dan VIT untuk Heal kuat.',stats:'INT 99 / VIT 70 / DEX 70',equips:["Orlean's Gown","Orlean's Server",'Beret','Sohee Shoes']}],pvp:[{name:'Build Survival Support WoE',desc:'VIT tinggi tahan di battle WoE.',stats:'INT 90 / VIT 80 / DEX 70',equips:['Valkyrie Armor','Thara Frog Shield','Beret']}]},
    reco:{pve:{note:'Buff party dan healing untuk dungeon panjang.',skills:[{n:'Blessing',i:'🌟',lvl:10,reason:'Buff utama wajib max.'},{n:'Increase AGI',i:'⚡',lvl:10,reason:'AGI party buff wajib max.'},{n:'Magnus Exorcismus',i:'☩',lvl:10,reason:'AoE grind dungeon undead.'}]},pvp:{note:'Proteksi, resureksi, dan Pneuma counter Sniper.',skills:[{n:'Kyrie Eleison',i:'🛡️',lvl:10,reason:'Pelindung burst damage WoE.'},{n:'Assumptio',i:'🔰',lvl:5,reason:'DEF x2 untuk tank guild.'},{n:'Pneuma',i:'🌀',lvl:1,reason:'Counter Sniper musuh.'}]}},
    cards:{pve:[{i:'👧',n:'Sohee Card',slot:'Footgear',eff:'+15% Max SP.',prio:'wajib',why:'SP pool besar untuk marathon dungeon.'},{i:'🧛',n:'Dracula Card',slot:'Armor',eff:'5 SP per hit.',prio:'rekomendasi',why:'Sustain SP untuk terus buff.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Wajib WoE.'},{i:'💀',n:'Osiris Card',slot:'Armor',eff:'Auto-revive sekali.',prio:'rekomendasi',why:'Priest tidak boleh mati di WoE.'}]},
    party:{desc:'High Priest dibutuhkan di SEMUA konten endgame.',pve:[{i:'⚔️',n:'Lord Knight',desc:'Blessing + Inc AGI meningkatkan DPS LK.'},{i:'🔮',n:'High Wizard',desc:'Assumptio melindungi HW yang rapuh.'}],pvp:[{i:'🛡️',n:'Paladin',desc:'Priest + Paladin Devotion = core WoE.'},{i:'🥋',n:'Champion',desc:'Setup Asura Strike dengan Gloria dan buff.'}],synergy:'High Priest adalah core dari semua komposisi party.'}
  },
  { id:'champ', name:'Champion', icon:'🥋', role:'Melee Burst DPS', tags:['melee'],
    tier:{all:'A',pve:'A',mvp:'S',woe:'A'}, stats:{str:90,agi:50,vit:70,int:30,dex:50,luk:30},
    desc:`Champion adalah raja single-target damage. Asura Strike adalah skill dengan damage tertinggi satu hit di seluruh game.\n\nSteel Body memberikan invulnerability sementara. Body Relocation teleport instan ke target.`,
    pros:['Asura Strike — satu hit damage tertinggi','Steel Body invulnerability taktis','Sangat efektif MVP hunt solo'],
    cons:['SP habis total setelah Asura Strike','Butuh setup dan buff lengkap','Tidak efektif AoE mass grinding'],
    builds:{pve:[{name:'Build Asura Strike MVP',desc:'STR dan buff lengkap untuk one-shot.',stats:'STR 99 / VIT 70 / DEX 50',equips:['Berserk / Chain [4]','Sohee Shoes','Priest Buff Setup']}],pvp:[{name:'Build One-Shot WoE',desc:'Asura + Body Relocation untuk kill prioritas.',stats:'STR 99 / VIT 70 / DEX 50',equips:['Gloria Buff','Chain + Skel Worker','Thara Frog Shield']}]},
    reco:{pve:{note:'Full Asura Strike untuk MVP hunting efisien.',skills:[{n:'Triple Attack',i:'👊',lvl:5,reason:'Syarat Chain Combo.'},{n:'Asura Strike',i:'☄️',lvl:5,reason:'Wajib max — skill utama.'},{n:'Absorb Spirits',i:'💫',lvl:1,reason:'Charge SP sebelum Asura.'}]},pvp:{note:'Body Relocation approach + Asura Strike kill.',skills:[{n:'Asura Strike',i:'☄️',lvl:5,reason:'One-shot target prioritas WoE.'},{n:'Body Relocation',i:'💨',lvl:2,reason:'Teleport ke target.'},{n:'Steel Body',i:'⛩️',lvl:5,reason:'Invulnerability saat approach.'}]}},
    cards:{pve:[{i:'🐢',n:'Turtle General Card',slot:'Weapon',eff:'+20% ATK.',prio:'wajib',why:'Damage Asura naik signifikan.'},{i:'👧',n:'Sohee Card',slot:'Footgear',eff:'+15% Max SP.',prio:'wajib',why:'SP besar untuk Asura Strike.'}],pvp:[{i:'🐉',n:'Hydra Card',slot:'Weapon',eff:'+20% Demi-Human.',prio:'wajib',why:'Asura lebih mematikan ke player.'},{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Survive saat approach musuh.'}]},
    party:{desc:'Champion adalah MVP killer terbaik.',pve:[{i:'✝️',n:'High Priest',desc:'Blessing + Gloria + Kyrie setup Asura terbaik.'},{i:'🛡️',n:'Paladin',desc:'Devotion melindungi saat charge Asura.'}],pvp:[{i:'✝️',n:'High Priest',desc:'Full buff Champion sebelum masuk garis musuh.'},{i:'📖',n:'Professor',desc:'Land Protector — Champion tidak kena jebakan.'}],synergy:'Champion + High Priest = duo MVP hunting paling efisien.'}
  },
  { id:'ax', name:'Assassin Cross', icon:'🗡️', role:'Burst DPS / Assassin', tags:['melee'],
    tier:{all:'A',pve:'A',mvp:'A',woe:'S'}, stats:{str:80,agi:90,vit:40,int:20,dex:50,luk:40},
    desc:`Assassin Cross adalah predator bayangan. EDP + Sonic Blow adalah burst melee tertinggi di game. Hide dan Cloaking memungkinkan approach diam-diam.\n\nDi WoE, Sinx adalah anchor killer yang memburu Priest atau HW musuh sebelum bereaksi.`,
    pros:['EDP + Sonic Blow = burst tertinggi game','AGI tinggi untuk ASPD dan Flee','Hide/Stealth untuk approach diam-diam'],
    cons:['EDP butuh Poison Bottle mahal','VIT rendah — sangat rentan tanpa Hide'],
    builds:{pve:[{name:'Build EDP Sonic Blow',desc:'EDP + Sonic Blow untuk dungeon keras.',stats:'STR 80 / AGI 90 / DEX 40',equips:['Quad Katar (Skel Worker)','EDP Potions','Valkyrie Armor']}],pvp:[{name:'Build EDP One-Shot WoE',desc:'Cloaking → EDP → Sonic Blow kill prioritas.',stats:'STR 80 / AGI 90 / DEX 50',equips:['Triple Bloody Boned Katar','Thara Frog Shield','Whisper Garment']}]},
    reco:{pve:{note:'Sonic Blow dan AGI Crit untuk dungeon.',skills:[{n:'Advanced Katar Mastery',i:'🗡️',lvl:10,reason:'Critical wajib max.'},{n:'Sonic Blow',i:'💨',lvl:10,reason:'Skill utama burst damage.'},{n:'Enchant Deadly Poison',i:'☠️',lvl:5,reason:'Aktifkan untuk boss fight.'}]},pvp:{note:'EDP Sonic Blow untuk one-shot target WoE.',skills:[{n:'Sonic Blow',i:'💨',lvl:10,reason:'Kill target dengan EDP.'},{n:'Enchant Deadly Poison',i:'☠️',lvl:5,reason:'Wajib aktifkan sebelum WoE.'},{n:'Cloaking',i:'👁️',lvl:10,reason:'Approach tanpa terdeteksi.'}]}},
    cards:{pve:[{i:'💀',n:'Skeleton Worker Card',slot:'Weapon',eff:'+15% Medium & Large.',prio:'wajib',why:'Buff Sonic Blow damage.'},{i:'🦴',n:'Orc Skeleton Card',slot:'Weapon',eff:'+15% Crit damage.',prio:'wajib',why:'Critical build boost besar.'}],pvp:[{i:'🐉',n:'Hydra Card',slot:'Weapon',eff:'+20% Demi-Human.',prio:'wajib',why:'Sonic Blow makin mematikan ke player.'},{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Survive saat terdeteksi.'}]},
    party:{desc:'Assassin Cross adalah killer mandiri.',pve:[{i:'✝️',n:'High Priest',desc:'Blessing meningkatkan STR.'},{i:'🎵',n:'Minstrel',desc:'Bragi kurangi after-delay Sonic Blow.'}],pvp:[{i:'📖',n:'Professor',desc:'Land Protector hapus jebakan halangan Sinx.'},{i:'🎵',n:'Minstrel',desc:'Bragi — bisa spam Sonic Blow lebih cepat.'}],synergy:'Assassin Cross + Professor + Minstrel = trio assassin WoE paling mengerikan.'}
  },
  { id:'stk', name:'Stalker', icon:'🕵️', role:'Utility / Copycat', tags:['utility','melee','ranged'],
    tier:{all:'B',pve:'B',mvp:'B',woe:'A'}, stats:{str:60,agi:80,vit:50,int:40,dex:60,luk:30},
    desc:`Stalker adalah job dengan konsep paling unik — satu-satunya yang bisa mencuri skill dari job lain menggunakan Plagiarism. Chase Walk memungkinkan invisible sambil bergerak.\n\nStrip skills melucuti equipment musuh secara paksa di WoE.`,
    pros:['Plagiarism bisa copy skill apapun','Chase Walk — invisible sambil bergerak','Strip Armor/Weapon melucuti musuh WoE'],
    cons:['Damage tidak seoptimal job aslinya','Bergantung pada skill yang dicopy'],
    builds:{pve:[{name:'Build Plagiarism BB',desc:'Copy Bowling Bash untuk AoE farming.',stats:'STR 80 / AGI 70 / VIT 50 / DEX 50',equips:["Loki's Mane",'Sting Armor','Matyr Boots']}],pvp:[{name:'Build Strip WoE',desc:'Melucuti armor dan senjata musuh.',stats:'DEX 80 / AGI 70 / VIT 60',equips:['Thara Frog Shield','Whisper Garment']}]},
    reco:{pve:{note:'Copy Bowling Bash dari LK atau monster.',skills:[{n:'Plagiarism',i:'📋',lvl:10,reason:'Level tinggi = skill lebih kuat bisa dicopy.'},{n:'Reproduce',i:'🔄',lvl:10,reason:'Gunakan skill copy secara permanen.'},{n:'Chase Walk',i:'👣',lvl:5,reason:'Approach monster aman dalam invisible.'}]},pvp:{note:'Strip dan Chase Walk untuk infiltrasi WoE.',skills:[{n:'Divest Armor',i:'🎭',lvl:5,reason:'Strip armor tank musuh.'},{n:'Chase Walk',i:'👣',lvl:5,reason:'Approach target strip tanpa terdeteksi.'},{n:'Full Divestment',i:'🎭',lvl:1,reason:'Strip semua equipment sekaligus.'}]}},
    cards:{pve:[{i:'👻',n:'Whisper Card',slot:'Garment',eff:'+20 Flee.',prio:'rekomendasi',why:'Flee farming aman.'},{i:'💀',n:'Skeleton Worker Card',slot:'Weapon',eff:'+15% Medium & Large.',prio:'rekomendasi',why:'Boost skill Plagiarism.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Wajib WoE.'},{i:'👻',n:'Whisper Card',slot:'Garment',eff:'+20 Flee.',prio:'wajib',why:'Kabur setelah Strip berhasil.'}]},
    party:{desc:'Stalker adalah wildcard yang bisa mengisi hampir semua peran.',pve:[{i:'🥋',n:'Champion',desc:'Copy Asura Strike dari Champion.'},{i:'🔮',n:'High Wizard',desc:'Copy Storm Gust untuk AoE nuker.'}],pvp:[{i:'📖',n:'Professor',desc:'Strip + Dispell = combo control mematikan.'},{i:'✝️',n:'High Priest',desc:'Heal dan buff untuk Stalker.'}],synergy:'Stalker + Professor = duo control yang mengganggu WoE musuh.'}
  },
  { id:'sniper', name:'Sniper', icon:'🏹', role:'Ranged DPS', tags:['ranged'],
    tier:{all:'A',pve:'S',mvp:'A',woe:'A'}, stats:{str:40,agi:90,vit:40,int:20,dex:99,luk:30},
    desc:`Sniper adalah penembak jitu — presisi, jangkauan jauh, damage konsisten dari posisi aman. Double Strafe damage per cast tertinggi ranged. Falcon Assault ignore flee.\n\nTrap system mengubah area menjadi ladang maut.`,
    pros:['Range jauh — menyerang dari posisi aman','Wind Walk buff AGI + MOVE SPD party','Falcon Assault tidak bisa di-dodge'],
    cons:['DEF dan HP sangat rendah','Bergantung pada stok Arrow','Kurang efektif di ruang sempit'],
    builds:{pve:[{name:'Build Double Strafe Farmer',desc:'DEX semaksimal untuk damage tinggi.',stats:'DEX 99 / AGI 70 / STR 40 / VIT 30',equips:['Composite Bow [4] (Hydra x2 + Skel x2)','Whisper Garment','Tidal Shoes']}],pvp:[{name:'Build DS WoE',desc:'Double Strafe burst kill target rapuh.',stats:'DEX 99 / AGI 70 / VIT 40',equips:['Composite Bow [4] (Hydra x4)','Thara Frog Shield']}]},
    reco:{pve:{note:'Double Strafe dan Improve Concentration untuk farming.',skills:[{n:'Double Strafe',i:'💨',lvl:10,reason:'Skill utama PVE — damage tertinggi.'},{n:'Improve Concentration',i:'🎯',lvl:10,reason:'Pre-buff wajib sebelum farming.'},{n:'Wind Walk',i:'💨',lvl:10,reason:'Buff party + kecepatan sendiri.'}]},pvp:{note:'Double Strafe burst dan Ankle Snare kontrol.',skills:[{n:'Double Strafe',i:'💨',lvl:10,reason:'Burst damage di WoE.'},{n:'Ankle Snare',i:'🪤',lvl:5,reason:'Immobilize tank musuh.'},{n:'Claymore Trap',i:'⚡',lvl:5,reason:'Jebakan AoE di chokepoint WoE.'}]}},
    cards:{pve:[{i:'💀',n:'Skeleton Worker Card',slot:'Weapon',eff:'+15% Medium & Large.',prio:'wajib',why:'Mayoritas monster dungeon.'},{i:'👻',n:'Whisper Card',slot:'Garment',eff:'+20 Flee.',prio:'rekomendasi',why:'Flee tinggi — tidak ada DEF.'}],pvp:[{i:'🐉',n:'Hydra Card',slot:'Weapon',eff:'+20% Demi-Human.',prio:'wajib',why:'Double Strafe mematikan ke player.'},{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Sniper rapuh wajib reduce damage.'}]},
    party:{desc:'Sniper adalah ranged DPS yang juga bisa support melalui Wind Walk dan trap.',pve:[{i:'✝️',n:'High Priest',desc:'Blessing meningkatkan DEX signifikan.'},{i:'🔮',n:'High Wizard',desc:'Sniper + HW combo AoE membersihkan map.'}],pvp:[{i:'📖',n:'Professor',desc:'Fiber Lock + Ankle Snare = double immobilize.'},{i:'🛡️',n:'Paladin',desc:'Devotion agar Sniper bisa spam DS tanpa khawatir.'}],synergy:'Sniper + High Wizard + High Priest = trio farming PVE paling populer.'}
  },
  { id:'mins', name:'Minstrel', icon:'🎵', role:'Buffer / Support', tags:['support','buff'],
    tier:{all:'A',pve:'A',mvp:'A',woe:'S'}, stats:{str:30,agi:60,vit:60,int:50,dex:80,luk:30},
    desc:`Minstrel adalah multiplier kekuatan party. Poem of Bragi mengurangi cast time DAN after-cast delay semua spell di area — High Wizard bisa spam Storm Gust tanpa jeda.\n\nApple of Idun HP regen pasif massal. Loki's Veil mengunci semua skill dalam area.`,
    pros:["Bragi — buff terpenting untuk semua kaster","Apple of Idun healing pasif party","Loki's Veil kunci skill musuh WoE"],
    cons:['Butuh pasangan Dancer untuk skill Duo','Rentan secara fisik','Bragi hanya efektif di area skill'],
    builds:{pve:[{name:'Build Full Support Bard',desc:'DEX dan VIT untuk Bragi kuat.',stats:'DEX 90 / VIT 70 / AGI 50',equips:['Harp [2]','Whisper Garment','Thara Frog Shield']}],pvp:[{name:"Build WoE Bragi + Loki's Veil",desc:"Posisi belakang, nyalakan Bragi + Loki's Veil.",stats:'DEX 80 / VIT 80 / AGI 50',equips:["Loki's Mane","Orleans Gown",'Thara Frog Shield']}]},
    reco:{pve:{note:'Bragi dan Apple of Idun untuk support dungeon.',skills:[{n:'Poem of Bragi',i:'📜',lvl:10,reason:'Wajib max — skill terpenting Minstrel.'},{n:'Apple of Idun',i:'🍎',lvl:10,reason:'HP regen pasif party.'},{n:'Mr. Kim Rich Man',i:'💰',lvl:10,reason:'Drop rate zeny farming panjang.'}]},pvp:{note:"Bragi boost kaster guild + Loki's Veil counter musuh.",skills:[{n:'Poem of Bragi',i:'📜',lvl:10,reason:'HW guild bisa spam tanpa delay.'},{n:"Loki's Veil",i:'🔒',lvl:10,reason:'Kunci skill musuh di area WoE.'},{n:'Apple of Idun',i:'🍎',lvl:10,reason:'Healing pasif seluruh guild.'}]}},
    cards:{pve:[{i:'👧',n:'Sohee Card',slot:'Footgear',eff:'+15% Max SP.',prio:'wajib',why:'SP besar untuk spam Bragi lebih lama.'},{i:'🐸',n:'Verit Card',slot:'Footgear',eff:'+8% HP & SP.',prio:'rekomendasi',why:'Balance HP dan SP dungeon panjang.'}],pvp:[{i:'🦎',n:'Thara Frog Card',slot:'Shield',eff:'−30% Demi-Human.',prio:'wajib',why:'Wajib WoE — Minstrel harus hidup.'},{i:'💀',n:'Osiris Card',slot:'Armor',eff:'Auto-revive sekali.',prio:'rekomendasi',why:'Minstrel tidak boleh mati di WoE.'}]},
    party:{desc:'Minstrel adalah pengganda kekuatan party. Di mana Minstrel ada, kaster perform 2x lebih kuat.',pve:[{i:'🔮',n:'High Wizard',desc:'Profiter utama Bragi — Storm Gust tanpa delay.'},{i:'⚗️',n:'Biochemist',desc:'Bragi buat Acid Bomb dispam lebih cepat.'}],pvp:[{i:'🔮',n:'High Wizard',desc:'HW + Bragi = duo WoE paling menakutkan.'},{i:'🛡️',n:'Paladin',desc:'Paladin Devotion lindungi Minstrel yang rentan.'}],synergy:'Minstrel membuat semua kaster dua kali lebih kuat. Selalu dicari di semua party raid dan WoE.'}
  },
];

// =============================================
// CARDS DATA
// =============================================
const CARDS = [
  { n:'Dracula Card', i:'🧛', t:'mvp', src:'Dracula — Clock Tower B3', eff:'Skill & magic attack restore 5 SP per hit.', slot:'Armor' },
  { n:'Osiris Card', i:'💀', t:'mvp', src:'Osiris — Pyramid F4', eff:'Auto-revive dengan 50% HP & SP sekali per server.', slot:'Armor' },
  { n:'Thanatos Card', i:'☠️', t:'mvp', src:'Thanatos — Thanatos Tower', eff:'Tembus 100% VIT DEF & MDEF. HP −1000 per hit.', slot:'Weapon' },
  { n:'Maya Card', i:'🦋', t:'mvp', src:'Maya — Ant Hell B2', eff:'20% chance reflect Magic spell kembali.', slot:'Shield' },
  { n:'Turtle General Card', i:'🐢', t:'mvp', src:'Turtle General — Turtle Dungeon', eff:'+20% ATK. Chance trigger Magnum Break & Pierce.', slot:'Weapon' },
  { n:'Baphomet Card', i:'👹', t:'mvp', src:'Baphomet — Basement', eff:'Serangan biasa menjadi AoE 5×5 area.', slot:'Headgear' },
  { n:'Eddga Card', i:'🐯', t:'mvp', src:'Eddga — Payon Forest', eff:'Walking HP regen. +10 STR.', slot:'Armor' },
  { n:'Phreeoni Card', i:'🐜', t:'mvp', src:'Phreeoni — Ant Hell B2', eff:'+100 HIT. Tidak pernah meleset.', slot:'Weapon' },
  { n:'Mistress Card', i:'🕷️', t:'mvp', src:'Mistress — Payon Cave', eff:'Skill yang butuh Cobweb tidak perlu materialnya.', slot:'Headgear' },
  { n:'Ktullanux Card', i:'🦑', t:'mvp', src:'Ktullanux — Ice Cave', eff:'Serangan jadi Water. +50% damage ke Fire.', slot:'Weapon' },
  { n:'Golden Bug Card', i:'🪲', t:'mini', src:'Golden Bug — Sograt Desert', eff:'+80 SP. MATK +3%.', slot:'Armor' },
  { n:'Hunter Fly Card', i:'🪰', t:'mini', src:'Hunter Fly — Clock Tower', eff:'10% chance heal HP 15% dari damage dilakukan.', slot:'Weapon' },
  { n:'Dark Lord Card', i:'👿', t:'mini', src:'Dark Lord — Glast Heim', eff:'10% chance cast Meteor Storm Lv3 saat kena serangan.', slot:'Headgear' },
  { n:'RSX-0806 Card', i:'🤖', t:'mini', src:'RSX — Einbroch Dungeon', eff:'Tidak bisa knockback. DEF +10.', slot:'Armor' },
  { n:'Eclipse Card', i:'🐰', t:'mini', src:'Eclipse — Payon Forest', eff:'+4 STR.', slot:'Accessory' },
  { n:'Hydra Card', i:'🐉', t:'normal', src:'Hydra — Sunken Ship', eff:'+20% damage terhadap Demi-Human.', slot:'Weapon' },
  { n:'Skeleton Worker Card', i:'💀', t:'normal', src:'Skeleton Worker — Coal Mines', eff:'+15% damage terhadap Medium & Large.', slot:'Weapon' },
  { n:'Orc Skeleton Card', i:'🦴', t:'normal', src:'Orc Skeleton — Orc Dungeon', eff:'+15% Critical damage.', slot:'Weapon' },
  { n:'Soldier Skeleton Card', i:'⚔️', t:'normal', src:'Soldier Skeleton — Glast Heim', eff:'+10 HIT, +5 ATK.', slot:'Weapon' },
  { n:'Plankton Card', i:'🦠', t:'normal', src:'Plankton — Underwater Cave', eff:'5% chance Sleep musuh.', slot:'Weapon' },
  { n:'Zenorc Card', i:'🐗', t:'normal', src:'Zenorc — Orc Dungeon', eff:'5% chance Poison musuh.', slot:'Weapon' },
  { n:'Matyr Card', i:'🐱', t:'normal', src:'Matyr — Glast Heim', eff:'+1 AGI, +10% Max HP.', slot:'Footgear' },
  { n:'Sohee Card', i:'👧', t:'normal', src:'Sohee — Payon Dungeon', eff:'+15% Max SP, SP Recovery +3%.', slot:'Footgear' },
  { n:'Verit Card', i:'🐸', t:'normal', src:'Verit — Glast Heim', eff:'+8% Max HP, +8% Max SP.', slot:'Footgear' },
  { n:'Roda Frog Card', i:'🐊', t:'normal', src:'Roda Frog — Comodo Beach', eff:'+10% Max HP.', slot:'Shield' },
  { n:'Thara Frog Card', i:'🦎', t:'normal', src:'Thara Frog — Comodo Cave', eff:'−30% damage Demi-Human.', slot:'Shield' },
  { n:'Alice Card', i:'🎀', t:'normal', src:'Alice — Toy Factory', eff:'−40% damage dari MVP monster.', slot:'Shield' },
  { n:'Punk Card', i:'🎸', t:'normal', src:'Punk — Clock Tower', eff:'Silence chance 30% saat menyerang.', slot:'Garment' },
  { n:'Whisper Card', i:'👻', t:'normal', src:'Whisper — Glast Heim', eff:'+20 Flee.', slot:'Garment' },
  { n:'Raydric Card', i:'⚫', t:'normal', src:'Raydric — Glast Heim', eff:'+20% neutral resistance.', slot:'Garment' },
];

// =============================================
// GLOBAL STATE
// =============================================
let tierMode = 'all', cardFilter = 'all';
let currentJobId = null, currentJobMode = 'pve';
let modalSL = {};
let treeJobId = null, treeSL = { t0:{}, t1:{}, t2:{} };
let cbJobId = null, cbSL = { t0:{}, t1:{}, t2:{} };
let cbStats = { str:1, agi:1, vit:1, int:1, dex:1, luk:1 };
let cbCards = { weapon:'', shield:'', armor:'', head:'', garment:'', foot:'', acc1:'', acc2:'' };
const SP_PER_TIER = 40;

// =============================================
// PAGE NAVIGATION
// =============================================
function gp(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  btn.classList.add('active');
}

// =============================================
// GLOBAL SEARCH
// =============================================
function onGSearch(val) {
  const q = val.toLowerCase().trim();
  const res = document.getElementById('gsearch-results');
  if (!q) { res.classList.remove('open'); return; }
  const matches = [];
  JOBS.forEach(j => { if (j.name.toLowerCase().includes(q) || j.role.toLowerCase().includes(q)) matches.push({ ico: j.icon, name: j.name, type: 'Job', action: `openModal('${j.id}')` }); });
  CARDS.forEach(c => { if (c.n.toLowerCase().includes(q) || c.eff.toLowerCase().includes(q)) matches.push({ ico: c.i, name: c.n, type: 'Kartu', action: `gp(document.querySelector('.nb:nth-child(4)'));scrollToCard('${c.n}')` }); });
  if (!matches.length) { res.innerHTML = '<div class="gsr-item"><span style="color:var(--muted);font-size:12px;">Tidak ada hasil ditemukan</span></div>'; }
  else { res.innerHTML = matches.slice(0,8).map(m => `<div class="gsr-item" onclick="${m.action};document.getElementById('gsearch-results').classList.remove('open');document.getElementById('gsearch').value=''"><span class="gsr-ico">${m.ico}</span><div><div class="gsr-name">${m.name}</div><div class="gsr-type">${m.type}</div></div></div>`).join(''); }
  res.classList.add('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.gsearch-wrap')) document.getElementById('gsearch-results')?.classList.remove('open');
});

// =============================================
// TIER LIST
// =============================================
function stm(m, btn) {
  tierMode = m;
  document.querySelectorAll('#tier-filter-row .fb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTier();
}
function renderTier() {
  const tiers = ['S','A','B','C','D'];
  const map = {}; tiers.forEach(t => map[t] = []);
  JOBS.forEach(j => { const t = j.tier[tierMode] || j.tier.all; if (map[t]) map[t].push(j); });
  document.getElementById('tier-rows').innerHTML = tiers.map(t => {
    if (!map[t].length) return '';
    return `<div class="tb tier-${t}"><div class="th"><div class="tbg">${t}</div><div class="tj">${map[t].map(j => `
      <div class="jc" onclick="openModal('${j.id}')">
        <div class="ji">${jobImgHTML(j.id, j.icon)}</div>
        <div>
          <div class="jn">${j.name}</div>
          <div class="jr">${j.role}</div>
          <div class="jtags">${j.tags.map(tg => `<span class="tag tag-${tg}">${tg}</span>`).join('')}</div>
        </div>
      </div>`).join('')}</div></div></div>`;
  }).join('');
}

// =============================================
// MODAL
// =============================================
function openModal(id) {
  const j = JOBS.find(x => x.id === id); if (!j) return;
  currentJobId = id; currentJobMode = 'pve'; modalSL = {};
  document.getElementById('m-i').innerHTML = jobImgHTML(j.id, j.icon, 56);
  document.getElementById('m-n').textContent = j.name;
  document.getElementById('m-r').textContent = j.role;
  document.getElementById('m-tags').innerHTML = j.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join('');
  ['pve','pvp','cust'].forEach(m => document.getElementById('btn-'+m).classList.remove('active'));
  document.getElementById('btn-pve').classList.add('active');
  swTab('ov', document.getElementById('mbt-ov'));
  renderMOv(j); renderMSk(j); renderMBld(j); renderMCd(j); renderMPt(j);
  document.getElementById('modal-ov').classList.add('open');
}
function hov(e) { if (e.target === document.getElementById('modal-ov')) closeM(); }
function closeM() { document.getElementById('modal-ov').classList.remove('open'); }
function swTab(id, btn) {
  document.querySelectorAll('.tbc').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.mtab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  if (btn) btn.classList.add('active');
}
function setJMode(m) {
  currentJobMode = m;
  ['pve','pvp','cust'].forEach(x => document.getElementById('btn-'+x).classList.remove('active'));
  document.getElementById('btn-'+m).classList.add('active');
  const j = JOBS.find(x => x.id === currentJobId);
  if (m === 'cust') renderMCust();
  else { renderMBld(j); renderMCd(j); renderMPt(j); }
}

// Overview Tab
function renderMOv(j) {
  const s = j.stats, sc = ['#e84444','#5bc77a','#e8883a','#a478e8','#4a9fe8','#e8c97a'];
  const sn = ['STR','AGI','VIT','INT','DEX','LUK'], sv = [s.str,s.agi,s.vit,s.int,s.dex,s.luk];
  const tc = { S:'#e84444', A:'#e89030', B:'var(--gold)', C:'var(--blue)', D:'var(--muted)' };
  document.getElementById('tab-ov').innerHTML = `
    <div class="desc-box">${j.desc.replace(/\n\n/g,'<br><br>')}</div>
    <div class="slbl">Distribusi Stat</div>
    <div class="sg">${sn.map((n,i)=>`<div class="sb"><div class="sbn">${n}</div><div class="sbr"><div class="sbf" style="width:${sv[i]}%;background:${sc[i]};"></div></div><div class="sbv">${sv[i]}</div></div>`).join('')}</div>
    <div class="pc"><div class="pros"><div class="pct">✓ Kelebihan</div>${j.pros.map(p=>`<div class="pci"><span style="color:var(--green)">•</span>${p}</div>`).join('')}</div><div class="cons"><div class="pct">✗ Kekurangan</div>${j.cons.map(c=>`<div class="pci"><span style="color:#ff8080">•</span>${c}</div>`).join('')}</div></div>
    <div class="slbl">Tier per Mode</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">${[['all','Overall'],['pve','PVE'],['mvp','MVP'],['woe','WoE']].map(([m,l])=>`<div style="background:var(--panel);border:1px solid var(--border);border-radius:7px;padding:7px 14px;text-align:center;flex:1;min-width:70px;"><div style="font-size:9px;color:var(--muted);font-weight:700;">${l}</div><div style="font-family:'Cinzel',serif;font-size:20px;color:${tc[j.tier[m]]||'var(--muted)'};">${j.tier[m]}</div></div>`).join('')}</div>`;
}

// Skill Sim Tab (in modal)
function mGetSP(jid, tier) { return Object.entries(modalSL).filter(([k]) => k.startsWith(tier+'_')).reduce((a,[k,v])=>{ const sn = k.slice(3); const ts = TREES[jid]?.tiers[parseInt(tier)]; const s = ts?.skills.find(x=>x.n===sn); return a + (s ? v*s.c : 0); }, 0); }
function mCanLearn(jid, ti, skill) {
  if (!skill.req) return true;
  const parts = skill.req.split(' '); const rl = parseInt(parts.pop()); const rn = parts.join(' ');
  return (modalSL[`${ti}_${rn}`] || 0) >= rl;
}
function chgMSk(jid, ti, sname, delta) {
  const tree = TREES[jid]; if (!tree) return;
  const skill = tree.tiers[ti].skills.find(s => s.n === sname);
  const key = `${ti}_${sname}`; const cur = modalSL[key] || 0; const nv = Math.max(0, Math.min(skill.max, cur + delta));
  const usedWo = mGetSP(jid, ti) - cur * skill.c;
  if (nv * skill.c + usedWo > SP_PER_TIER) return;
  modalSL[key] = nv; renderMSk(JOBS.find(x => x.id === jid));
}
function resetMSk(jid) { modalSL = {}; renderMSk(JOBS.find(x => x.id === jid)); }
function renderMSk(j) {
  const tree = TREES[j.id];
  if (!tree) { document.getElementById('tab-sk').innerHTML = '<div style="padding:30px;text-align:center;color:var(--muted);">Skill tree tidak tersedia.</div>'; return; }
  let html = '';
  tree.tiers.forEach((tier, ti) => {
    const used = mGetSP(j.id, ti); const pct = Math.min(100, (used/SP_PER_TIER)*100);
    html += `<div style="margin-bottom:14px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><div style="font-size:18px;">${tier.icon}</div><div><div style="font-family:'Cinzel',serif;font-size:13px;color:var(--gold);">${tier.name}</div><div style="font-size:9px;color:var(--muted);">${tier.sub}</div></div><div style="margin-left:auto;font-family:'Cinzel',serif;font-size:13px;color:var(--gold);">${used}/${SP_PER_TIER} SP</div></div><div class="sp-bar"><div class="sp-fill" style="width:${pct}%"></div></div></div>
    ${tier.skills.map(s => {
      const key = `${ti}_${s.n}`; const cur = modalSL[key] || 0;
      const canL = mCanLearn(j.id, ti, s);
      const canUp = canL && cur < s.max && (mGetSP(j.id, ti) - cur*s.c + s.c) <= SP_PER_TIER;
      return `<div class="sk${!canL?' locked':cur>=s.max?' maxed':''}">
        <div class="sk-top"><div class="sk-ico">${s.i}</div><div style="flex:1;"><div class="sk-name">${s.n}</div>${s.req?`<div class="sk-req">Syarat: ${s.req}</div>`:''}</div>
        <div class="sk-ctrl">
          <button class="lvb" onclick="chgMSk('${j.id}',${ti},'${s.n}',-1)" ${cur<1?'disabled':''}>−</button>
          <div class="sk-lvl"><div class="sk-num">${cur}</div><div class="sk-max">/${s.max}</div></div>
          <button class="lvb" onclick="chgMSk('${j.id}',${ti},'${s.n}',1)" ${!canUp?'disabled':''}>+</button>
        </div></div>
        <div class="sk-desc">${s.d} <span style="color:var(--gold-dark,#8a6a1f);font-weight:700;">[${s.c}SP/lv]</span></div>
      </div>`;
    }).join('')}<div style="margin-bottom:8px;"></div>`;
  });
  html += `<button onclick="resetMSk('${j.id}')" class="btn-reset" style="margin-top:4px;">↺ Reset Semua Skill</button>`;
  document.getElementById('tab-sk').innerHTML = html;
}

// Build Tab
function renderMBld(j) {
  const m = currentJobMode === 'cust' ? 'pve' : currentJobMode;
  const builds = j.builds[m];
  document.getElementById('tab-bld').innerHTML = `<span class="mbg ${m}">${m==='pve'?'⚔ PVE MODE':'🏆 PVP MODE'}</span>
  ${builds.map(b=>`<div class="bcard"><div class="bname">${b.name}</div><div class="bdesc">${b.desc}</div><div class="slbl" style="font-size:9px;">Alokasi Stat</div><div class="bstat">${b.stats}</div><div class="slbl" style="font-size:9px;">Equipment</div><div class="erow">${b.equips.map(e=>`<span class="ec">${e}</span>`).join('')}</div></div>`).join('')}
  <div style="margin-top:8px;"><div class="slbl">Rekomendasi Skill</div>
  ${j.reco[m].skills.map((s,i)=>`<div class="srec"><div class="srhdr"><div style="width:20px;height:20px;border-radius:50%;background:rgba(${i===0?'212,68,68':i===1?'232,136,58':'100,100,130'},.25);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:${i===0?'#ff9090':i===1?'#f0b080':'var(--muted)'};">${i+1}</div><div style="font-size:14px;width:24px;">${s.i}</div><div class="srn">${s.n}</div><div class="srlvl">Lv${s.lvl}</div></div><div class="srreason" style="color:${m==='pve'?'var(--pve)':'var(--pvp)'};">→ ${s.reason}</div></div>`).join('')}</div>`;
}

// Card Tab
function renderMCd(j) {
  const m = currentJobMode === 'cust' ? 'pve' : currentJobMode;
  const cards = j.cards[m];
  const pm = { wajib:'pb-w', rekomendasi:'pb-r', opsional:'pb-o' };
  const pl = { wajib:'WAJIB', rekomendasi:'REKOM', opsional:'OPSIONAL' };
  document.getElementById('tab-cd').innerHTML = `<span class="mbg ${m}">${m==='pve'?'⚔ PVE MODE':'🏆 PVP MODE'}</span>
  ${cards.map(c=>`<div class="crec"><div class="cri">${cardImgHTML(c.n, c.i)}</div><div style="flex:1;"><div style="display:flex;align-items:flex-start;gap:6px;"><div><div class="crn">${c.n}</div><div class="crslot">Slot: ${c.slot}</div></div><span class="pb ${pm[c.prio]}">${pl[c.prio]}</span></div><div class="creff">${c.eff}</div><div class="crwhy ${m}">→ ${c.why}</div></div></div>`).join('')}`;
}

// Party Tab
function renderMPt(j) {
  const m = currentJobMode === 'cust' ? 'pve' : currentJobMode;
  const roles = j.party[m];
  document.getElementById('tab-pt').innerHTML = `<span class="mbg ${m}">${m==='pve'?'⚔ PVE MODE':'🏆 PVP MODE'}</span>
  <div class="desc-box">${j.party.desc}</div>
  ${roles.map(r=>`<div class="pri"><div class="prii">${r.i}</div><div><div style="font-size:13px;font-weight:800;">${r.n}</div><div style="font-size:11px;color:var(--muted);margin-top:3px;line-height:1.5;">${r.desc}</div></div></div>`).join('')}
  <div class="syn"><div class="synt">💡 SYNERGY</div><div style="font-size:12px;color:var(--muted);line-height:1.6;">${j.party.synergy}</div></div>`;
}

// Custom mode in modal
function renderMCust() {
  document.getElementById('tab-bld').innerHTML = `<span class="mbg cust">🔧 Custom Mode</span>
  <div style="font-size:13px;color:var(--muted);line-height:1.7;margin-bottom:12px;">Gunakan halaman <strong style="color:var(--gold);">Custom Build</strong> di nav bar untuk pengalaman custom lengkap dengan stat slider, skill tree 3 tier, dan card slot.</div>
  <button onclick="closeM();document.querySelectorAll('.nb')[2].click()" class="btn-cust">🔧 Buka Custom Build →</button>`;
}

// =============================================
// SKILL TREE PAGE
// =============================================
function renderTreeJobList() {
  document.getElementById('tree-jlist').innerHTML = JOBS.map(j => `
    <div class="tree-jitem${treeJobId===j.id?' active':''}" onclick="selectTreeJob('${j.id}')">
      <div class="ji-sm">${j.icon}</div>
      <div><div style="font-size:12px;font-weight:700;">${j.name}</div><div style="font-size:9px;color:var(--muted);">${j.role}</div></div>
    </div>`).join('');
}
function selectTreeJob(id) {
  treeJobId = id; treeSL = { t0:{}, t1:{}, t2:{} };
  renderTreeJobList(); renderTreeCols();
}
function tGetSP(tk) { return Object.entries(treeSL[tk]).reduce((a,[k,v])=>{ const ti = {t0:0,t1:1,t2:2}[tk]; const ts = TREES[treeJobId]?.tiers[ti]; const s = ts?.skills.find(x=>x.n===k); return a + (s?v*s.c:0); }, 0); }
function tCanLearn(ti, skill) {
  if (!skill.req) return true;
  const parts = skill.req.split(' '); const rl = parseInt(parts.pop()); const rn = parts.join(' ');
  const tk = ['t0','t1','t2'][ti]; return (treeSL[tk]?.[rn] || 0) >= rl;
}
function chgTSk(tkey, sname, delta) {
  const tree = TREES[treeJobId]; if (!tree) return;
  const ti = {t0:0,t1:1,t2:2}[tkey];
  const skill = tree.tiers[ti].skills.find(s => s.n === sname);
  const cur = treeSL[tkey][sname] || 0; const nv = Math.max(0, Math.min(skill.max, cur + delta));
  const usedWo = tGetSP(tkey) - cur*skill.c;
  if (nv*skill.c + usedWo > SP_PER_TIER) return;
  treeSL[tkey][sname] = nv; renderTreeCols();
}
function resetTreeTier(tkey) { treeSL[tkey] = {}; renderTreeCols(); }
function renderTreeCols() {
  const tree = TREES[treeJobId];
  if (!tree) { document.getElementById('tree-cols').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted);">Pilih job dari panel kiri</div>'; return; }
  const tkeys = ['t0','t1','t2'];
  document.getElementById('tree-cols').innerHTML = tree.tiers.map((tier, ti) => {
    const tk = tkeys[ti]; const used = tGetSP(tk); const pct = Math.min(100, (used/SP_PER_TIER)*100);
    return `<div class="tree-col">
      <div class="tc-hdr"><div class="tc-icon">${tier.icon}</div>
        <div style="flex:1;"><div class="tc-name">${tier.name}</div><div class="tc-sub">${tier.sub}</div>
          <div class="sp-bar"><div class="sp-fill" style="width:${pct}%"></div></div>
          <div class="sp-txt"><span>${used} SP</span><span>${SP_PER_TIER} Max</span></div>
        </div>
        <button onclick="resetTreeTier('${tk}')" style="background:none;border:none;color:rgba(212,68,68,.6);cursor:pointer;font-size:16px;padding:2px;" title="Reset Tier">↺</button>
      </div>
      <div class="tc-skills">
        ${tier.skills.map(s => {
          const cur = treeSL[tk][s.n] || 0; const canL = tCanLearn(ti, s);
          const canUp = canL && cur < s.max && (tGetSP(tk) - cur*s.c + s.c) <= SP_PER_TIER;
          return `<div class="sk${!canL?' locked':cur>=s.max?' maxed':''}">
            <div class="sk-top"><div class="sk-ico">${s.i}</div><div style="flex:1;"><div class="sk-name">${s.n}</div>${s.req?`<div class="sk-req">Syarat: ${s.req}</div>`:''}</div>
            <div class="sk-ctrl">
              <button class="lvb" onclick="chgTSk('${tk}','${s.n}',-1)" ${cur<1?'disabled':''}>−</button>
              <div class="sk-lvl"><div class="sk-num">${cur}</div><div class="sk-max">/${s.max}</div></div>
              <button class="lvb" onclick="chgTSk('${tk}','${s.n}',1)" ${!canUp?'disabled':''}>+</button>
            </div></div>
            <div class="sk-desc">${s.d} <span style="color:#8a6a1f;font-weight:700;">[${s.c}SP/lv]</span></div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}

// =============================================
// CUSTOM BUILD PAGE
// =============================================
function populateCardSelects() {
  ['weapon','shield','armor','head','garment','foot','acc1','acc2'].forEach(slot => {
    const sel = document.getElementById('ccs-' + slot); if (!sel) return;
    sel.innerHTML = `<option value="">— Pilih Kartu —</option>` + CARDS.map(c => `<option value="${c.n}">${c.i} ${c.n}</option>`).join('');
  });
}
function initCBJobGrid() {
  document.getElementById('cb-jgrid').innerHTML = JOBS.map(j => `
    <div class="cb-jbtn${cbJobId===j.id?' active':''}" onclick="selectCBJob('${j.id}')">
      <div>${j.icon}</div>
      <div class="cbjn">${j.name}</div>
    </div>`).join('');
}
function selectCBJob(id) {
  cbJobId = id; cbSL = { t0:{}, t1:{}, t2:{} };
  initCBJobGrid(); renderCBTree(); updSummary();
}
function cbGetSP(tk) { return Object.entries(cbSL[tk]).reduce((a,[k,v])=>{ const ti={t0:0,t1:1,t2:2}[tk]; const ts=TREES[cbJobId]?.tiers[ti]; const s=ts?.skills.find(x=>x.n===k); return a+(s?v*s.c:0); }, 0); }
function cbCanLearn(ti, skill) {
  if (!skill.req) return true;
  const parts = skill.req.split(' '); const rl = parseInt(parts.pop()); const rn = parts.join(' ');
  return (cbSL[['t0','t1','t2'][ti]]?.[rn] || 0) >= rl;
}
function chgCBSk(tkey, sname, delta) {
  const tree = TREES[cbJobId]; if (!tree) return;
  const ti = {t0:0,t1:1,t2:2}[tkey];
  const skill = tree.tiers[ti].skills.find(s => s.n === sname);
  const cur = cbSL[tkey][sname] || 0; const nv = Math.max(0, Math.min(skill.max, cur + delta));
  const usedWo = cbGetSP(tkey) - cur*skill.c;
  if (nv*skill.c + usedWo > SP_PER_TIER) return;
  cbSL[tkey][sname] = nv; renderCBTree(); updSummary();
}
function resetCBSkills() { cbSL = { t0:{}, t1:{}, t2:{} }; renderCBTree(); updSummary(); }
function renderCBTree() {
  const tree = TREES[cbJobId];
  if (!tree) { document.getElementById('cb-tree-cols').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">Pilih job di atas</div>'; document.getElementById('cb-sp-display').innerHTML = ''; return; }
  const tkeys = ['t0','t1','t2'];
  const totalUsed = tkeys.reduce((a, t) => a + cbGetSP(t), 0);
  document.getElementById('cb-sp-display').innerHTML = tkeys.map((tk, ti) => {
    const used = cbGetSP(tk); return `<div style="background:var(--panel2);border:1px solid var(--border);border-radius:6px;padding:5px 10px;font-size:11px;font-weight:800;"><div style="color:var(--muted);font-size:9px;">${tree.tiers[ti].name}</div><div style="color:var(--gold);font-family:'Cinzel',serif;">${used}/${SP_PER_TIER}</div></div>`;
  }).join('') + `<div style="background:rgba(201,168,76,.1);border:1px solid var(--border2);border-radius:6px;padding:5px 10px;"><div style="color:var(--muted);font-size:9px;">Total</div><div style="color:var(--gold-l,#e8c97a);font-family:'Cinzel',serif;font-size:14px;font-weight:700;">${totalUsed}/120</div></div>`;
  document.getElementById('cb-tree-cols').innerHTML = tree.tiers.map((tier, ti) => {
    const tk = tkeys[ti]; const used = cbGetSP(tk); const pct = Math.min(100, (used/SP_PER_TIER)*100);
    return `<div class="tree-col">
      <div class="tc-hdr"><div class="tc-icon">${tier.icon}</div>
        <div style="flex:1;"><div class="tc-name">${tier.name}</div><div class="tc-sub">${tier.sub}</div>
          <div class="sp-bar"><div class="sp-fill" style="width:${pct}%"></div></div>
          <div class="sp-txt"><span>${used}/${SP_PER_TIER} SP</span></div>
        </div>
      </div>
      <div class="tc-skills">
        ${tier.skills.map(s => {
          const cur = cbSL[tk][s.n] || 0; const canL = cbCanLearn(ti, s);
          const canUp = canL && cur < s.max && (cbGetSP(tk) - cur*s.c + s.c) <= SP_PER_TIER;
          return `<div class="sk${!canL?' locked':cur>=s.max?' maxed':''}">
            <div class="sk-top"><div class="sk-ico">${s.i}</div><div style="flex:1;"><div class="sk-name">${s.n}</div>${s.req?`<div class="sk-req">Syarat: ${s.req}</div>`:''}</div>
            <div class="sk-ctrl">
              <button class="lvb" onclick="chgCBSk('${tk}','${s.n}',-1)" ${cur<1?'disabled':''}>−</button>
              <div class="sk-lvl"><div class="sk-num">${cur}</div><div class="sk-max">/${s.max}</div></div>
              <button class="lvb" onclick="chgCBSk('${tk}','${s.n}',1)" ${!canUp?'disabled':''}>+</button>
            </div></div>
            <div class="sk-desc">${s.d}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}
function updStat(stat, val) {
  cbStats[stat] = parseInt(val);
  document.getElementById('ci-' + stat).value = val;
  updSummary();
}
function updStatIn(stat, val) {
  const v = Math.max(1, Math.min(99, parseInt(val) || 1));
  cbStats[stat] = v;
  document.getElementById('cs-' + stat).value = v;
  document.getElementById('ci-' + stat).value = v;
  updSummary();
}
function updCard(slot, val) { cbCards[slot] = val; updSummary(); }
function updSummary() {
  const j = cbJobId ? JOBS.find(x => x.id === cbJobId) : null;
  const name = document.getElementById('build-name')?.value || 'My Build';
  const tkeys = ['t0','t1','t2'];
  const totalSP = tkeys.reduce((a, t) => a + cbGetSP(t), 0);
  const skillList = j ? tkeys.flatMap((tk,ti) => Object.entries(cbSL[tk]).filter(([,v])=>v>0).map(([k,v])=>`${k} Lv${v}`)).join(', ') || 'Belum ada skill' : '—';
  const cardsChosen = Object.entries(cbCards).filter(([,v]) => v).map(([slot,n]) => `<span class="cbd-chip">${n}</span>`).join('');
  const sc = ['#e84444','#5bc77a','#e8883a','#a478e8','#4a9fe8','#e8c97a'];
  document.getElementById('cb-summary').innerHTML = `
    <div class="cb-sum">
      <div class="cb-sum-name">${name}</div>
      <div style="font-size:11px;color:var(--muted);margin-bottom:8px;">${j ? j.icon+' '+j.name : 'Belum pilih job'}</div>
      <div class="cb-stat-grid">
        ${[['STR',cbStats.str,sc[0]],['AGI',cbStats.agi,sc[1]],['VIT',cbStats.vit,sc[2]],['INT',cbStats.int,sc[3]],['DEX',cbStats.dex,sc[4]],['LUK',cbStats.luk,sc[5]]].map(([n,v,c])=>`<div class="cb-sv"><div class="cb-svn" style="color:${c};">${n}</div><div class="cb-svv">${v}</div></div>`).join('')}
      </div>
      <div class="slbl" style="font-size:9px;">Total SP Skill</div>
      <div style="font-family:'Cinzel',serif;font-size:20px;color:var(--gold);margin-bottom:8px;">${totalSP} <span style="font-size:12px;color:var(--muted);">/ 120</span></div>
      ${skillList ? `<div style="font-size:10px;color:var(--muted);line-height:1.6;margin-bottom:8px;">${skillList}</div>` : ''}
      <div class="slbl" style="font-size:9px;">Kartu Terpasang</div>
      <div class="cb-cards-disp">${cardsChosen || '<span style="font-size:11px;color:var(--muted);">Belum ada kartu</span>'}</div>
    </div>`;
}
function exportBuild() {
  const j = cbJobId ? JOBS.find(x => x.id === cbJobId) : null;
  const name = document.getElementById('build-name')?.value || 'My Build';
  const tkeys = ['t0','t1','t2'];
  const data = { buildName: name, job: j ? j.name : '—', stats: cbStats, skills: tkeys.flatMap((tk,ti) => Object.entries(cbSL[tk]).filter(([,v])=>v>0).map(([k,v])=>({tier:ti,skill:k,level:v}))), cards: cbCards };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `KITABROOC_${name.replace(/\s+/g,'_')}.json`; a.click();
}

// =============================================
// CARD DB PAGE
// =============================================
let activeCT = 'all';
function setct(t, btn) {
  activeCT = t;
  document.querySelectorAll('#ctf .fb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}
function renderCards() {
  const q = (document.getElementById('cq')?.value || '').toLowerCase();
  let cards = CARDS;
  if (activeCT !== 'all') cards = cards.filter(c => c.t === activeCT);
  if (q) cards = cards.filter(c => c.n.toLowerCase().includes(q) || c.eff.toLowerCase().includes(q) || c.src.toLowerCase().includes(q));
  const tm = { mvp:'MVP', mini:'Mini Boss', normal:'Normal' };
  const tc = { mvp:'cm cibm', mini:'cb cibmb', normal:'cn cibn' };
  document.getElementById('card-grid').innerHTML = cards.length ? cards.map(c => {
    const cls = tc[c.t].split(' ');
    return `<div class="ci ${cls[0]}">
      <span class="cibg ${cls[1]}">${tm[c.t]}</span>
      <div class="card-img-wrap">${cardImgHTML(c.n, c.i)}</div>
      <div style="text-align:center;font-size:13px;font-weight:800;margin-bottom:2px;">${c.n}</div>
      <div style="text-align:center;font-size:10px;color:var(--muted);margin-bottom:2px;">${c.src}</div>
      <div style="text-align:center;font-size:9px;color:var(--purple);font-weight:700;margin-bottom:8px;">Slot: ${c.slot}</div>
      <div style="font-size:11px;color:var(--gold-l);background:rgba(201,168,76,.08);border-radius:5px;padding:7px;line-height:1.5;">${c.eff}</div>
    </div>`;
  }).join('') : '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">Tidak ada kartu ditemukan.</div>';
}

// =============================================
// INIT — Jalankan saat halaman dimuat
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderTier();
  renderTreeJobList();
  initCBJobGrid();
  renderCBTree();
  updSummary();
  populateCardSelects();
  renderCards();
});
