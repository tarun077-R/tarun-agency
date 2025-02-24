function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1", {
    duration: 0.6,
    y: 150,
    stagger: 0.25,
    delay: 0.5
})
tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function () {
            if (grow < 100) {

                grow++
                h5timer.innerHTML = grow++
            } else {
                h5timer.innerHTML = grow

            }
        }, 35)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader", {
    opacity: 0,
    duration:0.2,

    delay: 2.3
})
tl.from("#page1",{
    y:1600,
    delay:0.2,
    opacity:0
})
tl.to("#loader",{
    display:"none"
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
y:140,
stagger:0.2
})
tl.from("#nav",{
opacity:0,
duration:0.6
})
}


function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation()
cursorAnimation()