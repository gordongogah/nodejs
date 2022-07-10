
console.log(`this system uptime is ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);