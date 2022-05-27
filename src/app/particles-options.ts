import { MoveDirection, ClickMode, HoverMode, OutMode } from 'tsparticles-engine';

export const particlesOptions = {
    background: {
        color: {
            value: "#000"
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: ClickMode.repulse
            },
            onHover: {
                enable: true,
                mode: HoverMode.slow
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.3,
                speed: 4,
            },
            slow: { factor: 5 }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.bounce
            },
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: {min: 1, max: 5 },
        }
    },
    detectRetina: true
};