import './FormCheckout.css';
const FormCheckout = ({ dataform, handlechangeinput, sendorder }) => {
    return (
        <div className='form-container'>
            <form onSubmit={sendorder}>
                <input type="text" name="fullname" value={dataform.fullname} placeholder='nombre' onChange={handlechangeinput} />
                <input type="number" name="phone" value={dataform.phone} placeholder='telefono' onChange={handlechangeinput} />
                <input type="email" name="email" value={dataform.email} placeholder='mail' onChange={handlechangeinput} />
                <input type="submit" value="Enviar orden" />
            </form>
        </div >
    )
}

export default FormCheckout