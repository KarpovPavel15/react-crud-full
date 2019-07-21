import React from 'react'
import './content.scss'
//TODO  twit must like/unlike with scss animations
//TODO  replace list of twits, and input form to another component(use localStorage

export default class Content extends React.Component {
    state={
        listOfTwits:[],
        action:0,
        index:''
    };

    componentDidMount() {
        this.refs.name.focus();
    }
//TODO eslint sass
    actionSubmit=(e)=>{
        e.preventDefault();
        let listOfTwits=this.state.listOfTwits;

        let nameOfUser=this.refs.name.value;
        let twitOfUser=this.refs.twit.value;
        if(this.state.action===0){
            let twits={
                nameOfUser,
                twitOfUser
            };
            listOfTwits.push(twits);
        }
        else{
            let index=this.state.index;
            listOfTwits[index].nameOfUser=nameOfUser;
            listOfTwits[index].twitOfUser=twitOfUser;
        }

        this.setState({
            listOfTwits:listOfTwits,
            action:0
        });
        this.refs.formInput.reset();
        this.refs.name.focus();
    };
    editAction=(index)=>{
        const {name,twit}=this.refs;
        let twits=this.state.listOfTwits[index];
        name.value=twits.nameOfUser;
        twit.value=twits.twitOfUser;
        this.setState({
            action:1,
            index:index
        });
        name.focus();
    };
    removeAction=(index)=>{
        const { formInput, name } = this.refs;
        let listOfTwits=this.state.listOfTwits;
        listOfTwits.splice(index,1);
        this.setState({
            listOfTwits:listOfTwits
        });
        formInput.reset();
        name.focus();
    };


    render() {
        let listOfTwits=this.state.listOfTwits;
        return (
            <main className="contentArea">
                <div className="contentArea_profile">
                    Profile
                </div>
                <div className="contentArea_twits">
                    <div className="contentArea_twits_divForForm">
                        <form ref="formInput" className="contentArea_twits_divForForm_formArea">
                            <input type="text" className="formField" placeholder="Input your Name" ref="name"/>
                            <input type="text" className="formField" placeholder="Input your twit" ref="twit"/>
                            <button onClick={(event =>this.actionSubmit(event) )} className="twitButton">create</button>
                        </form>
                    {/*<FormForSendTwit/>*/}
                    </div>
                    <div className="contentArea_twits_twitsListArea">
                            {listOfTwits.map((twits,index)=>
                                <li>
                                    {twits.nameOfUser},
                                    {twits.twitOfUser}
                                    <button onClick={() => this.removeAction(index)} className="myButton">delete</button>
                                    <button onClick={() => this.editAction(index)} className="myButton">edit</button>
                                </li>
                            )}
                    </div>
                </div>
            </main>
        );
    }
}