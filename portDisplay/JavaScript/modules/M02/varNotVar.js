/* Brad Botteron
9/8/2019
Examine behavior of adding or omitting var
 */

// These are both globals
var foo = 1;
bar = 2;

document.write("<p class='global'>\n");
document.write("From Global Scope: foo = " + foo + "<br />\n");
document.write("From Global Scope: bar = " + bar + "<br />\n");
document.write("</p>\n");

function funOne() {
    var foo = 3; // Local
    bar = 4; // Global

    document.write("<p class=fun1>\n");
    document.write("From inside funOne(): foo = " + foo + "<br />\n");
    document.write("From inside funOne(): bar = " + bar + "<br />\n");
    document.write("</p>\n");

    function funTwo() {
        foo = 2; // Inherits from scope above (creating a closure)
        moo = 3; // Global
        document.write("<p class=fun2>\n");
        document.write("From inside funTwo(): foo = " + foo + "<br />\n");
        document.write("From insdie funTwo(): moo = " + moo + "<br />\n");
        document.write("</p>\n");
    } // END FUNTWO
    funTwo();
    document.write("<p class=fun1>\n");
    document.write("From inside funOne(): foo = " + foo + "<br />\n");
    document.write("From inside funOne(): bar = " + bar + "<br />\n");
    document.write("</p>\n");
} // END FUNONE

funOne();

document.write("<p class=global>\n");
document.write("From global scope: foo = " + foo + "<br />\n");
document.write("From global scope: bar = " + bar + "<br />\n");
document.write("From global scope: moo = " + moo + "<br />\n");
document.write("</p>\n");
