import React, { useEffect, useRef, useState } from 'react';

export default function FileInput({name, value, onChange}) {
  const [preview, setpreview] = useState('');
  const inputRef = useRef(); 

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  }

  const handleCancel = () => {
    const inputNode = inputRef.current;
    if(!inputNode) return;

    inputNode.value="";
    onChange(name, null);
  }
  
  useEffect(() => {
    if(!value) return;
    const nextPreview = URL.createObjectURL(value)
    setpreview(nextPreview)
    return () => {
      setpreview()
      URL.revokeObjectURL(value)
    };
  }, [value]);
    
  return (
    <div className="imgbox1">
      <div >
        <input type='file' onChange={handleChange} ref={inputRef}/>
        {value && <button onClick={handleCancel} className="cancel">❌</button>}
      </div>
      <img src={preview}/>
    </div>
  );
}
