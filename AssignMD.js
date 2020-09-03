class AssignMD {

    constructor(){
    
        this.input = createInput("");
        this.input1 = createInput("");
        this.input2 = createInput("");
        this.input3 = createInput("");
        this.button = createButton('Assign');
        this.button1 = createButton('*Move to Next Page =>');
        
    
    }
    
    hide(){
    
        title.hide();
        title1.hide();
        title2.hide();
        title3.hide();
        title4.hide();
        this.input.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button.hide();
        this.button1.hide();
    }
    
    display(){
    
        var title = createElement('h1');
            title.html("Assign the Task Page");
            title.position(displayWidth/2 - 200, displayHeight/10);
    
            var title1 = createElement('h2');
            title1.html("Type the Title Of the Task here - ");
            title1.position(displayWidth/2 - 300, displayHeight/4 + 50);
    
            var title2 = createElement('h2');
            title2.html("Type the Body Of the Task here - ");
            title2.position(displayWidth/2 - 300, displayHeight/3 + 45);
    
            var title3 = createElement('h2');
            title3.html("Type the Due Date of the Task Assigned here - ");
            title3.position(displayWidth/2 - 300, displayHeight/3 + 150);
    
            var title4 = createElement('h2');
            title4.html("Type the Due Time of the Task Assigned here - ");
            title4.position(displayWidth/2 - 300, displayHeight/3 + 230);
    
            this.input.position(displayWidth/2 + 50, displayHeight/4 + 70);
            this.input1.position(displayWidth/2 + 50, displayHeight/4 + 160);
            this.input2.position(displayWidth/2 + 180, displayHeight/2 - 10);
            this.input3.position(displayWidth/2 + 180, displayHeight/2 + 75);
            this.button.position(displayWidth/2 - 80, displayHeight/2 + 250 );
    
            this.button1.mousePressed(()=>{
        
                
                title.hide();
                title1.hide();
                title2.hide();
                title3.hide();
                title4.hide();
                this.input.hide();
                this.input1.hide();
                this.input2.hide();
                this.input3.hide();
                this.button.hide();
                this.button1.hide();
                 
                aassignedmd = new AAssignedMD;
aassignedmd.display();

                })
        
        
        }
        
    
    }
    
    