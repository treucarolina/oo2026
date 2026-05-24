
abstract class Activity {
    questions:HTMLElement;
    exerciseInfo:HTMLElement;
    teacherInfo:HTMLElement;

    constructor(questions:HTMLElement, exerciseInfo:HTMLElement, teacherInfo:HTMLElement){
        this.exerciseInfo = exerciseInfo;
        this.teacherInfo = teacherInfo;
        this.questions = questions;
    }

    openInfoPopup(button:string):void{
        if (button === "questionsBtn"){
                this.exerciseInfo.style.display = "none";
                this.teacherInfo.style.display = "none";
                this.questions.style.display = "";
            } else if (button === "excBtn"){
                this.questions.style.display = "none";
                this.teacherInfo.style.display = "none";
                this.exerciseInfo.style.display = "";
            } else if (button === "infoBtn"){
                this.questions.style.display = "none";
                this.exerciseInfo.style.display = "none";
                this.teacherInfo.style.display = "";
            }
    }

    closeInfoPopup():void{
        this.exerciseInfo.style.display = "none";
        this.teacherInfo.style.display = "none";
        this.questions.style.display = "none";
    }

}

abstract class VideoActivity extends Activity{
    video: HTMLVideoElement;

    constructor(questions:HTMLElement, exerciseInfo:HTMLElement, teacherInfo:HTMLElement, video: HTMLVideoElement){
        super(questions, exerciseInfo, teacherInfo);
        this.video=video;
    }

    play():void{
        this.video.play();
    }

    pause():void{
        this.video.pause();
    }

    changeVolume(vol:number):void{
        this.video.volume = vol;
    };

  
}

class SpeedVideo extends VideoActivity {

    changeSpeed(speed:number):void{
        this.video.playbackRate = speed;
        }

}