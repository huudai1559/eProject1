let data = [];
let itemsPerPage = 12;
let page = 1;

$(document).ready(function () {

    //Load product
    $.getJSON("assets/js/data.json", function (items) {

        data = items;

        filterPrice(data);

        pagination(data);

        displayImages(data, page);
        displayPagination(data, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(data, clickName, clickPrice);

        $(".type").each(function (index) {
            let numberOfType = $(this).data('type');
            let filter = data.filter(function (item) {
                return item.type == numberOfType;
            })
            let y = filter.length;
            $(this).next("span").html(`(${y})`);
        });

        let numberdata = data.length;
        let numberfeartureBrand = 0;
        $(".brand").each(function (index) {
            let brand = $(this).data('type');
            let filter = data.filter(function (item) {
                return item.brand == brand;
            })
            let numberBrand = filter.length;
            numberfeartureBrand += numberBrand;
            $(this).next("span").html(`(${numberBrand})`);
        });

        let numberOther = numberdata - numberfeartureBrand;
        $(".type").first().next("span").html(`(${numberdata})`);
        $(".brand").last().next("span").html(`(${numberOther})`);

        $(".feature").each(function (index) {
            let numberOfFeature = $(this).data('type');
            let filter = data.filter(function (item) {
                return item.feature == numberOfFeature;
            })
            let y = filter.length;
            $(this).next("span").html(`(${y})`);
        });
    });

    // Alerts infomation
    $(document).on("click", "#subscribe", function(e){
        alert("Thank you for subscribing. Please press Ok to go Home page!");
    });

    $("#subcribeMail").submit(function (e){
        alert("Thank you for subscribing. Please press Ok to go Home page!");
    });

    $(document).on("click","#shareBlog", function(e){
        alert("Thank you for sharing. Please press Ok to go Blog page!");
    });

    $("#contact-form").submit(function (e){
        e.preventDefault();

        alert("Your message has been sent, we will respond later!");

        $('#contact-form input, #contact-form textarea').val('');
    });

    //Filter product type
    $(document).on("click", ".type", function (e) {
        e.preventDefault();

        let type = $(this).data('type');
        let filteredType = data.filter(function (item) {
            return item.type == type;
        });

        filterPrice(filteredType);

        pagination(filteredType);

        displayImages(filteredType, page);
        displayPagination(filteredType, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredType, clickName, clickPrice);
    });

    //Show all product
    $(document).on("click", "#allProduct", function (e) {
        e.preventDefault();

        filterPrice(data);
        pagination(data);

        displayImages(data, page);
        displayPagination(data, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(data, clickName, clickPrice);
    });

    //Filter product brand
    $(document).on("click", ".brand", function (e) {
        e.preventDefault();

        let type = $(this).data('type')
        let filteredBrand = [];
        if (type == "Other") {
            let brandOther = ["Havells", "Wipro", "Crompton", "Cona", "Legrand", "MK", "Norisys", "ABB", "Crabtree", "Hindware", "Other"];

            filteredBrand = data.filter(function (item) {
                return !brandOther.includes(item.brand);
            })

        }
        else {
            filteredBrand = data.filter(function (item) {
                return item.brand == type;
            })
        }

        filterPrice(filteredBrand);

        pagination(filteredBrand);

        displayImages(filteredBrand, page);
        displayPagination(filteredBrand, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredBrand, clickName, clickPrice);
    });

    //Filter product feature
    $(document).on("click", ".feature", function (e) {
        e.preventDefault();

        let feature = $(this).data('type')
        let filteredFeature = data.filter(function (item) {
            return item.feature == feature;
        });

        filterPrice(filteredFeature);

        pagination(filteredFeature);

        displayImages(filteredFeature, page);
        displayPagination(filteredFeature, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredFeature, clickName, clickPrice);
    });

    //Filter product tag
    $(document).on("click", "#tag1", function (e) {
        e.preventDefault();

        let filteredTag = data.filter(function (item) {
            return item.lumen_output;
        });

        filterPrice(filteredTag);

        pagination(filteredTag);

        displayImages(filteredTag, page);
        displayPagination(filteredTag, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredTag, clickName, clickPrice);
    });

    $(document).on("click", "#tag2", function (e) {
        e.preventDefault();

        let filteredTag = data.filter(function (item) {
            return item.sweep;
        });

        filterPrice(filteredTag);
        pagination(filteredTag);

        displayImages(filteredTag, page);
        displayPagination(filteredTag, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredTag, clickName, clickPrice);
    });

    $(document).on("click", "#tag3", function (e) {
        e.preventDefault();

        let filteredTag = data.filter(function (item) {
            return item.current_rating;
        });

        filterPrice(filteredTag);
        pagination(filteredTag);

        displayImages(filteredTag, page);
        displayPagination(filteredTag, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredTag, clickName, clickPrice);
    });

    $(document).on("click", "#tag4", function (e) {
        e.preventDefault();

        let filteredTag = data.filter(function (item) {
            return item.material;
        });

        filterPrice(filteredTag);
        pagination(filteredTag);

        displayImages(filteredTag, page);
        displayPagination(filteredTag, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredTag, clickName, clickPrice);
    });

    $(document).on("click", "#tag5", function (e) {
        e.preventDefault();

        let filteredTag = data.filter(function (item) {
            return item.package_contents;
        });

        filterPrice(filteredTag);
        pagination(filteredTag);

        displayImages(filteredTag, page);
        displayPagination(filteredTag, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredTag, clickName, clickPrice);
    });

    //Show modal product
    $(document).on('click', "#divImage", function (e) {
        e.preventDefault();

        let id = $(this).data('id');
        let type = $(this).data('type');
        let filteredValue = data.filter(function (item) {
            return item.type == type;
        });

        let product = data.filter(ele => ele.id == id);

        setModal(product[0], filteredValue);

        $('.featured-carousel-active').slick({
            autoplay: false,
            infinite: false,
            fade: false,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            slidesToShow: 4,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            ]
        });

        $('#myModal').modal('show');
    });

    //Show Category Main product
    $(document).on("click", ".category-main", function (e) {
        e.preventDefault();

        let categoryMain = $(this).data('type');
        let filteredCategoryMain = data.filter(function (item) {
            return item.category == categoryMain;
        });

        switch(categoryMain){
            case "LED & Lighting":
                $("#img-category").html(`<img src="assets/img/category/category1.jpg" alt="">`);
                break;
            case "FANs":
                $("#img-category").html(`<img src="assets/img/category/category2.jpg" alt="">`);
                break;
            case "Cables & Wires":
                $("#img-category").html(`<img src="assets/img/category/category3.jpg" alt="">`);
                break;
            case "Switches & Automation":
                $("#img-category").html(`<img src="assets/img/category/category4.jpg" alt="">`);
                break;
            case "Protection Devices":
                $("#img-category").html(`<img src="assets/img/category/category5.jpg" alt="">`);
                break;
            case "Appliances":
                $("#img-category").html(`<img src="assets/img/category/category6.jpg" alt="">`);
                break;    
        }
        
        paginationCategory(filteredCategoryMain);

        displayCategory(filteredCategoryMain, page);
        displayPaginationCategory(filteredCategoryMain, page);

        $('.wapperCategory').toggle();

        let clickName = 0;
        let clickPrice = 0;
        sortByCategory(filteredCategoryMain, clickName, clickPrice);
    });

    //Show Category Type product
    $(document).on("click", ".category-type", function (e) {
        e.preventDefault();

        let categoryType = $(this).data('type');

        let filteredCategoryType = data.filter(function (item) {
            return item.type == categoryType;
        });

        switch(categoryType){
            case "LED Lights":
                $("#img-category").html(`<img src="assets/img/category/type1.jpg" alt="">`);
                break;
            case "CFLs":
                $("#img-category").html(`<img src="assets/img/category/type2.jpg" alt="">`);
                break;
            case "Ceiling Fans":
                $("#img-category").html(`<img src="assets/img/category/type3.jpg" alt="">`);
                break;
            case "Pedestal Fans":
                $("#img-category").html(`<img src="assets/img/category/type4.jpg" alt="">`);
                break;
            case "Armoured Cables":
                $("#img-category").html(`<img src="assets/img/category/type5.jpg" alt="">`);
                break;
            case "House Wires":
                $("#img-category").html(`<img src="assets/img/category/type6.jpg" alt="">`);
                break;
            case "Modular Switches":
                $("#img-category").html(`<img src="assets/img/category/type7.jpg" alt="">`);
                break;
            case "Modular Sockets":
                $("#img-category").html(`<img src="assets/img/category/type8.jpg" alt="">`);
                break;
            case "MCBs":
                $("#img-category").html(`<img src="assets/img/category/type9.jpg" alt="">`);
                break;
            case "RCCBs":
                $("#img-category").html(`<img src="assets/img/category/type10.jpg" alt="">`);
                break;
            case "RCBOs":
                $("#img-category").html(`<img src="assets/img/category/type11.jpg" alt="">`);
                break;
            case "Geysers":
                $("#img-category").html(`<img src="assets/img/category/type12.jpg" alt="">`);
                break;
            case "Irons":
                $("#img-category").html(`<img src="assets/img/category/type13.jpg" alt="">`);
                break;
            case "Cooking":
                $("#img-category").html(`<img src="assets/img/category/type14.jpg" alt="">`);
                break;
        }
        
        paginationCategory(filteredCategoryType);

        displayCategory(filteredCategoryType, page);
        displayPaginationCategory(filteredCategoryType, page);

        $('.wapperCategory').toggle();

        let clickName = 0;
        let clickPrice = 0;
        sortByCategory(filteredCategoryType, clickName, clickPrice);
    });

    //Compare product
    $(document).on("click", "#compareList", function (e) {
        e.preventDefault();

        let id = $(this).data('id');
        let category = $(this).data('category');
        let filteredCompare = data.filter(function (item) {
            return item.category == category;
        });

        setCompare(category, filteredCompare, id);

        $('.wapper').toggle();
        $('#myModal').modal('hide');
    });

    var list = [];

    /* function to be executed when product is selected for comparision*/
    $(document).on('click', '.addToCompare', function () {
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectProduct").toggleClass("selected");
        let productID = $(this).parents('.selectProduct').attr('data-id');

        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length < 3) {
                list.push(productID);

                var displayTitle = $(this).parents('.selectProduct').attr('data-title');
                var image = $(this).siblings(".productImg").attr('src');

                $(".comparePan").append(`<div id="${productID}" class="relPos titleMargin w3-margin-bottom  col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                            <div class="w3-white titleMargin">
                                                <a class="selectedItemCloseBtn w3-closebtn cursor">&times</a>
                                                <img src="${image}" alt="image" style="width: 80%;">
                                                <h5 id="${productID}" class="titleMargin1">${displayTitle}</h5>
                                            </div>
                                        </div>`);
            }
            else {

                alert("⚠ Error: Maximum of Three products are allowed for comparision")

                $(this).toggleClass("rotateBtn");
                $(this).parents(".selectProduct").toggleClass("selected");
                return;
            }

        } else {
            list.splice($.inArray(productID, list), 1);
            $('#' + productID).remove();
            hideComparePanel();
        }


        if (list.length > 1) {
            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }

    });

    /*function to be executed when compare button is clicked*/
    $(document).on('click', '.cmprBtn', function () {
        let productCategory = $('.selectProduct').attr('data-category');

        if ($(".cmprBtn").hasClass("active")) {
            switch (productCategory) {
                case "LED & Lighting":
                    $(".contentPop").append(`
                                    <tr class="product1">
                                        <td><b>Image</b></td>
                                    </tr>
                                    <tr class="product2">
                                        <td><b>Title</b></td>
                                    </tr>
                                    <tr class="product3">
                                        <td><b>Price</b></td>
                                    </tr>
                                    <tr class="product4">
                                        <td><b>Brand</b></td>
                                    </tr>
                                    <tr class="product5">
                                        <td><b>Power</b></td>
                                    </tr>
                                    <tr class="product6">
                                        <td><b>Voltage</b></td>
                                    </tr>
                                    <tr class="product7">
                                        <td><b>Colour Temperature</b></td>
                                    </tr>
                                    <tr class="product8">
                                        <td><b>Lumen Output</b></td>
                                    </tr>
                                    <tr class="product9">
                                        <td><b>Energy Saving</b></td>
                                    </tr>
                                    `);

                    for (var i = 0; i < list.length; i++) {
                        /* this is to add the items to popup which are selected for comparision */
                        product = $('.selectProduct[data-id="' + list[i] + '"]');
                        var image = $('[data-id=' + list[i] + ']').find(".productImg").attr('src');
                        /*appending to div*/

                        $(".product1").append(`<td class="product-image-title">
                                                    <a href="#" class="image dis">
                                                        <img class="img-fluid" src="${image}"
                                                    alt="Compare Product">
                                                    </a>
                                                </td>`);
                        $(".product2").append(`<td>${$(product).data('title')}</td>`);
                        $(".product3").append(`<td>${$(product).data('01')}</td>`);
                        $(".product4").append(`<td>${$(product).data('02')}</td>`);
                        $(".product5").append(`<td>${$(product).data('03')}</td>`);
                        $(".product6").append(`<td>${$(product).data('04')}</td>`);
                        $(".product7").append(`<td>${$(product).data('05')}</td>`);
                        $(".product8").append(`<td>${$(product).data('06')}</td>`);
                        $(".product9").append(`<td>${$(product).data('07')}</td>`);
                    }
                break;

                case "FANs":
                    $(".contentPop").append(`
                                    <tr class="product1">
                                        <td><b>Image</b></td>
                                    </tr>
                                    <tr class="product2">
                                        <td><b>Title</b></td>
                                    </tr>
                                    <tr class="product3">
                                        <td><b>Price</b></td>
                                    </tr>
                                    <tr class="product4">
                                        <td><b>Brand</b></td>
                                    </tr>
                                    <tr class="product5">
                                        <td><b>Power</b></td>
                                    </tr>
                                    <tr class="product6">
                                        <td><b>Voltage</b></td>
                                    </tr>
                                    <tr class="product7">
                                        <td><b>Sweep</b></td>
                                    </tr>
                                    <tr class="product8">
                                        <td><b>No of Blade</b></td>
                                    </tr>
                                    <tr class="product9">
                                        <td><b>Suitable For</b></td>
                                    </tr>
                                    <tr class="product10">
                                        <td><b>RPM</b></td>
                                    </tr>
                                    `);

                    for (var i = 0; i < list.length; i++) {
                        /* this is to add the items to popup which are selected for comparision */
                        product = $('.selectProduct[data-id="' + list[i] + '"]');
                        var image = $('[data-id=' + list[i] + ']').find(".productImg").attr('src');
                        /*appending to div*/

                        $(".product1").append(`<td class="product-image-title">
                                                    <a href="#" class="image dis">
                                                        <img class="img-fluid" src="${image}"
                                                    alt="Compare Product">
                                                    </a>
                                                </td>`);
                        $(".product2").append(`<td>${$(product).data('title')}</td>`);
                        $(".product3").append(`<td>${$(product).data('01')}</td>`);
                        $(".product4").append(`<td>${$(product).data('02')}</td>`);
                        $(".product5").append(`<td>${$(product).data('03')}</td>`);
                        $(".product6").append(`<td>${$(product).data('04')}</td>`);
                        $(".product7").append(`<td>${$(product).data('05')}</td>`);
                        $(".product8").append(`<td>${$(product).data('06')}</td>`);
                        $(".product9").append(`<td>${$(product).data('07')}</td>`);
                        $(".product9").append(`<td>${$(product).data('08')}</td>`);
                    }
                break;

                case "Cables & Wires":
                    $(".contentPop").append(`
                                    <tr class="product1">
                                        <td><b>Image</b></td>
                                    </tr>
                                    <tr class="product2">
                                        <td><b>Title</b></td>
                                    </tr>
                                    <tr class="product3">
                                        <td><b>Price</b></td>
                                    </tr>
                                    <tr class="product4">
                                        <td><b>Brand</b></td>
                                    </tr>
                                    <tr class="product5">
                                        <td><b>Size ofConductor</b></td>
                                    </tr>
                                    <tr class="product6">
                                        <td><b>Conductor Material</b></td>
                                    </tr>
                                    <tr class="product7">
                                        <td><b>Overall Diameter</b></td>
                                    </tr>
                                    <tr class="product8">
                                        <td><b>Current Rating</b></td>
                                    </tr>
                                    <tr class="product9">
                                        <td><b>Thickness of Insulation</b></td>
                                    </tr>
                                    `);

                    for (var i = 0; i < list.length; i++) {
                        /* this is to add the items to popup which are selected for comparision */
                        product = $('.selectProduct[data-id="' + list[i] + '"]');
                        var image = $('[data-id=' + list[i] + ']').find(".productImg").attr('src');
                        /*appending to div*/

                        $(".product1").append(`<td class="product-image-title">
                                                    <a href="#" class="image dis">
                                                        <img class="img-fluid" src="${image}"
                                                    alt="Compare Product">
                                                    </a>
                                                </td>`);
                        $(".product2").append(`<td>${$(product).data('title')}</td>`);
                        $(".product3").append(`<td>${$(product).data('01')}</td>`);
                        $(".product4").append(`<td>${$(product).data('02')}</td>`);
                        $(".product5").append(`<td>${$(product).data('03')}</td>`);
                        $(".product6").append(`<td>${$(product).data('04')}</td>`);
                        $(".product7").append(`<td>${$(product).data('05')}</td>`);
                        $(".product8").append(`<td>${$(product).data('06')}</td>`);
                        $(".product9").append(`<td>${$(product).data('07')}</td>`);
                    }
                break;

                case "Switches & Automation":
                    $(".contentPop").append(`
                                    <tr class="product1">
                                        <td><b>Image</b></td>
                                    </tr>
                                    <tr class="product2">
                                        <td><b>Title</b></td>
                                    </tr>
                                    <tr class="product3">
                                        <td><b>Price</b></td>
                                    </tr>
                                    <tr class="product4">
                                        <td><b>Voltage</b></td>
                                    </tr>
                                    <tr class="product5">
                                        <td><b>No of Modules</b></td>
                                    </tr>
                                    <tr class="product6">
                                        <td><b>Material</b></td>
                                    </tr>
                                    <tr class="product7">
                                        <td><b>Series</b></td>
                                    </tr>
                                    <tr class="product8">
                                        <td><b>Warranty</b></td>
                                    </tr>
                                    `);

                    for (var i = 0; i < list.length; i++) {
                        /* this is to add the items to popup which are selected for comparision */
                        product = $('.selectProduct[data-id="' + list[i] + '"]');
                        var image = $('[data-id=' + list[i] + ']').find(".productImg").attr('src');
                        /*appending to div*/

                        $(".product1").append(`<td class="product-image-title">
                                                    <a href="#" class="dis">
                                                        <img class="img-fluid" src="${image}"
                                                    alt="Compare Product">
                                                    </a>
                                                </td>`);
                        $(".product2").append(`<td>${$(product).data('title')}</td>`);
                        $(".product3").append(`<td>${$(product).data('01')}</td>`);
                        $(".product4").append(`<td>${$(product).data('02')}</td>`);
                        $(".product5").append(`<td>${$(product).data('03')}</td>`);
                        $(".product6").append(`<td>${$(product).data('04')}</td>`);
                        $(".product7").append(`<td>${$(product).data('05')}</td>`);
                        $(".product8").append(`<td>${$(product).data('06')}</td>`);
                    }
                break;

                case "Protection Devices":
                    $(".contentPop").append(`
                                    <tr class="product1">
                                        <td><b>Image</b></td>
                                    </tr>
                                    <tr class="product2">
                                        <td><b>Title</b></td>
                                    </tr>
                                    <tr class="product3">
                                        <td><b>Price</b></td>
                                    </tr>
                                    <tr class="product4">
                                        <td><b>Brand</b></td>
                                    </tr>
                                    <tr class="product5">
                                        <td><b>Current Rating</b></td>
                                    </tr>
                                    <tr class="product6">
                                        <td><b>Voltage</b></td>
                                    </tr>
                                    <tr class="product7">
                                        <td><b>Insulation Voltage</b></td>
                                    </tr>
                                    <tr class="product8">
                                        <td><b>Nominal Frequency</b></td>
                                    </tr>
                                    <tr class="product9">
                                        <td><b>Mounting Type</b></td>
                                    </tr>
                                    <tr class="product10">
                                        <td><b>Certification</b></td>
                                    </tr>
                                    `);

                    for (var i = 0; i < list.length; i++) {
                        /* this is to add the items to popup which are selected for comparision */
                        product = $('.selectProduct[data-id="' + list[i] + '"]');
                        var image = $('[data-id=' + list[i] + ']').find(".productImg").attr('src');
                        /*appending to div*/

                        $(".product1").append(`<td class="product-image-title">
                                                    <a href="#" class="image dis">
                                                        <img class="img-fluid" src="${image}"
                                                    alt="Compare Product">
                                                    </a>
                                                </td>`);
                        $(".product2").append(`<td>${$(product).data('title')}</td>`);
                        $(".product3").append(`<td>${$(product).data('01')}</td>`);
                        $(".product4").append(`<td>${$(product).data('02')}</td>`);
                        $(".product5").append(`<td>${$(product).data('03')}</td>`);
                        $(".product6").append(`<td>${$(product).data('04')}</td>`);
                        $(".product7").append(`<td>${$(product).data('05')}</td>`);
                        $(".product8").append(`<td>${$(product).data('06')}</td>`);
                        $(".product9").append(`<td>${$(product).data('07')}</td>`);
                        $(".product9").append(`<td>${$(product).data('08')}</td>`);
                    }
                break;

                case "Appliances":
                    $(".contentPop").append(`
                                    <tr class="product1">
                                        <td><b>Image</b></td>
                                    </tr>
                                    <tr class="product2">
                                        <td><b>Title</b></td>
                                    </tr>
                                    <tr class="product3">
                                        <td><b>Price</b></td>
                                    </tr>
                                    <tr class="product4">
                                        <td><b>Brand</b></td>
                                    </tr>
                                    <tr class="product5">
                                        <td><b>Power</b></td>
                                    </tr>
                                    <tr class="product6">
                                        <td><b>Voltage</b></td>
                                    </tr>
                                    <tr class="product7">
                                        <td><b>Model Name</b></td>
                                    </tr>
                                    <tr class="product8">
                                        <td><b>Warranty</b></td>
                                    </tr>
                                    `);

                    for (var i = 0; i < list.length; i++) {
                        /* this is to add the items to popup which are selected for comparision */
                        product = $('.selectProduct[data-id="' + list[i] + '"]');
                        var image = $('[data-id=' + list[i] + ']').find(".productImg").attr('src');
                        /*appending to div*/

                        $(".product1").append(`<td class="product-image-title">
                                                    <a href="#" class="image dis">
                                                        <img class="img-fluid" src="${image}"
                                                    alt="Compare Product">
                                                    </a>
                                                </td>`);
                        $(".product2").append(`<td>${$(product).data('title')}</td>`);
                        $(".product3").append(`<td>${$(product).data('01')}</td>`);
                        $(".product4").append(`<td>${$(product).data('02')}</td>`);
                        $(".product5").append(`<td>${$(product).data('03')}</td>`);
                        $(".product6").append(`<td>${$(product).data('04')}</td>`);
                        $(".product7").append(`<td>${$(product).data('05')}</td>`);
                        $(".product8").append(`<td>${$(product).data('06')}</td>`);
                    }
                break;
            }
        }
        $(".modPos").show();
    });

    /* function to close the comparision popup */
    $(document).on('click', '.closeBtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".modPos").hide();
        $(".selectProduct").removeClass("selected");
        $(".cmprBtn").attr('disabled', '');
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
    });

    /*function to remove item from preview panel*/
    $(document).on('click', '.selectedItemCloseBtn', function () {

        var test = $(this).siblings("h5").attr('id');
        $('[data-id=' + test + ']').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
        }
    }

    //Signin - Signup Member
    $("#form-signup").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val();

        let email = $("#email").val();

        //Kiem tra pass (tu 3-15 ky tu - ngoai tru khoang trang)
        let pass = $("#password").val();

        //Kiem tra password confirm co giong password ko?
        let pass2 = $("#cpassword").val();
        if (pass !== pass2) {
            alert("Repeat your password is not the same as password. Please re-enter!");
            $("#cpassword").focus();
            return false;
        }

        let sub = $("#subnewsletter:checked").val();
        if (sub){
            sub = "Agree";
        }
        else{
            alert("Subscribe Our Newsletter is not checked. Please check!");
            $("#cpassword").focus();
            return false;
        }   

        localStorage.username = name;
        localStorage.pass = pass;

        let info = [];

        info.push(" Member Information");
        info.push(" ==================");
        info.push(` Name: ${name}`);
        info.push(` Email: ${email}`);
        info.push(` Password: ${pass}`);
        info.push(` Subscribe Our Newsletter: ${sub}`);

        let sINFO = info.join("\n");
        alert(sINFO);

        alert("Member information is successfully registered. Please click Ok to close tab!");

        //Clear value
        $("#name").val("");
        $("#email").val("");
        $("#password").val("");
        $("#cpassword").val("");
        $("#subnewsletter").prop("checked", false);
    });

    $("#form-signin").submit(function (e) {
        let name1 = $("#name1").val();
        let pass1 = $("#password1").val();

        let usernamecheck = localStorage.getItem("username");
        let passcheck = localStorage.getItem("pass");

        if(name1 == usernamecheck && pass1 == passcheck){
            if($("#rememberMe").is(":checked")){
                sessionStorage.username = name1;
                sessionStorage.password = pass1;
            }
            else{
                sessionStorage.username = '';
                sessionStorage.password = '';
            }
            alert("Welcome, " + name1 + ". Please click Ok to return to the HomePage!");
        }
        else{
            e.preventDefault();
            alert("Member information is not registered. Please register!");
            $("#name1").val("");
            $("#password1").val("");
            $("#rememberMe").prop("checked", false);
            $("#name").focus();
        }
    });
});

