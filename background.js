// console.log('test1')

// chrome.runtime.onConnect.addListener(function (port) {
//     console.log('test')
//     if (port.name === "DicoWords") {

//         // Extension is fully loaded
//         chrome.runtime.executeScript({
//             code: "window.getSelection().toString();"
//         }, function (selection) {
//             if (selection && selection.length > 0) {
//                 var selectedText = selection[0];
//                 // Use the selectedText to fetch the definition

//                 fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + selectedText)
//                     .then(data => data.json())

//                     .then(data => console.log(data))

//             }
//         });
//     }
// });

// Listen for a user to click on a word
// document.addEventListener('mouseup', function (event) {
//     var selectedText = window.getSelection().toString();
//     if (selectedText.length > 0) {
//         chrome.runtime.sendMessage({
//             type: "wordSelected",
//             selectedText: selectedText
//         });
//     }
// });


