// GSAP animations
var tl = gsap.timeline()
tl.to(".poptext",{y:"0%",duration:1,stagger:0.5,ease:'Power2.easeInout'})
tl.to('.blackbg',{opacity:"0",duration:1.5,ease:'Power5.easeout'})
tl.to('.main',{opacity:1,duration:0.1},"-=0.1")
tl.to('.form-textarea',{opacity:1,duration:0.1},"-=0.1")
tl.to('.sec1-quote',{opacity:1,duration:1})
tl.to('.img-container',{opacity:1,duration:1},"=-1")
tl.to('.blackbg',{visibility:"hidden",duration:0})
// Scrolling effects
