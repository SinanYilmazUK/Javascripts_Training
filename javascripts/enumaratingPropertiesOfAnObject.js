const circle ={
    radius : 1,
    draw(){
        console.log('draw');
    }
}

for( let key in circle){
    console.log(key)
}
//radius
//draw

const circle2 ={
    radius : 1,
    draw(){
        console.log('draw');
    }
}

for( let key in circle2){
    console.log(key, circle2[key])
}

const circle3 ={
    radius : 1,
    draw(){
        console.log('draw');
    }
}

for( let key of Object.keys(circle3)){ 
        console.log(key)   
}
//radius
//draw            

for (let entry of Object.entries(circle3)){
        console.log(entry)
}
//['radius', 1]
// ['draw', ƒ]

if('radius' in circle3) console.log('Yes') //yes
if('color' in circle3) console.log('Yes') //.....