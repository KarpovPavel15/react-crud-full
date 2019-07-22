import React from 'react'
import './content.scss'
//TODO  twit must like/unlike with scss animations
//TODO  replace list of twits, and input form to another component(use localStorage)

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
            <main className="content-area">
                <div className="content-area_profile">
                    Profile
                </div>
                <div className="content-area_twits">
                    <div className="content-area_twits_input-form__wrapper">
                        <form ref="formInput" className="content-area_twits_input-form__wrapper_form-area">
                            <input type="text" className="form-field" placeholder="Input your Name" ref="name"/>
                            <input type="text" className="form-field" placeholder="Input your twit" ref="twit"/>
                            <button onClick={(event =>this.actionSubmit(event) )} className="twit-button">create</button>
                        </form>
                    {/*<FormForSendTwit/>*/}
                    </div>
                    <div className="content-area_twits_twits-list-area">
                            {listOfTwits.map((twits,index)=>
                                <li>
                                    {twits.nameOfUser},
                                    {twits.twitOfUser}
                                    <button onClick={() => this.removeAction(index)} className="my-button">delete</button>
                                    <button onClick={() => this.editAction(index)} className="my-button">edit</button>
                                </li>
                            )}
                    </div>
                </div>
            </main>
        );
    }
}