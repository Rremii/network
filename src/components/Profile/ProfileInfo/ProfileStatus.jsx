import React from 'react'


class ProfileStatus extends React.Component {
    state = {
        editMod: false,
        status: this.props.status
    }


    activateEditMod = () => {
        this.setState({
            editMod: true
        })
    }
    deactivateEditMod = () => {
        this.setState({
            editMod: false
        });
        this.props.updateUserStatusTC(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return <>
            {!this.state.editMod &&
            <div>
                <span onDoubleClick={this.activateEditMod}>
                    status: {this.props.status || '-----'}
                </span>
            </div>}
            {this.state.editMod &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMod}
                       value={this.state.status}/>
            </div>}

        </>
    }
}

export default ProfileStatus

