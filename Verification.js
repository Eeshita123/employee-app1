class Verification {

constructor(){

    this.input2 = createInput("");
        this.button1 = createButton('VERIFY');

    

}



display(){

    var title3 = createElement('h1');
    title3.html("<p>A CAPTCHA Code is written below for identification</p> <p>if you are a human or a spam robot</p>");
    title3.position(displayWidth/2 - 400, displayHeight/6);

    var title4 = createElement('h2');
        title4.html("Type the CAPTCHA Code in the box below - ");
        title4.position(displayWidth/2 - 250, displayHeight/3 + 80);

        this.input2.position(displayWidth/2 - 180, displayHeight/3 + 153);

        var title5 = createElement('h2');
        title5.html("fg@34SwMl");
        title5.position(displayWidth/2 , displayHeight/3 + 153);

        this.button1.position(displayWidth/2 - 80, displayHeight/2 + 250 );

    

    this.button1.mousePressed(()=>{
    
        

        title3.hide();
        title4.hide();
        this.input2.hide();
        title5.hide();
        
       this.button1.hide();
       
        pd = new PersonalD();
           pd.display();

        

       
    
        

        })

        





    
}



}