const os = require('os')

console.log('start');
// info about current user
const user = os.userInfo()

console.log(user);

// method returns the system uptime in seconds

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    // console.log(results)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        // console.log(results)
        const second = result;  
        writeFile('./content/result-async.txt',`Here is the result :${first},${second}`,(err,result=>{
            if (err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })) 
    })
})
console.log('starting next task')