const postcodes = require('node-postcodes.io')
async function nearest(){
    let result = await postcodes.nearest('PO123AA', {
        radius: 1000,
        limit: 5
    })
    let transformedCodes = result.result.map(code => code.postcode);
    // find users that matches
    console.log(transformedCodes);
}
nearest();

