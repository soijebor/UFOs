// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// First, clear out any existing data
tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
tableData.forEach((UFO)=>{
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.entries(UFO).forEach(([key,value])=>{
        let cell = row.append("td");
        cell.text(value);
    });
});


//get button and input references
let button = d3.select("#filter-btn");
let Date_Input = d3.select("#datetime");
let City_Input = d3.select("#city");
let State_Input= d3.select("#state");
let Country_Input = d3.select("#country");
let Shape_Input = d3.select("#shape");

//This function clears the existing data and will create table with data filtered by each element
function buildTable(tableData) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    tableData.forEach((UFO)=>{
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.entries(UFO).forEach(([key,value])=>{
            let cell = row.append("td");
            cell.text(value);
        });
    });

}


// This function filters through each search filter
button.on("click", function() {
    // Save the element, value, and id of the filter that was changed
    let New_Date = Date_Input.property("value");
    let New_City = City_Input.property("value").toLowerCase();
    let New_State = State_Input.property("value").toLowerCase();
    let New_Country = Country_Input.property("value").toLowerCase();
    let New_Shape = Shape_Input.property("value").toLowerCase();

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
    let Filter_Date = tableData.filter(UFO => {
        if (New_Date === ""){return UFO.datetime === UFO.datetime}
        else {return UFO.datetime === New_Date;}
    });

    let Filter_City = Filter_Date.filter(UFO => {
        if (New_City === ""){return UFO.city === UFO.city}
        else {return UFO.city === New_City;}
    });
    let Filter_State = Filter_City.filter(UFO => {
        if (New_State === ""){return UFO.state === UFO.state}
        else {return UFO.state === New_State;}
    });
    let Filter_Country = Filter_State.filter(UFO => {
        if (New_Country === ""){return UFO.country === UFO.country}
        else {return UFO.country=== New_Country;}
    });
    let Filter_Shape = Filter_Country.filter(UFO => {
        if (New_Shape === ""){return UFO.shape === UFO.shape}
        else {return UFO.shape === New_Shape;}
    });
    
    // Call function to apply all filters and rebuild the table
    buildTable(Filter_Shape);

    console.log(New_Date, New_City, New_State, New_Country, New_Shape);

});
