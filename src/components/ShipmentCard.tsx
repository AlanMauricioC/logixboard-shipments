import { Card, Grid, Typography } from '@material-ui/core'
import { Shipment } from '../data/Shipment'
import { makeStyles } from '@material-ui/core'

interface DayCardProps {
    shipment: Shipment
}

const useStyles = makeStyles({
    shipmentCard: {
        width: '100%',
    },
    shipmentContainer: {
        padding: 10,
    },
})
export const ShipmentCard = ({ shipment }: DayCardProps) => {
    const classes = useStyles()

    return (
        <Card>
            <Grid container className={classes.shipmentContainer}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        {shipment.houseBillNumber}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography
                        display={'block'}
                        variant="caption"
                        color="textSecondary"
                    >
                        {'Status: '}
                    </Typography>{' '}
                    <Typography variant="caption" color="secondary">
                        {shipment.status}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        display={'block'}
                        variant="caption"
                        color="textSecondary"
                    >
                        {' Mode: '}
                    </Typography>
                    <Typography variant="caption">{shipment.mode}</Typography>
                </Grid>
                {/*Should be replaced with details button?*/}
                <Grid item xs={6}>
                    <Typography
                        display={'block'}
                        variant="caption"
                        color="textSecondary"
                    >
                        {' Origin: '}
                    </Typography>

                    <Typography display={'block'} variant="body2">
                        {shipment.origin}
                    </Typography>
                    <Typography variant="caption" display={'block'}>
                        {shipment.estimatedArrival}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        display={'block'}
                        variant="caption"
                        color="textSecondary"
                    >
                        {' Destination: '}
                    </Typography>

                    <Typography display={'block'} variant="body2">
                        {shipment.destination}
                    </Typography>
                    <Typography variant="caption" display={'block'}>
                        {shipment.estimatedArrival}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
