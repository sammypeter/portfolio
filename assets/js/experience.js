AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "sammy techvantage",
    time: "(March, 2024 - present)",
    desp: "<li>Undertaken a comprehensive array of projects spanning data science, website development and networking to elevate our technological capabilities and client solutions.</li> <li>Made changes in the current progressive web app of ecommerce to react to different actions.</li> <li>Participated in network projects</li>",
  },
  {
    title: "Kisii University Deep Learning Club",
    cardImage: "assets/images/experience-page/ksu.jpeg",
    place: "Kisii University",
    time: "(Jan - May, 2024)",
    desp: "<li>Developed heart disease prediction system.</li><li>Developed ecommerce recommender system.</li><li>Developed kidney disease prediction system</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Jan - Dec, 2023)",
    desp: "<li>Worked with University google club.</li><li>Developed several websites as part of my google club projects</li>",
  },
  {
    title: "County Government Of Kitui Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "County Government Of Kitui",
    time: "(May - Aug, 2023)",
    desp: "<li>Worked on networks in the ministry of water and irrigation</li><li>Performed data analysis on ministry data</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [ 
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/gd.png",
    description:
      "Responsible for handling open source contributions for the project church management system.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/github.png",
    description:
      "Contributed in developing weather forecast project UX.",
  },
  {
    title: "Deep Learning Club",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Malaria detection system, In kisii university deep learning club.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Kaggle",
    subtitle: "Participant",
    image: "assets/images/experience-page/uplift.png",
    desp: "Parcipated in machine learning hackthon",
    href: "https://www.kaggle.com/",
  }, 
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
