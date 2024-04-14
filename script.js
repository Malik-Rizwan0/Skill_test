const citiesData = [
  { city: "Brisbane", code: "BNE", country: " Australia" },
  { city: "Bali (Denpasar)", code: "DPS", country: "Indonesia" },
  { city: "Barcelona", code: "BCN", country: "Spain" },
  { city: "Bangkok Suvarnabhumi", code: "BKK", country: "Thailand" },
  { city: "Berlin Brandenburg", code: "BER", country: "Germany" },
  { city: "Budapest", code: "BUD", country: "Hungary" },
  { city: "Cairns", code: "CNS", country: "Australia" },
  { city: "Copenhagen", code: "CPH", country: "Denmark" },
  { city: "Cairo", code: "CAI", country: "Egypt" }
];

const fromCityInput = document.querySelector('#from-city');
const toCityInput = document.querySelector('#to-city');
const fromDatalist = document.querySelector('#from-cities');
const toDatalist = document.querySelector('#to-cities');
var swap_btn = document.querySelector('.swap-btn')
const searchButton = document.getElementById('search-button');



// Function to populate datalists with city options
function populateDatalists(datalist, options) {
  options.forEach(city => {
    let option = document.createElement('option');
    option.value = ` ${city.city} (${city.code})`;

    // Create a span element for the airplane icon
    let iconSpan = document.createElement('span');
    iconSpan.textContent = '✈️'; // Unicode for airplane icon
    iconSpan.style.marginRight = '5px ';
    

    // Append the icon span and city name to the option element
    option.appendChild(iconSpan);
    option.appendChild(document.createTextNode( ` ${city.country}`));

    datalist.appendChild(option);

    option.style.color = 'black';
    option.style.backgroundColor = '#fff';
  });
}

// Populate datalists on page load
populateDatalists(fromDatalist, citiesData);
populateDatalists(toDatalist, citiesData.slice());


// Handle search button click
searchButton.addEventListener('click', () => {
  const fromCity = fromCityInput.value;
  const toCity = toCityInput.value;
  // Basic validation (can be enhanced)
  if (!fromCity || !toCity) {
    alert('Please enter both "From" and "To" cities.');
    return;
  }

  // Simulate search (can be replaced with actual search functionality)
  alert(`Searching for flights from ${fromCity} to ${toCity}`);
});

// Swap button 
function swapValues() {
  var temp = fromCityInput.value;
  fromCityInput.value = toCityInput.value;
  toCityInput.value = temp;

};


$(function () {
  $("#depart").datepicker({
    numberOfMonths: 2,
  });
}
);
$(function () {
  $("#depart-mobile").datepicker({
    numberOfMonths: 1,
  });
}
);
$(function () {
  $("#return").datepicker({
    numberOfMonths: 2,
    //     showOtherMonths: true,
    //   selectOtherMonths: true
    // showButtonPanel: true
  });
}
);
let content = document.querySelector(".content");
        let cabin_input = document.querySelector(".cabin-input");
        let cabin = document.querySelector("#cabin");
        let child_dec = document.querySelector("#child-dec");
        let child_count = document.querySelector("#child-count");
        let child_inc = document.querySelector("#child-inc");
        let adult_dec = document.querySelector("#adult-dec");
        let adult_count = document.querySelector("#adult-count");
        let adult_inc = document.querySelector("#adult-inc");
        let adult = document.querySelector(".adult");
        let child = document.querySelector(".child");
        let selected_class = document.querySelector('#class');
        let economy_class = document.querySelector('#economy_class');
        let business_class = document.querySelector('#business_class');
        
        document.addEventListener('click', function(event) {
          const cabin_input = document.querySelector('.cabin-input');
          const content = document.querySelector('.content');
          
          // Check if the clicked element is not within the cabin input or its content
          if (!cabin_input.contains(event.target) && !content.contains(event.target)) {
              // If clicked outside, hide the content
              content.style.display = 'none';
          }
      });
      
        economy_class.addEventListener('click', () => {
            selected_class.setAttribute('value', 'Economy');
        });

        business_class.addEventListener('click', () => {
            selected_class.setAttribute('value', 'Business');
        });

        cabin_input.addEventListener('click', () => {
            content.style.display = 'block';
        });

        child_inc.addEventListener('click', () => {
            let num = parseInt(child_count.innerText);
            num = num + 1;
            child_count.innerText = num;
        });

        child_dec.addEventListener('click', () => {
            let num = parseInt(child_count.innerText);
            if (num <= 0) {
                child_dec.disabled = true;
            }
            else {
                num = num - 1;
                child_count.innerText = num;
            }
        });

        adult_inc.addEventListener('click', () => {
            let num = parseInt(adult_count.innerText);
            num = num + 1;
            adult_count.innerText = num;
        });

        adult_dec.addEventListener('click', () => {
            let num = parseInt(adult_count.innerText);
            if (num > 0) {
                num = num - 1;
                adult_count.innerText = num;
            }
        });

        child.addEventListener('click', () => {
            let value = `${child_count.innerText} Child, ${selected_class.value}`;
            cabin.setAttribute('value', value);
        });

        adult.addEventListener('click', () => {
            let value = `${adult_count.innerText} Adult, ${selected_class.value}`;
            cabin.setAttribute('value', value);
        });