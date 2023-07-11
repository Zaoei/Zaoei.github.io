import { useEffect } from 'react';
import useLatest from './useLatest';

/**
 * 在组件卸载（unmount）时执行的 Hook。
 * @param fn
 */
function useUnmount(fn: () => void) {
    const fnRef = useLatest(fn);

    useEffect(
        () => () => {
            fnRef.current();
        },
        []
    );
}

export default useUnmount;
