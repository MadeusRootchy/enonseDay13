import React,{useState,useEffect} from "react";
import styles from './plus.module.css';


export default function Plus() {
    const [vale,setVale] = useState(0);

    const ogmanteVale = () => {
        let setup = vale + 1;
        if (vale >= 10 ) {
            setup = 10;
        }
        setVale(setup)
    }
    const diminyeVale = () => {
        let setup = vale - 1;
        if (vale <= 0 ) {
            setup = 0;
        }
        setVale((setup))
    }

    useEffect(
        () => {
            setVale(Math.floor(Math.random() * 6))
        },[]
    )

    return (<div>
            <button onClick={diminyeVale} className={styles.setup}>-</button>
            <label className={styles.label}>{vale}</label>           
            <button onClick={ogmanteVale} className={styles.setup}>+</button>


    </div>
    );
    }