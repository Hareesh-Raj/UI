$.ajax({
  url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
  success: function (videoData) {
    //adding video
    const video = $("<video>");
    video.attr("src", videoData.videoUrl);
    video.attr("width", "100%");
    video.attr("controls", true);
    video.attr(
      "poster",
      "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg"
    );
    videoContainer.append(video);

    //adding video title
    const videoContent = $("<div>");
    const title = $("<span>");
    title.attr("id", "video-title");
    title.html(videoData.title);
    videoContent.append(title);

    //adding video description

    const description = $("<p>");
    description.text(videoData.description);
    description.attr("id", "video-description");
    videoContent.append(description);

    // adding ruler
    const ruler = $("<div>");
    ruler.addClass("ruler");
    //adding comments section
    const commentsSection = $("<div>");
    commentsSection.addClass("display-comment");
    //Comment title
    const commentTitle = $("<span>");
    commentTitle.attr("id", "comments");
    commentTitle.text("Comments");
    commentsSection.append(commentTitle);

    for (let comment of videoData.comments) {
      //comments content
      const commentsContent = $("<div>");
      commentsContent.addClass("personal-comments");
      //commenter image
      const commenter_image = $("<div>");
      commenter_image.addClass("comment-image");
      const image = $("<img>");
      image.attr("src", comment.image);
      image.attr("alt", "commenter image");
      commenter_image.append(image);
      //comment data display
      const comment_data = $("<div>");
      comment_data.addClass("comment-data-display");
      //commenter name
      const commenter_name = $("<span>");
      commenter_name.attr("id", "commenter-name");
      commenter_name.text(comment.name);
      //comment data
      const comment_content = $("<p>");
      comment_content.attr("id", "comments-content");
      comment_content.text(comment.comment);

      comment_data.append(commenter_name);
      comment_data.append(comment_content);

      commentsContent.append(commenter_image);
      commentsContent.append(comment_data);

      commentsSection.append(commentsContent);
    }
    const responsive_ruler = $("<div>");
    responsive_ruler.addClass("responsive-ruler");
    responsive_ruler.addClass("ruler");

    videoContainer.append(videoContent);
    videoContainer.append(ruler);
    videoContainer.append(commentsSection);
    videoContainer.append(responsive_ruler);
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    alert("Status: " + textStatus);
    alert("Error: " + errorThrown);
  },
});

function addHeaderDetails() {
  console.log("helloo");
  const username = $("#username");
  username.html("Steffy Jerry");
  const userimage = $("#userProfile");
  const profileImage = $("<img>");
  profileImage.attr("src", "./images/user-image.png");
  profileImage.attr("alt", "user-profile-image");
  userimage.append(profileImage);
}

const videoContainer = $("#video-content");
$.ajax({
  url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
  success: function (posterData) {
    const upcomingProjectsSection = $("#upcoming-projects");
    for (let poster of posterData) {
      const project_image = $("<div>");
      project_image.addClass("project-image");
      const upcoming_image = $("<img>");
      upcoming_image.attr("src", poster.imageUrl);
      upcoming_image.attr("alt", poster.title);
      project_image.append(upcoming_image);
      upcomingProjectsSection.append(project_image);
    }
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    alert("Status: " + textStatus);
    alert("Error: " + errorThrown);
  },
});
function main() {
  addHeaderDetails();
}
main();
