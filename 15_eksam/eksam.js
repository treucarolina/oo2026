/*let popup:HTMLElement = document.getElementById("popup");*/
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
    function Activity() {
    }
    /*questions:string;
    exerciseInfo:string;
    teacherInfo:string;

    constructor(questions:string, exerciseInfo:string, teacherInfo:string){
        this.exerciseInfo = exerciseInfo;
        this.teacherInfo = teacherInfo;
        this.questions = questions;
    }*/
    Activity.prototype.openInfoPopup = function (className) {
        /*popup.classList.add(className);*/
    };
    return Activity;
}());
var VideoActivity = /** @class */ (function (_super) {
    __extends(VideoActivity, _super);
    function VideoActivity(video) {
        var _this = _super.call(this) || this;
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
    VideoActivity.prototype.mute = function () {
    };
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
    SpeedVideo.prototype.reset = function () {
    };
    return SpeedVideo;
}(VideoActivity));
