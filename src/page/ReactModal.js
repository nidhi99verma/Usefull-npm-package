import React, { useState } from 'react';
import Modal from 'react-modal';

export default function ReactModal() {

    const [modelIsOpen, setModelIsOpen] = useState(false)

    return (
        <div>
            {/* <Modal isOpen={true}>
                <h1>Nidhi</h1>
                <p>Verma</p>
            </Modal> */}

            {/* or */}

            <button onClick={() => setModelIsOpen(true)}>
                Open Modal
            </button>
            {/* <Modal isOpen={modelIsOpen}>
                <h1>Nidhi</h1>
                <p>Verma</p>
                <button onClick={() => setModelIsOpen(false)}>
                    Close Modal
                </button>
            </Modal> */}

            {/* or */}

            {/* close on overlay or esc key */}
            {/* <Modal isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)}>  */}
            {/* not close on overlay or esc key */}
            {/* <Modal
                isOpen={modelIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModelIsOpen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'gray',
                            color: 'blue'
                        },
                        content: {
                            color: 'orange',
                        }
                    }
                }
            >
                <h1>Nidhi</h1>
                <p>Verma</p>
                <button onClick={() => setModelIsOpen(false)}>
                    Close Modal
                </button>
            </Modal> */}

            {/* or */}

            <Modal
                isOpen={modelIsOpen}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#a6c5f7'
                    },
                    content: {
                        position: 'absolute',
                        top: '200px',
                        left: '200px',
                        right: '200px',
                        bottom: '200px',
                        border: '1px solid #ccc',
                        background: '#a6f5ed',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '200px'
                    }
                }}
            >

                <h1>Nidhi</h1>
                <p>Verma</p>
                <button onClick={() => setModelIsOpen(false)}>
                    Close Modal
                </button>
            </Modal>
        </div>
    )
}

