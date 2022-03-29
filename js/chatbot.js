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
            $('.q-one .response').addClass('complete').text('Great! I\'m glad you did! You should probably like more of my things.');
            $('.q-one .confirm-no, .q-one .confirm-not-sure').fadeOut(250);
            if($('.q-one p:first-child').hasClass('locations')) {
                confirmedLocations = true;
            }
        }
        else if($(this).hasClass('confirm-no')) {
            $('.q-one .response').addClass('complete').text('What?! Why not? You really should. I need the internet points, man!');
            $('.q-one .confirm-yes, .q-one .confirm-not-sure').fadeOut(250);
        }
        else if($(this).hasClass('confirm-not-sure')) {
            $('.q-one .response').addClass('complete').text('That\'s okay, I can just assume that this is your first ever codepen visit.');
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
            $('.q-two .response').addClass('complete').text('Isn\'t that game awesome! It had the best soundtrack!');
            $('.q-two .confirm-no, .q-two .confirm-not-sure').fadeOut(250);
            if($('.q-two p:first-child').hasClass('relative')) {
                confirmedRelatives = true;
            }
        }
        else if($(this).hasClass('confirm-no')) {
            $('.q-two .response').addClass('complete').text('You haven\'t? Well, I\'m not sure we can be best friends, but we can sit at the same lunch table.');
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
            $('.q-three .response').addClass('complete').text('Me Too!!!! I knew I liked you.');
            $('.q-three .confirm-no, .q-three .confirm-not-sure').fadeOut(250);
            if($('.q-three p:first-child').hasClass('over-thirty')) {
                confirmedOver30 = true;
            }
        }
        else if($(this).hasClass('confirm-no')) {
            $('.q-three .response').addClass('complete').text('We can\'t be friends.');
            $('.q-three .confirm-yes, .q-three .confirm-not-sure').fadeOut(250);
        }
        else if($(this).hasClass('confirm-not-sure')) {
            $('.q-three .response').addClass('complete').text('I don\'t know?! I mean, you either do or you don\'t. Sorry, Sorry. You can be unsure.');
            $('.q-three .confirm-no, .q-three .confirm-yes').fadeOut(250);
        }
    }
});


// END QUESTIONS
// --------------------------------------------------