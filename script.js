document.addEventListener("DOMContentLoaded", () => {
    let output = document.getElementById("output");

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function updateOutput(content) {
        output.innerText = content;  // Update the output div
    }

    // Initial Promise (Resolves after 3 seconds)
    new Promise(resolve => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then(async (arr) => {
        await delay(1000);  // Wait 1 second before filtering out odd numbers
        let filtered = arr.filter(num => num % 2 === 0);
        updateOutput(filtered.join(","));  // Should show "2,4"
        return filtered;
    })
    .then(async (filteredArr) => {
        await delay(2000);  // Wait 2 more seconds before multiplying by 2
        let transformed = filteredArr.map(num => num * 2);
        updateOutput(transformed.join(","));  // Should show "4,8"
    });
});
