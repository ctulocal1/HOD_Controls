

var now=new Date();
var textToSave = 'New Document';
var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
var fileNameToSaveAs = 'CTU_House_Session_' + now.getFullYear() + '_' + now.getMonth() + '_' + now.getDate() + '_' + now.getHours() + '_' + now.getMinutes() + '.log';

var downloadLink = document.createElement("a");
downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";
downloadLink.href = textToSaveAsURL;
downloadLink.onclick = destroyClickedElement;
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);

downloadLink.click();

 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function logger (message, data) {
	var msg = message;
	var logText = data;
	
	textToSave+='\r\n\r\n--------\r\n';
	textToSave+=msg;
	textToSave+='\r\n--------\r\n';
	textToSave+=logText;

	alert(textToSave);
textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	
downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";
downloadLink.href = textToSaveAsURL;
downloadLink.onclick = destroyClickedElement;
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);

downloadLink.click();
	
	alert(downloadLink.href);
}



