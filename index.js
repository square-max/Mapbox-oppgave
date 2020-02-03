const nav = document.querySelector("#nav");

mapboxgl.accessToken = `pk.eyJ1IjoicGVkZXJ3aW5nZSIsImEiOiJjazV4dDQ0eDIxMTF4M25wb2Z1Z2xiN2duIn0.UrLu9phxiVJeiMHD201ewA`;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pederwinge/ck56phhxt0isi1cpgiem8r9ma',
    zoom: 1,
    pitch:17,
    rotate:360,
    center: [18.109361,42.640872]

});



nav.onclick = (evt) => {
    
    const lng = Number(evt.target.dataset.lng);
    const lat = Number(evt.target.dataset.lat);
    
    const point = [lng, lat];
    
    map.flyTo({
        center: point,
        zoom: 16,
        bearing: 0,
        pitch: 50,
        duration: 10000
    });

    setTimeout( () => {
        map.easeTo({
            center: point,
            zoom: 19,
            bearing: 180,
            pitch: 50,
            duration: 7000
        })
    }, 10000);

    

    map.isRotating();
    
}

map.on("load", () => {
    //rotateCamera(0);
}) 

function rotateCamera(timestamp) {
    console.log(timestamp);
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    map.rotateTo((timestamp / 100) % 360, { duration: 0 });
    // Request the next frame of the animation.
    if(timestamp < 30000)
        requestAnimationFrame(rotateCamera);
}

map.on('flystart', function(){
    console.log("FLYTUR STARTER");
});

map.on("flyend", function(){
    console.log("FLYTUR FERDIG");
    // rotateCamera(0);
    
});

map.on("moveend", function() {
    map.fire("flyend");
});



buttons.onclick = (evt) => {
    
    const stil = evt.target.dataset.stil;
    map.setStyle("mapbox://styles/" + stil);

 
}

var myMusic = document.getElementById("myAudio"); 

function play() {
    myMusic.play();
    }
    
    function pause() {
    myMusic.pause();
    }
    var fjerne = document.querySelector("#bilde");

    map.on("load", () =>{
        gsap.from("#bilde", {
            duration: 1,
            x: 250,
        delay:3,
    });
    gsap.to("#boble", {
        duration: 2,
        opacity: 0.8,
        delay:4,
    })

    })

    bilde.onclick = () => {
        gsap.to("#bilde", {
            duration: 2,
            x: 250,
      
    })
    
    gsap.to("#boble", {
        duration: 1,
        opacity: 0,
       
    })}; 


    

    
    