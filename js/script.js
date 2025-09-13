const images = document.querySelectorAll(".menu-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");
  const prevBtn = document.querySelector(".lightbox .prev");
  const nextBtn = document.querySelector(".lightbox .next");

  let currentIndex = 0;

  // Open lightbox
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Next image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  // Previous image
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  // Close if clicked outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Optional: use keyboard arrows
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "Escape") closeBtn.click();
    }
  });

  /*EmailJs*/
  function sendEmail() {
  emailjs.init({
  publicKey: '7XrwXhjTWbjENBLAr',
});
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();
const params = {
  from_name:name,
  from_email:email,
  from_phone:phone,
  message:message,

};
emailjs.send("service_1bxb5li","template_qq1n1m8", params)
.then(function() {
  alert("Email sent!");
})
.catch(function() {
   alert("Failed to sent!");
});
}
