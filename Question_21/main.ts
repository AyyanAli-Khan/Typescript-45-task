const car: {company:string, engine:string, model:string, year:number} ={
    company:"Toyota",
    engine:"2.8 liter diesel engine",
    model:"Fortuner",
    year:2017
}

let {company , model , year} = car;

console.log(`The ${year} ${company} ${model} offers both durability and style in one sleek package.`);

