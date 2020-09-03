class MonitorD {

constructor(){

    this.button = createButton(' + Add People');

    this.button1 = createButton('*Move to Next Page =>');

    


    
}

hide(){


}

display(){

    var title = createElement('h2');
    title.html("Monitoring Dashboard");
    title.position(displayWidth/2 - 400, displayHeight/6);

    var title1 = createElement('h3');
    title1.html("(here you can add the people whom you want to monitor under yourself)");
    title1.position(displayWidth/2 - 250, displayHeight/3);

    
    this.button.position(displayWidth/2 - 250, displayHeight/3 + 70);

    this.button2.position(displayWidth/2 - 250, displayHeight/3 + 280);

    var title2 = createElement('h3');
    title2.html(" Like this the pages of assigned , submission , resubmission , missing and completed of monitoring dashboard will be there");
    title2.position(displayWidth/2 - 50, displayHeight/3 + 100);


    this.button1.mousePressed(()=>{
    
        title.hide();
        title1.hide();
      
        title3.hide();
        title4.hide();
        
        this.input.hide();
        this.input1.hide();
        this.input2.hide();
       
        this.button1.hide();
        this.button2.hide();
        this.button.hide();

        assignmd = new AssignMD;
assignmd.display(); 

        })

}

}