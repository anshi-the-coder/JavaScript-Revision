let anshikaBioData= {
"name": "Anshika Gangwar",
"age": 21,
"likes":["mango","noodles","pizza"],
"parent":{
    "mummy":{
        "name":"Rajo",
        "age":43,
    },
    "papa":{
        "name":"Umesh",
        "age":41,
    }
}
}
console.log(anshikaBioData.parent.papa.age)
for(let key in anshikaBioData){
    console.log(key)
}