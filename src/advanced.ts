// 1. Async Delay (Slide 8)
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function runDemo() {
    console.log("--- START ---");

    // 2. Error Handling (Slide 9)
    try {
        console.log("Waiting 2 seconds...");
        await sleep(2000); // The 'await' pause

        // 3. Object Manipulation (Slide 7)
        const orig = { a: 1, b: 2, c: 3 };
        const copy = { ...orig, d: 99 }; // Spread (Clone + Add)
        const { a, b } = copy;           // Destructuring (Extract)

        console.log("Original:", orig);
        console.log("Copy:", copy);
        console.log("Extracted:", a, b);

        // Trigger an error intentionally
        throw new Error("Simulated Crash!");

    } catch (e) {
        console.log("CAUGHT ERROR:", e);
    }
    console.log("--- END ---");
}

runDemo();
