import { Container, Grid, Typography } from "@material-ui/core"
import styles from "./Header.module.scss"

function Header(){
    return (
        <div className={styles.header}>
            <Container fixed> 
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3">Calcule o seu IMC</Typography>
                        <Typography>O IMC é o Índice de Massa Corporal, é utilizado para saber se o peso está de acordo com a altura.</Typography> 
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        DIEGO
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default Header