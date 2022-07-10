// GLOBAL - NO WINDOW !!!

// __dirname - path to current directory
// __filenam - file name
// require - function to us module(commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(process)

// setInterval(()=>{
//     console.log('I love you')
// },1000)

//Modules - Encapsulates code(only share minimum)
// CommonJS, every file is module (by default)

// const htttp = require('http');

// const server = htttp.createServer((req,res)=>{
//     if (req.url ==='/'){
//         res.end('Welcome to our home page')
//     }
//     if (req.url === '/about'){
//         res.end('Here is our short history')
//     }

// res.end(
//     `<h1>Oops!</h1>
//     <p>We can't see what you are looking for</p>
//     <a href="/"> back home`
// )
// })
// server.listen(5000)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);