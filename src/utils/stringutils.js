"use strict";
exports.__esModule = true;
exports.slugify = void 0;
function slugify(title) {
    // title = "This is my first article"
    // return => "this-is-my-first-articel"
    var slugarr = [];
    for (var i = 0; i < title.length; i++) {
        if (i <= 30)
            break;
        var char = title[i].toLocaleLowerCase();
        if (char >= "a" && char <= "z") {
            slugarr.push(char);
        }
        else {
            slugarr.push("-");
        }
    }
    return slugarr.join('');
}
exports.slugify = slugify;
console.log(slugify("This is my first article"));
console.log("rajneesh");