function filterPrice(data) {
    //Set price
    $("#minPrice").val(0);
    $("#maxPrice").val(40000);

    //Filter product price
    $(function () {
        let rangeSlider = $(".price-range"),
            minPrice = rangeSlider.data('min'),
            maxPrice = rangeSlider.data('max');

        let min_price = $("#minPrice");
        let max_price = $("#maxPrice");

        rangeSlider.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                min_price.val(ui.values[0]);
                max_price.val(ui.values[1]);
            }
        });

        min_price.val(rangeSlider.slider("values", 0));
        max_price.val(rangeSlider.slider("values", 1));
    });

    $(document).on("click", ".filter-btn", function (e) {
        e.preventDefault();

        let minSetPrice = $("#minPrice").val();
        let maxSetPrice = $("#maxPrice").val();

        let filteredPrice = data.filter(function (item) {
            return item.price >= minSetPrice && item.price <= maxSetPrice;
        });

        pagination(filteredPrice);

        displayImages(filteredPrice, page);
        displayPagination(filteredPrice, page);

        let clickName = 0;
        let clickPrice = 0;
        sortBy(filteredPrice, clickName, clickPrice);
    });
}

function sortBy(data, clickName, clickPrice) {
    $(document).on("click", "#sort-name", function (e) {
        e.preventDefault();

        let newData = data.slice();

        clickName += 1;

        if (clickName % 2 == 0) {
            newData.sort(function (a, b) {
                let avalue = a.title.toLowerCase();
                let bvalue = b.title.toLowerCase();

                if (avalue > bvalue) { return -1; }
                if (avalue < bvalue) { return 1; }
                return 0;
            });
        }
        else {
            newData.sort(function (a, b) {
                let avalue = a.title.toLowerCase();
                let bvalue = b.title.toLowerCase();

                if (avalue < bvalue) { return -1; }
                if (avalue > bvalue) { return 1; }
                return 0;
            });
        }

        pagination(newData);

        displayImages(newData, page);
        displayPagination(newData, page);
    });

    $(document).on("click", "#sort-price", function (e) {
        e.preventDefault();

        let newData = data.slice();

        clickPrice += 1;

        if (clickPrice % 2 == 0) {
            newData.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else {
            newData.sort(function (a, b) {
                return a.price - b.price;
            });
        }

        pagination(newData);

        displayImages(newData, page);
        displayPagination(newData, page);
    });

    $(document).on("click", "#unsort", function (e) {
        e.preventDefault();

        pagination(data);

        displayImages(data, page);
        displayPagination(data, page);
    });
}

function pagination(data) {
    $(document).on("click", "#link", function (e) {
        e.preventDefault();

        let page_no = $(this).data('id');

        displayImages(data, page_no);
        displayPagination(data, page_no);
    });
}

function displayPagination(data, page) {
    let n = Math.ceil(data.length / itemsPerPage);
    let previous;
    let next;

    if(data.length <= itemsPerPage){
        next = page;
        previous = page;
    }
    else{
        if (page <= 1) {
            previous = page;
            next = page + 1;
        }
        else if (page > n - 1) {
            previous = page - 1;
            next = page;
        }
        else {
            previous = page - 1;
            next = page + 1;
        }
    }
    

    let s = `<li><a class="Previous" href="#" id="link" data-id="${previous}">Previous</a></li>`;
    for (let i = 1; i <= n; i++) {
        if (i == page) {
            s += `<li class="active"><a href="#" id="link" data-id="${i}">${i}</a></li>`;
        }
        else {
            s += `<li><a href="#" id="link" data-id="${i}">${i}</a></li>`;
        }
    }
    s += `<li><a class="Next" href="#" id="link" data-id=${next}> Next </a></li>`;



    $(".pagination-box").html(s);
}

function displayImages(data, page) {
    let s = ``;
    let t = ``;
    let length = data.length;
    let startItem = (page - 1) * itemsPerPage;
    let stopItem = 0;

    if (length - startItem < itemsPerPage) {
        stopItem = length;
    }
    else {
        stopItem = startItem + itemsPerPage;
    }

    t += `<p>Showing ${startItem + 1} – ${stopItem} of ${length} results</p>`;

    for (let i = startItem; i < stopItem; i++) {
        s += `<div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="product-item fix mb-30">
                        <div class="product-thumb">
                            <p>
                                <img src="assets/img/product/${data[i].pic1}" class="img-${data[i].id}" alt="">
                            </p>`;
        if (data[i].feature != "") {
            s += `<div class="product-label">
                                <span>${data[i].feature}</span>
                            </div>`;
        }
        s += `<div class="product-action-link">
                                <a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><span data-toggle="tooltip" data-placement="left" title="Quick view"><i class="fa fa-search"></i></span> </a>
                                <a href="#" data-toggle="tooltip" data-placement="left" title="Compare" id="compareList" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><i class="fa fa-refresh"></i></a>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}">${data[i].title}</a></h4>
                            <div class="pricebox">
                                <span class="regular-price">Rs. ${data[i].price}</span>
                                <span class="old-price"><del>Rs. ${data[i].old_price}</del></span>
                                <div class="ratings">
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <div class="pro-review">
                                        <span>1 review(s)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list-item mb-30">
                        <div class="product-thumb">
                            <a href="#" class="dis">
                                <img src="assets/img/product/${data[i].pic1}" class="img-${data[i].id}" alt="">
                            </a>`;
        if (data[i].feature != "") {
            s += `<div class="product-label">
                                <span>${data[i].feature}</span>
                            </div>`;
        }

        s += `</div>
                        <div class="product-list-content">
                            <h3><a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}">${data[i].title}</a></h3>
                            <div class="ratings">
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <div class="pro-review">
                                    <span>1 review(s)</span>
                                </div>
                            </div>
                            <div class="pricebox">
                                <span class="regular-price">Rs. ${data[i].price}</span>
                                <span class="old-price"><del>Rs. ${data[i].old_price}</del></span>
                            </div>
                            <p>${data[i].note1}</p>
                            <p>${data[i].note2}</p>
                            <div class="product-list-action-link">
                                <a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i class="fa fa-search"></i></span> </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" id="compareList" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><i class="fa fa-refresh"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>`;
    }

    $("#showing-results").html(t);
    $("#products").html(s);

}

function setModal(product, data) {
    let x = `<div class="wrapper box-layout mt-50">
                <div class="product-details-wrapper mt-50">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="product-details-inner">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="product-large-slider mb-20 slick-arrow-style_2">
                                                        <div class="pro-large-img img-zoom" id="img1">
                                                            <img src="assets/img/product/${product.pic1}" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="product-details-des mt-md-34 mt-sm-34">
                                                        <h3>${product.title}</h3>
                                                        <div class="ratings">
                                                            <span><i class="fa fa-star"></i></span>
                                                            <span><i class="fa fa-star"></i></span>
                                                            <span><i class="fa fa-star"></i></span>
                                                            <span><i class="fa fa-star"></i></span>
                                                            <span><i class="fa fa-star-o"></i></span>
                                                            <div class="pro-review">
                                                                <span>1 review(s)</span>
                                                            </div>
                                                        </div>
                                                        <div class="pricebox">
                                                            <span class="regular-price">Rs. ${product.price}</span> &nbsp;
                                                            <span class="old-price"><del>Rs. ${product.old_price}</del></span>
                                                        </div>
                                                        <p>${product.note1}</p>
                                                        <div class="useful-links mt-20">
                                                            <a href="#" data-toggle="tooltip" data-placement="top"
                                                                title="Compare" id="compareList" data-id="${product.id}" data-type="${product.type}" data-category="${product.category}"><i class="fa fa-refresh"></i>compare</a>
                                                        </div>
                                                        <div class="share-icon mt-20">
                                                            <a class="facebook dis" href="#"><i
                                                                    class="fa fa-facebook"></i>like</a>
                                                            <a class="twitter dis" href="#"><i
                                                                    class="fa fa-twitter"></i>tweet</a>
                                                            <a class="pinterest dis" href="#"><i
                                                                    class="fa fa-pinterest"></i>save</a>
                                                            <a class="google dis" href="#"><i
                                                                    class="fa fa-google-plus"></i>share</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                
                                        <div class="product-details-reviews mt-34">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="product-review-info">
                                                        <ul class="nav review-tab">
                                                            <li>
                                                                <a class="active" data-toggle="tab" href="#tab_one">details information</a>
                                                            </li>
                                                            <li>
                                                                <a data-toggle="tab" href="#tab_two">more information</a>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content reviews-tab">
                                                            <div class="tab-pane fade show active" id="tab_one">
                                                                <table class="table table-bordered">
                                                                    <tbody id="detail-product">`;

    switch (product.category) {
        case "LED & Lighting":
            x += `
                                                                        <tr>
                                                                            <td><b>Brand</b></td>
                                                                            <td>${product.brand}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Product category</b></td>
                                                                            <td>${product.product_category}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Power</b></td>
                                                                            <td>${product.power}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Voltage</b></td>
                                                                            <td>${product.voltage}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Colour Temperature</b></td>
                                                                            <td>${product.colour_temperature}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Lumen Output</b></td>
                                                                            <td>${product.lumen_output}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Bulb Base</b></td>
                                                                            <td>${product.bulb_base}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Rated Life</b></td>
                                                                            <td>${product.rated_life}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Energy Saving</b></td>
                                                                            <td>${product.energy_saving}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Suitable For</b></td>
                                                                            <td>${product.suitable_for}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Package Contents</b></td>
                                                                            <td>${product.package_contents}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Warranty</b></td>
                                                                            <td>${product.warranty}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Catalouge</b></td>
                                                                            <td><a href="assets/catalogue/LED AND LIGHTING.docx"><button class="btn-outline-danger">CLICK TO DOWNLOAD</button></a></td>
                                                                        </tr>
                `;
            break;
        case "FANs":
            x += `
                                                                        <tr>
                                                                            <td><b>Brand</b></td>
                                                                            <td>${product.brand}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Product category</b></td>
                                                                            <td>${product.product_category}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Power</b></td>
                                                                            <td>${product.power}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Voltage</b></td>
                                                                            <td>${product.voltage}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Modal Name</b></td>
                                                                            <td>${product.modal_name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Sweep</b></td>
                                                                            <td>${product.sweep}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>R.P.M.</b></td>
                                                                            <td>${product.rpm}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Air Capacity/Air Delivery (C.F.M.)</b></td>
                                                                            <td>${product.cfm}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Air Capacity/Air Delivery (M3H)</b></td>
                                                                            <td>${product.m3h}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>No of Blade</b></td>
                                                                            <td>${product.no_of_blade}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Suitable For</b></td>
                                                                            <td>${product.suitable_for}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Package Contents</b></td>
                                                                            <td>${product.package_contents}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Warranty</b></td>
                                                                            <td>${product.warranty}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Catalouge</b></td>
                                                                            <td><a href="assets/catalogue/FANS.docx"><button class="btn-outline-danger">CLICK TO DOWNLOAD</button></a></td>
                                                                        </tr>
                `;
            break;
        case "Cables & Wires":
            x += `
                                                                        <tr>
                                                                            <td><b>Brand</b></td>
                                                                            <td>${product.brand}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Product category</b></td>
                                                                            <td>${product.product_category}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Size of Conductor</b></td>
                                                                            <td>${product.size_of_conductor}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Conductor Material</b></td>
                                                                            <td>${product.conductor_material}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Colour</b></td>
                                                                            <td>${product.colour}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Overall Diameter</b></td>
                                                                            <td>${product.overall_diameter}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Current Rating</b></td>
                                                                            <td>${product.current_rating}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Thickness of Insulation</b></td>
                                                                            <td>${product.thickness_of_insulation}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Catalouge</b></td>
                                                                            <td><a href="assets/catalogue/CABLES AND WIRES.docx"><button class="btn-outline-danger">CLICK TO DOWNLOAD</button></a></td>
                                                                        </tr>
                    `;
            break;
        case "Switches & Automation":
            x += `
                                                                        <tr>
                                                                            <td><b>Brand</b></td>
                                                                            <td>${product.brand}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Product category</b></td>
                                                                            <td>${product.product_category}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Power</b></td>
                                                                            <td>${product.power}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Voltage</b></td>
                                                                            <td>${product.voltage}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Series</b></td>
                                                                            <td>${product.series}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Colour</b></td>
                                                                            <td>${product.colour}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>No of Modules</b></td>
                                                                            <td>${product.no_of_modules}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Material</b></td>
                                                                            <td>${product.material}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Warranty</b></td>
                                                                            <td>${product.warranty}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Catalouge</b></td>
                                                                            <td><a href="assets/catalogue/SWITCHES.docx"><button class="btn-outline-danger">CLICK TO DOWNLOAD</button></a></td>
                                                                        </tr>
                `;
            break;
        case "Protection Devices":
            x += `
                                                                        <tr>
                                                                            <td><b>Brand</b></td>
                                                                            <td>${product.brand}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Product category</b></td>
                                                                            <td>${product.product_category}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Power</b></td>
                                                                            <td>${product.power}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Voltage</b></td>
                                                                            <td>${product.voltage}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Series</b></td>
                                                                            <td>${product.current_rating}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Colour</b></td>
                                                                            <td>${product.colour}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Rated Operating Voltage Ue</b></td>
                                                                            <td>${product.rated_operating_voltage_ue}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Insulation Voltage</b></td>
                                                                            <td>${product.insulation_voltage}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Nominal Frequency</b></td>
                                                                            <td>${product.nominal_frequency}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Mounting Type</b></td>
                                                                            <td>${product.mounting_type}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Package Contents</b></td>
                                                                            <td>${product.package_contents}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Certification</b></td>
                                                                            <td>${product.certification}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Material</b></td>
                                                                            <td>${product.material}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Warranty</b></td>
                                                                            <td>${product.warranty}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Catalouge</b></td>
                                                                            <td><a href="assets/catalogue/PROTECTION DEVICES.docx"><button class="btn-outline-danger">CLICK TO DOWNLOAD</button></a></td>
                                                                        </tr>
                `;
            break;
        case "Appliances":
            x += `
                                                                        <tr>
                                                                            <td><b>Brand</b></td>
                                                                            <td>${product.brand}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Product category</b></td>
                                                                            <td>${product.product_category}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Power</b></td>
                                                                            <td>${product.power}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Voltage</b></td>
                                                                            <td>${product.voltage}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Model Name</b></td>
                                                                            <td>${product.model_name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Colour</b></td>
                                                                            <td>${product.colour}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Package Contents</b></td>
                                                                            <td>${product.package_contents}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Warranty</b></td>
                                                                            <td>${product.warranty}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Catalouge</b></td>
                                                                            <td><a href="assets/catalogue/APPLIANCES.docx"><button class="btn-outline-danger">CLICK TO DOWNLOAD</button></a></td>
                                                                        </tr>
                `;
            break;

    }

    x +=
        `</tbody>
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane fade" id="tab_two">
                                                                <table class="table table-bordered">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>${product.note2}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>${product.note3}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>${product.note4}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>${product.note5}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>${product.note6}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            `;

    x += `
                                        <div class="related-products-area mt-34">
                                            <div class="section-title mb-30">
                                                <div class="title-icon">
                                                    <i class="fa fa-desktop"></i>
                                                </div>
                                                <h3>related products</h3>
                                            </div>
                                            <div class="featured-carousel-active slick-padding slick-arrow-style">
        `;
    let length = data.length;

    for (let i = 0; i < length; i++) {
        if (product.id == data[i].id) {
            continue;
        }
        else {
            x += `
                                                <div class="product-item fix">
                                                    <div class="product-thumb">
                                                        <a href="#" class="dis">
                                                            <img src="assets/img/product/${data[i].pic1}" class="img-pri" alt="">
                                                        </a>`;
            if (data[i].feature != "") {
                x += `<div class="product-label">
                                                            <span>${data[i].feature}</span>
                                                        </div>`;
            }
            x += `<div class="product-action-link">
                                                            <a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><span data-toggle="tooltip" data-placement="left" title="Quick view"><i class="fa fa-search"></i></span> </a>
                                                            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare" id="compareList" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><i class="fa fa-refresh"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="product-content">
                                                        <h4><a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}">${data[i].title}</a></h4>
                                                        <div class="pricebox">
                                                            <span class="regular-price">Rs. ${data[i].price}</span>
                                                            <span class="old-price"><del>Rs. ${data[i].old_price}</del></span>
                                                            <div class="ratings">
                                                                <span class="good"><i class="fa fa-star"></i></span>
                                                                <span class="good"><i class="fa fa-star"></i></span>
                                                                <span class="good"><i class="fa fa-star"></i></span>
                                                                <span class="good"><i class="fa fa-star"></i></span>
                                                                <span><i class="fa fa-star"></i></span>
                                                                <div class="pro-review">
                                                                    <span>1 review(s)</span>
                                                                </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
            `;
        }
    }
    x += `      
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
    $('#modalProduct').html(x);
}

function setCompare(category, data, id) {
    let y = ``;
    let length = data.length;

    switch (category) {
        case "LED & Lighting":
            for (i = 0; i < length; i++) {
                y += `<div class='col-lg-3 col-md-3 col-sm-4 col-xs-4 w3-center mt-20'>
                            <div class="selectProduct" data-title="${data[i].title}"
                                data-id="${data[i].id}" 
                                data-category="${data[i].category}"
                                data-01="${data[i].price}" 
                                data-02="${data[i].brand}" 
                                data-03="${data[i].power}"
                                data-04="${data[i].voltage}" 
                                data-05="${data[i].colour_temperature}"
                                data-06="${data[i].lumen_output}"
                                data-07="${data[i].energy_saving}"
                                data-08="${data[i].energy_saving}">
                                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare"> + </a>
                                <img src="assets/img/product/${data[i].pic1}" class="imgFill productImg" width="100%">
                                <h6>${data[i].title}</h6>
                                </div> 
                        </div>`;
            }
            break;

        case "FANs":
            for (i = 0; i < length; i++) {
                y += `<div class='col-lg-3 col-md-3 col-sm-4 col-xs-4 w3-center mt-20'>
                            <div class="selectProduct" data-title="${data[i].title}" 
                                data-id="${data[i].id}" 
                                data-category="${data[i].category}"
                                data-01="${data[i].price}" 
                                data-02="${data[i].brand}" 
                                data-03="${data[i].power}"
                                data-04="${data[i].voltage}" 
                                data-05="${data[i].sweep}"
                                data-06="${data[i].no_of_blade}"
                                data-07="${data[i].suitable_for}"
                                data-08="${data[i].rpm}">
                                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare"> + </a>
                                <img src="assets/img/product/${data[i].pic1}" class="imgFill productImg" width="100%">
                                <h6>${data[i].title}</h6>
                                </div> 
                        </div>`;
            }
            break;
        case "Cables & Wires":
            for (i = 0; i < length; i++) {
                y += `<div class='col-lg-3 col-md-3 col-sm-4 col-xs-4 w3-center mt-20'>
                            <div class="selectProduct" data-title="${data[i].title}"
                                data-id="${data[i].id}" 
                                data-category="${data[i].category}"
                                data-01="${data[i].price}" 
                                data-02="${data[i].brand}" 
                                data-03="${data[i].size_of_conductor}"
                                data-04="${data[i].conductor_material}" 
                                data-05="${data[i].overall_diameter}"
                                data-06="${data[i].current_rating}"
                                data-07="${data[i].thickness_of_insulation}">
                                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare"> + </a>
                                <img src="assets/img/product/${data[i].pic1}" class="imgFill productImg" width="100%">
                                <h6>${data[i].title}</h6>
                                </div> 
                        </div>`;
            }
            break;
        case "Switches & Automation":
            for (i = 0; i < length; i++) {
                y += `<div class='col-lg-3 col-md-3 col-sm-4 col-xs-4 w3-center mt-20'>
                            <div class="selectProduct" data-title="${data[i].title}"
                                data-id="${data[i].id}" 
                                data-category="${data[i].category}"
                                data-01="${data[i].price}" 
                                data-02="${data[i].voltage}" 
                                data-03="${data[i].no_of_modules}"
                                data-04="${data[i].material}" 
                                data-05="${data[i].series}"
                                data-06="${data[i].warranty}">
                                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare"> + </a>
                                <img src="assets/img/product/${data[i].pic1}" class="imgFill productImg" width="100%">
                                <h6>${data[i].title}</h6>
                                </div> 
                        </div>`;
            }
            break;
        case "Protection Devices":
            for (i = 0; i < length; i++) {
                y += `<div class='col-lg-3 col-md-3 col-sm-4 col-xs-4 w3-center mt-20'>
                            <div class="selectProduct" data-title="${data[i].title}"
                                data-id="${data[i].id}" 
                                data-category="${data[i].category}"
                                data-01="${data[i].price}" 
                                data-02="${data[i].brand}" 
                                data-03="${data[i].current_rating}"
                                data-04="${data[i].voltage}" 
                                data-05="${data[i].insulation_voltage}"
                                data-06="${data[i].nominal_frequency}"
                                data-07="${data[i].mounting_type}"
                                data-08="${data[i].certification}">
                                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare"> + </a>
                                <img src="assets/img/product/${data[i].pic1}" class="imgFill productImg" width="100%">
                                <h6>${data[i].title}</h6>
                                </div> 
                        </div>`;
            }
            break;
        case "Appliances":
            for (i = 0; i < length; i++) {
                y += `<div class='col-lg-3 col-md-3 col-sm-4 col-xs-4 w3-center mt-20'>
                            <div class="selectProduct" data-title="${data[i].title}"
                                data-id="${data[i].id}" 
                                data-category="${data[i].category}"
                                data-01="${data[i].price}" 
                                data-02="${data[i].brand}" 
                                data-03="${data[i].power}"
                                data-04="${data[i].voltage}" 
                                data-05="${data[i].model_name}"
                                data-06="${data[i].warranty}">
                                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare"> + </a>
                                <img src="assets/img/product/${data[i].pic1}" class="imgFill productImg" width="100%">
                                <h6>${data[i].title}</h6>
                                </div> 
                        </div>`;
            }
            break;


    }

    $("#body-data").html(y);
    $('[data-id=' + id + ']').find(".addToCompare").click();
}

function displayCategory(data, page) {
    let s = ``;
    let t = ``;
    let length = data.length;
    let startItem = (page - 1) * itemsPerPage;
    let stopItem = 0;

    if (length - startItem < itemsPerPage) {
        stopItem = length;
    }
    else {
        stopItem = startItem + itemsPerPage;
    }

    t += `<p>Showing ${startItem + 1} – ${stopItem} of ${length} results</p>`;

    for (let i = startItem; i < stopItem; i++) {
        s += `<div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product-item fix mb-30">
                        <div class="product-thumb">
                            <p>
                                <img src="assets/img/product/${data[i].pic1}" class="img-${data[i].id}" alt="">
                            </p>`;
        if (data[i].feature != "") {
            s += `<div class="product-label">
                                <span>${data[i].feature}</span>
                            </div>`;
        }
        s += `<div class="product-action-link">
                                <a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><span data-toggle="tooltip" data-placement="left" title="Quick view"><i class="fa fa-search"></i></span> </a>
                                <a href="#" data-toggle="tooltip" data-placement="left" title="Compare" id="compareList" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><i class="fa fa-refresh"></i></a>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}">${data[i].title}</a></h4>
                            <div class="pricebox">
                                <span class="regular-price">Rs. ${data[i].price}</span>
                                <span class="old-price"><del>Rs. ${data[i].old_price}</del></span>
                                <div class="ratings">
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span class="good"><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <div class="pro-review">
                                        <span>1 review(s)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list-item mb-30">
                        <div class="product-thumb">
                            <a href="#" class="dis">
                                <img src="assets/img/product/${data[i].pic1}" class="img-${data[i].id}" alt="">
                            </a>`;
        if (data[i].feature != "") {
            s += `<div class="product-label">
                                <span>${data[i].feature}</span>
                            </div>`;
        }

        s += `          </div>
                        <div class="product-list-content">
                            <h3><a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}">${data[i].title}</a></h3>
                            <div class="ratings">
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span class="good"><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <div class="pro-review">
                                    <span>1 review(s)</span>
                                </div>
                            </div>
                            <div class="pricebox">
                                <span class="regular-price">Rs. ${data[i].price}</span>
                                <span class="old-price"><del>Rs. ${data[i].old_price}</del></span>
                            </div>
                            <p>${data[i].note1}</p>
                            <p>${data[i].note2}</p>
                            <div class="product-list-action-link">
                                <a href="#" id="divImage" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i class="fa fa-search"></i></span> </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" id="compareList" data-id="${data[i].id}" data-type="${data[i].type}" data-category="${data[i].category}"><i class="fa fa-refresh"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>`;
    }

    $("#showing-results-caregory").html(t);
    $("#productCategory").html(s);
}

