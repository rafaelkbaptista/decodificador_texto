// Seleciona os elementos do DOM
const textArea = document.querySelector(".insert_text_area");
const message = document.querySelector(".output_text_area");

function clear() {
    document.getElementById("output_textarea").hidden = false;

    document.getElementById("icon").hidden = true;

    document.getElementById("decoded_text_h1").hidden = true;

    document.getElementById("decoded_text_p").hidden = true;

    document.getElementById("copy").hidden = false;

}

function encrypt_button() {
    clear()
    const encrypted_text = encrypt(textArea.value);
    message.value = encrypted_text;
    textArea.value = "";
}

function encrypt(encrypt_message) {
    encrypt_message = encrypt_message.toLowerCase();

    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    
    for (let i = 0; i < matriz.length; i++) {
        if (encrypt_message.includes(matriz[i][0])) {
            encrypt_message = encrypt_message.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return encrypt_message;
}


function decrypt_button() {
    clear()
    const decrypted_text = decrypt(textArea.value);
    message.value = decrypted_text;
    textArea.value = "";
}


function decrypt(decrypted_message) {

    decrypted_message = decrypted_message.toLowerCase();

    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];


    for (let i = 0; i < matriz.length; i++) {
        if (decrypted_message.includes(matriz[i][1])) {
            decrypted_message = decrypted_message.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return decrypted_message;
}

function copy() {
    const textarea = document.getElementById("output_textarea");

    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móveis


    document.execCommand("copy");
}

