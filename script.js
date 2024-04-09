'use strict';

/**
 * * This Project is my first use of JavaScript
 * * For creating UI elements and is not exactly a 
 * * Functioning project
 * ? The code works but servers no real use
 */


// Globals
const doc = document;
const docQ = ctx => doc.querySelector(ctx);
const docQAll = ctx => doc.querySelectorAll(ctx);

// Global variables
const btnOpenModal = docQAll(".show-modal");
const modalWindow = docQ(".modal"); 
const overlay = docQ(".overlay");
const btnCloseModal = docQ(".close-modal");

/**
 * * looping through node list of btns for modal opens
 * * and adding event handlers for click events
 */
for (let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener("click", function() {
        // Dev - Logs Btn id
        console.log("Dev - Open", btnOpenModal[i]);

        // displaying modal by removing the hidden classes
        // doesnt use "." to access the class
        modalWindow.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

// function for closing the modal window
const closeModal = function() {
        // Dev - Logs Btn close event
        console.log("Dev - Closed");

        // Hiding modal by adding the hidden classes
        modalWindow.classList.add("hidden");
        overlay.classList.add("hidden");
}

// Creates event listener on close modal btn
btnCloseModal.addEventListener("click", closeModal);

// Creates event listener on the overlay element of the screen
overlay.addEventListener("click", closeModal);

// handles key press event for "ESC"
doc.addEventListener("keydown", function(ctx) {
    /**
     * * Looks at event object to get key that was pressed
     * * and checks if it was the Escape key
     * @ctx = the event
     * ! Only works if modal is not hidden
    */  
    if (ctx.key === "Escape") {

        // Checks if modal window is displayed
        if(!modalWindow.classList.contains("hiden")){
            closeModal();
        }
        
    }
});

/**
 * * FOR GitHub -
 * ! Javascript writen by - @zzixM
 * ! index.html and style.css writen by - @jonasschmedtmann
 * ? project from "The Complete JavaScript Course 2024: From Zero to Expert!"
 * ? this project was not a colaberation
 */