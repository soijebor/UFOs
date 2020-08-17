// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
    });
    }

// Keep track of all filters
var filters = {};

function handleClick() {
    // Grab the datetime, city, state, country, shape value from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value").toLowerCase();
    let state = d3.select("#state").property("value").toLowerCase();
    let country = d3.select("#country").property("value").toLowerCase();
    let shape = d3.select("#shape").property("value").toLowerCase();



    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Check to see if a city was entered and filter the
    // data using that city.
    if (city) {
    // Apply `filter` to the table data to only keep the
    // rows where the `City` value matches the filter value
    filteredData = filteredData.filter(row => row.city === city);
    }

    // Check to see if a state was entered and filter the
    // data using that state.
    if (state) {
    // Apply `filter` to the table data to only keep the
    // rows where the `State` value matches the filter value
    filteredData = filteredData.filter(row => row.state === state);
    }

    // Check to see if a country was entered and filter the
    // data using that country.
    if (country) {
    // Apply `filter` to the table data to only keep the
    // rows where the `Country` value matches the filter value
    filteredData = filteredData.filter(row => row.country === country);
    }

    // Check to see if a shape was entered and filter the
    // data using that shape.
    if (shape) {
    // Apply `filter` to the table data to only keep the
    // rows where the `Shape` value matches the filter value
    filteredData = filteredData.filter(row => row.shape === shape);
    }
    
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);