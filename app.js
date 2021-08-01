// Дэлгэцтэй ажиллах контроллер

var uiController = (function(){})();

// Санхүүтэй ажиллах контроллер
var financeController = (function() {})();


// Програмыг холбогч контроллер
var appController = (function(uiController, financeController){



    var ctrlAddItem = function(){
                // 1. оруулах өгөгдөлийг дэлгэцээс олж авна

                console.log('ajilj bn');
        // 2. Олж авсан өгөгдөлүүдийг санхүүгийн контроллерт дамжуулж хадгална

        // 3. Олж авсан өгөгдөлүүдийг вэбийн тохирох хэсэгт харуулна

        // 4. Төсөвийг тооцно

        // 5. Эцэсийн үлдэгдэл, болон тооцоог дэлгэцэнд гаргана.

    };


    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrlAddItem();
    });
    document.addEventListener("keypress", function(event) {

        if (event.keyCode === 13){
        ctrlAddItem();
        }
    });


})(uiController, financeController);




