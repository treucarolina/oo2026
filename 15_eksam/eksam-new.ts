
abstract class Activity {
    questions:HTMLElement;
    exerciseInfo:HTMLElement;
    teacherInfo:HTMLElement;
    score: HTMLElement;

    constructor(questions:HTMLElement, exerciseInfo:HTMLElement, teacherInfo:HTMLElement, score:HTMLElement){
        this.exerciseInfo = exerciseInfo;
        this.teacherInfo = teacherInfo;
        this.questions = questions;
        this.score = score;
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

    showScore():void{
        this.score.style.display = "";
    }

    hideScore():void{
        this.score.style.display = "none";
    }
}

abstract class VideoActivity extends Activity{
    video: HTMLVideoElement;

    constructor(questions:HTMLElement, exerciseInfo:HTMLElement, teacherInfo:HTMLElement, score:HTMLElement, video: HTMLVideoElement){
        super(questions, exerciseInfo, teacherInfo, score);
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