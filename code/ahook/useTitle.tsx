import { useEffect, useRef } from 'react';
import useUnmount from './useUnmount';

export interface Option {
    restoreOnUnmount: boolean;
}

const DEFAULT_OPTIONS = {
    restoreOnUnmount: false
};

/**
 * 设置页面标题
 * @param title
 * @param option
 */
const useTitle = (title: string, option: Option = DEFAULT_OPTIONS) => {
    const preRef = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useUnmount(() => {
        if (option.restoreOnUnmount) {
            document.title = preRef.current;
        }
    });
};

export default useTitle;
