const sliderContainer=document.querySelector('.sliderContainer');
const navitems=document.querySelectorAll('.nav__items');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: '$119',
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
      title: "Air Jordan",
      price: '$149',
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
      price: '$109',
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
      price: '$129',
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
      price: '$99',
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

  let chooseProduct=products[0];
const productimg=document.querySelector('.product__img');
const producttext=document.querySelector('.product__text');
const productprice=document.querySelector('.product__price');
const productcolors=document.querySelectorAll('.color');
const productsizes=document.querySelectorAll('.size');

const button=document.querySelector(".product__btn")
const payment=document.querySelector(".payment")
const close=document.querySelector(".close")



navitems.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        sliderContainer.style.transform=`translateX(-${i*100}vw)`;
        chooseProduct=products[i];
        producttext.textContent=chooseProduct.title;
        productprice.textContent=chooseProduct.price;
        productimg.src=chooseProduct.colors[0].img;

        productcolors.forEach((color,j)=>{
            color.style.backgroundColor=chooseProduct.colors[j].code;
        }
        )
    })
})

productcolors.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        productimg.src=chooseProduct.colors[i].img;
    })
})

productsizes.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        productsizes.forEach((size,i)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        })
        item.style.backgroundColor="black";
        item.style.color="white";
    })
})


button.addEventListener("click",()=>{
    payment.style.display="flex";
})

close.addEventListener("click",()=>{
    payment.style.display="none";
})