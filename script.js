const productDiv = document.getElementById("product")

window.onload = getAllProducts
 async function getAllProducts(){
    const unvan ="products.json"

    try{
        const komputerinAnlamadigiData = await fetch(unvan);
        //  '[]
        const komputerinAnladigiData = await komputerinAnlamadigiData.json();

        for(let i=0; i<komputerinAnladigiData.length; i++) {
            // i = i+1 
            // i+=1
            productDiv.innerHTML += `
            
            <div class="product">
              <div class="images">
               <img src="${komputerinAnladigiData[i].Foto}">
              </div>
             <h2> ${komputerinAnladigiData[i].Mekan} </h2>
             <p> ${komputerinAnladigiData[i].Qiymet} </p>
             <p> ${komputerinAnladigiData[i].Sahesi} </p>
             <p> ${komputerinAnladigiData[i].Otaq} </p>
             <p> ${komputerinAnladigiData[i].chixarish} </p>
             <button>Elanı irəli çək</button>
             <button onclick="Toggle1()" id="btnh1" class="btnn"><i class="fas fa-heart"></i></Button>
             <h5>Yeni Siyahı</h5>
             </div>
            `
        }
    }

   catch(hata) {
    console.log(`Xeta firladildi: ${hata}`)
   }
}
// const btnvar1 = document.getElementById('btnh1');
// function Toggle1(){
//     if (btnvar1.style.color =="red") {
//         btnvar1.style.color = "grey"
//     }
//     else{
//         btnvar1.style.color = "red"
//     }
// }