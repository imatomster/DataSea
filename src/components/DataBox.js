import React from 'react';
import './styles.css';

export const DataBox = () => {
    return (
        <div style={styles.container}>
           <b><h2 style={styles.title}>Miami-Dade Housing Prices Prediction</h2></b> 
            <div style={styles.subTitle}>2020 - 2069</div>
            <div style={styles.chart}>
                <svg width="100%" height="100%">
                    <path d="M0,80 Q25,50 50,70 Q75,60 100,40 Q125,50 150,30 Q175,70 200,60 Q225,90 250,70 Q275,60 300,50" stroke="red" strokeWidth="2" fill="none"/>
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
