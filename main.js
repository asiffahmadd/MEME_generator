

const GenerateMemeBtn=document.querySelector(".meme-generator .Generate-meme-button")
const memeImage =document.querySelector("img")
const memeTitle =document.querySelector(".meme-generator .meme-title")
const memeAuthor =document.querySelector(".meme-generator .meme-author")


const updateDetails =(url,title,author)=>{
    memeImage.src = url

    memeTitle.innerHTML = title;

    memeAuthor.innerHTML = `Meme by: ${author}`;
}

const generatememe=()=>{
    fetch("https://meme-api.com/gimme/1").then(
   (response)=> response.json().then(data=>{
    console.log(data.memes);
    updateDetails(data.memes[0].url,data.memes[0].title,data.memes[0].author)
   })
   );
}


GenerateMemeBtn.addEventListener("click", generatememe)
generatememe();
