import videoData from "./video.json" assert { type: "json" };
import posterData from "./posters.json" assert { type: "json" };
console.log(videoData);
console.log(posterData);
/**
 * @description This function addHeaderDetails() function will set the username and userprofile image 
 */
function addHeaderDetails()
{
  const username = document.getElementById("username");
  username.innerText = "Steffy Jerry";
  const userimage = document.getElementById("userProfile");
  const profileImage = document.createElement("img");
  profileImage.src = "./images/user-image.png";
  profileImage.alt = "user-profile-image";
  userimage.appendChild(profileImage);
}

const videoContainer = document.getElementById("video-content");
/**
 * @description This function addVideoDetails() will get the videodata from the json and this comes to the left part of the main container.
 */
function addVideoDetails() {
  //adding video
  const video = document.createElement("video");
  video.src = videoData.videoUrl;
  video.setAttribute("width", "100%");
  video.controls = true;
  video.poster='https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg';
  videoContainer.appendChild(video);

  //adding video title
  const videoContent = document.createElement("div");
  const title = document.createElement("span");
  title.id = "video-title";
  title.innerText = videoData.title;
  videoContent.appendChild(title);

  //adding video description
  
  const description = document.createElement("p");
  description.innerText = videoData.description;
  description.id = "video-description";
  videoContent.appendChild(description);
  

  // adding ruler
  const ruler = document.createElement("div");
  ruler.classList.add("ruler");
  //adding comments section
  const commentsSection = document.createElement("div");
  commentsSection.classList.add("display-comment");
  //Comment title
  const commentTitle = document.createElement("span");
  commentTitle.id = "comments";
  commentTitle.innerText = "Comments";
  commentsSection.appendChild(commentTitle);

  for (let comment of videoData.comments) {
  //comments content
  const commentsContent = document.createElement("div");
  commentsContent.classList.add("personal-comments");
  //commenter image
  const commenter_image = document.createElement("div");
  commenter_image.classList.add("comment-image");
  const image = document.createElement("img");
  image.src = comment.image;
  image.alt = "commenter image";
  commenter_image.appendChild(image);
  //comment data display
  const comment_data = document.createElement("div");
  comment_data.classList.add("comment-data-display");
  //commenter name
  const commenter_name = document.createElement("span");
  commenter_name.id = "commenter-name";
  commenter_name.innerText = comment.name;
  //comment data
  const comment_content = document.createElement("p");
  comment_content.id = "comments-content";
  comment_content.innerText = comment.comment;
  
  comment_data.appendChild(commenter_name);
  comment_data.appendChild(comment_content);

  commentsContent.appendChild(commenter_image);
  commentsContent.appendChild(comment_data);

  commentsSection.appendChild(commentsContent);
  }
  const responsive_ruler = document.createElement("div");
  responsive_ruler.classList.add("responsive-ruler");
  responsive_ruler.classList.add("ruler");

  videoContainer.appendChild(videoContent);
  videoContainer.appendChild(ruler);
  videoContainer.appendChild(commentsSection);
  videoContainer.appendChild(responsive_ruler);
}
/**
 * 
 * @description This addupcomingProjects() used to create and display the upcoming projects section
 */
function addupcomingProjects()
{
  const upcomingProjectsSection = document.getElementById("upcoming-projects");
  /**
   * Iterating the posterData json data and displaying the data.
   */
  for (let poster of posterData) {
  const project_image = document.createElement("div");
  project_image.classList.add("project-image");
  const upcoming_image = document.createElement("img");
  upcoming_image.src = poster.imageUrl;
  upcoming_image.alt = poster.title;
  project_image.appendChild(upcoming_image);
  upcomingProjectsSection.appendChild(project_image);
    }
}
//Here the function calls are carried out in the following manner.
addHeaderDetails();
addVideoDetails();
addupcomingProjects();