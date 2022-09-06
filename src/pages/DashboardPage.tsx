import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Box, Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { fetchShipments, FetchShipmentsResult } from '../data/fetch-shipments'
import Loader from 'react-loader-spinner'

type LoadingResult = {
    status: 'LOADING'
}

const INITIAL_RESULT: LoadingResult = {
    status: 'LOADING',
}

function getNextWeek(): Array<Date> {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    const nextDays = []

    for (let i = 0; i < 7; i++) {
        const today = new Date()
        today.setDate(today.getDate() + i)
        nextDays.push(today)
    }

    return nextDays
}

export const DashboardPage: React.FC = () => {
    const [fetchShipmentsResult, setFetchShipmentsResult] = useState<
        FetchShipmentsResult | LoadingResult
    >(INITIAL_RESULT)

    useEffect(() => {
        fetchShipments().then((result) => setFetchShipmentsResult(result))
    }, [])

    const nextDays = getNextWeek()

    if (fetchShipmentsResult.status === 'ERROR') {
        return <p>Error</p>
    }

    if (fetchShipmentsResult.status === 'LOADING') {
        return (
            <Box>
                <Loader type="Grid" />
            </Box>
        )
    }

    return (
        <div>
            <h1>Next Arrivals</h1>
            <Grid container spacing={3} justifyContent="flex-start">
                {nextDays.map((day) => (
                    <Grid key={day.getTime()} item xs={12} sm={6}>
                        <Paper>
                            <h3>{day.getDate()}</h3>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
