
let toss=new Promise((resolve,reject)=>{
  let rand=Math.floor(Math.random()*2);
  console.log(rand);
  let para=document.getElementById("para");
    console.log(para);
    let image=document.getElementById("image");
    console.log(image);

  if(rand==0){
    resolve(`${rand} - Head`);
    para.innerHTML="head";
    image.src="images/head.jpeg"
    image.style.transform="rotateX(360deg)"
  }
  else{
    reject(`${rand} - Tail`)
    para.innerHTML="tail";
    image.src="images/tail.jpeg"
    image.style.transform="rotateY(0deg)"
  }
})

async function check(){
   try{
    let res=await toss;
    console.log(res);
   
   }
   catch(result){
    console.log(result);
   }
}

check()