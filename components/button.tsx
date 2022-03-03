import clsx from 'clsx';
import _ from 'lodash';
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
    const otherProps = _.omit(props, ["onClick", "variant", "className", "text"]);

    return (
        <button
            className={clsx([props.className, styles.button])}
            onClick={() => onClick()}
            {...otherProps}
        >
            {props.text}
        </button>
    );
}

export default Button;
