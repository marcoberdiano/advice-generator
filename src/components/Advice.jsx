import {useState, useEffect} from 'react'
import '../css/advice.css'
import patternDivider from '../images/pattern-divider-desktop.svg'
import iconDice from '../images/icon-dice.svg'


const url = "https://api.adviceslip.com/advice";

const Advice = () => {
    const [advice, setAdvice] = useState({})
    const [isloading, setIsLoading] = useState(true)
    
    const getAdvice = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setAdvice(data);
        setIsLoading(false)
      };
    
      useEffect(() => {
        getAdvice();
      }, []);

    return (
        <main className='main-container'>
            <section className="advice-container">
                
                <p className='advice-id'>Advice #{!isloading && advice.slip.id}</p>
                
                <p className='advice-quote'>{!isloading && advice.slip.advice}</p>
                
                <div className='dice-container'>
                    <img className='dice-image' src={patternDivider} alt={patternDivider}></img>
                </div>
                
                <div className='icon-container'> 
                    <img src={iconDice} alt={iconDice}></img>
                </div>

            </section>
        </main>
       
     );
}
 
export default Advice;