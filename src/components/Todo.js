import React, { Component } from 'react';
import './todo.css';
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
             list:[],
             current:"",
             done:0,
             id:0
        }
    }
    handleChange(e){
        this.setState({
            current:e.target.value
        });
    }

    addTask(e){
       let temp= this.state.list.slice();
       let curr= this.state.current;
       let done= this.state.done;
       let idd=this.state.id;
       idd=idd+1;
       temp.push([idd,curr,done]);
       this.setState({
           list:temp,
           current:"",
           id:idd
       },()=>{console.log(idd,this.state.list)});
       
    }
    
    clearCompleted(e){
        let temp =this.state.list.filter((i)=>{
            return i!=="undefined";
        });
        
        for(let i=0;i<temp.length;i++){
            if(temp[i][1]===0){
                delete temp[i];
            }
        }
        temp =this.state.list.filter((i)=>{
            return i[2]!==0;
        }); 
        this.setState({
            list:temp
        });
    }

    // binder(event){
    //     //binds enter to addTask function
    //     let add=document.getElementById("task");
    //     add.addEventListener("keyup",function(event){
    //         if(event.keyCode===13){
    //             event.preventDefault(); 
    //             document.getElementById("task").click();
    //         }
    //     });
    // }

    clearThis(e){
        let idd=e.target.name;
        console.log("id is "+idd)
        idd=Number(idd);
        let temp=this.state.list.slice();
        temp=temp.filter((i)=>{
            if(i[0]!==idd){
                return true;
            }
        });
        temp=temp.filter((i)=>{
            return i!=="undefined";
        });
        this.setState({
            list:temp,
        });
        console.log("clearThis was called");
    }

    render() {
        //add an option to tick off the task.
        //while task in not completed clear btn will be of light grey colour and if completed then green 
        //task should be visible, can be bold.
        return (
            <div class="container">
                <h3 class="title">TodoApp</h3>
                <input type="text" onChange={e=>{this.handleChange(e)}} value={this.state.current}/>                
                <input type="button" id="task" value="Add Task" class="add-task" onClick={e=>{this.addTask(e)}}/>
                <input type="button" value="Clear completed Task" class="clear-completed-task" onClick={e=>{this.clearCompleted(e)}}/>
                <div class="tasks">
                    <ul>
                    { 
                        this.state.list.map((i)=>{
                        return <li>
                        {/* <label name={i[0]}>{i[2]?"Done":">>>"}</label> */}
                        <p>
                        <label id="Task">{i[1]}&nbsp;   
                        <input id="Clear-btn"type="button" name={i[0]} onClick={(e)=>{this.clearThis(e)}} value="Clear"></input>
                        </label>
                        {"id is "+i[0]}
                        </p>
                        </li>
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo;

