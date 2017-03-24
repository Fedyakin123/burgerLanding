//$(document).ready(function() {
    //console.log('sfsd');
//});
// Реализуем One Page Scroll;

//$(function() {
//
//    var section = $('.section'),
//        screen = $('.maincontent'),
//        inScroll = false;
//
//    var scrollToSection = function(sectionNumber) {
//        var position = 0;
//
//        if (!inScroll) {
//            inScroll = true;
//
//            position = (section.eq(sectionNumber).index() * -100) + '%';
//
//            section.eq(sectionNumber).addClass('active')
//                .siblings().removeClass('active');
//
//            $('.fixed-menu__item').eq(sectionNumber).addClass('active')
//                .siblings().removeClass('active'); // перемещаем кружок на фикс меню
//
//
//            screen.css({
//                "transform" : "translate3d(0, " + position + ", 0)"
//            });
//        }
//    $('.maincontent').on('transitionend', function() {
//        //console.log("trs over");
//        //Засунул таймаут в обработчик, чтобы корректно работало при зажатой клавише например
//        setTimeout(function() {
//            inScroll = false;
//
//            //TODO поменять цвет фиксед меню в светлых секциях
//        }, 300);
//    });
//
//
//    };
//
//    $('.wrapper').on('wheel', function(e) {
//        var deltaY = e.originalEvent.deltaY,
//            currentSection = section.filter('.active'),
//            nextSection = currentSection.next(),
//            prevSection = currentSection.prev();
//
//
//        //scroll down
//        if (deltaY > 0) {
//            if (nextSection.length) {//if section exists
//                scrollToSection(nextSection.index());
//            }
//        }
//        //scroll up
//        if (deltaY < 0) {
//            if (prevSection.length) {
//                scrollToSection(prevSection.index());
//            }
//        }
//
//    });
//
//
//    //Навешиваем обработчик на фикс меню
//
//    $('.fixed-menu__link').on('click', function(e) {
//        e.preventDefault();
//        var sectionNumber = $(this).parent().index(); // Берем индекс ЛИ-шки внутри меню, он соответствует номеру секции
//
//        scrollToSection(sectionNumber)
//    });
//
//    //Обработчик стрелки вниз
//
//    $('.bottom-arrow').on('click', function(e) {
//        e.preventDefault();
//
//        scrollToSection(1);
//    });
//
//    //Обработчик навигации
//
//    $('.navigation__link').on('click', function(e) {
//        e.preventDefault();
//
//        var sectionNumber = $(this).attr('href'); //берем предварительно заготовленный хреф
//
//        scrollToSection(sectionNumber);
//    });
//// Обработчик стрелок клавиатуры
//    $(document).on('keydown', function(e) {
//        var currentSection = section.filter('.active'),
//            nextSection = currentSection.next(),
//            prevSection = currentSection.prev();
//
//        switch(e.key) {
//            case "ArrowUp" :
//                if (prevSection.length) {
//                    scrollToSection(prevSection.index())
//                }
//                break;
//            case  "ArrowDown" :
//                if (nextSection.length) {
//                    scrollToSection(nextSection.index())
//                }
//                break;
//        }
//
//    });
////TODO обработчик по Shift+key
//    // Можно попробовать определять текущую секцию след. образом
//    //     currentSection = e.target.closest('section');
//});


// Cлайдер owl carousel

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

    //    TODO создать обьект с составом бургера и менять хтмл в таблице и калораж, в зависимости от бургера
    });

// Go to the previous item
    $('.burgers__arrow_prev').on('click', function(e) {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        e.preventDefault();
        burgersSlider.trigger('prev.owl.carousel', [800]);
    });
//TODO сделать чтобы состав менялся для разных бургеров
    //TODO смена слайдов по стрелкам


//    Меняем калораж бургеров:
    $('.burgers__arrow').on('click', function() {
        //console.log('sfs');
        var activeSlide = $('.owl-item').filter('.active');

        //console.log(activeSlide.index());

        var kcal = $('.kcal__amount');
        //console.log(kcal.text());


        switch (activeSlide.index()) {
            case 2: kcal.text('777'); // Последний слайд дублируется для замыкания
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

// Вертикальный аккордеон

$(function() {
    var inAnimation = false;

   $('.team-acco__trigger').on('click', function(e) {
       e.preventDefault();

       var $this = $(this),
           item = $this.closest('.team-acco__item'),
           container = $this.closest('.team-acco'),
           items = container.find('.team-acco__item'),
           content = item.find('.person'),
           otherContent = container.find('.person');


       if (!inAnimation) {
           inAnimation = true;
           if (!item.hasClass('active')) {
               otherContent.slideUp();
               items.removeClass('active');
               content.slideDown();
               item.addClass('active');
           } else  {
               content.slideUp();
               item.removeClass('active');
           }
       }
       $(".maincontent").on('transitionend', function() {
          inAnimation = false;
       });

   });

//Закрываем по клику вне аккордеона
    $(document).on('click', function(e) {
        var $this = $(e.target);
        if (!$this.closest('.team-acco').length) { // проверяем по длине, есть ли аккордеон в родителях
            $('.team-acco__item').filter('.active').removeClass('active') //убираем класс
                .find('.person').slideUp(); //захлопываем

        }
    });
});

// Горизонтальный аккордеон

$(function() {
    $('.menu-acco__trigger').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.menu-acco__item'),
            container = $this.closest('.menu-acco'),
            items = container.find('.menu-acco__item');
                //Не пригодились
            //content = item.find('.menu-acco__content'),
            //otherContent = container.find('.menu-acco__content');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
        } else {
            item.removeClass('active');
        }

    // TODO попробовать реализовать используя animate
    });
//закрываем по клику вне аккордеона
    $(document).on('click', function(e) {
        var $this = $(e.target);
        if (!$this.closest('.menu-acco').length) { // проверяем по длине, есть ли аккордеон в родителях
            $('.menu-acco__item').filter('.active').removeClass('active');
        }
    });
});


//Input Mask

$(function() {
    $('input[name="phone"]').inputmask('+7 (999) 999 99 99'); // Использовали селектор по тегу с атрибутом
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


//Подключаем яндекс карты


$(function(){
    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.91558890, 30.30890289],
            zoom: 14,
            controls: []
        });

//коллекция координат

        var coords = [
                [59.90760194, 30.31318547],
                [59.92266830, 30.29391173],
                [59.91866765, 30.32542702]
            ],
            myCollection = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-24, -50]
            });
//перебираем коллекцию

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }

        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    }
});

//form submit

$(function() {
    $('#order-form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();

        //console.log(formData);

        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: formData,
            success: function(data) {
               var popup = data.status ? '#success-popup' : '#error-popup';
                //Всплывающее окно
                $.fancybox.open({
                    src  : popup,
                    type : 'inline',
                    opts : {
                        onComplete : function() {
                            console.info('done!');
                        },
                        afterClose : function() {
                            form.trigger('reset');
                        }
                    }
                });


            }
        });
    })

    //Закрываем по кнопке

    $('.status-popup__close').on('click', function(e) {
        e.preventDefault();

        $.fancybox.close();

    });

});
