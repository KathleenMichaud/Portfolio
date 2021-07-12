import React, { useRef, useEffect } from "react";
import {gsap} from "gsap/dist/gsap";

const Fade = ({
    speed = 0.5,
    fadeIn = true,
    as:Tag = 'div',
    direction,
    delay = 0,
    distance = 200,
    dependency,
    onExit,
    ease = 'power4.out',
    onComplete,
    ...props 
    }) => {
    const tL = gsap.timeline({paused: true,});
    const compRef = useRef(null);
    let fadeDirection = {
        x: direction ? (direction === 'left' ? -distance : direction === 'right' ? distance : 0) : 0,
        y: direction ? (direction === 'up' ? -distance : direction === 'bottom' ? distance : 0): 0
    }

    let dependencies = [compRef, direction, delay, dependency];

    useEffect(() => {
        tL.fromTo(compRef.current,
            {
                ...fadeDirection,
                opacity: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: speed,
                delay: delay,
                ease: ease,
            }
        )

        fadeIn ? tL.play(0) : tL.reverse(0);

        return () => tL.kill();
    }, dependencies);

    return (
        <Tag style={{opacity: 0, ...props.style}} ref={compRef} {...props} />
    );
};

export default Fade;