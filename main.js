// main.js

// Import the necessary libraries (not needed in this case)
// const ethers = require('ethers');

// Get the button element
const button = document.getElementById('connect-wallet');

// Add an event listener to the button
button.addEventListener('click', async () => {
  // Check if the user has MetaMask installed
  if (typeof window.ethereum !== 'undefined') {
    // Request access to the user's Ethereum account
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    // Get the user's Ethereum account address
    const accountAddress = accounts[0];

    // Create a new Ethers.js provider instance
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Create a new Etersjs signer from Metamask 
      let signer;
      try{
        signer=await provider.getSigner();
        console.log(signer);
      }catch(err){
        console.error("Failed get Signer",err);
      }

    
   
  
  

  
    

    
   
  
 

  

 


 

 

 


 


 
console.log(provider)

}

})