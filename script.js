const data = {
    view_src:null,
    name:null,
    price:null,
    img_eth:"./logo/ether.png",
    img_matic:"./logo/matic.png",
    img_sol:"./logo/sol.png",
    img_btc:"./logo/btc.png",
}

const heightAdjuster = () => {
    const grid = document.querySelector("#content");
    const particle = document.querySelector("body");
    const rectContent = grid.getBoundingClientRect().height + grid.getBoundingClientRect().top;
    const rectParticle = particle.getBoundingClientRect().height + grid.getBoundingClientRect().top;

        // body.setAttribute("height", `calc(${rectContent}px + 2em);`);
        // document.body.style.height = rectContent  +80+ 'px';    
        particle.setAttribute("height", `${rectParticle  +80}+ 'px'`);
    // }
}

// function openInNewTab(url) {
//     window.open(url, '_blank').focus();
//    }

const getNow = () =>{
    // var x = document.getElementById("myLI").parentElement.nodeName;
    // document.getElementById("demo").innerHTML = x;

    let x = document.querySelector("#content div img");
    data.view_src = x.src
    console.log(x.src);
    console.log(data)
}
