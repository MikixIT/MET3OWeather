window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        })

    } else {
        h1.textContent = 'Hey we gotta a Problem, Contact me michaeltorrespa@gmail.com'
        return
    }
});