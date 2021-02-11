/* Fill your code*/
class Blog{
    constructor(title, description) {
        this.title = title,
            this.description = description
    }

    addTitle() {

        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        title_card.innerHTML += this.title;
        document.getElementById('card-text').appendChild(title_card);
        console.log(title_card);
    }

    addDescription() {

        let descriptionCard = document.createElement("p");
        descriptionCard.setAttribute("id", "blog-description");
        let text = document.createTextNode(`${this.description}`)
        descriptionCard.appendChild(text);
        document.querySelector("#card-text").appendChild(descriptionCard)
        console.log(descriptionCard);
    }
}

//start working on Blog Page
// add blog button
var $addBlog = document.querySelector("#addBlog")
// close pop up button
var $close = document.querySelector("#close")
// popup div
var $popup = document.querySelector("#popupContact")

// when add post will be clicked Pop up will be showed which will ask for blog details
$addBlog.addEventListener("click", () => {
    $popup.style.display = "block"
})

// when the close button is clicked on popup it will close the popup
$close.addEventListener("click", () => {
    $popup.style.display = "none"
})


// when addpost button will be clicked the the title and description varibles will be set in Blog class
// add blog details will be appended/add in card-text element

document.querySelector("#post").addEventListener("click", addPost);

function addPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("detail").value;

    if (title && description) {
        let blog = new Blog(title, description)

        blog.addTitle()
        blog.addDescription()

        $popup.style.display = "none"
    } else {
        document.querySelector("#message").style.display = "inline-block"
    }
}

//display the blog when clicking post button
document.querySelector("#post").addEventListener("click",function(){
    document.querySelector("#popupContact").style.display="none";
    var $img=document.createElement("img");
    $img.setAttribute("src","./assets/javascript.png");
    document.querySelector("#card-text").appendChild($img);
})