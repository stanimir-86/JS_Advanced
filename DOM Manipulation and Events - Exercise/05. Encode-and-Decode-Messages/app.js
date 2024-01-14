function encodeAndDecodeMessages() {

    const buttonRef = document.querySelectorAll('button');
    const textAreas = document.querySelectorAll('textarea');
    const encodeBtn = buttonRef[0];
    const decodeBtn = buttonRef[1];
    const encodeTextArea = textAreas[0];
    const decodeTextArea = textAreas[1];

    encodeBtn.addEventListener('click', encodeandSendMSgHandler);
    decodeBtn.addEventListener('click', decodeandSendMSgHandler);

    encodeBtn.addEventListener('mouseover', hoverHandler);
    encodeBtn.addEventListener('mouseout', hover1Handler);

    function hoverHandler() {
        encodeBtn.style.background = '#ff0000';

    }
    function hover1Handler() {
        encodeBtn.style.background = '#234465';
    }
    function encodeandSendMSgHandler() {
        let currentText = encodeTextArea.value;
        let encodeMSG = '';
        for (const ch of currentText) {
            let numValue = ch.charCodeAt();
            numValue++;
            encodeMSG += String.fromCharCode(numValue);
        }
        decodeTextArea.value = encodeMSG;
        encodeTextArea.value = '';
    }
    function decodeandSendMSgHandler() {
        let currentValue = decodeTextArea.value;
        let decodeMSG = '';
        for (const ch of currentValue) {
            let numValue = ch.charCodeAt();
            numValue--;
            decodeMSG += String.fromCharCode(numValue);
        }
        decodeTextArea.value = decodeMSG;
        
    }
}