import { useEffect, useRef, useLayoutEffect } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

/**
 * 加载时不执行副作用，只在依赖变更后执行
 * @param effect 副作用函数
 * @param deps 依赖
 */
const useUpdateEffect: EffectHookType = (effect, deps) => {
    const isMounted = useRef(null);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (isMounted.current === false) {
            isMounted.current = true;
        } else {
            return effect();
        }
    }, [...deps]);
};

export default useUpdateEffect;
