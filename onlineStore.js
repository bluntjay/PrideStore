 $(function() {
    // Create a constant to store items from the cart
    const cartItemArray = JSON.parse(sessionStorage.getItem("cart") || "[]");
    // Create a varible to keep track of the total price
    var totalPrice = 0
    // Loops over the items name & price into the cart
    for (var i of cartItemArray) {
        var item = parseInt($("#" + i).find(".price").text())
        totalPrice += item
    }
    // Writes the total price to the cart
    $("#totalPrice").text(totalPrice)
    // Allows cart to slide up 
    $("#cartItems").slideUp();
    // Allows items to be added to cart aswell as allows user to slide the cart back up
    $(".addToCart, .cart").on("click", function() {
        $("#cartItems").slideToggle();
    });
    // Adds items user has chosen to the cart 
    $("#itemsBask").text("(" + ($("#listItem").children().length) + ")");

    // Allows the item to be added to cart on click 
    $(".addToCart").on("click", function() {
        console.log($(this).parents(".item").html());
        cartItemArray.push($(this).parents(".item").attr("id"));
        // Converts items in array into strings
        sessionStorage.setItem("cart", JSON.stringify(cartItemArray));
        // Allows the cart to slide down & back up after a certain amount of time
        $("#cartItems").slideDown();
        setTimeout(function() {
            $("#cartItems").slideUp();
        }, 2000)
        //This function adds items to cart with their names & prices
        var _this = this
        $(this).each(function() {
            // Creates variable for names to be written
            var cena = (parseInt($(this).parents(".item").find(".price").text()))
            // Creates variable for prices to be written
            var name = $(this).parents(".item").find(".itemName").text();
            // Creates a button that allows user to remove an item
            var remove = $("<button/>").click(function() {
                $(this).parent().remove();
                // Converts total price into a integer & then writes it to cart
                var totalPrice = parseInt($("#totalPrice").text());
                // Decrements the the toatl price when items are removed
                totalPrice -= cena
                // Writes the new total price 
                $("#totalPrice").text(totalPrice);
                // Writes an "X" into the button
                $("#itemsBask").text("(" + ($("#listItem").children().length) + ")");
            }).html("X")
            // Appends items to the carts list
            $("#listItem").append($("<li/>").html(name + "&#09; - &#09;" + cena + "$").append(remove));

            //Shows amount of items in cart
            $("#itemsBask").text("(" + ($("#listItem").children().length) + ")");
            // Writes items to cart
            $("#itemsBask").text();

            //Calculates the total price within the cart
            var totalPrice = parseInt($("#totalPrice").text()) || 0;
            $("#totalPrice").text((totalPrice + cena));
        });
        // Alerts you on your total when an item is added
        alert("Your total is $" + $("#totalPrice").text())
    });
    // Creates a function for a dialog that displays the infomation of item with a quick "Add To Cart"
    $(".aboutItem").each(function() {
        // Creates a variable for "this"
        var _this = this
        // Hides all descriptions from the user
        $("h4").hide();
        // Create a dialog
        var dialog = $("<dialog/>");
        // Creates a div for dialog
        var content = $("<div/>");
        // Creates button for dialog
        var addBut = $("<button/>");
        // Writes "Add To Cart" in the button
        addBut.html("Add To Cart")
        // Appends desciptions to dialog & writes it out 
        var aboutContent = $(this).parents(".item").find("h4").html()
        // Writes content to the div
        content.html(aboutContent);
        // Appends div to the dialog
        dialog.append(content);
        // Appends the "Add to Cart" button to dialog
        dialog.append(addBut)
        // Appends dialog to the body of the HTML page
        $(document.body).append(dialog);
        $(this).click(() => {
            dialog.get(0).showModal();
        });
        // Create function for button within dialog for a quick add to cart
        addBut.click(function() {
            // Variable for items name
            var name = $(_this).parents(".item").find(".itemName").text();
            // Variable for items price
            var cena = (parseInt($(_this).parents(".item").find(".price").text()))
            // When button is clicked this remove function is implemented 
            var remove = $("<button/>").click(function() {
                $(this).parent().remove();
                // Converts total into an Integer
                var totalPrice = parseInt($("#totalPrice").text());
                totalPrice -= cena
                $("#totalPrice").text(totalPrice);
                $("#itemsBask").text("(" + ($("#listItem").children().length) + ")");
            }).html("X")
            // Appends items to dialog with their names, prices & remove button
            $("#listItem").append($("<li/>").html(name + "-" + cena + "$").append(remove))
            // Writes items from the "quick add" into the cart
            $("#itemsBask").text("(" + ($("#listItem").children().length) + ")");
            $("#itemsBask").text();
            // Coverts items total price into an integer
            var totalPrice = parseInt($("#totalPrice").text()) || 0;
            $("#totalPrice").text(totalPrice + cena);
            // Alerts you on your when item is added from dialog 
            alert("Your total is $" + (parseInt(totalPrice) + cena))
        });

    })

})