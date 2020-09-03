class AAssignedMD {

    constructor(){
    
        this.input = createInput("Title of Task written by me");
        this.input1 = createInput("Body of the Task written by me");
        
        this.input5 = createInput("Due Date provided by me");
        this.input6 = createInput("Due Time provided by me");
        this.input3 = createInput("Type a Reply to your Junior");
        this.input4 = createInput("Type a Reply to your Junior");
        this.input7 = createInput("Comment written by my junior");
        this.button = createButton('SEND');
        this.button1 = createButton('*Move to Next Page =>');
    }
    
    hide(){
    
        this.input3.hide();
    
    }
    
    display(){
    
            var title = createElement('h1');
            title.html("Page to view the Assigned Task of my junior ");
            title.position(displayWidth/2 - 250, displayHeight/10);

           
            var title5 = createElement('h3');
            title5.html("Due Date (provided by me to junior) - ");
            title5.position(displayWidth/2 + 100, displayHeight/4 - 70);

            var title6 = createElement('h3');
            title6.html("Due Time (provided by me to junior) - ");
            title6.position(displayWidth/2 + 100, displayHeight/4 - 40);
    
            var title1 = createElement('h2');
            title1.html("(the Title of the task written by me )");
            title1.position(displayWidth/2 - 300, displayHeight/4 + 50);
    
            var title2 = createElement('h2');
            title2.html("(the Body of the task written by me)");
            title2.position(displayWidth/2 - 300, displayHeight/3 + 70 );
    
           
            var title4 = createElement('h2');
            title4.html("Private Comments (can chat privately with the junior without others knowing) - ");
            title4.position(displayWidth/5 - 80 , displayHeight/2 + 150);
    
            this.input.position(displayWidth/2 - 260, displayHeight/4 + 120);
            this.input1.position(displayWidth/2 - 260, displayHeight/3 + 140);
            
            
            this.input5.position(displayWidth/2 + 400, displayHeight/4 - 50);
            this.input6.position(displayWidth/2 + 400, displayHeight/4 - 20);
            this.input7.position(displayWidth/5 - 50, displayHeight/2 + 230);

            this.input3.position(displayWidth/5 + 170, displayHeight/2 + 230);
            this.button.position(displayWidth/2 - 350, displayHeight/2 + 280 );
    
            this.button.mousePressed(()=>{
    
               this.input3.hide();

               this.input4.position(displayWidth/5 + 170, displayHeight/2 + 230);
        
                
        
                })

                this.button1.mousePressed(()=>{
    
                    title.hide();
                    title1.hide();
                    title2.hide();
                    title3.hide();
                    title4.hide();
                    this.input.hide();
                    this.input1.hide();
                    this.input3.hide();
                    this.input4.hide();
                    this.input5.hide();
                    this.input6.hide();
                    this.input7.hide();
                    this.button.hide();
                    this.button1.hide();
                    
                    submittedmd = new SubmittedMD;
                    submittedmd.display();
             
                     })
        
        
        }
        
        
        }
        
        
        
        
    
    
    
    