

document.getElementById("red_").addEventListener("click",()=>{
  showpen.src = "รูป/logo_OG.png";

});




document.getElementById("black_").addEventListener("click",()=>{
  showpen.src = "รูป/logo_BW.png";

});


document.getElementById("green_").addEventListener("click",()=>{
  showpen.src = "รูป/soft.png";

});




document.getElementById("blue_").addEventListener("click",()=>{
  showpen.src = "รูป/logo_BW.png";

});










const showpen = document.getElementById("img_pro")

const gelInkPen = "ไส้ภายในจะบรรจุหมึกคล้ายหมึกปากกาลูกลื่นผสมตัวทำละลายด้วยน้ำมันให้มีความเหนียวข้นน้อยลงจนคล้ายเจล"

const PigmentInk ="เป็นปากกาที่ถูกพัฒนาต่อจากปากกาคอแร้ง ใช้งานง่ายและสะดวกมากยิ่งขึ้น แต่ยังคงมีหัวปากกาที่เป็นปลายแหลมและยังใช้น้ำหมึกอยู่แต่ไม่ต้องจุ่มหมึกก่อนเขียนแบบปากกาคอแร้ง"

const FountainPen ="คือหมึกที่สามารถทนต่อน้ำได้เมื่อถูกน้ำหรือนำไปแช่น้ำหมึกที่เกาะอยู่บนกระดาษจะคงเดิมไม่เลอะหรือซึมออกจากกระดาษ"

const showDesc = document.getElementById("la_b") 





const test = (input) =>{

  console.log(input)
}
/* การเขียน เรียกใช่ฟังก์ชันไปเลย หรือว่าสร้างฟังก์ชันได้เลย
 document.getElementById("btn_Custom_1").addEventListener("click",test);*/


document.getElementById("btn_Custom_1").addEventListener("click",()=>{
  showDesc.innerHTML= gelInkPen

});


document.getElementById("btn_Custom_2").addEventListener("click",()=>{
  showDesc.innerHTML =PigmentInk


});


document.getElementById("btn_Custom_3").addEventListener("click",()=>{
 showDesc.innerHTML = FountainPen


});

document.getElementById("btn_Custom_3").addEventListener("click",);

