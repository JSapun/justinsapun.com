// Gallary implementation
// selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ // once window loaded
    filterItem.onclick = (selectedItem)=> { // when user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){ // if user click element
            filterItem.querySelector(".active").classList.remove("active"); // remove the active class in first element
            selectedItem.target.classList.add("active"); // add active class on  user selected element or item
            let filterName = selectedItem.target.getAttribute("data-name"); // getting data-name value of user selected items
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name"); // getting image data-name values

                if((filterImages == filterName) || (filterName== "all")){ // subsetting images either on click or all
                    image.classList.remove("hide");
                    image.classList.add("show");
                }
                else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
}