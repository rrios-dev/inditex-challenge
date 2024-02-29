import cls from 'classnames';
import { createElement } from "react";

import styles from './flex.module.scss';
import { FlexProps } from "./interfaces";

const Flex = <T extends JSX.IntrinsicElements>({ as: tag, className,
    direction,
    justify,
    align,
    wrap,
    gap,
    ...props }: FlexProps<T>) => createElement(tag ?? 'div', {
        ...props, className: cls(className, styles.flex,
            direction && styles[`dir-${direction}`],
            justify && styles[`justify-${justify}`],
            align && styles[`align-${align}`],
            wrap && styles[`wrap-${wrap}`],
            gap && styles[`gap-${gap}`]
        )
    });

Flex.displayName = "Flex";

export default Flex;
