let weapper=document.querySelector('.sliderWeapper');
let menuItems=document.querySelectorAll('.menuItem');
let products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: 69,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 99,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 55,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 166,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
let choosenProduct= products[0];
let currenProductImg=document.querySelector('.productImg');
let currenProductTitle=document.querySelector('.productTitle');
let currenProductPrice=document.querySelector('.productPrice');
let currenProductcolors=document.querySelectorAll('.color');
let currenProductsizes=document.querySelectorAll('.size');
let productButton=document.querySelector('.productButton');
let payment=document.querySelector('.payment');
let closeButoon=document.querySelector('.closeButoon');


menuItems.forEach((item,index)=>{
item.addEventListener("click",()=>{
  // change the current slide
    weapper.style.transform=`translateX(${-100* index}vw)`;
    // change the choosen product
    choosenProduct=products[index];
    // change texes of currentProduct
    currenProductTitle.textContent=choosenProduct.title;
    currenProductPrice.textContent="$" + choosenProduct.price;
    currenProductImg.src=choosenProduct.colors[0].img;
    // change color  to shoose 
     currenProductcolors.forEach((color,index)=>{
      color.style.backgroundColor=choosenProduct.colors[index].code;
    })
  });
}); 
// change to new shoose
currenProductcolors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currenProductImg.src=choosenProduct.colors[index].img;
  });
});
currenProductsizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
 currenProductsizes.forEach((size)=>{
       size.style.backgroundColor="white";
     size.style.color="black";   
 });   
    size.style.backgroundColor="black";
    size.style.color="white";
     });
});
productButton.addEventListener("click",()=>{
    payment.style.display='flex';
})
closeButoon.addEventListener("click",()=>{
  payment.style.display='none';
})