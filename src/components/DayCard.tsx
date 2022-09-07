import { Card, Grid, Paper, Typography } from '@material-ui/core'
import { Shipment } from '../data/Shipment'
import { makeStyles } from '@material-ui/core'

interface DayCardProps {
    date: Date
    shipments: Array<Shipment>
}

const useStyles = makeStyles({
    card: {
        padding: 10,
        height: '100%',
    },
    shipmentCard: {
        width: '100%',
    },
    shipmentContainer: {
        padding: 10,
    },
})
export const DayCard = ({ date, shipments }: DayCardProps) => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
    const classes = useStyles()

    return (
        <Paper className={classes.card}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography variant="h5">{days[date.getDay()]}</Typography>
                </Grid>
            </Grid>

            <Grid container direction="column" spacing={2} alignItems="center">
                {shipments.length == 0 && (
                    <Grid item>
                        <Typography variant="h6" color="textSecondary">
                            No shipments
                        </Typography>
                    </Grid>
                )}

                {shipments.map((shipment) => (
                    <Grid item className={classes.shipmentCard}>
                        <Card>
                            <Grid
                                container
                                className={classes.shipmentContainer}
                            >
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="primary">
                                        {shipment.houseBillNumber}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    {'Status: '}
                                    <Typography
                                        variant="caption"
                                        color="secondary"
                                    >
                                        {shipment.status}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    {' Mode: '}
                                    <Typography
                                        variant="caption"
                                        color="secondary"
                                    >
                                        {shipment.mode}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    {' Origin: '}

                                    <Typography
                                        variant="caption"
                                        display={'block'}
                                    >
                                        {shipment.estimatedArrival}
                                    </Typography>

                                    <Typography
                                        display={'block'}
                                        variant="body2"
                                    >
                                        {shipment.origin}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    {' Destination: '}

                                    <Typography
                                        variant="caption"
                                        display={'block'}
                                    >
                                        {shipment.estimatedArrival}
                                    </Typography>

                                    <Typography
                                        display={'block'}
                                        variant="body2"
                                    >
                                        {shipment.destination}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}
