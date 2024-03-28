/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A Batch Normalized Inference Network",
    authors:
      "This is a neural network architecture designed to improve the efficiency and stability of inference tasks by normalizing the activations of each layer during inference, enabling smoother and faster predictions in machine learning applications.",
    conferences:
      " ",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "This project presents a novel approach to enhancing the performance and reliability of inference networks through the implementation of batch normalization techniques. By integrating batch normalization into the network architecture, we demonstrate improved efficiency and robustness in model inference tasks.",
    absbox: "absPopup1",
  },

  {
    title: "Malaria detection system",
    authors:
      "A Malaria detection system utilizes image processing and machine learning algorithms to accurately diagnose malaria from microscopic images of blood smears.",
    conferences:
      " ",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "This project presents a robust malaria detection system leveraging convolutional neural networks trained on a dataset of annotated blood smear images, achieving high accuracy in automated diagnosis. By integrating advanced image processing techniques and machine learning algorithms, our system demonstrates significant potential for rapid and accurate malaria detection, aiding in early diagnosis and treatment.",
    absbox: "absPopup2",
  },

  {
    title:
      "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
    authors: "This study conducts an extensive analysis of preprocessing techniques for word representation learning in affective computing tasks.",
    conferences:
      " ",
    researchYr: 2024,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "In this project, various preprocessing methods for word representation learning are systematically evaluated in the context of affective tasks, including sentiment analysis and emotion recognition. The findings highlight the impact of preprocessing choices on model performance and provide insights into optimizing preprocessing pipelines for effective representation learning in affective computing.",
    absbox: "absPopup3",
  },

  {
    title:
      "Persnalized Ecommerce recommender system",
    authors:
      "This project aims to develop a personalized e-commerce recommender system that leverages machine learning algorithms to deliver tailored product recommendations to individual users based on their browsing and purchasing history.",
    conferences:
      " ",
    researchYr: 2024,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "The personalized e-commerce recommender system proposed in this study employs collaborative filtering and content-based filtering techniques to analyze user behavior and product characteristics, enhancing the shopping experience by suggesting items that align with users' preferences and interests. Through rigorous evaluation and comparison with traditional recommendation methods, our system demonstrates improved recommendation accuracy and user satisfaction, highlighting its potential to drive sales and enhance customer engagement in e-commerce platforms.",
    absbox: "absPopup4",
  },

  {
    title: "Heart disease detection",
    authors: "This project focuses on developing a heart disease detection system using machine learning algorithms to analyze medical data and predict the likelihood of cardiovascular issues in patients.",
    conferences:
      " ",
    researchYr: 2023,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "The heart disease detection system presented in this study utilizes a dataset of patient health metrics and clinical attributes to train and evaluate predictive models for early detection of cardiovascular disorders. By leveraging machine learning techniques such as logistic regression, decision trees, and ensemble methods, the system demonstrates promising accuracy in identifying individuals at risk of heart disease, potentially enabling timely interventions and preventive measures to improve patient outcomes.",
    absbox: "absPopup5",
  },

  {
    title: "School Management System",
    authors: "The School Management System is a comprehensive software solution designed to streamline administrative tasks, facilitate communication between stakeholders, and enhance overall efficiency in educational institutions.",
    conferences:
      " ",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "This project aims to develop a School Management System that integrates features such as student information management, attendance tracking, grade recording, and communication tools for teachers, students, and parents. By leveraging modern technologies and user-friendly interfaces, the system seeks to optimize school operations, improve data management practices, and foster collaboration within the educational community.",
    absbox: "absPopup6",
  },

  {
    title:
      "Church Management System",
    authors: "The Church Management System is a software platform designed to assist churches in organizing and managing various administrative tasks, such as member records, event scheduling, donations tracking, and communication.",
    conferences:
      " ",
    researchYr: 2023,
    citebox: "popup7",
    image: "assets/images/research-page/imageDecomposition.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "This project aims to develop a comprehensive Church Management System that offers features tailored to the needs of religious organizations, including member management, event planning, financial tracking, and communication tools. By leveraging modern technology, the system seeks to streamline church operations, enhance communication within the congregation, and facilitate effective stewardship of resources.",
    absbox: "absPopup7",
  },
  {
    title:
      "Kidney disease detection",
    authors:
      "The Kidney Disease Detection System is a machine learning-based application designed to analyze medical data, including patient demographics, symptoms, and laboratory results, to predict the presence of kidney disease.",
    conferences:
      " ",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/kidney.png",
    citation: {
      vancouver:
        "<a href='https://github.com/sammypeter' target = '_blank'>Sammy Peter's GitHub</a>",
    },
    abstract:
      "This project aims to develop a robust Kidney Disease Detection System using a dataset of patient records and various machine learning algorithms to accurately classify individuals as either having or not having kidney disease based on their health parameters. By leveraging predictive modeling techniques and thorough evaluation, the system demonstrates its potential for early detection and intervention in kidney-related disorders, thereby improving patient outcomes and healthcare delivery.",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
    (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences}  
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CODES
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
