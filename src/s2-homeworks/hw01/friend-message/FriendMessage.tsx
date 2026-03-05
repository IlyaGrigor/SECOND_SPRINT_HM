import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";
import avatar from "../avatar.png"

// создать тип вместо any и отобразить приходящие данные
export type FriendMessageType = MessagePropsType



export const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={avatar}
                    alt="brad_2.0"
                    // создаёт студент
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <span>
                            {props.message.user.name}
                        </span>
                        {/*создаёт студент*/}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        <p>
                            {props.message.message.text}
                        </p>
                        {/*создаёт студент*/}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                <span>
                    {props.message.message.time}
                </span>
                {/*создаёт студент*/}
                {/**/}
            </div>
        </div>
    )
}
