var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Activity = /** @class */ (function () {
    function Activity(questions, exerciseInfo, teacherInfo) {
        this.exerciseInfo = exerciseInfo;
        this.teacherInfo = teacherInfo;
        this.questions = questions;
    }
    Activity.prototype.openInfoPopup = function (button) {
        if (button === "questionsBtn") {
            this.exerciseInfo.style.display = "none";
            this.teacherInfo.style.display = "none";
            this.questions.style.display = "";
        }
        else if (button === "excBtn") {
            this.questions.style.display = "none";
            this.teacherInfo.style.display = "none";
            this.exerciseInfo.style.display = "";
        }
        else if (button === "infoBtn") {
            this.questions.style.display = "none";
            this.exerciseInfo.style.display = "none";
            this.teacherInfo.style.display = "";
        }
    };
    Activity.prototype.closeInfoPopup = function () {
        this.exerciseInfo.style.display = "none";
        this.teacherInfo.style.display = "none";
        this.questions.style.display = "none";
    };
    return Activity;
}());
var VideoActivity = /** @class */ (function (_super) {
    __extends(VideoActivity, _super);
    function VideoActivity(questions, exerciseInfo, teacherInfo, video) {
        var _this = _super.call(this, questions, exerciseInfo, teacherInfo) || this;
        _this.video = video;
        return _this;
    }
    VideoActivity.prototype.play = function () {
        this.video.play();
    };
    VideoActivity.prototype.pause = function () {
        this.video.pause();
    };
    VideoActivity.prototype.changeVolume = function (vol) {
        this.video.volume = vol;
    };
    ;
    return VideoActivity;
}(Activity));
var SpeedVideo = /** @class */ (function (_super) {
    __extends(SpeedVideo, _super);
    function SpeedVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeedVideo.prototype.changeSpeed = function (speed) {
        this.video.playbackRate = speed;
    };
    return SpeedVideo;
}(VideoActivity));
