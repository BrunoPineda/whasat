import React, { Component} from 'react';
import Portal from './components/Portal';
import * as ReactDOM from 'react-dom';

export default class Modal extends Component {

    render(){
        const {children,toggle,active} = this.props;

        return (
            <Portal>
                {active && (
                    <div style={styles.wrapper}>
                       <div style={styles.window}>
                          <button style={styles.closeBtn} onClick={toggle}>X</button>
                          <div>{children}</div>
                       </div>
                    </div>
                )}
            </Portal>
        )
    }

}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 'auto',
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        position: 'relative',
        background: '#fff',
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 10,
        minWidth: 320,
    }
}