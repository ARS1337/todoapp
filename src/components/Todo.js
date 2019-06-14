import React, { Component } from 'react';
import './todo.css';
// import update from 'react-addons-update';
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
       });
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

    clearThis(e){
        let idd=e.target.name;
        console.log("id is "+idd)
        // let temp=this.state.list.filter((i)=>{
        //     console.log(" id is "+i[0])
        //     return i[0]!==idd;
        // });
        let temp=this.state.list.slice();let a=0
        for(let i=0;i<temp.length;i++){
            if(temp[0]===idd){
                a=i;
            }
        }
        delete temp[a];
        temp=temp.filter((i)=>{
            return i!=="undefined";
        });
        console.log(temp);
        this.setState({
            list:temp,
        });
        console.log("clearThis was called");
    }

    // Done(e){
    //     let idd=e.target.name;
    //     let temp=this.state.list.slice();
    //     temp[idd][2]=1;
    //     this.setState({
    //         list:temp
    //     });
    // }

    render() {
        //add an option to tick off the task.
        //while task in not completed clear btn will be of light grey colour and if completed then green 
        //task should be visible, can be bold.
        return (
            <div class="container">
                <h3 class="title">TodoApp</h3>
                <input type="text" onChange={e=>{this.handleChange(e)}} value={this.state.current}/>                
                <input type="button" value="Add Task" class="add-task" onClick={e=>{this.addTask(e)}}/>
                <input type="button" value="Clear completed Task" class="clear-completed-task" onClick={e=>{this.clearCompleted(e)}}/>
                <div class="tasks">
                    <ul>
                    { 
                        this.state.list.map((i)=>{
                        return <li>
                        <label name={i[0]}>{i[2]?"Done":">>>"}</label>
                        <label id="Task">{i[1]}</label> 
                        <input id="Clear-btn"type="button" name={i[0]} onClick={(e)=>{this.clearThis(e)}} value="Clear"></input>
                        </li>
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo;

// lister(){
    //     // console.log("called");  
    //     this.state.list.map((i)=>{
    //         // return i[1]?<li>{i+" "+ i[1]}</li>:<li>lol</li>
    //         //only  rendering
    //         return <li>{i}{i[1]}</li>
    //     });
    // }