function paginationCategory(data) {
    $(document).on("click", "#linkCategory", function (e) {
        e.preventDefault();

        let page_no = $(this).data('id');

        console.log(page_no);

        displayCategory(data, page_no);
        displayPaginationCategory(data, page_no);
    });
}

function displayPaginationCategory(data, page) {
    let n = Math.ceil(data.length / itemsPerPage);
    let previous;
    let next;

    if(data.length <= itemsPerPage){
        next = page;
        previous = page;
    }
    else{
        if (page <= 1) {
            previous = page;
            next = page + 1;
        }
        else if (page > n - 1) {
            previous = page - 1;
            next = page;
        }
        else {
            previous = page - 1;
            next = page + 1;
        }
    }

    let s = `<li><a class="Previous" href="#" id="linkCategory" data-id="${previous}">Previous</a></li>`;
    for (let i = 1; i <= n; i++) {
        if (i == page) {
            s += `<li class="active"><a href="#" id="linkCategory" data-id="${i}">${i}</a></li>`;
        }
        else {
            s += `<li><a href="#" id="linkCategory" data-id="${i}">${i}</a></li>`;
        }
    }
    s += `<li><a class="Next" href="#" id="linkCategory" data-id=${next}> Next </a></li>`;



    $(".pagination-category").html(s);
}

