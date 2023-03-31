let fireBase = "https://flutters-5fb55-default-rtdb.firebaseio.com/";
    let jsonEX = ".json";

function getData() {
    fetch(`${fireBase} ${jsonEX}`, )
    .then((res) => res.json())
        .then((data) => {console.log(data)
            let userSpreadData = { ...data }
            Object.keys(userSpreadData).forEach((user) => {
                let userPost = `      
                <article class="card">
                <section class="profile_pic">
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2>${firstName}</h2></span>
                    <span><p>${username}</p> </span>
                  </section>
                  <section class="content">
                    <p>${text}</p>
                    <section>
                      <a href="" class="ctn"><img src="${userImg}" alt="filler" /></a>
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
                </section>
              </article>`;
                newArticle.innerHTML = userPost
                document.querySelector("main").appendChild(userPost)
            }
            method: "GET",
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                dob: userdob,
                message: [{
                    id: 1,
                    time: currentDate,
                    post: post,
                },],
            })
        })
        .catch((err) => console.log(err));
}
function deleteData() {
    fetch('${fireBase}${jsonEX}', {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
function patchData() {
    fetch('${fireBase}${jsonEX}', {
        method: "PATCH",
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            dob: userdob,
            message: [{
                id: 1,
                time: currentDate,
                post: post,
            },
            ],
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
function postData() {
    fetch('${fireBase}${jsonEX}', {
        method: "POST",
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            dob: userdob,
            message: [{
                id: 1,
                time: currentDate,
                post: post,
            },
            ],
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
function putData() {
    fetch('${fireBase}${jsonEX}', {
        method: "PUT",
        body: JSON.stringify({
            reset{
            firstName: firstName,
            lastName: lastName,
            dob: userdob,
            message: [{
                id: 1,
                time: currentDate,
                post: post,
            },
            ],
        }})
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
