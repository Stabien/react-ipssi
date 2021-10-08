import React from "react";
import ReactDOM from "react-dom";
import '../styles/Modal.css';
import PropTypes from "prop-types";

function Modal ({ isShowing, hide, title, ...props }) {
    return (
        isShowing ? ReactDOM.createPortal(
            <>
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                            <div className="modal-header">
                                <div className="div-modal-close-button">
                                    <button
                                        type="button"
                                        className="modal-close-button"
                                        onClick={hide}
                                    >
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <h3 className="title-modal">{title}</h3>
                            </div>
                            <div className="modal-body">{props.children}</div>
                        </div>
                    </div>
                </div>
            </>,
            document.body
        ): null
    )
}

export default Modal;