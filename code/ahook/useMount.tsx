import { useEffect } from 'react';

/**
 * 只在组件初始化时执行
 * @param effect
 */
const useMount = (effect: () => void) => {
    useEffect(() => {
        effect?.();
    }, []);
};

export default useMount;
