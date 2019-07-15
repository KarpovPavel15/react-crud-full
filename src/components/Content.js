import React from 'react'

export default class Content extends React.Component {
    render() {
        return (
            <header class="contentArea">
                <div class="profile">
                    Profile
                </div>
                <div class="twits">
                    <div class="twitsWriteArea">
                        <input/>
                    </div>
                    <div class="twitsList">
                        Area
                    </div>
                </div>
            </header>
        );
    }
}