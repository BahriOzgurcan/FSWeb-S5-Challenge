const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const divHeader = document.createElement("div");
  const spanHeader = document.createElement("span");
  const spanH1 = document.createElement("h1");
  const spanHeader2 = document.createElement("span");

  
  divHeader.classList.add("header");
  spanHeader.classList.add("date");
  spanHeader.textContent = tarih;
  spanHeader2.classList.add("temp");
  spanHeader2.textContent = yazi;
  spanH1.textContent = baslik;
  
  divHeader.appendChild(spanHeader);
  divHeader.appendChild(spanH1);
  divHeader.appendChild(spanHeader2);

  return divHeader
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
    const haber = Header("Spotify, Türkiye’nin en popüler şarkılarını açıkladı!", "22/04/2013", "Spotify, dünyanın en popüler çevrimiçi müzik servisleri arasında yer alıyor. Abonelik bazlı servis, milyonlarca şarkıyı kütüphanesine barındırıyor. Tabii bu şarkılar da on binlerce sanatçı tarafından yayınlanıyor. Peki 14 Nisan ile 20 Nisan tarihleri aralığında Spotify Türkiye’de en çok dinlenen şarkılar neler? İşte liste…");

    document.querySelector(secici).appendChild(haber);

}

export { Header, headerEkleyici }
