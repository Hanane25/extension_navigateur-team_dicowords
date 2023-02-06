document.addEventListener("mouseup", selectWord);


function selectWord() {
    console.log('test mouseup')
    let wordToDefine = window.getSelection().toString();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToDefine}`)
        .then(data => data.json())
        .then(data => displayDiv(data))
        .then(data => document.addEventListener("dblclick", afficher))
}

// function printMousePos(event) {
//     document.body.textContent =
//         "clientX: " + event.clientX +
//         " - clientY: " + event.clientY;
// }

// document.addEventListener("click", printMousePos);

function displayDiv(result) {

    if (document.getElementById('box') == null) {
        const box = document.createElement("div");
        box.id = "box";
        document.body.appendChild(box);
    } else {
        const box = document.getElementById('box');
        box.innerHTML = " "
    }

    console.log(result[0]);

    if (result[0] !== undefined) {
        let lengthOfDef = result[0].meanings[0].definitions.length

        if (lengthOfDef === 0) {
            box.innerHTML = "Sorry, there is no definition..."
        } else if (lengthOfDef < 5) {
            for (i = 0; i < lengthOfDef; i++) {
                if (result[0].meanings[0].definitions[i] !== "") {
                    box.innerHTML += `<li>${result[0].meanings[0].definitions[i].definition}</li>` + "<br>"
                } else {
                    box.innerHTML = "Sorry, there is no definition..."
                }
            }
        } else if (lengthOfDef > 5) {
            for (i = 0; i < 5; i++) {
                if (result[0].meanings[0].definitions[i] !== "") {
                    box.innerHTML += `<li>${result[0].meanings[0].definitions[i].definition}</li>` + "<br>"
                } else {
                    box.innerHTML = "Sorry, there is no definition..."
                }
            }
        }
    } else {
        box.innerHTML = "Sorry, there is no definition..."
    }

    box.style.width = '50%';
    box.style.border = 'solid';
    box.style.background = 'white';
    box.style.position = 'absolute';

}


function afficher(event) {

    const box = document.getElementById('box');

    console.log(event.pageY);
    console.log(event.pageX);

    console.log(box)

    box.style.top = event.pageY + 'px';
    box.style.left = event.pageX + 'px';
}








