import clsx from 'clsx';
import React from 'react';
import styles from '../styles/Button.module.scss';

enum ButtonTypes {
    primary
}

const Button = (props: {
    className?: string,
    onClick?: () => void,
    text: string,
    variant?: ButtonTypes
}) => {
    const {
        onClick = () => {},
        variant = ButtonTypes.primary
    } = props;

    return (
        <button
            className={clsx([props.className, styles.button])}
            onClick={() => onClick()}
        >
            {props.text}
        </button>
    );
}

export default Button;
