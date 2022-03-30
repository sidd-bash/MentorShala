// START THE INTRODUCTION
function runQuestionIntro() {
    $('.intro p.first').addClass('loading').append('<i></i>');
    setTimeout(function() {
       $('p.first').removeClass('loading').addClass('complete').find('span').fadeIn(250);
       setTimeout(function() {
           $('p.complete').next().addClass('loading').append('<i></i>');
           setTimeout(function() {
               $('p.loading').removeClass('loading').addClass('complete').find('span').fadeIn(250);
               $('.question').first().addClass('active running');
               showQuestionBubble();
           }, 3000);
       }, 2000);
   }, 3000);
}

runQuestionIntro();

// AFTER ASKING THE QUESTION LOAD IN THE CHOICES
function transitionQuestion() {
    setTimeout(function() {
        $('p.loading').removeClass('loading').addClass('complete').find('span').fadeIn(250);
        $('.question.active .confirm-container').fadeIn(250);
    }, 3000);
}

function showQuestionBubble() {
    if($('.question').hasClass('running')) {
        $('.question.running').find('p:first-child').addClass('loading').append('<i></i>');
        transitionQuestion();
    }
}

// Answers per Users Response Question 1
$('.q-one .confirm-button').one('click', function(e) {
    $(this).addClass('selected');
    $('.confirm-container > div').slideUp(500).fadeOut(500);
    // slide up first question
    $('.q-one .q-wrap').slideUp(500);
    if($(this).parents($('.question')).hasClass('q-one')) {
        $('.intro').slideUp(500).fadeOut(500);
        if($(this).hasClass('confirm-yes')) {
            $('.q-one .response').addClass('complete').text('Great! Its a good thing to ask questions.');
            $('.q-one .confirm-no, .q-one .confirm-not-sure').fadeOut(250);
            if($('.q-one p:first-child').hasClass('locations')) {
                confirmedLocations = true;
            }
        }
        else if($(this).hasClass('confirm-no')) {
            $('.q-one .response').addClass('complete').text('So would you like to know more about the platform?');
            $('.q-one .confirm-yes, .q-one .confirm-not-sure').fadeOut(250);
        }
        else if($(this).hasClass('confirm-not-sure')) {
            $('.q-one .response').addClass('complete').text('I am a bot not you.');
            $('.q-one .confirm-no, .q-one .confirm-yes').fadeOut(250);
        }
    }
    $('.q-one').removeClass('running').next().addClass('active running');
   showQuestionBubble();
});

// Answers per Users Response Question 2
$('.q-two .confirm-button').one('click', function(e) {
    $(this).addClass('selected');
    $('.confirm-container > div').slideUp(500).fadeOut(500);
    // slide up second question
    $('.q-two .q-wrap').slideUp(500);
    if($(this).parents($('.question')).hasClass('q-two')) {
        $('.q-one').slideUp(500).fadeOut(500);
        if($(this).hasClass('confirm-yes')) {
            $('.q-two .response').addClass('complete').text('Register --> Fill personal Details --> Start Matching');
            $('.q-two .confirm-no, .q-two .confirm-not-sure').fadeOut(250);
            if($('.q-two p:first-child').hasClass('relative')) {
                confirmedRelatives = true;
            }
        }
        else if($(this).hasClass('confirm-no')) {
            $('.q-two .response').addClass('complete').text('Right Swipe all the mentors according to your need --> Mentor will connect with you soon');
            $('.q-two .confirm-yes, .q-two .confirm-not-sure').fadeOut(250);
        }
        else if($(this).hasClass('confirm-not-sure')) {
            $('.q-two .response').addClass('complete').text('Hmmm. I don\'t even know what to say anymore.');
            $('.q-two .confirm-no, .q-two .confirm-yes').fadeOut(250);
        }
    }
    $('.q-two').removeClass('running').next().addClass('active running');
   showQuestionBubble();
});

// Answers per Users Response Question 3
$('.q-three .confirm-button').one('click', function(e) {
    $(this).addClass('selected');
    $('.confirm-container > div').slideUp(500).fadeOut(500);
    // slide up third question
    $('.q-three .q-wrap').slideUp(500);
    if($(this).parents($('.question')).hasClass('q-three')) {
        $('.q-two').slideUp(500).fadeOut(500);
        if($(this).hasClass('confirm-yes')) {
            $('.q-three .response').addClass('complete').text('Thank you have a nice day!');
            $('.q-three .confirm-no, .q-three .confirm-not-sure').fadeOut(250);
            if($('.q-three p:first-child').hasClass('over-thirty')) {
                confirmedOver30 = true;
            }
        }
        else if($(this).hasClass('confirm-no')) {
            $('.q-three .response').addClass('complete').text('Please share your detailed query on this email Id :- mentorShala@gmail.com');
            $('.q-three .confirm-yes, .q-three .confirm-not-sure').fadeOut(250);
        }
        else if($(this).hasClass('confirm-not-sure')) {
            $('.q-three .response').addClass('complete').text('Please share your detailed query on this email Id :- mentorShala@gmail.com');
            $('.q-three .confirm-no, .q-three .confirm-yes').fadeOut(250);
        }
    }
});


// END QUESTIONS
// --------------------------------------------------