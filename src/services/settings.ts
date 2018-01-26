export class SettingsService{
    private altBackground=false;

    setbackground(isAlt:boolean){
        this.altBackground = isAlt;
    }
    isAltBackground(){
        return this.altBackground;
    }
}