import { React } from 'react';
import './styles/node.css';

export default function Node(props) {
    return (
        <div id="node">
            <p id="text">{props.avatar.first_name}</p>
        </div>
    );
};