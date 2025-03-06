document.getElementById("startBtn").addEventListener("click", manipulateArray);

function manipulateArray() {
    const output = document.getElementById("output");
    output.innerText = "Processing...";

    // Step 1: Create a Promise that resolves with the array after 3 seconds
    new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then(arr => {
        return new Promise(resolve => {
            setTimeout(() => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                output.innerText = evenNumbers.join(", ");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Step 3: Multiply even numbers by 2 after another 2 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                output.innerText = doubledNumbers.join(", ");
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}
