const onChangeInputDateHandler = (ev)=> {
    console.log(ev.target.value)
}

const Consulta = () => {

    return (
        <div className="consulta">
            <input onChange={(ev)=> onChangeInputDateHandler(ev)} type="date" />
        </div>
    )
}

export default Consulta