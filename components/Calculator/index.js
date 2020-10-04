import { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from "@material-ui/core"
import styles from "./Calculator.module.scss"

function Calculator (){
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState();

    function calculateImc(){
        const alturam = altura / 100;
        setImc((peso/(alturam * alturam)).toFixed(2));
    }

    const verifyImc = () => {
        if (imc < 18.5){
            return "Abaixo do Peso";
        }else if (imc < 24.9){
            return "Peso Normal";
        }else if (imc < 29.9){
            return "Sobrepeso";
        }else if (imc < 34.9){
            return "Obesidade Grau 1";
        }else if (imc < 39.9){
            return "Obesidade Grau 2";
        }else{
            return "Obesidade Grau 3";
        }
    }

    return (
        <div className={styles.calculator}>
            <Container maxWidth="xs"> 
            <Typography variant="h3">Calculadora</Typography>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField id='input-1' label="Altura em cm" variant="filled" fullWidth type="number" value={altura} InputProps={{ inputProps: { min: 1, max: 250 } }} onChange={(e) => setAltura(e.target.value)} /> 
                </Grid>
                <Grid item>
                    <TextField id='input-2' label="Peso em Kg" variant="filled" fullWidth type="number" value={peso} InputProps={{ inputProps: { min: 1, max: 1000 } }} onChange={(e) => setPeso(e.target.value)} /> 
                </Grid>
                <Grid item>
                    <Button id="btn" variant="contained" color="primary" fullWidth onClick={() => calculateImc()}>Calcular</Button>
                </Grid>
                {
                    imc && 
                    <Grid item>
                        <Typography>O seu IMC é: {imc} Kg/m2 - {verifyImc()}</Typography>
                    </Grid>
                }
            </Grid>
            </Container>
        </div>
    )
}

export default Calculator;