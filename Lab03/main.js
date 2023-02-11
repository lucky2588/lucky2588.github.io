const btnPost = document.querySelector(".post")
const btnPhoto = document.querySelector(".photo")
const btnAlbum = document.querySelector(".album")
const ul = document.querySelector("ul")

// Mở trình duyệt trang web ở trang post
post();


// sự kiện khi click vào nút photos
btnPhoto.addEventListener("click",async () =>{
    highLight("photo");
    title("Photos")
    let res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    render((res.data))
})

// sự kiện khi click vào nút albums
btnAlbum.addEventListener("click", async () =>{
    highLight("album")
    title("Albums");
    let res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    render(res.data)
})

// sự kiện khi click vào nút Post
btnPost.addEventListener("click",post)

// Posts 
async function post() {
    highLight("post")
    title("Posts");
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    render(res.data)
}

// render giao diện(chỉ hiện 10 phần tử đầu tiên)
function render(arr){
    ul.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        console.log(arr[i].title)
        li.innerText = arr[i].title
        ul.insertAdjacentElement("afterbegin",li)
    }
}

// tiêu đề
function title(title){
    const span = document.querySelector("span");
    console.log(span);
    span.innerText = `${title}`;
}

//hightlight màu nút
function highLight(title) {
    if(title == "post"){
        btnPost.classList.add('highLight');
        btnAlbum.classList.remove('highLight');
        btnPhoto.classList.remove('highLight');
    } else if (title == "album") {
        btnAlbum.classList.add('highLight');
        btnPost.classList.remove('highLight');
        btnPhoto.classList.remove('highLight');
    } else if (title == "photo") {
        btnAlbum.classList.remove('highLight');
        btnPost.classList.remove('highLight');
        btnPhoto.classList.add('highLight');
    }
}