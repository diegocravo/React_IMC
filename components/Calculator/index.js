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

    return (
        <div className={styles.calculator}>
            <Container maxWidth="xs"> 
            <Typography variant="h3">Calculadora</Typography>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField label="Altura em cm" variant="filled" fullWidth type="number" value={altura} onChange={(e) => setAltura(e.target.value)} /> 
                </Grid>
                <Grid item>
                    <TextField label="Peso em Kg" variant="filled" fullWidth type="numver" value={peso} onChange={(e) => setPeso(e.target.value)} /> 
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" fullWidth onClick={() => calculateImc()}>Calcular</Button>
                </Grid>
                <Grid item>
    <Typography>O seu IMC é: {imc}</Typography>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Calculator;