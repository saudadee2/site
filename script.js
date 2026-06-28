/* ════════════════════════════════════
   DATA — ŞİİRLER
   ════════════════════════════════════ */
const POEMS = [
  { author: "Nazım Hikmet",           title: "Saat 21-22 Şiirleri'nden",          text: "En güzel deniz: henüz gidilmemiş olanı.\nEn güzel çocuk: henüz büyümedi.\nEn güzel günlerimiz: henüz yaşamadıklarımız.\nVe sana söylemek istediğim en güzel söz:\nhenüz söylememiş olduğum söz." },
  { author: "Cemal Süreya",           title: "Üvercinka",                          text: "Meselâ bir yerde durmuş bakıyorsun,\ngözlerin uzaklara dalıyor;\nben oraya gidiyorum işte,\nsen benim en uzak yerimsin." },
  { author: "Attilâ İlhan",           title: "Ben Sana Mecburum",                 text: "Ben sana mecburum, biliyorum, ayrılık lâzım;\nAma nasıl ayrılırım, söyle?\nSensiz olmak ne demek,\nbilmek istemiyorum." },
  { author: "Cahit Sıtkı Tarancı",    title: "Ziya'ya Mektuplar'dan",             text: "Otuz beş yaşında bir ağaç gibi\nKırlarda dolanıp duruyorum.\nYağmur yağıyor, kar yağıyor,\nSen benim güneşimsin." },
  { author: "Necip Fazıl Kısakürek",  title: "Kaldırımlar'dan",                   text: "Yalnız değilim, seninle yalnızım.\nGece biter, gündüz doğar—\nSenin adın dudaklarımda,\nHer sabah yeni bir bahar." },
  { author: "Orhan Veli Kanık",       title: "Kitabe-i Seng-i Mezar",             text: "Hiçbir şey bilmezdim bunları ben,\nNe kadar güzel şeyler varmış dünyada:\nAnladım ancak senin sayende,\nSevmek ne güzel şeymiş." },
  { author: "Sezai Karakoç",          title: "Monna Rosa'dan",                    text: "Gülüşünde bir deniz var derinliği olan,\nBen o denizde kaybolmak istiyorum.\nEllerinde bahar var—\nDokunduğun her şey çiçek açıyor." },
  { author: "Turgut Uyar",            title: "Büyük Saat'ten",                    text: "Akşamları seninle oturup susmak,\ndünyanın en büyük şiirine bedel.\nSöze gerek yok aşkta bazen—\nVarlığın yeterli bana." },
  { author: "Edip Cansever",          title: "Yerçekimli Karanfil'den",           text: "Seninle her yer ev oluyor,\nHer an tatil, her gün pazar.\nYanındayken zaman durmuş gibi—\nHep böyle kal, gitme." },
  { author: "İlhan Berk",             title: "Güneşi Yakalamak'tan",              text: "Pencereni açıyorum,\niçeri giriyor güneş—\nsen de öyle giriyorsun hayatıma,\nfark etmeden, ama her şeyi aydınlatarak." },
  { author: "Ziya Osman Saba",        title: "Sabahleyin'den",                    text: "Her sabah uyanınca ilk düşündüğüm sensin,\nHer gece uyumadan önce son düşündüğüm sensin.\nBu böyle devam edecek—\nÇünkü sen benim her şeyimsin." },
  { author: "Ahmed Arif",             title: "Hasretinden Prangalar Eskittim'den",text: "Hasret çekmek güzel bir şeymiş,\nAdam sevildiğini anlıyor.\nAma sensiz olmak—\nBunu tarif edemiyorum." },
  { author: "Yahya Kemal Beyatlı",    title: "Kendi Gök Kubbemiz'den",            text: "Bir ömür boyu yanında durmak,\nbazen hiç konuşmadan—\nSessizliğin bile güzel\nseninle." },
  { author: "Behçet Necatigil",       title: "Evler'den",                         text: "Küçük mutluluklar en büyükleridir:\nSeninle içilen bir çay,\nSeninle geçen bir akşam—\nBu anlar hazinedir." },
  { author: "Fazıl Hüsnü Dağlarca",   title: "Asu'dan",                           text: "Adını anınca gülümsüyorum,\nfarkında olmadan.\nBu sihir nedir—\nAnlatamıyorum, ama hissediyorum." },
  { author: "Melih Cevdet Anday",     title: "Rahatlamak İstiyorum'dan",          text: "İki kişiyiz biz,\nama bir dünyayız.\nSeninle bazen kelime bulamıyorum—\nGüzelliğin susturuyor beni." },
  { author: "Cemal Süreya",           title: "Göçebe",                            text: "Gözlerin bir şehir gibi büyük,\niçinde kayboluyorum her bakışında.\nBul beni istersen—\nHep orada olacağım." },
  { author: "Nazım Hikmet",           title: "Saman Sarısı",                      text: "Güzel olan herşeyi sende buluyorum,\nbahar sende, deniz sende,\nyıldızlar sende—\nSen benim en güzel şiirimsin." },
  { author: "Attilâ İlhan",           title: "Sisler Bulvarı'ndan",               text: "Seni sevmek bu kadar güzel,\nbu kadar ağır—\nTaşıyorum bu sevgiyi\ngönüllü olarak." },
  { author: "Orhan Veli Kanık",       title: "İstanbul'u Dinliyorum",             text: "İstanbul'u dinliyorum gözlerim kapalı,\nama aklım hep sende.\nŞehirden güzel sensin—\nŞehirden büyük sevgim." },
  { author: "Turgut Uyar",            title: "Dünyanın En Güzel Arabistanı",      text: "Biz birlikte güzeliz,\nikimiz bir dünyayız.\nAyrı ayrı yarım—\nBirlikte tam." },
  { author: "Sezai Karakoç",          title: "Hızırla Kırk Saat'ten",             text: "Kaybetsem de her şeyi,\nseni kaybetmem yeter.\nSeninle her şey var—\nSensiz hiçbir şey." },
  { author: "Edip Cansever",          title: "Tragedyalar'dan",                   text: "Sabahları uyanmak güzel olmuştu,\nçünkü sen varsın.\nGüne seninle başlamak—\nBu en güzel ritüel." },
  { author: "Cemal Süreya",           title: "Sevda Sözleri'nden",                text: "Ellerini tutunca,\ndünya duruyor sanki.\nZaman senin yanında—\nFarklı akıyor." },
  { author: "Nazım Hikmet",           title: "Sana Dair",                         text: "Sana dair düşünceler\ndolduruyor içimi—\nSevinçle, umutla, sevgiyle—\nSen benim baharımsın." },
  { author: "Cahit Sıtkı Tarancı",    title: "Gün Eksilmesin",                    text: "Gün eksilmesin penceremden,\nGece gelmesin—\nÇünkü geçen her an,\nSeninle daha güzel." },
  { author: "Attilâ İlhan",           title: "Benden Sonra Hezeyan",              text: "Gece yarısı yıldızlara bakarken,\nbirini sana adamak istiyorum.\nO yıldız senindir artık—\nHer gece seninle parlıyor." },
  { author: "Behçet Necatigil",       title: "İki Başına Yürümek'ten",            text: "İki başına yürümek—\nEn güzel yürüyüş bu.\nYanımda sen olunca,\nYol da güzelleşiyor." },
  { author: "Necip Fazıl Kısakürek",  title: "Örümcek Ağı'ndan",                 text: "Ruhun ruhuma dokunuyor\nbazen kelimesiz—\nBu en güzel temas,\nbu en derin aşk." },
  { author: "İlhan Berk",             title: "Deniz Eskisi'nden",                 text: "Sevmek öğrenilir mi bilmiyorum,\nama seninle öğrendim.\nHer gün biraz daha—\nHer gün biraz daha derin." },
  { author: "Orhan Veli Kanık",       title: "Yaprak'tan",                        text: "Yapraklar düşüyor,\nmevsimler değişiyor—\nAma senin için olan sevgim,\nHiç değişmiyor." },
  { author: "Ziya Osman Saba",        title: "Yalnız Değilim'den",                text: "Yalnız değilim, seninle yalnızım.\nBu fark çok büyük—\nSeninle yalnızlık,\nKalabalıktan güzel." },
  { author: "Fazıl Hüsnü Dağlarca",   title: "Seni Seviyorum'dan",                text: "Seni seviyorum derken,\nkelimeler yetersiz kalıyor.\nBu duygu daha büyük—\nDile sığmıyor." },
  { author: "Melih Cevdet Anday",     title: "Mikado'nun Çöpleri'nden",           text: "Bazen sözcükler değil—\nBakışlar anlatır her şeyi.\nGözlerinle anladım,\nSen benim için özelsin." },
  { author: "Cemal Süreya",           title: "Ben Ruhi Bey Nasılım",              text: "Nasılsın diye sorsam,\nGülümseyeceksin—\nO gülümseme benim için,\nBütün şiirlere bedel." },
  { author: "Ahmed Arif",             title: "Şafak Türküsü'nden",                text: "Şafak sökerken seni düşünmek,\ngünü güzel başlatıyor.\nSen benim şafağımsın—\nKaranlığı aydınlatan." },
  { author: "Sezai Karakoç",          title: "Leylâ ile Mecnun'dan",              text: "Aşkın derinliğini,\ndenizde gördüm—\nAma senin gözlerinde,\nOkyanus buldum." },
  { author: "Turgut Uyar",            title: "Kayayı Delen İncir'den",            text: "Güçlü olmanın sırrı—\nSevdiğin biri olsun yanında.\nSen benim gücümsün,\nSen benim kalemimsin." },
  { author: "Yahya Kemal Beyatlı",    title: "Sessiz Gemi'den",                   text: "Artık demir almak günü gelmişse zamandan,\nMeçhule giden bir gemi kalkar bu limandan.\n—Ama sen varsın,\nLiman hep sensin benim için." },
  { author: "Cahit Külebi",           title: "Rüzgar'dan",                        text: "Rüzgar seni getirdi,\nya da ben sana koştum—\nFark etmez nasıl olduğu,\nÖnemli olan var olduğun." },
  { author: "Orhan Veli Kanık",       title: "Anlatamıyorum",                     text: "Anlatamıyorum—\nBu kelimeyi iyi biliyorum.\nSeni sevdiğimi anlatmak—\nHayatın en zor görevi." },
];

