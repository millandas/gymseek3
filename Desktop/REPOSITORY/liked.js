function displayLikedGyms() {
    //get the liked gyms from local storage
    let likedGyms = JSON.parse(localStorage.getItem("likedGyms")) || [];
    console.log(likedGyms)
    //get the container element
    let likedGymsContainer = document.getElementById("liked-gyms-container");

    //loop through the liked gyms
    for (let i = 0; i < likedGyms.length; i++) {
        //create a new div element to display the gym details
        let gymDiv = document.createElement("div");
        gymDiv.classList.add("gym-div");
        //create a new h2 element to display the gym name
        let gymName = document.createElement("h2");
        gymName.innerText = likedGyms[i].name;
        //create a new p element to display the gym location
        let gymLocation = document.createElement("p");
        gymLocation.innerText = likedGyms[i].location;
        //create a new p element to display the gym amenities
        let gymAmenities = document.createElement("p");
        gymAmenities.innerText = likedGyms[i].amenities;
        //append the elements to the gym div
        gymDiv.appendChild(gymName);
        gymDiv.appendChild(gymLocation);
        gymDiv.appendChild(gymAmenities);
        //append the gym div to the container
        likedGymsContainer.appendChild(gymDiv);
    }
}