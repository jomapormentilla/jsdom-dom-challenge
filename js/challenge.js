document.addEventListener("DOMContentLoaded", function(e){
    timer
});

const counter = document.getElementById("counter")
let isPaused = false

const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const list = document.getElementById("list")
const submit = document.getElementById("submit")
const likes = document.querySelector(".likes")
const commentInput = document.getElementById("comment-input")

i = 1
j = 0
const timer = window.setInterval(function(){
    if (!isPaused) {
        counter.innerHTML = i
        i++
        j = 0
    }
}, 1000)

pause.addEventListener("click", function(e){
    e.preventDefault()
    isPaused = !isPaused

    if (!!isPaused) {
        pause.innerHTML = "resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
    } else {
        pause.innerHTML = "pause"
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        submit.disabled = false
    }
})

plus.addEventListener("click", function(e){
    i++
    counter.innerHTML = i
    timer
})

minus.addEventListener("click", function(e){
    i--
    counter.innerHTML = i
    timer
})

heart.addEventListener("click", function(e){
    e.preventDefault()
    j++
    const li = document.createElement("li")
    if (j == 1){
        li.innerHTML = `${i} has been clicked <span>${j}</span> times`
        likes.append(li)
    }else{
        let spans = document.querySelectorAll("span")
        spans[spans.length-1].innerText = j
    }
})

submit.addEventListener("click", function(e){
    e.preventDefault()
    p = document.createElement("p")
    p.innerHTML = commentInput.value
    list.append(p)

    commentInput.value = ""
    commentInput.focus
})