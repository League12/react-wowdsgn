import React from 'react';
import css from './Message.module.scss';

class MessageBar extends React.Component {
    render() {
        return (
            <header>
                <img src="/imgs/yzyimage/home.png" alt="" onClick = {() => this.gohome()}/>
                <h3>消息</h3>
                <img src="/imgs/yzyimage/category.png" alt="" onClick = {() => this.gocenter()}/>
            </header>
        );
    }
}


class Message extends React.Component {
    state ={

    }

    render() {
        return (
            <div className={css.message}>
                <MessageBar></MessageBar>
            </div>
        );
    }
}

export default Message;
