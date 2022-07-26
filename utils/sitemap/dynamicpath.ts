import { getAllProducts } from "../../lib/shopify"

const dynamicPaths = async ( ) => {
  
  const products = await getAllProducts() // some remote API call maybe!

  let productArray:Array<string> = [];

     products.map((product:any) => {
     
      const productType = product.node.productType.value.toLowerCase().split(" ").join("-");
      const productName = product.node.handle;
  
      productArray.push(`https://dev.oaktreemobility.co.uk/${productType}/${productName}`)
    })

}

export default Promise.all([dynamicPaths])

// const prime = async (N) => {
//   try {
//       const arr = []

//       // Iterate from 2 to N-1 to check
//       // which numbers are prime
//       for (var i = 2; i < N; i++) {
//           let j = 2
//           while (j < i) {
//               // Check if the number is 
//               // divisble by any number
//               // except 1 and itself
//               if (i % j == 0) {
//                   break
//               }
//               j++;
//           }
//           if (j == i) {
//               // If this condition holds 
//               // true then it means that
//               // the number is not 
//               // divisible by any number
//               // except 1 and itself. 
//               // Therefore, it is a prime 
//               // number and add this number
//               // to the array.
//               arr.push(j)
//           }
//       }

//       // Return the array
//       return arr
//   }
//   catch (e) {

//       // Display the error in case
//       // anything wrong happened
//       console.log(e)
//   }
// }

// const findPrime = async () => {
//   try {
//       let N = 20

//       // Call prime() passing argument
//       // N which is equal to 20 and 
//       // store the result in an array
//       const primeAry = await prime(N)

//       // Print the array
//       console.log(primeAry)
//   }
//   catch (e) {
        
//       // Display the error in case
//       // anything wrong happened
//       console.log(e)
//   }
// }

// // Calling findPrime() method
// findPrime()
