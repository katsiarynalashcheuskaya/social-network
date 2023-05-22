import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string;
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        debugger;
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value}
        )
    }

    saveStatusHandler = () => {
    }

    /*const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    };
    const saveStatusHandler = () => {
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }*/

render(){
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Enter your status'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} />
                    <div>
                        <button onClick={this.saveStatusHandler}>Save</button>
                    </div>
                </div>
            }
        </div>
    )
}}
