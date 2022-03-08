import clsx from 'clsx';
import _ from 'lodash';
import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = (props: {
    className?: string,
    onClick?: () => void,
    text: string,
    variant?: "primary" | "tertiary"
}) => {
    const {
        onClick = () => {},
        variant = "primary"
    } = props;
    const otherProps = _.omit(props, ["onClick", "variant", "className", "text"]);

    return (
        <button
            className={clsx([props.className, styles.button, styles[variant]])}
            onClick={() => onClick()}
            {...otherProps}
        >
            {props.text}
        </button>
    );
}

export default Button;
