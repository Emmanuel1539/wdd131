

    const input = document.getElementById("favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");
    
    
    
    
    
    function addItem(){
        if(input.value.trim() !== ""){
    
            const li = document.createElement("li");
            li.innerHTML = input.value;
            list.appendChild(li);
            

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X"
            deleteButton.className = "delbtn"
            li.appendChild(deleteButton);
            
    
            deleteButton.addEventListener("click", function(){
                li.remove()
            });
        
            input.value = "";
        
        };
    };
    
    button.addEventListener("click", addItem);
    

