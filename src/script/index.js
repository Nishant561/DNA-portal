



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

dynamicLinks()








