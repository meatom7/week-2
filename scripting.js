let fireBase = "https://flutters-5fb55-default-rtdb.firebaseio.com/";
let jsonEX = ".json";

function createCurrentUser() {
        let useremail = document.getElementById("useremail").value;
        let myUser = [];
        let myUserEmail = document.getElementById("useremail").value;
        if (localStorage.getItem("myUser") == null) {
            myUser = myUserEmail
        } else {localStorage.removeItem("myUser")}
        localStorage.setItem("myUser", JSON.stringify(useremail));
        console.log("Verify succeeded");
        (function () { window.location.href = 'index.html'; })();
};
function deleteData() {
    fetch('${fireBase}/da${jsonEX}', {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
function getData() {
    fetch(`${fireBase}/Users${jsonEX}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            let spreadData = Object.values(data);
            let myUserEmail = document.getElementById("useremail").value;
            let usersarray = [];
                Object.keys(spreadData).forEach(user => {
                    usersarray.push(...Object.values(spreadData[user]))
                });
            if (usersarray.indexOf(myUserEmail) > -1) {
                console.log("Approved", data);
                createCurrentUser();
                }
            else {
                console.log("user not found", Object.values(usersarray));
                document.getElementById("useremail").style.color = "red";
                document.getElementById("useremail").style.border = "solid";
                document.getElementById("useremail").value = ""; 
            };
        },)
        .then((datas) => {console.log("well this still happens", datas)})
        .catch((err) => console.log(err));
};
function postData() {
    fetch(`${fireBase}/Users${jsonEX}`, {
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let userSpreadData = { ...data };
            console.log(userSpreadData);
                Object.keys(data).forEach((user) => {
                    let userPost = `
                <section class="profile_pic">
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2>${user}</h2></span>
                    <span><p>${user}</p> </span>
                  </section>
                  <section class="content">
                    <p>${user}</p>
                    <section>
                      <a href="" class="ctn"><img src="${user}" alt="filler" /></a>
                    </section>
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
                    let newArticle = document.createElement("article", {className:"card"});
                    newArticle.innerHTML = userPost
                    document.getElementById("main").appendChild(userPost)
                } )();
        },)
        .catch((err) => console.log(err));
};
postData();
function createNewPost() {
    if (verifyUser === true) {
        let createMessage 
    }
};
function getDatas() {
    fetch(`${fireBase}${jsonEX}`)
        .then((res) => {
            console.log("resolved!", res);
            res.json().then((data) => console.log("JSON Done", data));
        }).then((data) => {
            console.log(data);
        })
    .catch((err) => {
        console.log(err);
    })

};
function gettingData(){
axios.get(`${fireBase}${jsonEX}`)
    .then((res) => {
    console.log("Responsed: ", res);
})
    .catch((e) => {
        console.log("errors", e);
})}