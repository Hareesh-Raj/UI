$(document).ready(function () {
  $.ajax({
    url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
    success: function (videoData) {
      //adding video
      videoContainer.append(
        $("<video>").attr({
          src: videoData.videoUrl,
          width: "100%",
          controls: true,
          poster:
            "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg",
        })
      );
      //adding video title
      var videoContent = $("<div>");

      videoContent.append(
        $("<span>").attr("id", "video-title").text(videoData.title)
      );

      //adding video description

      videoContent.append(
        $("<p>").text(videoData.description).attr("id", "video-description")
      );

      //adding comments section
      const commentsSection = $("<div>").addClass("display-comment");
      //Comment title
      commentsSection.append(
        $("<span>").attr("id", "comments").text("Comments")
      );

      $.each(videoData.comments, function (data, comment) {
        //comments content
        const commentsContent = $("<div>");
        commentsContent.addClass("personal-comments");
        //commenter image
        const commenter_image = $("<div>").addClass("comment-image");
        const image = $("<img>");
        image.attr("src", comment["image"]);
        image.attr("alt", "commenter image");
        commenter_image.append(image);
        //comment data display
        var comment_data = $("<div>").addClass("comment-data-display");
        //commenter name
        comment_data.append(
          $("<span>").attr("id", "commenter-name").text(comment["name"])
        );
        //comment data
        comment_data.append(
          $("<p>").attr("id", "comments-content").text(comment["comment"])
        );

        commentsContent.append(commenter_image);
        commentsContent.append(comment_data);
        commentsSection.append(commentsContent);
      });

      videoContainer.append(videoContent);
      // adding ruler
      videoContainer.append($("<div>").addClass("ruler"));
      videoContainer.append(commentsSection);
      //responsive ruler
      videoContainer.append(
        $("<div>").addClass("responsive-ruler").addClass("ruler")
      );
    },
  });

  function addHeaderDetails() {
    $("#username").text("Steffy Jerry");
    $("#userProfile").append(
      $("<img>").attr({
        src: "./images/user-image.png",
        alt: "user-profile-image",
      })
    );
  }

  const videoContainer = $("#video-content");
  $.ajax({
    url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
    success: function (posterData) {
      // const upcomingProjectsSection = $("#upcoming-projects");
      $.each(posterData, function (data, poster) {
        $("#upcoming-projects").append(
          $("<div>")
            .addClass("project-image")
            .append(
              $("<img>").attr({ src: poster["imageUrl"], alt: poster["title"] })
            )
        );
      });
    },
  });
  function main() {
    addHeaderDetails();
  }
  main();
});
