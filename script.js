let loginForm = document.querySelector(".form-container");
let register = document.querySelector(".register");
let closeIcon = document.querySelectorAll(".fa-x");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let logo = document.querySelector(".logo");
let lis = document.querySelector(".lis");
let htags = document.querySelectorAll("#h1");
let searchBtn = document.querySelector(".search button");
let input = document.querySelector(".search input");
let loader = document.querySelector(".loader");
let city = document.querySelector(".cityName");
let URL = 'https://api.postalpincode.in/pincode/';
let isVis = false;
let isVis2 = false;
let getData =async() =>{
   let pincode = parseInt(input.value);
   if(pincode >=0) {
            try{
              loader.style.display = "flex";
              let newURL =`${URL}${pincode}`;
              let fetchURL =  await fetch(newURL);
              let data = await fetchURL.json();
              if(data[0].Status === "Success") {
               if(city.childElementCount>0){
                  city.innerHTML = "";
               }
               let PO = data[0].PostOffice;
               PO.forEach((po)=>{
                  city.style.display = "block";
                  let newOp = document.createElement("option");
                  newOp.innerText = po.Name;
                  newOp.value = po.Name;
                  city.appendChild(newOp);
               })
              }else{
               alert("pincode is not valid");
               input.value = "";
               return;
              }
            }
            catch(error) {
              console.log(error);
            }
            finally{
              loader.style.display = "none";
            }
   } else{
      alert("enter a valid pincode");
   }
   input.value="";
}
window.addEventListener("keypress",(e)=>{
   if(e.key === "Enter") {
      getData();
   }
})
searchBtn.addEventListener("click",()=>{
   getData();
})
window.onload =()=>{
   logo.style.animation = "nav 800ms ease-out";
   logo.style.animationDelay = "400ms"
   lis.style.animation = "lis 1s ease-out"
   lis.style.animationDelay = "1200ms";
   htags.forEach((ele)=>{
      ele.style.animation = "text 1s ease-in";
      ele.style.animationDelay = "1200ms"
   })
   setTimeout(()=>{
      logo.style.opacity = 1;
   },1200)
   setTimeout(()=>{
      lis.style.opacity = 1;
      htags.forEach((ele)=>{
         ele.style.opacity = 1;
      })
   },2200);
}
closeIcon.forEach((ele)=>{
   ele.addEventListener("click",()=>{
      register.style.display = "none";
      isVis2 = false;
      loginForm.style.display = "none";
      isVis = false;
   })
})
let body = document.querySelector("body");
window.addEventListener("click",(e)=>{
      if(e.target.innerText === "Sign In") {
         if(isVis == false) {
           loginForm.style.display = "block";
           loginForm.style.animation = "fadein 180ms linear"
           isVis = true;
           register.style.display = "none";
           isVis2 = false;
      }else{
            loginForm.style.display = "none";
           isVis = false;
            body.style.filter = "brightness(1)";
         }
      }
});
window.addEventListener("click",(e)=>{
      if(e.target.innerText === "Sign Up") {
         if(isVis2 == false) {
           register.style.display = "block";
           register.style.animation = "fadein 180ms linear";
           isVis2 = true;
           loginForm.style.display = "none";
           isVis = false;
           body.style.filter = "brightness(0.9)";
      }else{
            register.style.display = "none";
           isVis2 = false;
            body.style.filter = "brightness(1)";
         }
      }
   });
link1.addEventListener("click",()=>{
   register.style.display = "block";
   register.style.animation = "fadein 180ms linear";
   isVis2 = true;
   loginForm.style.display = "none";
   isVis = false;
   body.style.filter = "brightness(0.9)";
});
link2.addEventListener("click",()=>{
   loginForm.style.display = "block";
   loginForm.style.animation = "fadein 180ms linear"
   isVis = true;
   register.style.display = "none";
   isVis2 = false;
});