/**
 * Created by sbees on 4/6/2017.
 */

function openMenu1() {
    isOpen1 = true;
    //$('#menu1-home').fadeIn({queue: false, duration:'slow'}).animate({top: '-=55px'})
    $('#menu1-home').animate({top: '-=55px'}, 'fast', function() {
        $('#menu1-film').animate({left: '+=55px'}, 'fast', function() {
            $('#menu1-heart').animate({top: '+=55px'}, 'fast', function() {
                $('#menu1-gears').animate({left: '-=55px'}, 'fast')
            })
        })
    })
}

function closeMenu1() {
    isOpen1 = false;
    $('#menu1-home').animate({top: '50%', left: '50%'}, 'fast', function() {
        $('#menu1-film').animate({top: '50%', left: '50%'}, 'fast', function() {
            $('#menu1-heart').animate({top: '50%', left: '50%'}, 'fast', function() {
                $('#menu1-gears').animate({top: '50%', left: '50%'}, 'fast')
            })
        })
    })
}

function openMenu2() {
    isOpen2 = true;
    $('#menu2-home')
        .transition({rotateX: '0deg',top: '-=50px'},150)         //up
    ;
    $('#menu2-film')
        .transition({rotateX: '0deg',top: '-=50px'},150)         //up
        .transition({rotateY: '-180deg',left: '+=50px'},150)     //right
        .transition({rotateX: '180deg',top: '+=50px'},150)       //down
    ;
    $('#menu2-heart')
        .transition({rotateX: '0deg',top: '-=50px'},150)         //up
        .transition({rotateY: '-180deg',left: '+=50px'},150)     //right
        .transition({rotateX: '180deg',top: '+=50px'},150)       //down
        .transition({rotateX: '0deg',top: '+=50px'},150)         //down
        .transition({rotateY: '0deg',left: '-=50px'},150)        //left
    ;
    $('#menu2-gears')
        .transition({rotateX: '0deg',top: '-=50px'},150)         //up
        .transition({rotateY: '-180deg',left: '+=50px'},150)     //right
        .transition({rotateX: '180deg',top: '+=50px'},150)       //down
        .transition({rotateX: '0deg',top: '+=50px'},150)         //down
        .transition({rotateY: '0deg',left: '-=50px'},150)        //left
        .transition({rotateY: '180deg',left: '-=50px'},150)      //left
        .transition({rotateX: '180deg',top: '-=50px'},150)       //up
    ;
}

function closeMenu2() {
    isOpen2 = false;
    $('#menu2-home')
        .transition({rotateX: '-180deg',top: '+=50px'},'fast')  //down
    ;
    $('#menu2-film')
        .transition({rotateX: '0deg',top: '-=50px'},'fast')     //up
        .transition({rotateY: '0deg',left: '-=50px'},'fast')    //left
        .transition({rotateX: '180deg',top: '+=50px'},'fast')   //down
    ;
    $('#menu2-heart')
        .transition({rotateY: '180deg',left: '+=50px'},'fast')  //right
        .transition({rotateX: '180deg',top: '-=50px'},'fast')   //up
        .transition({rotateX: '0deg',top: '-=50px'},'fast')     //up
        .transition({rotateY: '0deg',left: '-=50px'},'fast')    //left
        .transition({rotateX: '180deg',top: '+=50px'},'fast')   //down
    ;
    $('#menu2-gears')
        .transition({rotateX: '0deg',top: '+=50px'},'fast')     //down
        .transition({rotateY: '0deg',left: '+=50px'},'fast')    //right
        .transition({rotateY: '180deg',left: '+=50px'},'fast')  //right
        .transition({rotateX: '180deg',top: '-=50px'},'fast')   //up
        .transition({rotateX: '0deg',top: '-=50px'},'fast')     //up
        .transition({rotateY: '0deg',left: '-=50px'},'fast')    //left
        .transition({rotateX: '180deg',top: '+=50px'},'fast')   //down
    ;
}


$(document).ready(function(){
    isOpen1 = false;
    isOpen2 = false;

    //set initial perspective
    $('#menu2-home').transition({rotateX: '-180deg'});
    $('#menu2-film').transition({rotateX: '-180deg'});
    $('#menu2-heart').transition({rotateX: '-180deg'});
    $('#menu2-gears').transition({rotateX: '-180deg'});


    $('#area1').mouseleave(function(){
        $('#c1').hide();
        if (isOpen1) closeMenu1();
    }).mouseenter(function(){
        $('#c1').show();
    }).mousemove(function(e){
        $('#c1').css('left', e.clientX - 5).css('top', e.clientY - 5);
    });

    $('#area2').mouseleave(function(){
        $('#c2').hide();
        if (isOpen2) closeMenu2();
    }).mouseenter(function(){
        $('#c2').show();
    }).mousemove(function(e){
        $('#c2').css('left', e.clientX - 5).css('top', e.clientY - 5);
    });
});

$(document).on('mouseover','#menu1',function() {
    if (!isOpen1) openMenu1();
});

$(document).on('mouseover','#menu2',function() {
    if (!isOpen2) {
        console.log("opening menu 2");
        openMenu2();
    }
});

$(document).on('mouseover','.menu-item',function() {
    $('.customcursor').css({
        'opacity':.5,
        'width':'15px',
        'height':'15px'
    });
}).on('mouseout','.menu-item',function() {
    $('.customcursor').css({
        'opacity':1,
        'width':'12px',
        'height':'12px'
    });
});