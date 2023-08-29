import Image from 'next/image';
import axios from 'axios';
import { getAllTodos } from '@/api';

export default async function Home() {
	axios.defaults.baseURL =
		process.env.NEXT_PUBLIC_BASE_URL ||
		'https://activerecorder-back.onrender.com/';
	const res = await getAllTodos();
	console.log(res);
	return <div>{res.text}</div>;
}
