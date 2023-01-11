var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show")
            appearOnScroll.unobserve(entry.target);
        }
    });
},
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOOonQKw2cx1VMcT1uEX7cteMfx-7b074w8OD5FKiHCTUCkJFgz4zMek46mUzaVK4zxw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>{
            msg.innerHTML = "Message Sent Sucessfully"
            setTimeout(function(){
                msg.innerHTML = " "
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})