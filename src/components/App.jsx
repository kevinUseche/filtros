import { useEffect, useState } from "react"
import Select from "react-dropdown-select"
import optionsJson from "../options.json"
import styles from "./App.module.css"

export function App(){

    const [options, setOptions] = useState([])
    const [values, setValues] = useState([])

    useEffect(() => {
        loadOptions()
    }, [])

    const loadOptions = () => {
        const _options = optionsJson.map(user => {
            user.label = user.name
            user.value = user.id
            return user
        })
        setOptions(_options)
    }
    
    const changeValues = (_values) => {
        setValues([..._values])
    }

    return (
        <div className={ styles["content-select"] }>

            <Select className={ styles.select }
                placeholder={ "📅" }
                options={ options }
                values={values}
                multi
                onChange={ changeValues }
                clearable
            />

            <Select className={ styles.select }
                placeholder={ "🗺" }
                options={ options }
                values={values}
                multi
                onChange={ changeValues }
                clearable
            />

            <button onClick={ () => {  } }>Limpiar</button>
        </div>
    )
}