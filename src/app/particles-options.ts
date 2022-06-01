import { MoveDirection, ClickMode, HoverMode, OutMode, CollisionMode, RotateDirection } from 'tsparticles-engine';

export const particlesOptions = {
    fpsLimit: 60,
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: ClickMode.repulse
            },
            onHover: {
                parallax: {
                    enable: true,
                    force: 10,
                    smooth: 20,
                },
                enable: true,
                mode: HoverMode.trail
            },
            resize: true,
        },
        modes: {
            trail: {
                delay: 0.001,
                quantity: 2,
                pauseOnStop: true,
            },
            repulse: {
                distance: 200,
                duration: 1,
                speed: 0.1,
            }
        }
    },
    particles: {
        color: {
            animation: {
                h: {
                    // count: 1,
                    enable: true,
                    offset: 1,
                    speed: 250,
                    sync: false
                },
                s: {
                    // count: 1,
                    enable: true,
                    offset: 1,
                    speed: 250,
                    sync: false
                },
                l: {
                    // count: 1,
                    enable: true,
                    offset: 1,
                    speed: 250,
                    sync: false
                },
            },
            value: '#fff',
        },
        links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.1,
            width: 1,
            blink: true,
            frequency: 0.5,
            triangles: {
                enable: true,
                frequency: 0.1
            },
            consent: true,
            warp: true,
        },
        collisions: {
            enable: true,
            mode: CollisionMode.destroy
        },
        move: {
            direction: MoveDirection.bottomRight,
            enable: true,
            random: true,
            speed: 5,
            collisions: true,
            bounce: true,
            outMode: OutMode.out,
            decay: 0,
            drift: 0,
            warp: true,
        },
        number: {
            value: 150,
            max: 200, // ???
            limit: 300
        },
        opacity: { value: 1 },
        shape: {
            stroke: { width: 1 },
            type: [ 
                "circle",
                "edge",
                "triangle",
                "star",
                "character",
                "polygon"
            ],
            options: {
                star: {
                    sides: 4,
                    inset: 2,
                },
                character: {
                    value: "+", 
                    font: "Verdana",
                    weight: "bolder"
                },
                polygon: {
                    sides: 6
                }
            }
        },
        size: {
            value: { min: 1, max: 3 },
        },
        rotate:		{
            value: 100,
            animation: {
                enable: true,
                speed: 100,
                sync: false
            },
            direction:	RotateDirection.random,
            path: false
        },
    },
    detectRetina: true
};