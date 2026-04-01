"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPost = void 0;
var BlogPost = /** @class */ (function () {
    function BlogPost() {
        //What is currently displayed on the panel
        this.text = "";
    }
    BlogPost.prototype.pressButton = function (t) {
        this.text += t;
    };
    BlogPost.prototype.deleteButton = function () {
        this.text = "";
    };
    BlogPost.prototype.charLength = function (t) {
        var notif = "";
        if (t.length > 50) {
            notif = "Too many characters!";
        }
        else if (t.length < 10) {
            notif = "Write more characters!";
        }
        return notif;
    };
    BlogPost.prototype.getTextContent = function () {
        return this.text;
    };
    return BlogPost;
}());
exports.BlogPost = BlogPost;
