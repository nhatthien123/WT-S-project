new Vue ({
    el: '#tasks',

    data: {
        tasks:[
            {body:"Thiết Kế Web", completed: false},
        ],
        
        newTask:''
    },
    
    methods: {
        addTasks: function(e){
            e.preventDefault();
            this.tasks.push({
                body: this.newTask,
                completed: false
            });
            this.newTask = '';
        },
        removeTask: function(task){
            this.tasks.$remove(task);
        }
    }
})