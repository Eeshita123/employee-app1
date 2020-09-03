class CompletedPD {

    constructor(){
    
        this.input = createInput("Title of Task ");

        this.input1 = createInput("Body of the Task ");

        this.input2 = createInput("My Added or Created task");

        this.input3 = createInput("Comment written by me");

        this.input4 = createInput("Comment by senior");

        this.input9 = createInput("Reply by me");
        this.input11 = createInput("Reply by me");

        this.input5 = createInput("Due Date provided by you");
        this.input6 = createInput("Due Time provided by you");

        this.input7 = createInput("Time at which task was submitted");
        this.input8 = createInput("Date on which task was submitted");

        this.button = createButton('SEND');

        this.button1 = createButton('*Move to Next Page =>');

        //items for the feedback

        this.input10 = createInput("Feedback by senior");

       

        
        

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
        this.input9.hide();
        this.input10.hide();
        this.input11.hide();
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
        title9.hide();
        title10.hide();
       
    
    }
    
    display(){
    
        var title = createElement('h1');
            title.html("Page to view my Completed Task");
            title.position(displayWidth/2 - 270, displayHeight/10 - 60);

            var title5 = createElement('h3');
            title5.html("Due Date (provided by senior) - ");
            title5.position(displayWidth/6 - 150, displayHeight/4 - 100);

            var title6 = createElement('h3');
            title6.html("Due Time (provided by senior) - ");
            title6.position(displayWidth/6 - 150, displayHeight/4 - 70);
    
            var title7 = createElement('h3');
            title7.html("Date (on which the task was submitted) - ");
            title7.position(displayWidth/2 + 100, displayHeight/4 - 100);

            var title8 = createElement('h3');
            title8.html("Time (at which the task was submitted) - ");
            title8.position(displayWidth/2 + 100, displayHeight/4 - 70 );
    

            var title1 = createElement('h2');
            title1.html("Title of the task (written by senior)");
            title1.position(displayWidth/6 - 120, displayHeight/4 + 20);
    
            var title2 = createElement('h2');
            title2.html("(Body of the task (written by senior)");
            title2.position(displayWidth/6 - 120, displayHeight/3 + 20 );
    
            var title3 = createElement('h2');
            title3.html("My Submitted Work - ");
            title3.position(displayWidth/5 - 220 , displayHeight/3 + 200);
    
            var title4 = createElement('h2');
            title4.html("Private Comments (can view and chat privately with senior without others knowing) - ");
            title4.position(displayWidth/5 - 220 , displayHeight/2 + 150);

            var title9 = createElement('h2');
            title9.html("Feedback (here will be the feedback provided by the senior for task) - ");
            title9.position(displayWidth/2 + 150, displayHeight/4 + 15);

            var title10 = createElement('h2');
            title10.html("Grade (below in place of these 10 images will be the image of the grade provided by the senior) - ");
            title10.position(displayWidth/2 + 150, displayHeight/4 + 200);
    
            this.input.position(displayWidth/5 - 100, displayHeight/4 + 73);

            this.input1.position(displayWidth/5 - 100, displayHeight/3 + 73);

            this.input2.position(displayWidth/5 - 100, displayHeight/2 + 90);

            this.input3.position(displayWidth/5 - 170, displayHeight/2 + 230);

            this.input4.position(displayWidth/5 + 70, displayHeight/2 + 230);

            this.input5.position(displayWidth/2 - 420, displayHeight/4 - 80);

            this.input6.position(displayWidth/2 - 420, displayHeight/4 - 50);




            this.input7.position(displayWidth/2 + 490, displayHeight/4 - 80);

            this.input8.position(displayWidth/2 + 490, displayHeight/4 -50);

                    //items for feedback portion

                         this.input10.position(displayWidth/2 + 300, displayHeight/4 + 78);
                         
                            //

                             this.input9.position(displayWidth/5 + 70, displayHeight/2 + 230);

                             this.button1.position(displayWidth/2 - 80, displayHeight/2 + 250 );

            this.button.position(displayWidth/3 - 120, displayHeight/2 + 280 );
    
            this.button.mousePressed(()=>{

                    this.input9.hide();

                   
                    this.input11.position(displayWidth/5 + 70, displayHeight/2 + 230);
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
                this.input9.hide();
                this.input10.hide();
                this.input11.hide();
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
                title9.hide();
                title10.hide();

                    md = new MonitorD;
                    md.display();

            })





            
            }
        
        
        }
        
        
        
        
        
        
        
    
    
    
  