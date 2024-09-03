let myVar = 45;

console.log(myVar);

$('#mySpan').on('click', function() {
  console.log("Hello, World!");
});

fetch("./index.json")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error
                            (`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => 
                      console.log(data))
                .catch((error) => 
                       console.error("Unable to fetch data:", error));
