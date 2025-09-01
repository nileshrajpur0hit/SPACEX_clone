// code to make menu in mobile screen


function menu(){
    let menu = document.querySelector(".menu-items")
    document.querySelector(".menu").addEventListener("click",()=>{
        if(menu.style.display === "block"){
            menu.style.display = "none";
        }else{
            menu.style.display = "block";
        }
    })

    document.querySelector(".exit").addEventListener("click",()=>{
        menu.style.display = "none";
    })
     
}

 menu();
 
// this is for the navbar , auto hide and and auto visible
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if(window.scrollY>500){
            if (window.scrollY > lastScrollY) {
                navbar.classList.add('hide');
            } else {
                navbar.classList.remove('hide');
            }
        }
        lastScrollY = window.scrollY;
    });

// and this part is for the timer in the top 1st main

 

let min= Math.floor(Math.random()*30);

function secIncreaser(){
    let time= 0;
    setInterval(() => {
        time++;
        document.querySelector(".new-time").textContent= `T:12.${min}:${time}`;
        console.log(time);
        
    }, 1000);
}
 
secIncreaser()

// btn effects

document.querySelectorAll("button").forEach((btn)=>{
    let icon=document.querySelectorAll("i");

    btn.addEventListener("click", ()=> {
        gsap.to("button i",{
            x:100,
            duration:.3
        })
        gsap.to("button i",{
            x:0,
            duration:.3,
            delay:.3
        })

        
    })
    btn.addEventListener("mouseleave", ()=> {
        gsap.from("button i",{
            x:-50,
            duration:.3,
            opacity:0
        })
    })
})

// GSAP animations on the texts

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("video").forEach((video) => {
      ScrollTrigger.create({
        trigger: video,
        start: "top 90%",  
        end: "bottom 0%",   
        onEnter: () => video.play(),
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause()
      });
    });

 
gsap.from(".main .hero-content",{
    y:100,
    duration:1,
    opacity:0,
})
 
gsap.from(".mars-content",{
    y:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".mars-content",
        scroller:"body",
        // markers:true,
        start:"-60% 80%",
        end:"10% 80%",
        scrub:3
        
    }
}) 
gsap.from(".mars-dub",{
    y:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".mars-dub",
        scroller:"body",
        // markers:true,
        start:"-60% 80%",
        end:"10% 80%",
        scrub:3
        
    }
}) 

gsap.from(".main3-content",{
    y:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".main3-content",
        scroller:"body",
        // markers:true,
        start:"-60% 80%",
        end:"10% 80%",
        scrub:3
        
    }
})

gsap.from(".main4-content",{
    y:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".main4-content",
        scroller:"body",
        // markers:true,
        start:"-40% 80%",
        end:"10% 80%",
        scrub:3
        
    }
}) 
gsap.from(".main5-content",{
    y:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".main5-content",
        scroller:"body",
        // markers:true,
        start:"-40% 80%",
        end:"10% 80%",
        scrub:3
        
    }
})

gsap.from(".main6-content",{
    y:100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".main6-content",
        scroller:"body",
        // markers:true,
        start:"-40% 80%",
        end:"10% 80%",
        scrub:3
        
    }
}) 