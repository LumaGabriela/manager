import React, { useEffect, useState } from "react"
import BodyContainer from "./BodyStyle"

const Body = ({data, setData}) => {
    const [count, setCount] = useState([])

    const [dates, setDates] = useState([])
    const [tempDates, setTempDates] = useState([])
    const [monthDiff, setMonthDiff] = useState([])
    const [mainmonth, setMainMonth] = useState(0)
    const [visibility, setVisibility] = useState([])
    const [toggleVisibility, setToggleVisibility] = useState(false)

    const convertTime = () => {
        let list = []
        let temp
        let copia = dates.slice()
        
        for (let i=0; i< copia.length; i++) {
            temp = new Date(copia[i])
            temp = temp.getTime()
            list.push(temp)  
        }

        setTempDates(list)
        
    }
    
    const updateSize = () => {
        let temp = []
        
        for (let i=0; i< data.parcela; i++) temp.push(1)
        setCount(temp)
    }
    const updateList = () => {
        let temp = []
        let temp2 = []
        let aux = new Date(data.data)
        aux.setDate(aux.getDate() + 1)

        for (let i=0; i<data.parcela; i++) {
            aux.setMonth(aux.getMonth() + 1)
            temp.push(aux.toLocaleDateString())
            temp2.push(aux.toUTCString())
            
        }
        let copia = JSON.parse(JSON.stringify(data))
        copia.listadatas = temp
        setData(copia)
        setDates(temp2)
        
    }
    const checkClosestMonth = () => {
        let aux
        let diff = 0
        let monthdiffs = []
        let auxmonths = tempDates.slice()
        aux = new Date()
        aux = aux.getTime()
        
        for (let i=0; i < auxmonths.length; i++) {
            diff = Math.abs(aux - auxmonths[i])
            diff = diff/1000000000
            monthdiffs.push(diff)
        }
        
        setMonthDiff(monthdiffs)
        
        
    }
    const updateMonth = () => {
        let month = 0
        let monthdiffs = monthDiff.slice()
        for (let i=1; i< monthdiffs.length - 1; i++) {
            if (monthdiffs[month] > monthdiffs[i]) month = i
        }
        setMainMonth(month)
    }
    const updateVisibility = () => {
        const month = JSON.parse(JSON.stringify(mainmonth))
        let aux = []
        let monthdiffs = monthDiff.slice()
        for (let i=0; i < monthdiffs.length; i++) {
            if(i != month) aux.push('invisible')
            else aux.push('')
        }
        setVisibility(aux)
    }

    const handleClick = () => {
        let aux = toggleVisibility
        aux = aux === false ? true : false 
        setToggleVisibility(aux)
    }


    useEffect(()=> {
        updateSize()
        updateList() 
    }, [data.parcela, data.data])

    useEffect(()=> {
        convertTime()    
    }, [data])

    useEffect(()=> {   
        checkClosestMonth()
    }, [tempDates])

    useEffect(()=> {   
        updateMonth()
    }, [monthDiff])

    useEffect(()=> {   
        updateVisibility()  
    }, [monthDiff, toggleVisibility])

    

  
    return(
        <BodyContainer>          
            <button onClick={ handleClick } className={`btn ${ toggleVisibility === false ? 'show' : 'notshow'}`}>Ver</button>
            {count.map((item, i) => (
            <div key={i} id={i} className={`ficha ${ toggleVisibility === true ? visibility[i] : ''} `}>
                <h4>{data.nome}</h4>
                <h4>Pix(CPF): {data.pix}</h4>
                <h4>Data da parcela: {data.listadatas[i]}</h4>
                <h4>Valor da parcela: R${(data.valor/data.parcela).toFixed(2)}</h4>         
                <h4>{i}//{visibility[i]}//{mainmonth}</h4>
            </div>)
            )}
        </BodyContainer>
    )
}

export default Body