function sortByCategory(data, clickName, clickPrice) {
    $(document).on("click", "#sortName-category", function (e) {
        e.preventDefault();

        let newData = data.slice();

        clickName += 1;

        if (clickName % 2 == 0) {
            newData.sort(function (a, b) {
                let avalue = a.title.toLowerCase();
                let bvalue = b.title.toLowerCase();

                if (avalue > bvalue) { return -1; }
                if (avalue < bvalue) { return 1; }
                return 0;
            });
        }
        else {
            newData.sort(function (a, b) {
                let avalue = a.title.toLowerCase();
                let bvalue = b.title.toLowerCase();

                if (avalue < bvalue) { return -1; }
                if (avalue > bvalue) { return 1; }
                return 0;
            });
        }

        paginationCategory(newData);

        displayCategory(newData, page);
        displayPaginationCategory(newData, page);
    });

    $(document).on("click", "#sortPrice-category", function (e) {
        e.preventDefault();

        let newData = data.slice();

        clickPrice += 1;

        if (clickPrice % 2 == 0) {
            newData.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else {
            newData.sort(function (a, b) {
                return a.price - b.price;
            });
        }

        paginationCategory(newData);

        displayCategory(newData, page);
        displayPaginationCategory(newData, page);
    });

    $(document).on("click", "#unsort-category", function (e) {
        e.preventDefault();

        paginationCategory(data);

        displayCategory(data, page);
        displayPaginationCategory(data, page);
    });
}
