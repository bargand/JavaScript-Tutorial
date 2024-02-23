const blinkDot =(text, para, resolv, rand)=>{
    setTimeout(() => {
        para.innerText = `>>> ${text}.`
        setTimeout(() => {
            para.innerText += `.`
            setTimeout(() => {
                para.innerText += `.`
                resolv("success")
            }, 1000);
        }, 1000);
    }, 1000);
}
document.body.style.backgroundColor = "green"
document.body.style.color = "black"
document.body.style.fontSize = "25px"

const printMessage =(text)=>{
    return new Promise((resolve) => {
      let rand = (Math.floor(Math.random()*7)+1)*1000
      setTimeout(() => {
        let para = document.createElement("p")
        para.innerText = `>>> ${text}`
        document.body.append(para)
        blinkDot(text, para, resolve, rand)
      }, rand);
    })
}
const hackingPC = async()=>{
    await printMessage("Initializing Hacking")
    await printMessage("Reading Your Files")
    await printMessage("Password files detected")
    await printMessage("Sending All passwords and personal information files to server")
    await printMessage("cleaning up")
    await printMessage("You Are Hacked")
}
hackingPC()