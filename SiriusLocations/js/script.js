import locationData from "./locations.json" assert { type: "json" };
$(function () {
  $("#tabs").tabs();
  $("#accordion").accordion({
    active: true,
  });
});

function addLocationData() {
  var table = $("<table>");
  table.addClass("location-table");
  $.each(locationData, function (data, val) {
    var row = $("<tr>");
    $.each(val, function (data1, val1) {
      if (data1 == "country") {
        row.append(
          $("<td>").append(
            $("<img>").attr("src", `../images/flags/${val1}.png`)
          )
        );
      } else {
        row.append($("<td>").text(val1));
      }
    });
    table.append(row);
  });
  $.each(locationData, function (data, val) {
    console.log(val["country"]);
  });
  $("#tabs-3").append(table);
}
addLocationData();
