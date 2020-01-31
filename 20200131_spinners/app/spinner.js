const loader = '⡇⡏⡗⡧⣇⢸⣸⢼⢺⢹';
let i = 0;
function load(){
    console.clear();
    console.log(loader[i]);
    i = (i + 1) % loader.length;
}

setInterval(load, 1000);