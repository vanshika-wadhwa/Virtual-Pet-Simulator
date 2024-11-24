function myFunction(){
    let foodInput=document.getElementById("foodInput").value;   //value se uska input aya
    console.log(foodInput)
    let text;
    if(isNaN(foodInput)|| foodInput<1 || foodInput>10){
        alert("enter a valid amount (between 1 to 10)")
    }
    else{
        let milkContainer =document.getElementById("milkImage"); 
        if (milkContainer){  // Ensure the container exists
            milkContainer.innerHTML = ""; 
            for(let i = 0; i < foodInput; i++){
                let img=document.createElement("img")  //creating milkImg as an element
                img.src="/images/milk.png"
                console.log("milkImage", img)
                img.alt="milk"
                // Add CSS class to the image
                img.classList.add("milk-image");
                milkContainer.appendChild(img);
                
                //image moving from milk to dog
                img.addEventListener("click", ()=>{
                    moveMilkToDog(img);
                });
            }    
        } else{
            console.log("milkContainer is not existed")
        }
    }
}

let milkCount = 0; // Track the number of milk images added
function moveMilkToDog(imgElement){
    let hungryDogContainer=document.getElementById("hungryDog");

    if(milkCount<3){
        hungryDogContainer.appendChild(imgElement);
        milkCount++;
    
        if(milkCount===3){
            let happyDogImage=document.createElement("img")
            happyDogImage.src="/images/dog.png"
            console.log("happyDogImage",happyDogImage)
            happyDogImage.alt="dog"
            happyDogImage.style.width = "150px"; 

            // Find the existing dog image (if any) and replace it with the new one
            let existingDogImage = document.querySelector("#hungryDog img");
            if (existingDogImage) {
                existingDogImage.replaceWith(happyDogImage);
                
            } else {
                // If no dog image exists, append the new dog image directly
                hungryDogContainer.appendChild(happyDogImage);
            }
        }
    }
    else{
        alert("my tummy is full, let's play!")
    }
    
}
