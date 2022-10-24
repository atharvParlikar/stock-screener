import { useRouter } from 'next/router';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Test() {
    const router = useRouter();
    const stock = router.query.stock;

    return (
        <>

        </>
    )
}