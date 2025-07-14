const text = document.getElementById("texts");
const addBtn =  document.getElementById("btn");
const wrapper = document.querySelector(".wrapper");
const listContainer = document.querySelector(".list-container");
const taskList = [];
function addOperations(){
   const getText = text.value;
   if (getText.trim() === "") return;
   const todoContainer = document.createElement("div");
   todoContainer.classList.add("box");
   const boxTexts = document.createElement("span");
   boxTexts.classList.add("taskText");
   boxTexts.textContent = getText;
   todoContainer.append(boxTexts);
   
   listContainer.prepend(todoContainer);
   taskList.unshift(todoContainer);
   //wrapping button into todocontainer
   const buttonWrapper = document.createElement("div");
   buttonWrapper.classList.add("button-wrapper");
   todoContainer.append(buttonWrapper);

   //complete button
   const completeBtn = document.createElement("button");
   completeBtn.classList.add("complete");
   completeBtn.innerHTML = `<img src="images/checkmark.webp">`;
   buttonWrapper.append(completeBtn);
   
   //Delete button
    const Deletebtn = document.createElement("button");
    Deletebtn.classList.add("delete");
    Deletebtn.innerHTML = `<img src="images/delete-btn.png">`;
    buttonWrapper.append(Deletebtn);

   //edit button
   const editBtn = document.createElement("button");
   editBtn.classList.add("edit");
   editBtn.innerHTML = `<img src="images/edit-btn.png">`
   buttonWrapper.append(editBtn);

   console.log(getText);

     Deletebtn.addEventListener("click",function(){
      listContainer.removeChild(todoContainer);
   })

    completeBtn.addEventListener("click",function(){
      boxTexts.classList.add("completed-task");
    })
    
    editBtn.addEventListener("click",function(){
      const currentText = boxTexts.textContent;
      const input = document.createElement("input");
      input.value = currentText;
      input.classList.add("edit-text");
      todoContainer.replaceChild(input, boxTexts);

      input.addEventListener("keydown",function(event){
         if(event.key === "Enter"){
           const editedValue =  input.value;
           boxTexts.textContent = editedValue;
           todoContainer.replaceChild(boxTexts, input);
           
         }
      })
    })
   
}

addBtn.addEventListener("click",addOperations);

text.addEventListener("keydown",function(event){
   if(event.key === "Enter"){
      addOperations();
   }
})
