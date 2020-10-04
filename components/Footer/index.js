import { Container, Grid, StylesProvider, Typography } from "@material-ui/core"
import styles from "./Footer.module.scss"

function Footer (){
    return (
        <div className={styles.footer}>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}> 
                <Grid item xs={12} sm={12}>
                        <Typography>Calcule o seu IMC </Typography>
                        <Typography>@2020 - DRCT</Typography> 
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;