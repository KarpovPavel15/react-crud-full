import React from 'react'
import '../css/component-css/content.css'

export default class Content extends React.Component {
    render() {
        return (
            <main class="contentArea">
                <div class="profile">
                    Profile
                </div>
                <div class="twits">
                    <div class="twitsWriteArea">
                    <form class="formArea">
                        <input type="text"/>
                        <input type="submit" value="Твитнуть" className="submitField"/>
                    </form>
                    </div>
                    <div  class="twitsList">
                    <section>
                        Area
                    </section>
                    </div>
                </div>
            </main>
        );
    }
}