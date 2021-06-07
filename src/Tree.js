import axios from 'axios';
import { React, useEffect, useState } from 'react';
import Node from './Node';

import './styles/tree.css';

export default function Tree() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        axios.get('/api/family/getNodes')
            .then((results) => {
                // console.log(results.data);
                setNodes(results.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <p>Family Web</p>
            <div id='web_frame'>
                {
                    nodes[0] != null ? (
                        nodes.map(val => {
                            return <Node avatar={val} />
                        })
                    ) : <p>Loading</p>
                }
            </div>
        </div>
    )
};