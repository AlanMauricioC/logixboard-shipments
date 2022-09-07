import { Grid, Paper, Typography } from '@material-ui/core'
import { Shipment } from '../data/Shipment'
import { makeStyles } from '@material-ui/core'

import { ShipmentCard } from './ShipmentCard'

interface DayCardProps {
    date: Date
    shipments: Array<Shipment>
}

const useStyles = makeStyles({
    paper: {
        padding: 10,
        height: '100%',
        backgroundColor: 'aliceblue',
    },
    shipmentCard: {
        width: '100%',
    },
})

export const DayCard = ({ date, shipments }: DayCardProps) => {
    const classes = useStyles()
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    return (
        <Paper className={classes.paper}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography variant="h5">{days[date.getDay()]}</Typography>
                </Grid>
            </Grid>

            <Grid container direction="column" spacing={2} alignItems="center">
                {shipments.length === 0 && (
                    <Grid item>
                        <Typography variant="h6" color="textSecondary">
                            No shipments
                        </Typography>
                    </Grid>
                )}

                {shipments.map((shipment) => (
                    <Grid
                        key={shipment.id}
                        item
                        className={classes.shipmentCard}
                    >
                        <ShipmentCard shipment={shipment} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}
