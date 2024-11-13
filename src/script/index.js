



// setInterval(()=>{
//     return console.log(new Date().getSeconds())
// },1000)

const timeContainer = document.querySelector('.time')
const pageLinkContainer = document.querySelector('.page-links')

const getTimer = ()=>{
    let time ;
   setInterval(()=>{ time = String(new Date().getHours()) +":" + String(new Date().getMinutes()<10? "0"+new Date().getMinutes() : new Date().getMinutes() )+":" + String(new Date().getSeconds()) },1000) 
    return time
}
const displayDate = ()=>{
    let time = getTimer()
    
    timeContainer.innerText = time

}



// making the links

const pageLinks = [
    "सबै कुरा",
    "मुख्य कुरा",

"जनताका कुरा",
"नेताका कुरा",
"पैसाका कुरा",
 "किलो सुन प्रकरण",
"सिधाकुरा विशेष"
]


const dynamicLinks = ()=>{
    const linklists = pageLinks.map((items)=>(
        `<li><a href="#">${items}</a></li>`
    )).join('')
     pageLinkContainer.innerHTML = linklists
}










// making the vertical cards

const cardsDetails = [
    { id: 1, category: "religious", title: "ADD YOUR TITLE.", timeAdded: "a day ago.", imageSource: "../assets/images/vone.png" },
    { id: 2, category: "movies", title: "ADD YOUR TITLE.", timeAdded: "a day ago.", imageSource: "../assets/images/vtwo.png" },
    { id: 3, category: "sports", title: "ADD YOUR TITLE.", timeAdded: "a day ago.", imageSource: "../assets/images/vthree.jpg" },
    { id: 4, category: "finance", title: "ADD YOUR TITLE.", timeAdded: "a day ago.", imageSource: "../assets/images/vfour.jpg" }
  ];
  
  const vImageContainer = document.querySelector('.add-vimages');
  
  
  const makeVerticalCards = () => {
    const cardDetails = cardsDetails.map((item) => (
      `<div class="verticalCard relative w-[320px] overflow-hidden h-[500px]">
        <a href="#"><img src="${item.imageSource}" class="w-full object-cover object-center hover:scale-105 transition-all duration-500 h-full" /></a>
        <div style="transform: translateY(100%);" class="w-full transition-all ease-linear duration-500 pop-up p-2 pt-4 overflow-hidden absolute bottom-0 backdrop-blur-md rounded-t-lg h-[200px]">
          <a class="p-2 bg-[#29be53] text-sm text-white rounded-lg" href="#">${item.category}</a>
          <a href="#"><h1 class="text-wrap pt-5 text-justify font-bold text-xl text-white leading-[18px]">${item.title}</h1></a>
          <p class="pt-4 flex gap-2 items-center text-gray-500"><i class="fa-regular text-gray-500 fa-clock"></i> <span>${item.timeAdded}</span></p>
        </div>
      </div>`
    )).join(''); 
  
    
    vImageContainer.innerHTML = cardDetails;
  
    
    document.querySelectorAll('.verticalCard').forEach((card) => {
      const image = card.querySelector('img');
      const popup = card.querySelector('.pop-up');
  
      const showPopUp = () => {
        popup.style.transform = "translateY(0)";
      };
  
      const hidePopUp = () => {
        popup.style.transform = "translateY(100%)";
      };
  
      image.addEventListener('mouseenter', showPopUp);
      image.addEventListener('mouseleave', hidePopUp);
      popup.addEventListener('mouseenter', showPopUp);
      popup.addEventListener('mouseleave', hidePopUp);
    });
  };
  
  
  

  window.addEventListener('DOMContentLoaded',()=>{
    dynamicLinks()
    makeVerticalCards();
  })






