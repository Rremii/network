import React from 'react'

import css from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMod: false
    }

    activateEditMod() {
        this.setState({
            editMod: true
        })
    }

    diactivateEditMod() {
        this.setState({
            editMod: false
        })
    }

    render() {
        return <>
            {!this.state.editMod &&
            <div>
                <span onDoubleClick={this.activateEditMod.bind(this)}>{this.props.status}</span>
            </div>}
            {this.state.editMod &&
            <div>
                <input autoFocus={true} onBlur={this.diactivateEditMod.bind(this)} value={this.props.status}/>
            </div>}

        </>
    }
}

export default ProfileStatus

