const button = document.getElementById("button");
button.addEventListener('click',compare)



function compare(){
    console.log('button is clicked')
    const zip = document.getElementById("Full-Zip");
    const file = zip.files[0];
    if (file === undefined){console.log('error')}


    else {const reader = new FileReader();
        reader.onload = async function() {
            const zip = new JSZip();
            const zipContent = await zip.loadAsync(reader.result)
            test = function(filePath){
            return filePath.endsWith("connections/followers_and_following/followers_1.json")    
            }
            const followersFileEntry = zipContent.filter(test);
        }


        reader.readAsArrayBuffer(file);
    }
    


}
