import '../CSScomponents/Alert.css';
import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: '1vh'}}>
            {props.alert && <div className={`container`}>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.message}</strong>
                </div>
            </div>}
        </div>
    )
}
