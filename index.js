document.addEventListener("DOMContentLoaded", function (){
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetails = document.getElementById("ramen-detail");
    const ramenName = document.getElementById("ramen-name");
    const ramenImage = document.getElementById("ramen-image");
    const restaurantName = document.getElementById("restaurant-name");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");
    const newRamenForm = document.getElementById("new-ramen-form");
    const myButton = document.getElementById('myButton');
    const editBtn = document.getElementById("edit-btn");
    const deleteBtn = document.getElementById("delete-btn");

    let ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 5, comment: "Amazing broth!" }
    ];

    function displayRamens() {
        ramenMenu.innerHTML = "";
        ramens.forEach(ramen =>{
            let img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.className = 'my-images';
                    
            ramenMenu.appendChild(img);
        });
    }

    let img = document.getElementsByClassName('my-images');
    let replacedImage = document.querySelector('.replacedImage');
    console.log(img);

    
    img.addEventListener("click", (event)=> {
        console.log('How are you?')
        replacedImage.src = event.target.src;
        replacedImage.alt = event.target.alt;
    
    });

    function showRamenDetails(ramens){
        ramenName.textContent = ramen.name;
        ramenImage.src = "shawarma.jpeg";
        restaurantName.textContent = ramen.restaurant;
        ramenRating.textContent =ramen.rating;
        ramenComment.textContent =ramen.comment;

        editBtn.style.display= "block";
        deleteBtn.style.display ="block";

        editBtn.onclick = () => editRamen(ramen);
        deleteBtn.onclick = () => deleteRamen(ramen.id);

    }
    showRamenDetails(ramens[0]);

    myButton.addEventListener("submit",(event)=>{
        event.preventDefault();
    
        let newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating:document.getElementById("new-rating").value,
            comment:document.getElementById("new-comment").value
        };
        ramens.push(newRamen);
        displayRamens();
        newRamenForm.reset();

    });
    function editRamen(ramen){
        let newRating = prompt(`Edit rating for ${ramen.name}:`,ramen.rating);
        let newComment = prompt(`Edit comment for ${ramen.name}:`,ramen.comment);

        if (newRating !== null) ramen.rating =newRating;
        if (newComment !== null) ramen.comment = newComment;

        showRamenDetails(ramen);
    }
    function deleteRamen(id) {
        ramens = ramens.filter(ramen =>ramen.id !== id);
        displayRamens();
        ramenDetails.innerHTML = "<h2>Select a Ramen</h2>";
    }

    displayRamens();

});