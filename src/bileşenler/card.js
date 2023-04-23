import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardCreator = document.createElement("div");
  cardCreator.classList.add("card");
  const divCreator = document.createElement("div");
  divCreator.classList.add("headline");
  divCreator.textContent = makale.anabaslik;
  const divCreator2 = document.createElement("div");
  divCreator2.classList.add("author");
  const imgContainerCreator = document.createElement("div");
  imgContainerCreator.classList.add("img-container");
  const imgCreator = document.createElement("img");
  imgCreator.setAttribute("src", makale.yazarFoto)
  const spanCreator = document.createElement("span");
  spanCreator.textContent = `${makale.yazarAdi} tarafından`;

  cardCreator.append(divCreator);
  cardCreator.append(divCreator2);
  divCreator2.append(imgContainerCreator);
  imgContainerCreator.append(imgCreator);
  divCreator2.append(spanCreator);


  // cardCreator.addEventListener("click", (event) => {
  //   const clickedElement = event.target;
  //   let search = clickedElement.classList;
  //   let consoleElement = clickedElement;

  //   while (!search.contains("card")) {
  //     search = clickedElement.parentElement.classList;
  //     consoleElement = consoleElement.parentElement;
  //   };

  //   console.log(consoleElement.textContent)

  //   cardCreator.addEventListener("click", (event) => {
  //     let clickedElement = event.target;
  //     let search = clickedElement.classList;

    
  //     while (!search.contains("card")) {
  //       search = clickedElement.parentElement.classList;
  //       clickedElement = clickedElement.parentElement;
  //     };
    
  //     console.log(clickedElement.querySelector(".headline").textContent);

  // })

  cardCreator.onclick = function(event){
  
    console.log(this.querySelector(".headline").textContent);

}

  return cardCreator;
}

// console.log(Card({"id":"1e4d8724-5973-4b5b-84d9-a30a3c5adb70","anabaslik":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","yazarFoto":"https://picsum.photos/514","yazarAdi":"SIR RUFF'N'STUFF"}))

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const cardApi = axios.get("http://localhost:5001/api/makaleler");

  cardApi.then((response) => {
    const data = response.data.makaleler;
    for (let i in data) {
      for (let x of data[i]) {
        document.querySelector(secici).append(Card(x));
      }
    }
  });
}

export { Card, cardEkleyici }