/* ════════════════════════════════════
   DATA — SÖZLER
   ════════════════════════════════════ */
const QUOTES = [
  { text: "Seni sevmek, her sabah güneşin doğmasına benziyor — kaçınılmaz ve çok güzel.",                             source: "Anonim" },
  { text: "Aşk bir kapı değil ki açılıp kapanabilsin; o bir penceredir ve sen hep orada duruyorsun.",                 source: "Anonim" },
  { text: "İki insan bir ömür boyunca birbirini öğrenir; bu öğrenme hiç bitmez.",                                     source: "Honoré de Balzac" },
  { text: "Seni seviyorum, bu dünyanın en güzel ve en basit gerçeği.",                                                 source: "Anonim" },
  { text: "Kalpler konuştuğunda, kelimeler sessiz kalır.",                                                             source: "Rumi" },
  { text: "Aşk, birini olduğu gibi kabullenmek ve ona rağmen sevmek değil; o olduğu için sevmektir.",                 source: "F. Dostoyevski" },
  { text: "En uzun yolculuk, iki kalp arasındaki kısayoldur.",                                                        source: "Henri Bourgeois" },
  { text: "Seninle olmak, evde olmak gibi hissettiriyor.",                                                             source: "Anonim" },
  { text: "Sevgi, iki bedende yaşayan tek bir ruhtur.",                                                                source: "Aristoteles" },
  { text: "Sana olan sevgim, sayamayacağım kadar çok sebeple doludur.",                                               source: "Anonim" },
  { text: "Gözlerin, söylediklerin her şeyden daha doğru konuşur.",                                                   source: "Anonim" },
  { text: "Seni sevmek, nefes almak gibi — durduramıyorum.",                                                          source: "Anonim" },
  { text: "Birlikte geçirilen en sıradan an, en büyük anılara dönüşür.",                                              source: "Anonim" },
  { text: "Aşk; zaman geçtikçe eskimez, aksine derinleşir.",                                                          source: "Anonim" },
  { text: "Sen olmasan hayat yarım kalırdı — bunu biliyorum.",                                                        source: "Anonim" },
  { text: "Seninle zaman farklı akıyor — daha yavaş ve daha güzel.",                                                  source: "Anonim" },
  { text: "Sen benim en güzel tesadüfümsün.",                                                                          source: "Anonim" },
  { text: "Gerçek aşk; karanlık gecelerde bile ışık bulmaktır.",                                                      source: "Rumi" },
  { text: "Sevmek; birine bakıp 'Bu benim' demektir.",                                                                source: "Anonim" },
  { text: "Sen benim dünyamın en güzel köşesisin.",                                                                    source: "Anonim" },
  { text: "Gerçek sevgi, mükemmel birini bulmak değil; birini mükemmel görmektir.",                                   source: "Sam Keen" },
  { text: "Aşk büyür; su gibi akar, ateş gibi ısıtır.",                                                               source: "Anonim" },
  { text: "Yanındayken kelime bulamıyorum; bu güzelliğin gücü.",                                                      source: "Anonim" },
  { text: "İki insan birbirini seçtiğinde, dünya daha güzel bir yer olur.",                                           source: "Anonim" },
  { text: "Gözlerinde bir dünya gördüm; o dünyada yaşamak istiyorum.",                                                source: "Anonim" },
  { text: "Sevginin dili sözsüzdür ama herkes anlar.",                                                                 source: "Rumi" },
  { text: "Sen bana 'ev' gibi hissettiren tek kişisin.",                                                               source: "Anonim" },
  { text: "Gerçek mutluluk küçük anlardadır; seninle içilen çayda, seninle yürünen yolda.",                           source: "Anonim" },
  { text: "Aşk, bazen sadece 'buradayım' demektir.",                                                                  source: "Anonim" },
  { text: "Sen olmadan eksik olan her şey, seninle tamamlanıyor.",                                                    source: "Anonim" },
  { text: "Gerçek aşk sessizliği bile konuşturur.",                                                                   source: "Victor Hugo" },
  { text: "Seninle olmak, dünyanın en doğru kararı.",                                                                 source: "Anonim" },
  { text: "Bir bakışın bazen bin kelimeye bedel.",                                                                     source: "Anonim" },
  { text: "Seni düşününce gülümsüyorum — farkında olmadan.",                                                          source: "Anonim" },
  { text: "Sevinçlerimi paylaştığımda ikiye katlanıyor, acılarımı paylaştığımda yarıya iniyor — seninle.",            source: "Anonim" },
  { text: "Seni sevmenin başı yok, sonu da olmayacak.",                                                               source: "Anonim" },
  { text: "Seninle her yol kısalıyor, her an uzuyor.",                                                                source: "Anonim" },
  { text: "En güzel gece gökyüzü bile, senin gözlerin kadar parlamıyor.",                                             source: "Anonim" },
  { text: "İki insan birbirini gerçekten severse, evren onları bir araya getirir.",                                   source: "Paulo Coelho" },
  { text: "Seni tanıdığım an hayatım değişti; bu değişimi asla geri almak istemezdim.",                               source: "Anonim" },
];

