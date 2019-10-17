// event listeners
document.getElementById('fileInput').addEventListener("click", onClick);
let fileList = document.getElementById('sentFile');
let fileListSize = document.getElementById('sizes');

//
// files to be put into array list
class fileObject {
    constructor(name, size, file) {
        this.name = name;
        this.size = size;
        this.file = file;
    }
}

// Array of files user uploaded
let uploadedFiles = [];





//Clicking add button

function onClick(){

    

    
    //Giving add button input
    let input = document.createElement('input');
    input.type = 'file';

     input.onchange = e =>{
         
         let file = e.target.files[0];

         //instantiation of file reader
         let reader = new FileReader();
         reader.readAsDataURL(file);

         reader.onload = readerEvent => {
            let content = readerEvent.target.result;
            uploadedFiles.push(new fileObject(file.name, file.size, content));

            while(fileList.firstChild){
                fileList.removeChild(fileList.firstChild);
            }
            while(fileListSize.firstChild){
                fileListSize.removeChild(fileListSize.firstChild);
            }
            sendTextUpdater(); // updates text field
        }

     }
    input.click();
}

// updating text inside Sender structure
// appending appending fileList and fileListSize
function sendTextUpdater(){
    for (let index = 0; index < uploadedFiles.length; index++) {

        // console.log(fileList.childElementCount)
        // console.log(fileListSize.childElementCount)
        //File Name update
        let node = document.createElement("li");
        let textnode = document.createTextNode(uploadedFiles[index].name);
        node.appendChild(textnode);
        fileList.appendChild(node);

        //File Size Update
        let node2 = document.createElement("li");
        let textnode2 = document.createTextNode(uploadedFiles[index].size);
        node2.appendChild(textnode2);
        fileListSize.appendChild(node2);
       
  
    }


}



