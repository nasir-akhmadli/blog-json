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
             </div>
            `
        }
    }

   catch(hata) {
    console.log(`Xeta firladildi: ${hata}`)
   }
}