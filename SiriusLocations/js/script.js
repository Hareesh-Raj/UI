import locationData from "./locations.json" assert { type: 'json'};
$(function () {
    $("#tabs").tabs();
  });
  
  $(function () {
    $("#accordion").accordion({
      active: true,
    });
  });
  function addLocationData()
  {
    const table = $("<table>");
    table.addClass("location-table");
    for(let data of locationData)
    {
        const row = $("<tr>");
        const imageData = $("<td>");
        const stateData = $("<td>");
        const cityData = $("<td>");
        const contactData = $("<td>");

        const image = $("<img>");
        image.attr("src",`../images/flags/${data.country}.png`);
        imageData.append(image);
        row.append(imageData);
        stateData.text(data.country);
        row.append(stateData);
        cityData.text(data.city);
        row.append(cityData);
        contactData.text(data.contact);
        row.append(contactData);
        table.append(row);
    }
    $("#tabs-3").append(table);
}
  addLocationData();