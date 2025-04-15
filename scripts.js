/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// This is an array of strings (TV show titles)
let titles = [{
  title: "Covered Bridge Puzzle (1000 Pieces)",
  //plan to make 
  price: "19.99",
  description: "A delightful puzzle ilustrated by Garry Walton, sized at 20' x 27' ",
  pieces: '1000 pieces',
  imageURL : "./Covered_bridge.jpeg",
  puzz_Link: "https://www.whitemountainpuzzles.com/products/covered-bridge",
  UPC_num: "(not found on the site)",
  tags: "Nature"
 },  
 { 
  title: "Easter Cookie Puzzle (500 pieces)",
  price: "16.99",
  description: " Delicious Easter Cookies in time for the upcoming holiday, 20 x 15 inches",
  pieces: '500',
  imageURL : "./Easter_puzzle.jpeg",
  puzz_Link: "https://www.cobblehillpuzzles.com/collections/easter/products/easter-cookies-45043", 
  UPC_num: "625012450430",
  tags: "Holiday",
},
 { 
  title:  "Coastal Getaway Puzzle (300 pieces)",
  price: "16.99",
  description: "A soothing view of the beach made by Master Pieces",
  pieces: '300',
  imageURL: "./Coastal.jpg",
  puzz_Link: "https://www.walmart.com/ip/MasterPieces-300-Piece-EZ-Grip-Jigsaw-Puzzle-Coastal-Getaway-18-x24/709875063",
  UPC_num: "(not found on the site)",
  tags: "Nature",
}, { 
  title: "Blue Sky Birds Puzzle (35 pieces)",
  price: "16.43",
  description: "A nice children's puzzle of rows of beautiful birds on a wire, weighs 1lb",
  pieces: '35',
  imageURL: "./Birds.jpg",
  puzz_Link: "https://www.walmart.com/ip/Cobble-Hill-Blue-Sky-Birds-35-Piece-Children-s-Puzzles/268222747?adid=22222222264452857774&wmlspartner=wmtlabs&wl0=b&wl1=o&wl2=c&wl3=74766946344642&wl4=dat-2326566604753552:loc-71238&wl5=71757&wl6=&wl7=&wl14=blue%20sky%20birds%20puzzle%2035%20piece&veh=sem&&msclkid=f7609687c1b011895ed1f17cce4b0eed&gclid=f7609687c1b011895ed1f17cce4b0eed&gclsrc=3p.ds",
  UPC_num: "(not found on the site)",
  tags: "Kids",
}, 
 { 
  title: "Market Puzzle (5000 pieces)",
  price: "79.99",
  description: "A picture of a lovely and lively market square, 40' x 60' ",
  pieces: '5000',
  imageURL: "./Market.jpeg",
  puzz_Link: "https://www.michaels.com/product/masterpieces-5000-piece-jigsaw-puzzle-for-adults-family-or-kids---buy-local-honey---manufacturer-defect---40x60-155389393128472602",
  UPC_num: "(not found on the site)",
  tags: "Eco-friendly",
},
 { 
  title: "Countryside general store Puzzle (1000 pieces)",
  price: "19.99",
  description: "A picture of Jeb's general store inthe countryside, 13.8' x 10' ",
  pieces: '1000',
  imageURL: "./Parked.jpeg",
  puzz_Link: "https://www.amazon.com/CASTORLAND-Puzzles-Painting-Castorland-C-104505-2/dp/B07XTTFBP2",
  UPC_num: "155389393128472603",
  tags: "Scenic",
},
 { 
  title: "Meeting Totoro 'My Neighbor Totoro'  Puzzle (366 pieces)",
  price: "36.99",
  description: "A picture of the well known Studio Ghibli move My Neightbor Totoro, 307 x 231 x 21 mm (when built) ",
  pieces: '366',
  imageURL: "./Totoro.jpg",
  puzz_Link: "https://www.barnesandnoble.com/w/meeting-totoro-my-neighbor-totoro-ensky-artboard-366-piece-jigsaw-puzzle-ensky/1141737214?ean=4970381504458",
  UPC_num: "4970381504458",
  tags: "Popular",
},
 { 
  title: "National Parks 2 Puzzle (1000 pieces)",
  price: "24.95",
  description: "An array of various famous stamps of America's national parks, 22' x 28' (in.) ",
  pieces: '1000',
  imageURL: "./National_parks.jpg",
  puzz_Link: "https://www.barnesandnoble.com/w/national-parks-2-1000-pc-puzzle-cavallini-co/1145017337?ean=9781639473755",
  UPC_num: "9781639473755",
  tags: "Nature"
},
];


//1.https://www.puzzlewarehouse.com/kodak-cork-covered-bridge-by-garry-walton-bridge/
//2.https://www.puzzlewarehouse.com/easter-cookies-500-pieces-by-cobble-hill/
//3.https://www.puzzlewarehouse.com/coastal-getaway-300-pieces-by-masterpieces/
//4.https://www.puzzlewarehouse.com/blue-sky-birds-35-pieces-by-cobble-hill/

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
   
    

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, titles[i].title, titles[i].imageURL,titles[i].price, titles[i].description, titles[i].puzz_Link, titles[i].UPC_num, titles[i].tags); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, newPrice, newDesc, newLink, newItemnum, newTags) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardPrice = card.querySelector("#card-price");
  cardPrice.textContent = "$" + newPrice;

  const cardDesc = card.querySelector("#card-desc");
  cardDesc.textContent = newDesc

  const cardLink = card.querySelector("a");
  cardLink.href = newLink;

  const cardItemNum = card.querySelector("#card-itemNum");
  cardItemNum.textContent = "Item number: " + newItemnum;

  const cardnewTags = card.querySelector("#tag");
  cardnewTags.textContent = newTags;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function sortCardsAtoZ() {
  titles.sort((a, b) => a.title.localeCompare(b.title)) ;
  showCards();

}
function sortCardsZtoA() {
  titles.sort((a, b) => b.title.localeCompare(a.title)) ;
  showCards();

}
function sortPriceLowtoHigh() {
  //compare prices from lowest to highest
  
  //each price object is coverted to float
  titles.forEach(title => {
    title.price = parseFloat(title.price)
   });
    
  
  titles.sort((a,b) => a.price - b.price)
  

  showCards();
}
 function filteredPieces(){
  //goes through each pieces object in the array and makes it an int
    titles.forEach(title =>{
      title.pieces = parseInt(title.pieces)
    });
    
    //filters it out if it less than 500
    titles = titles.filter(title => title.pieces > 500);
    showCards();
 }
 function sortPriceHightoLow() {
  //compare prices from lowest to highest
 
  
  titles.forEach(title => {
    title.price = parseFloat(title.price)
   });
    
  
  titles.sort((a,b) => b.price - a.price)

  showCards();
}
