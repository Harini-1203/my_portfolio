const slideele=document.querySelectorAll('.scroll');
const slideelex=document.querySelectorAll('.scrollx');
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }

    });
});

slideele.forEach((ele)=>{
    
    observer.observe(ele)
})
slideelex.forEach((ele)=>{
    observer.observe(ele);
})


const nav_items=document.querySelectorAll('.nav-items div');
console.log(nav_items);
nav_items.forEach((item)=>{
    console.log(item);
    item.addEventListener('click',()=>{
        console.log(item);
        item.classList.add('hover-class');
        setTimeout(()=>{
            item.classList.remove('hover-class');
        },200);
        
    })
})

//button
var myResumeButton=document.querySelector('.main-left button');

myResumeButton.addEventListener('click',()=>{
   
        myResumeButton.classList.add('hover-class');
        setTimeout(()=>{
            myResumeButton.classList.remove('hover-class');
        },200);
})