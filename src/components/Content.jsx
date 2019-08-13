import React from 'react'
import '../scss/content.scss'
import '../onClickForUpdateBtn'
import onClickForUpdateBtn from "../onClickForUpdateBtn";
//TODO  twit must like/unlike with scss animations
//TODO  replace list of twits, and input form to another component(use localStorage)

export default class Content extends React.Component {
    state={
        listOfTwits:[],
        action:0,
        index:'',
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
        let isLiked=false;
        if(this.state.action===0){
            let twits={
                nameOfUser,
                twitOfUser,
                isLiked
            };
            listOfTwits.push(twits);
        }
        else{
            let index=this.state.index;
            listOfTwits[index].nameOfUser=nameOfUser;
            listOfTwits[index].twitOfUser=twitOfUser;
            listOfTwits[index].isLiked=isLiked;
        }

        this.setState({
            listOfTwits:listOfTwits,
            action:0,
            isLiked:isLiked
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
    updateAction=(index)=>{

        let twits=this.state.listOfTwits[index];
        if(twits.isLiked) {
            twits.isLiked=false;
            console.log(twits.isLiked);
        }
        else{
            twits.isLiked=true;
            console.log(twits.isLiked);
        }
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
                                <button onClick={() => this.removeAction(index)} className="content-area_twits_twits-list-area_create-button">delete</button>
                                <button onClick={() => this.editAction(index)} className="content-area_twits_twits-list-area_edit-button">edit</button>
                                <button onClick={() => this.updateAction(index)} onClickCapture={onClickForUpdateBtn()} className="content-area_twits_twits-list-area_update-button">like</button>
                            </li>
                        )}
                    </div>
                </div>
            </main>
        );
    }
}