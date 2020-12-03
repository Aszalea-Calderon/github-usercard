import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const theCards = document.querySelector(".cards");

// followersArray.forEach((person) => {
//Personal Call
axios
  .get(`https://api.github.com/users/Aszalea-Calderon`)
  .then((res) => {
    const data = res.data;
    postMaker(data);
  })
  .catch((theBadStuff) => {
    console.log("theBadStuff", theBadStuff);
  });
// });

//Followers Call

//TODO-- We also need to get the profile link workings
const followersArray = [
  "BrianReisman",
  "jenkrame21",
  "jaypdl",
  "sam-lalli",
  "code-dependent",
  "avawing",
];

// axios
//   .get("https://api.github.com/users/Aszalea-Calderon/followers") //This did not populate the data we needed
//   .then((res) => {
//     res.data.forEach((post) => {
//       const data = res.data;
//       // const myPost = postMaker(allData);
//       // entryPoint.appendChild(myPost);
//       postMaker(data);
//     });
//   })
//   .catch((theBadStuff) => {
//     console.log("theBadStuff", theBadStuff);
//     debugger;
//   });
followersArray.forEach((item) => {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((res) => {
      const followerData = postMaker(res.data);
      theCards.append(followerData);
    })

    .catch((theBadStuff) => {
      console.log("theBadStuff", theBadStuff);
    });
});
/*


  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//looping inside, this is different, the forEach is going to encpsualte the aiox
//forEach what? for eachPerson. each of those people get this. this needs to have the extention. Don't need to do a second

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">c
      <img src={image url of user} />x
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>

    user profile is the pr
    uerGit hub is the a 

    THIS IS CALLED A COMPONENT 
*/
function postMaker(post) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  const usernameP = document.createElement("p");
  const locationP = document.createElement("p");
  const profileP = document.createElement("a");
  const follow1 = document.createElement("p");
  const follow2 = document.createElement("p");
  const bioP = document.createElement("p");

  //classes
  card.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  h3.classList.add("name");
  usernameP.classList.add("username");

  //Sources Linked

  //Appending
  card.append(img);
  card.append(cardInfoDiv);
  cardInfoDiv.append(h3);
  cardInfoDiv.append(usernameP);
  cardInfoDiv.append(locationP);
  cardInfoDiv.append(profileP);
  cardInfoDiv.append(follow1);
  cardInfoDiv.append(follow2);
  cardInfoDiv.append(bioP);

  //textContent
  img.src = post.avatar_url;
  // profileP.src = post.html_url;

  h3.textContent = post.login;
  usernameP.textContent = `Username: ${post.name}`; /*data.name?*/
  locationP.textContent = `Location: ${post.location}`;
  // profileP.src = `Profile: ${post.html_url}`;
  follow1.textContent = `Followers: ${post.followers}`;
  follow2.textContent = `Following: ${post.following}`;
  bioP.textContent = `Bio: ${post.bio}`;

  //return dat
  return theCards.appendChild(card);
}

// <div class="card">c
//   <img src={image url of user} />x
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
