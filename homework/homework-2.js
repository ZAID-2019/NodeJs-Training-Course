const os = require('os');

// Get the host name of the computer
const hostname = os.hostname();

// Get the operating system's name
const osName = os.type();

// Get the operating system's version
const osVersion = os.release();

// Get the CPU architecture
const cpuArch = os.arch();

// Get the number of CPU cores
const numCores = os.cpus().length;

// Get the total system memory in bytes
const totalMemory = os.totalmem();

// Get the free system memory in bytes
const freeMemory = os.freemem();

// Print the OS information
console.log('Host Name:', hostname);
console.log('Operating System:', osName);
console.log('OS Version:', osVersion);
console.log('CPU Architecture:', cpuArch);
console.log('Number of CPU Cores:', numCores);
console.log('Total Memory (bytes):', totalMemory);
console.log('Free Memory (bytes):', freeMemory);
