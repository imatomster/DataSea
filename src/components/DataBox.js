import React from 'react';
import './styles.css';
import data from './data.json'

export const DataBox = (input) => {
    return (    
        
        <div style={styles.container}>
           <b><h2 style={styles.title}>{input.data}</h2></b> 
            <div style={styles.subTitle}>{input.start}- {input.end}</div>
            <div style={styles.chart}>
                <svg width="100%" height="100%">
                    <path d={input.data} stroke="red" strokeWidth="2" fill="none"/>
                </svg>
            </div>
            <b><div style={styles.option}> Model Fit Rate: {0.95}</div></b>
        </div>
    );
};



const styles = {
    container: {
        width: '300px',
        height: '300px',
        backgroundColor: '#1B2028',
        color: 'white',
        padding: '15px',
        borderRadius: '10px',
        position: 'relative',
    },
    title: {
        fontSize: '20px',
        marginBottom: '10px'
    },
    subTitle: {
        fontSize: '16px',
        marginBottom: '15px',
        opacity: '0.8'
    },
    chart: {
        width: '100%',
        height: '100px',
        backgroundColor: '#31353F',
        marginBottom: '15px',
        overflow: 'hidden'
    },
    option: {
        marginBottom: '10px',
        fontSize: '16px'
    }
};
