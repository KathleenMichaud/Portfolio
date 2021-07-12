import { useCallback, useRef } from "react";

const Observer = ({
    as:Component = 'div', 
    once = false,
    onView, 
    onExit, 
    ...props}) => {
    const observer = useRef();

    const obsEl = useCallback(node => {
        observer.current = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                if(onView) onView();
                if(once && observer.current && node) observer.current.unobserve(node);
            };
        }, {root: null, rootMargin: '0px', treshold: 1});

        if(node && observer.current) observer.current.observe(node);

        return () => observer.current && observer.current.unobserve(node);
    }, []);

    return(
        <Component ref={obsEl} {...props} />
    )
}

export default Observer;