import React, {useState} from 'react';
import { createUseStyles } from 'react-jss';
import PickButton from './PickButton';
import OverlayCard from './OverlayCard';

const useStyles = createUseStyles(()=>({
card: {
  width: '300px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },

},
title: {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  textAlign:"center"
},
}))

const Rolly=(props)=> {
  const [showOverlay, setShowOverlay] = useState(false);
  const classes = useStyles();

  const toggleOverlay = ()=>{
    setShowOverlay(!showOverlay);
  }
  console.log(props)
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        {props.title}
        </div>{
          props.picks ? props.picks.map((p)=>
            <PickButton onClick={toggleOverlay}>{p}</PickButton>

          )
        :null}
        {showOverlay ? <OverlayCard toggle={toggleOverlay}/> : null}
    </div>
  );
}

export default Rolly;
