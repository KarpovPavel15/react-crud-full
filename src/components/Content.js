"use strict";
import React from 'react'
import '../css/component-css/content.css'

export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listOfTwits:[],
            act:0,
            index:''
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    actionSubmit=(e)=>{
        e.preventDefault();
        let listOfTwits=this.state.listOfTwits;

        let name=this.refs.name.value;
        let twit=this.refs.twit.value;
        if(this.state.act===0){
            let twits={
                name,twit
            };
            listOfTwits.push(twits);
        }else{
            let index=this.state.index;
            listOfTwits[index].name=name;
            listOfTwits[index].twit=twit;
        }


        this.setState({
            listOfTwits:listOfTwits,
            act:0
        });
        this.refs.formInput.reset();
        this.refs.name.focus();
    };
    // editAction=(i)=>{
    //     let twits=this.state.listOfTwits[i];
    //     this.refs.name=twits.name;
    //     this.refs.twit=twits.twit;
    //     this.setState({
    //         act:1,
    //         index:i
    //     });
    //     this.refs.name.focus();
    // };
    removeAction=(i)=>{
        let listOfTwits=this.state.listOfTwits;
        listOfTwits.splice(i,1);
        this.setState({
            listOfTwits:listOfTwits
        });
        this.refs.formInput.reset();
        this.refs.name.focus();
    };


    render() {
        let listOfTwits=this.state.listOfTwits;
        return (
            <main className="contentArea">
                <div className="profile">
                    Profile
                </div>
                <div className="twits">
                    <div className="twitsWriteArea">
                    <form ref="formInput" className="formArea">
                        <input type="text" className="formField" placeholder="Input your Name" ref="name"/>
                        <input type="text" className="formField" placeholder="Input your twit" ref="twit"/>
                        <button onClick={(event =>this.actionSubmit(event) )} className="twitButton">create</button>
                    </form>
                    </div>
                    <div  className="twitsList">
                        <pre>
                            {listOfTwits.map((twits,i)=>
                                <li key={i} className="listTwits">
                                    {i+1}.{twits.name},{twits.twit}
                                    <button onClick={() => this.removeAction(i)} className="myButton">delete</button>
                                    <button onClick={() => this.editAction(i)} className="myButton">edit</button>
                                </li>
                            )}
                        </pre>
                    </div>
                </div>
            </main>
        );
    }
}