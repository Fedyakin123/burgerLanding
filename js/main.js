$(document).ready(function() {
    console.log('sfsd');
});
// ��������� One Page Scroll;

$(function() {

    var section = $('.section'),
        screen = $('.maincontent'),
        inScroll = false;

    var scrollToSection = function(sectionNumber) {
        var position = 0;

        if (!inScroll) {
            inScroll = true;

            position = (section.eq(sectionNumber).index() * -100) + '%';

            section.eq(sectionNumber).addClass('active')
                .siblings().removeClass('active');

            $('.fixed-menu__item').eq(sectionNumber).addClass('active')
                .siblings().removeClass('active'); // ���������� ������ �� ���� ����


            screen.css({
                "transform" : "translate3d(0, " + position + ", 0)"
            });
        }
    $('.maincontent').on('transitionend', function() {
        //console.log("trs over");
        //������� ������� � ����������, ����� ��������� �������� ��� ������� ������� ��������
        setTimeout(function() {
            inScroll = false;

            //TODO �������� ���� ������ ���� � ������� �������
        }, 300);
    });


    };

    $('.wrapper').on('wheel', function(e) {
        var deltaY = e.originalEvent.deltaY,
            currentSection = section.filter('.active'),
            nextSection = currentSection.next(),
            prevSection = currentSection.prev();


        //scroll down
        if (deltaY > 0) {
            if (nextSection.length) {//if section exists
                scrollToSection(nextSection.index());
            }
        }
        //scroll up
        if (deltaY < 0) {
            if (prevSection.length) {
                scrollToSection(prevSection.index());
            }
        }

    });


    //���������� ���������� �� ���� ����

    $('.fixed-menu__link').on('click', function(e) {
        e.preventDefault();
        var sectionNumber = $(this).parent().index(); // ����� ������ ��-��� ������ ����, �� ������������� ������ ������

        scrollToSection(sectionNumber)
    });

    //���������� ������� ����

    $('.bottom-arrow').on('click', function(e) {
        e.preventDefault();

        scrollToSection(1);
    });

    //���������� ���������

    $('.navigation__link').on('click', function(e) {
        e.preventDefault();

        var sectionNumber = $(this).attr('href'); //����� �������������� ������������� ����

        scrollToSection(sectionNumber);
    });
// ���������� ������� ����������
    $(document).on('keydown', function(e) {
        var currentSection = section.filter('.active'),
            nextSection = currentSection.next(),
            prevSection = currentSection.prev();

        switch(e.key) {
            case "ArrowUp" :
                if (prevSection.length) {
                    scrollToSection(prevSection.index())
                }
                break;
            case  "ArrowDown" :
                if (nextSection.length) {
                    scrollToSection(nextSection.index())
                }
                break;
        }

    });
//TODO ���������� �� Shift+key
    // ����� ����������� ���������� ������� ������ ����. �������
    //     currentSection = e.target.closest('section');
});


// C������ owl carousel

$(function(){
   var burgersSlider = $('.owl-carousel').owlCarousel({
        items : 1,
        loop : true
        //autoplay: true,
        //autoplayTimeout: 5000

    });

    // Go to the next item
    $('.burgers__arrow_next').on('click', function(e) {
        e.preventDefault();
        burgersSlider.trigger('next.owl.carousel', [800]);

    //    TODO ������� ������ � �������� ������� � ������ ���� � ������� � �������, � ����������� �� �������
    });

// Go to the previous item
    $('.burgers__arrow_prev').on('click', function(e) {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        e.preventDefault();
        burgersSlider.trigger('prev.owl.carousel', [800]);
    });
//TODO ������� ����� ������ ������� ��� ������ ��������
    //TODO ����� ������� �� ��������


//    ������ ������� ��������:
    $('.burgers__arrow').on('click', function() {
        console.log('sfs');
        var activeSlide = $('.owl-item').filter('.active');

        console.log(activeSlide.index());

        var kcal = $('.kcal__amount');
        console.log(kcal.text());


        switch (activeSlide.index()) {
            case 2: kcal.text('777'); // ��������� ����� ����������� ��� ���������
                break;
            case 3: kcal.text('1200');
                break;
            case 4: kcal.text('1350');
                break;
            case 5: kcal.text('980');
                break;
            case 6: kcal.text('1075');
                break;
            case 7: kcal.text('777');
                break;
        }
    });
});

// ������������ ���������

$(function() {
   $('.team-acco__trigger').on('click', function(e) {
       e.preventDefault();

       var $this = $(this),
           item = $this.closest('.team-acco__item'),
           container = $this.closest('.team-acco'),
           items = container.find('.team-acco__item'),
           content = item.find('.person'),
           otherContent = container.find('.person');


       if (!item.hasClass('active')) {
           otherContent.slideUp();
           items.removeClass('active');
           content.slideDown();
           item.addClass('active');
       } else  {
           content.slideUp();
           item.removeClass('active');
       }
   });

//��������� �� ����� ��� ����������
    $(document).on('click', function(e) {
        var $this = $(e.target);
        if (!$this.closest('.team-acco').length) { // ��������� �� �����, ���� �� ��������� � ���������
            $('.team-acco__item').filter('.active').removeClass('active') //������� �����
                .find('.person').slideUp(); //�����������

        }
    });
});

// �������������� ���������

$(function() {
    $('.menu-acco__trigger').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.menu-acco__item'),
            container = $this.closest('.menu-acco'),
            items = container.find('.menu-acco__item');
                //�� �����������
            //content = item.find('.menu-acco__content'),
            //otherContent = container.find('.menu-acco__content');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
        } else {
            item.removeClass('active');
        }

    // TODO ����������� ����������� ��������� animate
    });
//��������� �� ����� ��� ����������
    $(document).on('click', function(e) {
        var $this = $(e.target);
        if (!$this.closest('.menu-acco').length) { // ��������� �� �����, ���� �� ��������� � ���������
            $('.menu-acco__item').filter('.active').removeClass('active');
        }
    });
});


//Input Mask

$(function() {
    $('input[name="phone"]').inputmask('+7 (999) 999 99 99'); // ������������ �������� �� ���� � ���������
});


// Popup review

$(function() {
    $('.reviewer__btn').fancybox({
        type : 'inline',
        maxWidth : 460,
        fitToView : false,
        padding : 0
    });

    //$('.popup').on('click', function(e) {
    //    e.preventDefault();
    //    console.log('close');

        //$.fancybox.getInstance().close();
    //});
});
