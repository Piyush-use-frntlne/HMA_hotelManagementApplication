import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BookingCard from '../common/component/BookingCard2'


const MyBookings = (props) => {
    const [bookings, setBookings] = useState([])

    const fetchBookings = async () => {
        try {
            const res = await axios.get(`/booking/me`)
            const { data } = res
            return setBookings(data);
        } catch (error) {
            toast.error('Failed to load rooms')
            return error
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    const cancelBookings = async (booking) => {
        await axios.delete(`/booking/${booking._id}`)
    }
    console.log({ bookings })
    return (
        <>
            <BookingCard bookings={bookings} onCancel={cancelBookings} />
        </>

    )
}

export default MyBookings;