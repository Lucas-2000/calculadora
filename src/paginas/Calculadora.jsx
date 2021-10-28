import { Card, CardContent, CardHeader, Container, Grid, Paper, Typography } from '@material-ui/core'
import { Backspace } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'

const useStyles = makeStyles({
    paperNumber: {
        minWidth: "100px",
        minHeight: "115px",
        fontSize: '40px',
        backgroundColor: 'black',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'yellow',
        '&:hover': {
            backgroundColor: 'gray'
        }
    },
    paper: {
        minWidth: "100px",
        minHeight: "115px",
        fontSize: '40px',
        backgroundColor: '#202020',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'yellow',
        '&:hover': {
            backgroundColor: 'gray'
        }
    },
    paperTotal: {
        minWidth: "200px",
        minHeight: "115px",
        fontSize: '40px',
        backgroundColor: 'indigo',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'yellow',
        '&:hover': {
            backgroundColor: 'violet'
        }
    },
    paperResultado: {
        minWidth: "100px",
        minHeight: "80px",
        fontSize: '40px',
        backgroundColor: 'LightCoral'
    },
    grid: {
        height: '100px'
    },
    card: {
        backgroundColor: 'yellow',
        marginTop: '20px',
        maxWidth: '435px'
    }
})

const Calculadora = () => {
    const classes = useStyles()

    const [total, setTotal] = useState('')
    const [error, setError] = useState('Valor Invalido')

    const handleClick = (e) => {
        setTotal(total.concat(e.target.id))
    }

    const handleClear = () => {
        setTotal('')
    }

    const handleBackSpace = () => {
        setTotal(total.slice(0, -1))
    }

    const handleCalculate = () => {
        try {
            setTotal(eval(total).toString())
        }
        catch (e) {
            setTotal(error)
        }
    }

    return (
        <Container>
            <Grid container justifyContent="center">
                <Typography variant="h4" color="textPrimary">
                    Utilize abaixo a nossa calculadora
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="textSecondary">
                    Calculadora 100% desenvolvida em react utilizando a biblioteca MUI
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Card elevation={12} className={classes.card}>
                    <CardContent>
                        <Grid className={classes.grid}>
                            <Paper className={classes.paperResultado}>{total}</Paper>
                        </Grid>
                        <Grid container >
                            <Paper id="%" className={classes.paper} onClick={handleClick}>%</Paper>
                            <Paper id="del" className={classes.paper} onClick={handleBackSpace}><Backspace /></Paper>
                            <Paper id="clear" className={classes.paper} onClick={handleClear}>C</Paper>
                            <Paper id="/" className={classes.paper} onClick={handleClick}>/</Paper>
                        </Grid>
                        <Grid container >
                            <Paper id="7" className={classes.paperNumber} onClick={handleClick}>7</Paper>
                            <Paper id="8" className={classes.paperNumber} onClick={handleClick}>8</Paper>
                            <Paper id="9" className={classes.paperNumber} onClick={handleClick}>9</Paper>
                            <Paper id="*" className={classes.paper} onClick={handleClick}>X</Paper>
                        </Grid>
                        <Grid container>
                            <Paper id="4" className={classes.paperNumber} onClick={handleClick}>4</Paper>
                            <Paper id="5" className={classes.paperNumber} onClick={handleClick}>5</Paper>
                            <Paper id="6" className={classes.paperNumber} onClick={handleClick}>6</Paper>
                            <Paper id="-" className={classes.paper} onClick={handleClick}>-</Paper>
                        </Grid>
                        <Grid container>
                            <Paper id="1" className={classes.paperNumber} onClick={handleClick}>1</Paper>
                            <Paper id="2" className={classes.paperNumber} onClick={handleClick}>2</Paper>
                            <Paper id="3" className={classes.paperNumber} onClick={handleClick}>3</Paper>
                            <Paper id="+" className={classes.paper} onClick={handleClick}>+</Paper>
                        </Grid>
                        <Grid container>
                            <Paper id="0" className={classes.paperNumber} onClick={handleClick}>0</Paper>
                            <Paper id="." className={classes.paperNumber} onClick={handleClick}>.</Paper>
                            <Paper id="=" className={classes.paperTotal} onClick={handleCalculate}>=</Paper>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default Calculadora
