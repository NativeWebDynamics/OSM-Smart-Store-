


// report 1
function createPDF1() {
    var SQTable = document.getElementById('SalesAccQuantity').innerHTML;
    var SQheading=document.getElementById("heading-table2").innerHTML;
    
    var Hotheading1=document.getElementById("hot-product-heading").innerHTML;
    var HotPTable = document.getElementById('Hot-Product').innerHTML;


    var MonthSTable = document.getElementById('Monthly-sale').innerHTML;
    var MSheading2=document.getElementById("Monthly-sale-heading").innerHTML;


    var CityHeading=document.getElementById("CityHeading").innerHTML;
    var CityTable=document.getElementById("CityTable").innerHTML;


    var style = "<style>";

    style = style + "table {width: 100%;font: 17px Calibri; margin-top:20px; margin-bottom:20px; border:4px  solid #DDD}";
    style = style + "table, th, td {border:1px  solid #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px; text-align: center;}";

   
    style = style + "</style>";

    var style1 = "<style>";

    style1 = style1 + "h6{ font-weight: 500;  color:red;";
    style1 = style1 + "}";

   
    style1 = style1 + "</style>";
    
    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>OSM - Monthly Sales</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);   
    win.document.write(style1);        // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(Hotheading1);  
    win.document.write(HotPTable);    // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write(MSheading2);  
    win.document.write( MonthSTable); 
    // quantity table
    win.document.write(SQheading);  
    win.document.write( SQTable);
    // city table 
    win.document.write(CityHeading);  
    win.document.write(CityTable); 
       
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
}



// report for specific date and month 
function createPDF2() {
    var SQTable = document.getElementById('SalesAccQuantity').innerHTML;
    var SQheading=document.getElementById("heading-table2").innerHTML;
    
    var Hotheading1=document.getElementById("hot-product-heading").innerHTML;
    var HotPTable = document.getElementById('Hot-Product').innerHTML;


    var MonthSTable = document.getElementById('Monthly-sale').innerHTML;
    var MSheading2=document.getElementById("Monthly-sale-heading").innerHTML;


    var CityHeading=document.getElementById("CityHeading").innerHTML;
    var CityTable=document.getElementById("CityTable").innerHTML;


    var style = "<style>";

    style = style + "table {width: 100%;font: 17px Calibri; margin-top:20px; margin-bottom:20px; border:4px  solid #DDD}";
    style = style + "table, th, td {border:1px  solid #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px; text-align: center;}";

   
    style = style + "</style>";

    var style1 = "<style>";

    style1 = style1 + "h6{ font-weight: 500;  color:red;";
    style1 = style1 + "}";

   
    style1 = style1 + "</style>";
    
    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>OSM - Specific Date + month</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);   
    win.document.write(style1);        // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(Hotheading1);  
    win.document.write(HotPTable);    // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write(MSheading2);  
    win.document.write( MonthSTable); 
    // quantity table
    win.document.write(SQheading);  
    win.document.write( SQTable);
    // city table 
    win.document.write(CityHeading);  
    win.document.write(CityTable); 
       
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
}






$("#PDF-1").click(function(){
    createPDF1();
})



$("#PDF-2").click(function(){
    createPDF2();
})

