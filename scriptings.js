let fireBase = "https://flutters-5fb55-default-rtdb.firebaseio.com/";
let jsonEX = ".json";

function loadPosts() {
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
                    <span><h2></h2></span>
                    <span><p></p>${user} </span>
                  </section>
                  <section class="content">
                    <p></p>
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
                } )();
        },)
        .catch((err) => console.log(err));
};
loadPosts();
function createPost() {
    let messageText = document.getElementById("message").value;
    let userPost = `
    <section class="profile_pic">
      <picture><img src="account-icon.png" alt="userpicture" /></picture>
    </section>
    <section class="ss">
      <section class="user_info">
        <span><h2></h2></span>
        <span><p></p>username </span>
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
}