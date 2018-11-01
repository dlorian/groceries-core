
const info = function(message, ...args) {
   log('INFO', message, args); 
}

const error = function(message, ...args) {
    log('ERROR', message, args); 
 }

 const warn = function(message, ...args) {
    log('WaRN', message, args); 
 }

 const debug = function(message, ...args) {
    log('DEBUG', message, args); 
 }

const log= function(level, message, args) {
    console.log(`${level}: ${message}`, args || "");
}

module.exports = {info, error, warn, debug};