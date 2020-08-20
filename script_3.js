let stairs = prompt("Hello, welcome to the super pyramid ! How many levels do you want ?")


function pyramid(stairs) {
    let space = (stairs -= 1);
    let line = 1;

    for(let stair =1; stair <= stairs; stair++) {
        console.log(" ".repeat(space)+"#".repeat(line));
        space --;
        line ++;
    }
}

pyramid(stairs)


