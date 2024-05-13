var radios = document.querySelectorAll('input[name="items"]');
var elements = document.querySelectorAll('.ck');

var targetDivs = document.querySelectorAll('.its');

function startButton() {
    
    

    radios.forEach(function(radio, index) {
        radio.addEventListener("change", function() {
            console.log("a radio button has been clicked.");
            var radioButtonValue =  radio.value;
            elements.forEach(function(element, idx) {
                if (idx === index) {
                    console.log("this if idx === area is being accessed")
                    targetDivs.forEach(function(targetDiv) {
                        var targetValue= targetDiv.getAttribute('value');
                        console.log(targetDiv);
                        console.log(radioButtonValue+" = "+targetValue);
                        toggleClass(targetDiv, radioButtonValue===targetValue);
                        
                    }); 
                    element.classList.remove("ck");
                } else {
                    console.log("this add ck area is being accessed")
                    element.classList.add("ck");
                }
            });
        });

        function toggleClass(element, isChecked) {
            console.log("Element:", element);
            console.log("isChecked:", isChecked);
            
            if (isChecked) {
                element.classList.add("kc");
                console.log("Added 'kc' class to:", element);
            } else {
                element.classList.remove("kc");
                console.log("Removed 'kc' class from:", element);
            }
        }

    });
    
}

