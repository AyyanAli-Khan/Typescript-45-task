let transportation: string[]= ["bike","car","truck"];

let  statements: string[]= ["I like to ride","I love to drive","I hate to drive"];

let len:number = transportation.length

for (let index: number = 0; index <len; index++) {
     console.log(` ${statements[index]} ${transportation[index]}`)
}