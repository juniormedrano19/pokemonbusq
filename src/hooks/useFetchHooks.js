import { useState, useEffect } from 'react'
import { probando } from '../helpers/probando';

export const useFetchHooks = ( ) => {
   

    const [state, setState] = useState({
        data:[],
        loading:true,
    });
//los efectos no pueden ser async
//hace el efecto cuàndo cambia la categorìa
  useEffect(() => {
        //peticiòn http
    probando()
    //traemos las imàgenes
        .then( imgs=>{
          
              //  console.log(imgs)
                setState(
                    {
                        data:imgs,
                        loading:false
                    }
                )

       
           
        })


  }, [])







    /* setTimeout(()=>{

        setState({
            data:[1,2,3,4,5,6,7],
            loading:false
        })


    },3000);
 */
    //a los 3 segundos ejecuta lo que tiene adentro el setTimeout , que en este caso sería el setState con su valor



    return state; // {data:[],loading:true}
}
