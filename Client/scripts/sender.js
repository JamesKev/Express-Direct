// event listeners
document.getElementById('fileInput').addEventListener("click", onClick);

// html IDs for file list and sizes for Send widget
let fileList = document.getElementById('sentFile');
let fileListSize = document.getElementById('sizes');

//
// files to be put into array list
class fileObject {
    constructor(name, size, file) {
        this.name = name;
        this.size = size;
        this.formattedSize = "";
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

    //listener for change in value of input
     input.onchange = e =>{
         
         let file = e.target.files[0];

         //instantiation of file reader
         let reader = new FileReader();

         //reads in user selected file
         reader.readAsDataURL(file);


         //when done reading this this metho
         reader.onload = readerEvent => {
            let content = readerEvent.target.result;
            let element = new fileObject(file.name, file.size, content);

            //add element to array and format size
            uploadedFiles.push(element);
            element.formattedSize = calculateSize(element.size);

            // Delete and reUpload text field when new element is added in
            while(fileList.firstChild){
                fileList.removeChild(fileList.firstChild);
            }
            while(fileListSize.firstChild){
                fileListSize.removeChild(fileListSize.firstChild);
            }
            sendTextUpdater(); // updates text field
        }

     }
     //forcibly activates filepicker when Add button clicked
    input.click();
}

// updating text inside Sender structure
// appending appending fileList and fileListSize
function sendTextUpdater(){
    for (let index = 0; index < uploadedFiles.length; index++) {

        
        //File Name update
        let node = document.createElement("li");
        let textnode = document.createTextNode(uploadedFiles[index].name);
        node.appendChild(textnode);
        fileList.appendChild(node);

        //File Size Update
        let node2 = document.createElement("li");
        
        let textnode2 = document.createTextNode(uploadedFiles[index].formattedSize);
        node2.appendChild(textnode2);
        fileListSize.appendChild(node2);
       
  
    }


}


// setting file size IE MB,GB,TB rounded 2 dec 
function calculateSize(size){
    



    if(size > 1000000000){
        //gigabytes formatting

        size = (size/1000000000).toFixed(2);
        return size + "\u00A0" + "GB";
    } else if(size > 1000000){
        //megabytes formatting
        size = (size/1000000).toFixed(2);
        return size + "\u00A0" + "MB";
    } else if(size > 1000){
        //kilibytes formatting
        size = (size/1000).toFixed(2);
        return size + "\u00A0" + "KB";
    }else{
        //bytes formatting
        return size + "\u00A0" + "B";
    }

    
    
}



