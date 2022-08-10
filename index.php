<html>
    <head>
        <meta chartset="UTF-8">
        <title>MASTER</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <div class="crud">
            <div class="head">
                <h2>cruds</h2>
                <h2>product mangment system</h2>
            </div>
            <div class="inputs">
                <input placeholder="Product Name" type="text" id="product_name">
                <div class="price">
                <input onkeyup= "getTotalPrice()" placeholder="Product Price" type="number" id="product_price">
                <input onkeyup= "getTotalPrice()" placeholder="Product Taxes" type="number" id="product_taxes">
                <input onkeyup= "getTotalPrice()" placeholder="Product ads" type="number" id="product_ads">
                <input onkeyup= "getTotalPrice()" placeholder="Product discount" type="number" id="product_discount">
                <small id="total"></small>
                </div>
                <input placeholder="count" type="text" id="count">
                <input placeholder="category" type="text" id="category">
                <button id="submit" type="submit" class="btn btn-primary">Create</button>
            </div>
            <div class="outputs">
                <div class="searchBlock">
                    <input onkeyup= "searchData(this.value)" placeholder="Search" type="text" id="search">
                    <div class="btnSearch">
                        <button onclick="getSearchMood(this.id)" id="searchname">Search By Name</button>
                        <button onclick="getSearchMood(this.id)" id="searchCategory">Search By Category</button>
                    </div>
                    <div id="deleteAlldev">
                    
                    </div>
                    
                    <table>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>taxes</th>
                            <th>ads</th>
                            <th>discount</th>
                            <th>total</th>
                            <th>category</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                        <tbody id='tbody'>
                            
                        </tbody>
                    </table>

                </div>
            </div>

        </div>

    <script src="main.js"></script>
    </body>

</html>