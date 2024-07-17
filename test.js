function test(...args){
    args.forEach(i => {
        console.log(i)
    })
}
test()

const x = 100_000_0
for(var i = 0; i < x; i++){
    console.log(i);
}