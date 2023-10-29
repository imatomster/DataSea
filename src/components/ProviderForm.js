import React, { useState } from 'react';
import './styles.css'
import { createDispenser } from '../utils/handleDispenser';
import { setNFTData } from '../utils/handleData';

const ProviderForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dataType, setDataType] = useState('');


  return (
    <div className="provider-form">
      <h2>Metadata Title:</h2>
      <input
        type="text"
        placeholder="Title/Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <h2>Description/Abstract:</h2>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <h2>Data Category:</h2>
      
      <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
        <option value="" disabled>Select Data Type</option>
        {/* Add your data types here */}
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
      </select>
      <div className='last2kids'>
      <button onClick={() => {
        createDispenser(title, "n/a")
        .then((res) => {
            console.log(res)
            setNFTData(description, res.dispenserNftAddress).then((res2) => {
                console.log(res2)
            })
        })
      }}>Send</button>
      </div>
    </div>
  );
};

export {ProviderForm};

