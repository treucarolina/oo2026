let sound = new Audio();

abstract class Activity {
    questions:string;
    exerciseInfo:string;
    teacherInfo:string;

    constructor(questions:string, exerciseInfo:string, teacherInfo:string){
        this.exerciseInfo = exerciseInfo;
        this.teacherInfo = teacherInfo;
        this.questions = questions;
    }


    getExerciseInfo():string{}
    getQuestionsPrompt():string{}
    getInfoPrompt():string{}
}

abstract class VideoActivity extends Activity{

    constructor(){super()}

    play():boolean{}

    pause():boolean{}

    changeVolume():number{}

    mute(){}

    // htmls leida alumised kaks
    getPlaybackRate():number{

    }

    getVideoLength():number{

    }

    
}

class SpeedVideo extends VideoActivity {

    changeSpeed(){

        }

    reset(){

    }

}