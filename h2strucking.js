// // const counters = document.querySelectorAll (".counters span");
// // const container = document.querySelector (".counters");
// // let activated = false;

// // window.addEventListener ("scroll", () => {
// //     if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
// //      //select all counter
// //      counters.forEach(counter => {
// //         //set counter value = 0
// //         counter.innerText = 0;
// //         //set count variable to track the count
// //         let count = 0;

// //         //update count function
// //         function updateCount() {
// //             //get counter target number to count to
// //             const target = parseInt (counter.dataset.count)
            
// //             //as long as the count is below below the target number
// //             if (count < target) {
// //                 //increment the count
// //                 count ++;
                
// //                 //repeat this every 10 milliseconds
// //                 setTimeout (updateCount, 10);

// //             }
// //             //when the target is reached
// //             else{
// //                 count.innerText = target;
// //             }
// //         }
// //         //run the function initially
// //         updateCount();

// //         //set activated to true
// //         activated = true;
// //      });   
// //      //if the page is scrolled back a certain amount or to the top and activated is true.
// //     }
// //     else if(
// //         pageYOffset < counter.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true)
// //         {
// //             //set all counters
// //             counters.forEach (container =>{

// //                 //set counter text back to 0
// //                 counter.innerText = 0;
// //             });

// //             //set activated to false
// //             activated = false;
            
// //         }
// // });


// document.addEventListener("DOMContentLoaded", function() {
//     const counters = [
//         { id: "loads", value: 1570 },
//         { id: "satisfaction", value: 95 },
//         { id: "services", value: 99 },
//         { id: "team", value: 50 }
//     ];

//     counters.forEach(counter => {
//         let count = 0;
//         const target = document.getElementById(counter.id);
//         const updateCounter = setInterval(() => {
//             if (count < counter.value) {
//                 count += Math.ceil(counter.value / 100); // Increment value
//                 if (count > counter.value) count = counter.value; // Ensure it does not exceed target value
//                 target.textContent = count;
//             } else {
//                 clearInterval(updateCounter); // Stop when target is reached
//             }
//         }, 20); // Update interval in milliseconds
//     });
// });


let cbar = document.getElementsByClassName ("nav-list")
cbar.style.color='blue'