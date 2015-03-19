var my_card = '';

var first_clicked_card='';
var attempts= 0;
var successful_attempts = 0;
var accuracy = 0;

function check_card(target_element){
	   // target_element.style.display = 'none';
	var my_parent = target_element.parentNode; // this targets the back card parent node
    var my_front_card = my_parent.querySelector('.card_front'); // this allows you to get the .front card. ?? why do u need to use myparent before query selector
	target_element.classList.add('card_back_selected'); // applies the rotation on the back card when clicked
	my_front_card.classList.add('card_front_selected'); // applies the roatation to the front card 
	

		
		if(my_card==''){
			
			// If there is no first clicked Card!!

			my_card = target_element.getAttribute('front');
			first_clicked_card = target_element;
			
			
		} else {

			// If there is a first clicked Card

			attempts++;  // An attempt was made so add it to the var attempts

			if(my_card == target_element.getAttribute('front')){  //If my first card === this second card
				successful_attempts++;							  // increment the SUCCESSFUL attempts by one	
				
				accuracy = Math.round((successful_attempts / attempts) * 100); // At the spot determine the accaruacy by using this function

				document.querySelector('#accuracy').innerHTML = accuracy + "%";  // select Accuracy go inside accuracy and modify it


				var my_parent = target_element.parentNode;                   // Goes inside the SECOND card and goes to the parent element
				my_parent.classList.add('card_container_matched');			 // Applies the class to that parent element (Highlights Yellow)

				var my_front_card = my_parent.querySelector('.card_front');  // Goes to card front
				my_front_card.classList.add('card_matched');				 // Applies the Opacity to the card when matched



				var first_parent = first_clicked_card.parentNode;
				first_parent.classList.add('card_container_matched');

				var first_front_card = first_parent.querySelector('.card_front');
				first_front_card.classList.add('card_matched');

				var total_card_count = document.querySelectorAll('.card_container').length;
				var matched_card_count = document.querySelectorAll('.card_container_matched').length;
				if(total_card_count == matched_card_count){
				alert("You are the winner");
			}


				} else {
					
					window.setTimeout(function(){
					//target_element.style.display = 'block';
					//first_clicked_card.style.display = 'block';
					 target_element.classList.remove('card_back_selected');
        			 my_front_card.classList.remove('card_front_selected');
        			 first_clicked_card.classList.remove('card_back_selected');
        			 first_front_card.classList.remove('card_front_selected');
				},750);
						}
						my_card='';

				}   document.querySelector('#tries').innerHTML = attempts;

}