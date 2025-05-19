$(document).ready(function(){
    function fetchProducts() {
        $.ajax({
            url: "http://localhost:3000/api/products",
            type: "GET",
            success: function(products) {
                let rows = "";
                products.forEach(product => {
                    rows += `<tr>
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td>${product.price}</td>
                        <td>
                            <button class="edit" data-id="${product.id}" data-name="${product.name}" data-category="${product.category}" data-price="${product.price}">Edit</button>
                            <button class="delete" data-id="${product.id}">Delete</button>
                        </td>
                    </tr>`;
                });
                $("#productTable").html(rows);
            }
        });
    }

    $("#productForm").submit(function(event){
        event.preventDefault();
        let productData = {
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val()
        };

        $.ajax({
            url: "http://localhost:3000/api/products",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(productData),
            success: function(response) {
                $("#message").text(response.message).css("color", "green");
                $("#productForm")[0].reset();
                fetchProducts();
            }
        });
    });

    $(document).on("click", ".edit", function(){
        $("#productId").val($(this).data("id"));
        $("#name").val($(this).data("name"));
        $("#category").val($(this).data("category"));
        $("#price").val($(this).data("price"));

        $("#updateBtn").show();
        $("form button[type='submit']").hide();
    });

    $("#updateBtn").click(function(){
        let id = $("#productId").val();
        let updatedProduct = {
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val()
        };

        $.ajax({
            url: `http://localhost:3000/api/products/${id}`,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(updatedProduct),
            success: function(response) {
                $("#message").text(response.message).css("color", "green");
                $("#productForm")[0].reset();
                $("#updateBtn").hide();
                $("form button[type='submit']").show();
                fetchProducts();
            }
        });
    });

    $(document).on("click", ".delete", function(){
        let id = $(this).data("id");
        $.ajax({
            url: `http://localhost:3000/api/products/${id}`,
            type: "DELETE",
            success: function() {
                fetchProducts();
            }
        });
    });

    fetchProducts();
});
