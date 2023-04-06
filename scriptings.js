let fireBase = "https://flutters-5fb55-default-rtdb.firebaseio.com/";
let jsonEX = ".json";
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);
let myUser = localStorage.getItem("myUser");

function createCurrentUser() {
  let useremail = "";
  let myUser = [];
  if (localStorage.getItem("myUser") == null) {
      myUser = myUserEmail
  } else {localStorage.removeItem("myUser")}
  localStorage.setItem("myUser", JSON.stringify(useremail));
  console.log("Verify succeeded");
  (function () { window.location.href = 'index.html'; })();
};
function checkCurrentUser() {
    if (localStorage.getItem("myUser") === null) {
        window.location.replace("signin.html");
    } else {
         myUser = JSON.parse(localStorage.getItem("myUser"))
    }
}
// checkCurrentUser();
function loadPosts() {
    fetch(`${fireBase}/Posts${jsonEX}`, {
    })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data, 'data')
            let userSpreadData = {...data};
            // console.log(userSpreadData);
            Object.keys(data).forEach((user) => {
              // console.log(userSpreadData[user], 'user')
              let userPostObj = userSpreadData[user];
              // console.log(myUser, 'myUser')
                if (userPostObj.postedBy === myUser) {
                    let userPost = `
                <section class="profile_pic">
                <span id='newID' style='display: none;'>${user}</span>
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2></h2></span>
                    <span><p>${userPostObj.postedBy}</p><button class="edit" id="signin" onclick="patchData('${fireBase}/Posts/${user}${jsonEX}')">
                    Edit
                  </button> 
                  <button class="edit" id="signin" onclick="deleteData('${fireBase}/Posts/${user}${jsonEX}')">
                    Delete
                  </button></span>
                  </section>
                  <section class="content">
                  <section
                    <p>${userPostObj.message}</p>
                    <input type="text" id="newMessage" style='display: none;' class="flute" placeholder="New message text here">
                  </section>
                  <section class="reactions">
                    <ul>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="chat.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="glass.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="Vector-like.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="Vector-upload.png" alt=""
                        /></a>
                      </li>
                    </ul>
                  </section>
                </section>`;
                    let node = document.createElement("article", { className: "card" });
                    node.innerHTML = userPost;
                    document.getElementById("main").appendChild(node);
                } else {
                    let userPost = `
                <section class="profile_pic">
                <span id='newID' style='display: none;'>${user}</span>
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2></h2></span>
                    <span><p></p> ${userPostObj.postedBy} </span>
                  </section>
                  <section class="content">
                    <p> ${userPostObj.message} </p>
                  </section>
                  <section class="reactions">
                    <ul>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="chat.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="glass.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="Vector-like.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="Vector-upload.png" alt=""
                        /></a>
                      </li>
                    </ul>
                  </section>
                </section>`;
                    let node = document.createElement("article", { className: "card" });
                    node.innerHTML = userPost;
                    document.getElementById("main").appendChild(node);
                }
                } );
        },)
        .catch((err) => console.log(err));
};
loadPosts();
function createPost() {
    let messageText = document.getElementById("message").value;
    let username = localStorage.getItem("myUser");
    let userPost = `
    <section class="profile_pic">
      <picture><img src="account-icon.png" alt="userpicture" /></picture>
    </section>
    <section class="ss">
      <section class="user_info">
        <span><h2></h2></span>
        <span><p></p>username </span>
        <span><p>${username}</p><button class="edit" id="signin" onclick="patchData()">
        Edit
      </button> </span>
      </section>
      <section class="content">
        <p>${messageText}</p>
      </section>
      <section class="reactions">
        <ul>
          <li>
            <a name="" id="" class="btn btn-icon" href="#" role="button"
              ><img src="chat.png" alt=""
            /></a>
          </li>
          <li>
            <a name="" id="" class="btn btn-icon" href="#" role="button"
              ><img src="glass.png" alt=""
            /></a>
          </li>
          <li>
            <a name="" id="" class="btn btn-icon" href="#" role="button"
              ><img src="Vector-like.png" alt=""
            /></a>
          </li>
          <li>
            <a name="" id="" class="btn btn-icon" href="#" role="button"
              ><img src="Vector-upload.png" alt=""
            /></a>
          </li>
        </ul>
      </section>
    </section>`;
    let node = document.createElement("article", {className:"card"});
    node.innerHTML = userPost;
  document.getElementById("main").appendChild(node);
    let postContent = {
      datePosted: dateTime,
      postedBy: username,
      message: messageText,
  }
    fetch(`${fireBase}/Posts${jsonEX}`, {
        method: "POST",
        body: JSON.stringify(postContent)
    })
        .then((res) => res.json())
        .then(() => {
            document.getElementById("message").value = "";
            console.log("Verify succeeded");
        })
        .catch((err) => console.log(err));
};
function patchData(url) {
    document.getElementById("newMessage").style.display = "flex";
    let messageText = document.getElementById("newMessage").value;
    let username = localStorage.getItem("myUser");
    fetch(`${url}`, {
        method: "PATCH",
        body: JSON.stringify({
            datePosted: dateTime,
            postedBy: username,
            message: messageText,
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
function deleteData(url) {
  let messageText = document.getElementById("message").value;
  let username = localStorage.getItem("myUser");
  fetch(`${url}`, {
      method: "DELETE",
  })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
};