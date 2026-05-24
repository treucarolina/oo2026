
/*let popup:HTMLElement = document.getElementById("popup");*/

abstract class Activity {
    popup:HTMLElement;
    /*questions:string;
    exerciseInfo:string;
    teacherInfo:string;

    constructor(questions:string, exerciseInfo:string, teacherInfo:string){
        this.exerciseInfo = exerciseInfo;
        this.teacherInfo = teacherInfo;
        this.questions = questions;
    }*/

    openInfoPopup(className:string):void{
        //see pole õige prgu
        popup.classList.add(className);
    }
    
    /*getExerciseInfoBtn():string{
        
    }
    getQuestionsPromptBtn():string{

    }
    getInfoPromptBtn():string{
        
    }*/
}

abstract class VideoActivity extends Activity{
    video: HTMLVideoElement;

    constructor(video: HTMLVideoElement){
        super();
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

    mute():void{
    }

    // htmls leida alumised kaks
    /*getPlaybackRate():number{
        
    }

    getVideoLength():number{

    }*/

    
}

class SpeedVideo extends VideoActivity {

    changeSpeed(speed:number):void{
        this.video.playbackRate = speed;
        }

    reset(){

    }

}