class SubmittedPD {

    constructor(){
    
        this.input = createInput("Title of Task written by senior");
        this.input1 = createInput("Body of the Task written by the senior");
        this.input2 = createInput("Your Added or Created task");
        this.input3 = createInput("");
        this.input4 = createInput("");
        this.input5 = createInput("Due Date provided by senior");
        this.input6 = createInput("Due Time provided by senior");
        this.input7 = createInput("Time at which task was submitted");
        this.input8 = createInput("Date on which task was submitted");
        this.button = createButton('Comment');
        this.button1 = createButton('*Move to Next Page =>');
    }
    
    hide(){
    
        this.input.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.button.hide();
        this.button1.hide();
        title.hide();
        title1.hide();
        title2.hide();
        title3.hide();
        title4.hide();
       title5.hide();
        title6.hide();
        title7.hide();
        title8.hide();
    }
    
    display(){
    
        var title = createElement('h1');
            title.html("Page to view the Submitted Task");
            title.position(displayWidth/2 - 270, displayHeight/10);

            var title5 = createElement('h3');
            title5.html("Due Date (provided by your senior) - ");
            title5.position(displayWidth/2 + 100, displayHeight/4 - 100);

            var title6 = createElement('h3');
            title6.html("Due Time (provided by you senior) - ");
            title6.position(displayWidth/2 + 100, displayHeight/4 - 70);
    
            var title7 = createElement('h3');
            title7.html("Date (on which you submitted the task) - ");
            title7.position(displayWidth/2 + 100, displayHeight/4 - 30);

            var title8 = createElement('h3');
            title8.html("Time (at which you submitted the task) - ");
            title8.position(displayWidth/2 + 100, displayHeight/4 );
    

            var title1 = createElement('h2');
            title1.html("(the Title of the task written by your senior will be provided here)");
            title1.position(displayWidth/2 - 300, displayHeight/4 + 50);
    
            var title2 = createElement('h2');
            title2.html("(the Body of the task written by your senior will be provided here)");
            title2.position(displayWidth/2 - 300, displayHeight/3 + 70 );
    
            var title3 = createElement('h2');
            title3.html("Your Work (Below will be your added or created task that is already submitted to your senior ) - ");
            title3.position(displayWidth/5 - 100 , displayHeight/3 + 200);
    
            var title4 = createElement('h2');
            title4.html("Private Comments (can chat privately with the senior without others knowing) - ");
            title4.position(displayWidth/5 - 80 , displayHeight/2 + 150);
    
            this.input.position(displayWidth/2 - 260, displayHeight/4 + 120);

            this.input1.position(displayWidth/2 - 260, displayHeight/3 + 140);

            this.input2.position(displayWidth/2 - 630, displayHeight/2 + 90);

            this.input3.position(displayWidth/2 - 630, displayHeight/2 + 230);

            this.input5.position(displayWidth/2 + 400, displayHeight/4 - 80);

            this.input6.position(displayWidth/2 + 400, displayHeight/4 - 50);




            this.input7.position(displayWidth/2 + 440, displayHeight/4 - 10);

            this.input8.position(displayWidth/2 + 440, displayHeight/4 + 20);

            this.button1.position(displayWidth/2 - 80, displayHeight/2 + 250 );



            this.button.position(displayWidth/2 - 600, displayHeight/2 + 280 );
    
            this.button.mousePressed(()=>{
    
               this.input3.hide();

               this.input4.position(displayWidth/2 - 630, displayHeight/2 + 230);
        
                
        
                })

                this.button1.mousePressed(()=>{
    
                  
                    this.input.hide();
                    this.input1.hide();
                    this.input2.hide();
                    this.input3.hide();
                    this.input4.hide();
                    this.input5.hide();
                    this.input6.hide();
                    this.input7.hide();
                    this.input8.hide();
                    this.button.hide();
                    this.button1.hide();
                    title.hide();
                    title1.hide();
                    title2.hide();
                    title3.hide();
                    title4.hide();
                   title5.hide();
                    title6.hide();
                    title7.hide();
                    title8.hide();


                    resubmitpd = new ResubmitPD;
                    resubmitpd.display();
                  
        
             
                     })
        
        
        
        }
        
        
        }
        
        
        
        
    
    
    
    