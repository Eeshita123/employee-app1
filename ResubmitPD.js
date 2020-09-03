class ResubmitPD {

    constructor(){
    
        this.input = createInput("Title of Task written by senior");

        this.input1 = createInput("Body of the Task written by senior");

        this.input2 = createInput("My Added Or Created Task");



        this.input3 = createInput("Comment written by me to senior");

        this.input4 = createInput("Comment from my Senior");

        this.input9 = createInput("Type a Reply to your Senior");

        this.input10 = createInput("Type a Reply to your Senior");



        this.input5 = createInput("Due Date provided by senior");
        this.input6 = createInput("Due Time provided by senior");

        this.input7 = createInput("Last Time at which task was submitted");
        this.input8 = createInput("Last Date on which task was submitted");

        this.button = createButton('SEND');

        this.button1 = createButton('*Move to Next Page =>');
        
        this.input11 = createInput("+ Add or Create");




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
        title11.hide();
    }
    
    display(){
    
        var title = createElement('h1');
            title.html("Page to view the Last Submitted Task by me and to resubmit it");
            title.position(displayWidth/2 - 270, displayHeight/10 - 60);

            var title5 = createElement('h3');
            title5.html("Due Date (provided by my senior) - ");
            title5.position(displayWidth/6 - 150, displayHeight/4 - 100);

            var title6 = createElement('h3');
            title6.html("Due Time (provided by my senior) - ");
            title6.position(displayWidth/6 - 150, displayHeight/4 - 70);
    
            var title7 = createElement('h3');
            title7.html("Last Date (on which i submitted the task) - ");
            title7.position(displayWidth/2 + 100, displayHeight/4 - 100);

            var title8 = createElement('h3');
            title8.html("Last Time (at which i submitted the task) - ");
            title8.position(displayWidth/2 + 100, displayHeight/4 - 70 );
    

            var title1 = createElement('h2');
            title1.html("(the Title of the task written by senior)");
            title1.position(displayWidth/6 - 120, displayHeight/4 + 20);
    
            var title2 = createElement('h2');
            title2.html("(the Body of the task written by senior)");
            title2.position(displayWidth/6 - 120, displayHeight/3 + 20 );

            
            var title4 = createElement('h2');
            title4.html("Private Comments (can view and chat privately with the junior without others knowing) - ");
            title4.position(displayWidth/5 - 220 , displayHeight/2 + 150);

                //
                    
                var title3 = createElement('h2');
                title3.html("My Work - ");
                title3.position(displayWidth/5 - 220 , displayHeight/3 + 130);


            var title9 = createElement('h3');
            title9.html("Previous Submitted Work - ");
            title9.position(displayWidth/5 - 200, displayHeight/2 + 15);
    
            var title10 = createElement('h3');
            title10.html("New Submission - ");
            title10.position(displayWidth/5 - 200, displayHeight/2 + 45);

            var title11 = createElement('h3');
            title11.html("Click the above SUBMIT Button to submit the Task*");
            title11.position(displayWidth/3 - 600, displayHeight/10 - 80);
    

            this.input.position(displayWidth/5 - 100, displayHeight/4 + 73);

            this.input1.position(displayWidth/5 - 100, displayHeight/3 + 73);

            

            this.button1.position(displayWidth/2 - 80, displayHeight/2 + 250 );


            this.input5.position(displayWidth/2 - 420, displayHeight/4 - 80);

            this.input6.position(displayWidth/2 - 420, displayHeight/4 - 50);




            this.input7.position(displayWidth/2 + 490, displayHeight/4 - 80);

            this.input8.position(displayWidth/2 + 490, displayHeight/4 -50);

                //submit items portion

            this.input11.position(displayWidth/5 - 50, displayHeight/2 + 65);
            this.input2.position(displayWidth/5 + 25, displayHeight/2 + 35);

                    //items for comments 

                    this.input3.position(displayWidth/5 - 170, displayHeight/2 + 230);

                    this.input4.position(displayWidth/5 + 70, displayHeight/2 + 230);
                            
               this.input9.position(displayWidth/5 + 320, displayHeight/2 + 230);


            this.button.position(displayWidth/3 + 130, displayHeight/2 + 280 );
    
            this.button.mousePressed(()=>{

                    this.input9.hide();

                    this.input10.position(displayWidth/5 + 320, displayHeight/2 + 230);

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
                title11.hide();
                
                missingpd = new MissingPD;
                missingpd.display();
    
         
                 })





            
            }
        
        
        }
        
        
        
        
        
        
        
    
    
    
  