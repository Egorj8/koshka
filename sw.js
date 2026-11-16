// Офлайн-кэш сайта-приложения «Кошка в кедах». Файл sw.js собирает web/build_web.py — правьте этот шаблон.
// Крайние случаи:
//  - нет интернета: страница и рисунки — из кэша; рисунка нет в кэше — страница покажет эмодзи (noImg);
//  - первая загрузка оборвалась: страница всё равно работает, недокачанные рисунки докачаются при следующем открытии;
//  - новая версия: другая метка VER → новый кэш, старый удаляется; страница при сети всегда свежая;
//  - шрифт Nunito из интернета: кэшируется при первом показе, без сети — системный шрифт.
var VER = 'e4686465cf';
var CORE = ["index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable.png"];
var IMGS = ["img/abi.svg", "img/abla.svg", "img/acik.svg", "img/affedersiniz.svg", "img/afiyet.svg", "img/agac.svg", "img/agiz.svg", "img/agri.svg", "img/aidat.svg", "img/aile.svg", "img/akraba.svg", "img/alti.svg", "img/ama.svg", "img/amca.svg", "img/anahtar.svg", "img/anne.svg", "img/araba.svg", "img/ari.svg", "img/arkadas.svg", "img/asansor.svg", "img/aslan.svg", "img/at.svg", "img/ates.svg", "img/ay.svg", "img/ayak.svg", "img/ayakkabi.svg", "img/ayi.svg", "img/baba.svg", "img/bakkal.svg", "img/bal.svg", "img/balik.svg", "img/banka.svg", "img/banyo.svg", "img/bardak.svg", "img/bas.svg", "img/basin.svg", "img/bebek.svg", "img/beden.svg", "img/bekar.svg", "img/bekle.svg", "img/belki.svg", "img/ben.svg", "img/benzin.svg", "img/bes.svg", "img/beyaz.svg", "img/biber.svg", "img/bicak.svg", "img/bilet.svg", "img/bin.svg", "img/bir.svg", "img/bira.svg", "img/biraz.svg", "img/biz.svg", "img/bocek.svg", "img/borc.svg", "img/bugun.svg", "img/bulut.svg", "img/burada.svg", "img/burun.svg", "img/buyuk.svg", "img/buyurun.svg", "img/buz.svg", "img/cadde.svg", "img/canta.svg", "img/carsamba.svg", "img/catal.svg", "img/cay.svg", "img/ceket.svg", "img/cicek.svg", "img/cocuk.svg", "img/cok.svg", "img/cop.svg", "img/corap.svg", "img/corba.svg", "img/cuma.svg", "img/cumartesi.svg", "img/cunku.svg", "img/dag.svg", "img/daha.svg", "img/dakika.svg", "img/dede.svg", "img/deniz.svg", "img/dis.svg", "img/dogum.svg", "img/doktor.svg", "img/dokuz.svg", "img/dolap.svg", "img/dolmus.svg", "img/domates.svg", "img/dondurma.svg", "img/dort.svg", "img/dugun.svg", "img/dun.svg", "img/durak.svg", "img/duz.svg", "img/eczane.svg", "img/ekmek.svg", "img/el.svg", "img/elbise.svg", "img/elma.svg", "img/es.svg", "img/eski.svg", "img/et.svg", "img/etek.svg", "img/ev.svg", "img/evet.svg", "img/evli.svg", "img/fare.svg", "img/fatura.svg", "img/firin.svg", "img/fiyat.svg", "img/garson.svg", "img/gazoz.svg", "img/gece.svg", "img/gel.svg", "img/gol.svg", "img/gomlek.svg", "img/gorusuruz.svg", "img/goz.svg", "img/gri.svg", "img/gun.svg", "img/gunaydin.svg", "img/gunes.svg", "img/guzel.svg", "img/hafta.svg", "img/hali.svg", "img/hangi.svg", "img/hasta.svg", "img/hastane.svg", "img/hava.svg", "img/hayir.svg", "img/hayirli.svg", "img/hayvan.svg", "img/hediye.svg", "img/hemen.svg", "img/hep.svg", "img/her.svg", "img/hesap.svg", "img/hic.svg", "img/hocam.svg", "img/hosca.svg", "img/iki.svg", "img/ilac.svg", "img/indirim.svg", "img/inek.svg", "img/insallah.svg", "img/is.svg", "img/isim.svg", "img/iyi.svg", "img/iyiadj.svg", "img/kac.svg", "img/kadin.svg", "img/kahvalti.svg", "img/kahve.svg", "img/kahverengi.svg", "img/kalp.svg", "img/kapali.svg", "img/kapi.svg", "img/kapizili.svg", "img/kar.svg", "img/kardes.svg", "img/karin.svg", "img/kasa.svg", "img/kasik.svg", "img/keci.svg", "img/kedi.svg", "img/kelebek.svg", "img/kilo.svg", "img/kim.svg", "img/kira.svg", "img/kirmizi.svg", "img/kitap.svg", "img/kiz.svg", "img/koca.svg", "img/kombi.svg", "img/komsu.svg", "img/kopek.svg", "img/kopru.svg", "img/kotu.svg", "img/koyun.svg", "img/kredi.svg", "img/kucuk.svg", "img/kulak.svg", "img/kum.svg", "img/kus.svg", "img/kusura.svg", "img/kuzu.svg", "img/lezzetli.svg", "img/lutfen.svg", "img/maas.svg", "img/magaza.svg", "img/masa.svg", "img/masallah.svg", "img/mavi.svg", "img/maymun.svg", "img/menu.svg", "img/merdiven.svg", "img/merhaba.svg", "img/meyve.svg", "img/mont.svg", "img/mor.svg", "img/mudur.svg", "img/musluk.svg", "img/mutfak.svg", "img/nakit.svg", "img/nasil.svg", "img/ne.svg", "img/neden.svg", "img/nehir.svg", "img/nerede.svg", "img/nine.svg", "img/o.svg", "img/oda.svg", "img/on.svg", "img/onlar.svg", "img/orada.svg", "img/orman.svg", "img/otobus.svg", "img/p00.svg", "img/p01.svg", "img/p02.svg", "img/p03.svg", "img/p04.svg", "img/p05.svg", "img/p06.svg", "img/p07.svg", "img/p08.svg", "img/p09.svg", "img/p10.svg", "img/p11.svg", "img/p12.svg", "img/p13.svg", "img/p14.svg", "img/p15.svg", "img/p16.svg", "img/p17.svg", "img/p18.svg", "img/p19.svg", "img/p20.svg", "img/p21.svg", "img/p22.svg", "img/p23.svg", "img/p24.svg", "img/p25.svg", "img/p26.svg", "img/p27.svg", "img/p28.svg", "img/p29.svg", "img/p30.svg", "img/p31.svg", "img/p32.svg", "img/p33.svg", "img/p34.svg", "img/p35.svg", "img/p36.svg", "img/p37.svg", "img/p38.svg", "img/p39.svg", "img/p40.svg", "img/p41.svg", "img/p42.svg", "img/p43.svg", "img/p44.svg", "img/p45.svg", "img/p46.svg", "img/p47.svg", "img/p48.svg", "img/p49.svg", "img/p50.svg", "img/p51.svg", "img/p52.svg", "img/p53.svg", "img/p54.svg", "img/p55.svg", "img/p56.svg", "img/p57.svg", "img/p58.svg", "img/p59.svg", "img/p60.svg", "img/p61.svg", "img/p62.svg", "img/p63.svg", "img/p64.svg", "img/p65.svg", "img/p66.svg", "img/p67.svg", "img/p68.svg", "img/p69.svg", "img/p70.svg", "img/p71.svg", "img/p72.svg", "img/p73.svg", "img/p74.svg", "img/p75.svg", "img/p76.svg", "img/p77.svg", "img/p78.svg", "img/p79.svg", "img/p80.svg", "img/p81.svg", "img/p82.svg", "img/p83.svg", "img/p84.svg", "img/p85.svg", "img/p86.svg", "img/p87.svg", "img/p88.svg", "img/p89.svg", "img/p90.svg", "img/p91.svg", "img/p92.svg", "img/p93.svg", "img/p94.svg", "img/p95.svg", "img/p96.svg", "img/p97.svg", "img/p98.svg", "img/p99.svg", "img/pahali.svg", "img/pantolon.svg", "img/para.svg", "img/pardon.svg", "img/park.svg", "img/patron.svg", "img/pazar.svg", "img/pazartesi.svg", "img/pembe.svg", "img/pencere.svg", "img/perde.svg", "img/persembe.svg", "img/peynir.svg", "img/pirinc.svg", "img/plaj.svg", "img/polis.svg", "img/poset.svg", "img/postane.svg", "img/renk.svg", "img/rica.svg", "img/ruzgar.svg", "img/saat.svg", "img/sabah.svg", "img/sag.svg", "img/salatalik.svg", "img/sali.svg", "img/sandalye.svg", "img/sandik.svg", "img/sapka.svg", "img/sarap.svg", "img/saray.svg", "img/sari.svg", "img/seker.svg", "img/sekiz.svg", "img/sen.svg", "img/sicak.svg", "img/simdi.svg", "img/siyah.svg", "img/siz.svg", "img/soguk.svg", "img/sokak.svg", "img/sol.svg", "img/sonra.svg", "img/su.svg", "img/sut.svg", "img/tabak.svg", "img/taksi.svg", "img/tamam.svg", "img/tas.svg", "img/tatil.svg", "img/tavsan.svg", "img/tavuk.svg", "img/taze.svg", "img/tesekkur.svg", "img/teyze.svg", "img/toplanti.svg", "img/torun.svg", "img/uc.svg", "img/ucuz.svg", "img/utu.svg", "img/uyku.svg", "img/ve.svg", "img/yag.svg", "img/yagmur.svg", "img/yarim.svg", "img/yarin.svg", "img/yas.svg", "img/yatak.svg", "img/yedi.svg", "img/yemek.svg", "img/yeni.svg", "img/yesil.svg", "img/yilan.svg", "img/yok.svg", "img/yol.svg", "img/yonetici.svg", "img/yorgun.svg", "img/yumurta.svg", "img/yuz.svg", "img/zam.svg", "img/zaman.svg", "img/zeytin.svg"];
var CACHE = 'koshka-' + VER;

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE) }).then(function () { return self.skipWaiting() }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('koshka-') === 0 && k !== CACHE }).map(function (k) { return caches.delete(k) }));
  }).then(function () { return self.clients.claim() }).then(function () {
    // рисунки — в фоне, по одному: ошибка одного не мешает остальным
    return caches.open(CACHE).then(function (c) {
      return IMGS.reduce(function (p, u) {
        return p.then(function () { return c.match(u).then(function (hit) { return hit || c.add(u).catch(function () {}) }) });
      }, Promise.resolve());
    });
  }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var page = req.mode === 'navigate' || url.pathname.endsWith('/index.html');
  if (page) {
    // страница — сначала из сети (свежая версия), без сети — из кэша
    e.respondWith(fetch(req).then(function (r) {
      var copy = r.clone();
      caches.open(CACHE).then(function (c) { c.put('index.html', copy) });
      return r;
    }).catch(function () { return caches.match('index.html') }));
    return;
  }
  // остальное (рисунки, значки, шрифт) — из кэша, иначе из сети с сохранением
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (r) {
      if (r.ok || r.type === 'opaque') { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy) }) }
      return r;
    });
  }));
});
