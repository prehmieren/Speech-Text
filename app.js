const speechRecognize = window.SpeechRecognition || window.webkitSpeechRecognition
const recognize = new speechRecognize()
const btn = document.querySelector('.control')

function recordVoice() {
    const isRecord = btn.classList.contains('record')
    if (isRecord) {
        recognize.start()
        btn.classList.remove('record')
        btn.classList.add('pause')
        btn.innerText = "Pause"
    } else {
        recognize.stop()
        btn.classList.remove('pause')
        btn.classList.add('record')
        btn.innerText = "Record"
    }
}

function setVoiceToText(e) {
    let message = document.querySelector('.message')
    console.log(e);
    message.innerText += e.results[0][0].transcript
}
function continueRecord() {
    const isPause = btn.classList.contains('pause')
    if (isPause) {
        recognize.start()
    }
}
function setupVoice() {
    recognize.lang = "th-TH"
    btn.addEventListener("click", recordVoice)
    recognize.addEventListener('result', setVoiceToText)
    recognize.addEventListener('end', continueRecord)
}

setupVoice()