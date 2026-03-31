var BlogPost = /** @class */ (function () {
    function BlogPost() {
        //What is currently displayed on the panel
        this.text = "";
    }
    BlogPost.prototype.pressButton = function (t) {
        this.text += t;
    };
    BlogPost.prototype.charLength = function (t) {
        var notif = "";
        if (t.length > 10) {
            notif = "Too many characters!";
        }
        return notif;
    };
    BlogPost.prototype.getTextContent = function () {
        return this.text;
    };
    return BlogPost;
}());
/*export{
    BlogPost
}*/ 
