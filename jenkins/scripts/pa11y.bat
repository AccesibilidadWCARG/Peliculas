const pally = require('pa11y')

async function run() {
        const results = await pally('https://www.eventbrite.com/');
        console.log(results)
}

run();