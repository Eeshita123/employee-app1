class PersonalD {

constructor(){

    this.input = createInput("Your provided username");
    this.input1 = createInput("Your provided mobile number");
    this.input2 = createInput("");
    this.input3 = createInput("");
    this.input4 = createInput("");
    this.button = createButton('*Move to Next Page =>');

}

hide(){

title.hide();
title1.hide();
title2.hide();
title3.hide();
title4.hide();
title5.hide();
this.input.hide();
this.input1.hide();
this.input2.hide();
this.input3.hide();
this.input4.hide();

this.button.hide();

}

display(){
//titles
    var title = createElement('h2');
    title.html("Click to add your Dashboard Image");
    title.position(displayWidth/2 - 400, displayHeight/6);

  

    var title1 = createElement('h3');
    title1.html("Your Username - ");
    title1.position(displayWidth/2 - 250, displayHeight/3);

    var title2 = createElement('h3');
    title2.html("Your Mobile Number - ");
    title2.position(displayWidth/2 - 250, displayHeight/3 + 70);

    var title3 = createElement('h3');
    title3.html("Your Country - ");
    title3.position(displayWidth/2 - 250, displayHeight/3 + 140);

    var title4 = createElement('h3');
    title4.html("Your Company - ");
    title4.position(displayWidth/2 - 250, displayHeight/3 + 210);

    var title5 = createElement('h3');
    title5.html("Your Post - ");
    title5.position(displayWidth/2 - 250, displayHeight/3 + 280);

//inputs

    this.input.position(displayWidth/2 - 100, displayHeight/3 + 20);
    this.input1.position(displayWidth/2 - 60, displayHeight/3 + 90);
    this.input2.position(displayWidth/2 - 90, displayHeight/3 + 160);
    this.input3.position(displayWidth/2 - 80, displayHeight/3 + 230);
    this.input4.position(displayWidth/2 - 110, displayHeight/3 + 300);
    this.button.position(displayWidth/2 - 80, displayHeight/2 + 250 );


//button condition

    this.button.mousePressed(()=>{
    
        title.hide();
        title1.hide();
        title2.hide();
        title3.hide();
        title4.hide();
        title5.hide();
        this.input.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        
        this.button.hide();

        assignedpd = new AssignedPD;
    assignedpd.display(); 

        })


}


}