/* ════════════════════════════════════
   HELPERS
   ════════════════════════════════════ */
function getDayIndex() {
  const now   = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function formatDate(d) {
  const days   = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
                  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  return `${days[d.getDay()]} · ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ════════════════════════════════════
   RENDER CONTENT
   ════════════════════════════════════ */
function renderContent() {
  const idx   = getDayIndex();
  const poem  = POEMS[idx % POEMS.length];
  const quote = QUOTES[idx % QUOTES.length];

  document.getElementById('poem-author').textContent = poem.author;
  document.getElementById('poem-title').textContent  = poem.title.toUpperCase();
  document.getElementById('poem-text').textContent   = poem.text;
  document.getElementById('quote-text').textContent  = quote.text;
  document.getElementById('quote-source').textContent = '— ' + quote.source;
  document.getElementById('today-date').textContent  = formatDate(new Date());
}

/* ════════════════════════════════════
   COUNTDOWN
   ════════════════════════════════════ */
function updateCountdown() {
  const now = new Date();
  const mid = new Date(now);
  mid.setHours(24, 0, 0, 0);

  let diff = Math.floor((mid - now) / 1000);
  const h  = Math.floor(diff / 3600); diff -= h * 3600;
  const m  = Math.floor(diff / 60);   diff -= m * 60;

  document.getElementById('cd-h').textContent = pad(h);
  document.getElementById('cd-m').textContent = pad(m);
  document.getElementById('cd-s').textContent = pad(diff);

  if (h === 0 && m === 0 && diff === 0) location.reload();
}

/* ════════════════════════════════════
   THREE.JS SCENE
   ════════════════════════════════════ */
(function initThree() {
  const canvas   = document.getElementById('three-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 32;

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── STAR FIELD ── */
  function makeStars(count, spread, size, opacity, col) {
    const geo = new THREE.BufferGeometry();
    const p   = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3]     = (Math.random() - 0.5) * spread;
      p[i * 3 + 1] = (Math.random() - 0.5) * spread;
      p[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.5) - 5;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({ color: col, size, transparent: true, opacity, sizeAttenuation: true }));
  }

  const starsMain = makeStars(2200, 140, 0.13, 0.75, 0xffffff);
  const starsDim  = makeStars(800,  160, 0.09, 0.35, 0xffeef4); // soluk pembe-beyaz
  const starsPink = makeStars(180,  100, 0.18, 0.55, 0xd4a0b5); // soft pembe aksan
  scene.add(starsMain, starsDim, starsPink);

  /* ── WIREFRAME HEARTS ── */
  function makeHeart(scale, x, y, z, opacity) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.4 * scale);
    shape.bezierCurveTo(0, 0.6 * scale, -0.45 * scale, 0.6 * scale, -0.45 * scale, 0.2 * scale);
    shape.bezierCurveTo(-0.45 * scale, -0.1 * scale, 0, -0.35 * scale, 0, -0.55 * scale);
    shape.bezierCurveTo(0, -0.35 * scale, 0.45 * scale, -0.1 * scale, 0.45 * scale, 0.2 * scale);
    shape.bezierCurveTo(0.45 * scale, 0.6 * scale, 0, 0.6 * scale, 0, 0.4 * scale);

    const pts = shape.getPoints(60);
    const geo = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(p.x, p.y, 0)));
    const line = new THREE.LineLoop(geo, new THREE.LineBasicMaterial({ color: 0xd4a0b5, transparent: true, opacity }));
    line.position.set(x, y, z);
    return line;
  }

  const heart1 = makeHeart(12, -14,  3, -18, 0.06);
  const heart2 = makeHeart( 7,  15, -6, -14, 0.05);
  const heart3 = makeHeart( 4,  -2,  9, -10, 0.09);
  scene.add(heart1, heart2, heart3);

  /* ── DRIFTING PINK ORBS ── */
  const orbs = [];
  for (let i = 0; i < 14; i++) {
    const r    = Math.random() * 0.35 + 0.08;
    const g    = new THREE.SphereGeometry(r, 6, 6);
    const m    = new THREE.MeshBasicMaterial({
      color:       i % 2 === 0 ? 0xd4a0b5 : 0xffffff,
      transparent: true,
      opacity:     Math.random() * 0.18 + 0.04,
      wireframe:   true,
    });
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(
      (Math.random() - 0.5) * 44,
      (Math.random() - 0.5) * 44,
      (Math.random() - 0.5) * 18 - 4
    );
    mesh.userData = {
      vy:    (Math.random() - 0.5) * 0.006,
      vx:    (Math.random() - 0.5) * 0.004,
      phase: Math.random() * Math.PI * 2,
    };
    scene.add(mesh);
    orbs.push(mesh);
  }

  /* ── MOUSE PARALLAX ── */
  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── RENDER LOOP ── */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;

    starsMain.rotation.y =  t * 0.025;
    starsMain.rotation.x =  t * 0.008;
    starsDim.rotation.y  = -t * 0.018;
    starsPink.rotation.y =  t * 0.04;
    starsPink.rotation.z =  t * 0.012;

    heart1.rotation.z    = Math.sin(t * 0.3) * 0.04;
    heart1.position.y    = 3  + Math.sin(t * 0.4) * 0.8;
    heart2.rotation.z    = -Math.sin(t * 0.25) * 0.03;
    heart2.position.y    = -6 + Math.cos(t * 0.35) * 0.6;
    heart3.rotation.z    = Math.sin(t * 0.5) * 0.06;
    heart3.position.y    = 9  + Math.sin(t * 0.45) * 0.5;

    heart1.material.opacity = 0.05 + Math.sin(t * 0.7) * 0.025;
    heart3.material.opacity = 0.07 + Math.sin(t * 0.9) * 0.03;

    orbs.forEach(o => {
      o.position.x += o.userData.vx;
      o.position.y += o.userData.vy + Math.sin(t * 0.8 + o.userData.phase) * 0.004;
      if (Math.abs(o.position.x) > 24) o.userData.vx *= -1;
      if (Math.abs(o.position.y) > 24) o.userData.vy *= -1;
    });

    camera.position.x += (mx * 2.5 - camera.position.x) * 0.03;
    camera.position.y += (-my * 1.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();
})();

/* ════════════════════════════════════
   GSAP ANIMATIONS
   ════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  gsap.to('#hdr', { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.2 });

  ['#div1', '#poem-card', '#div2', '#quote-card', '#div3', '#cd-card', '#ftr'].forEach((sel, i) => {
    gsap.to(sel, {
      scrollTrigger: { trigger: sel, start: 'top 88%' },
      opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: i * 0.05,
    });
  });

  gsap.to('#poem-card',  { y: -6, duration: 4,   ease: 'sine.inOut', repeat: -1, yoyo: true });
  gsap.to('#quote-card', { y: -5, duration: 5,   ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1 });
  gsap.to('#cd-card',    { y: -4, duration: 3.5, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 0.5 });
});

/* ════════════════════════════════════
   CLICK HEARTS
   ════════════════════════════════════ */
const HEARTS = ['♡', '♥', '✦', '·', '✧', '❋'];

document.addEventListener('click', e => {
  for (let i = 0; i < 5; i++) {
    const el    = document.createElement('span');
    el.className = 'float-heart';
    const angle  = Math.random() * 80 - 40;
    el.style.cssText = `left:${e.clientX + Math.cos(angle) * 10}px;top:${e.clientY}px;color:${Math.random() > .5 ? '#d4a0b5' : 'rgba(255,255,255,0.6)'};`;
    el.style.animationDelay = `${i * 0.08}s`;
    el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
});

/* ════════════════════════════════════
   INIT
   ════════════════════════════════════ */
renderContent();
updateCountdown();
setInterval(updateCountdown, 1000);
