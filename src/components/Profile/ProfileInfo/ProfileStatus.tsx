import React, {useState} from 'react';

type ProfileStatusType = {
    status: string;
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false)
    };
    const saveStatusHandler = () => {

    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} value={props.status} onBlur={deactivateEditMode} ></input>
                    <div>
                        <button onClick={saveStatusHandler}>Save</button>
                    </div>
                </div>
            }
        </div>
    );
};
