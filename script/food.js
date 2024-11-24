function myFunction(){
    let foodInput=document.getElementById("foodInput").value;   //value se uska input aya
    console.log(foodInput)
    let text;
    if(isNaN(foodInput)|| foodInput<1 || foodInput>10){
        alert("enter a valid amount (between 1 to 10)")
    }
    else{
        let milkContainer =document.getElementById("milkImage"); 
        if (milkContainer) {  // Ensure the container exists
            milkContainer.innerHTML = ""; 
            for (let i = 0; i < foodInput; i++){
                let img=document.createElement("img")  //creating milkImg as an element
                img.src="/images/milk.png"
                console.log("milkImage", img)
                img.alt="milk"
                // Add CSS class to the image
                img.classList.add("milk-image");
                milkContainer.appendChild(img);
                
                //image moving from milk to dog
                img.addEventListener("click", () => {
                    moveMilkToDog(img);
                });
            }    
        } else{
            console.log("milkContainer is not existed")
        }
    }
}

function moveMilkToDog(imgElement){
    let hungryDogContainer=document.getElementById("hungryDog")
    hungryDogContainer.appendChild(imgElement)
}
