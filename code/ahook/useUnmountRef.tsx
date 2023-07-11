import { useEffect, useRef } from 'react';

/**
 * 获取当前组件是否已经卸载
 */
function useUnmountRef() {
    const unmountedRef = useRef(false);

    useEffect(() => {
        unmountedRef.current = false;
        return () => {
            unmountedRef.current = true;
        };
    }, []);
}

export default useUnmountRef;
