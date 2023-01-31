function shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}
let reply
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
         reply = ("I can't hear you!")
    } else if (string === string.toUpperCase()){
        reply = ("YES INDEED!")
    } else if (string === ("Let's have dinner together!")){
        reply = ("I would love to!")
    } else {
        reply = ("WHAAAAATTT! GET OUT OF MY ROOM!")
    }
    return(reply)
}

